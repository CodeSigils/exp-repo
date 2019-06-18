### Hugo detailed documentation

https://bwaycer.github.io/hugo_tutorial.hugo/extras/menus/

### Hugo current official documentation

https://gohugo.io/documentation/

```sh
  # Check version
  hugo version
  # Create a site boilerplate
  hugo new site new_site_name
  # Create a theme boilerplate
  hugo new theme my_custom_theme
  # Create a new page
  hugo new posts/my-first-post.md
  # Fire up the server
  hugo server
```

## Themes order

The lookup order for base templates is as follows:

```yaml
1. /layouts/section/<TYPE>-baseof.html
2. /themes/<THEME>/layouts/section/<TYPE>-baseof.html
3. /layouts/<TYPE>/baseof.html
4. /themes/<THEME>/layouts/<TYPE>/baseof.html
5. /layouts/section/baseof.html
6. /themes/<THEME>/layouts/section/baseof.html
7. /layouts/_default/<TYPE>-baseof.html
8. /themes/<THEME>/layouts/_default/<TYPE>-baseof.html
9. /layouts/_default/baseof.html
10. /themes/<THEME>/layouts/_default/baseof.html
```

As an example, let’s assume your site is using a theme called "my-theme" when rendering the section list for a posts [section](https://gohugo.io/content-management/sections/). Hugo picks `"layout/section/posts.html"` as the template for rendering the section. The `{{define}}` block in this template tells Hugo that the template is an extension of a base template.
Here is the lookup order for the posts base template:

```yaml
1. /layouts/section/posts-baseof.html
2. /themes/my-theme/layouts/section/posts-baseof.html
3. /layouts/posts/baseof.html
4. /themes/my-theme/layouts/posts/baseof.html
5. /layouts/section/baseof.html
6. /themes/my-theme/layouts/section/baseof.html
7. /layouts/_default/posts-baseof.html
8. /themes/my-theme/layouts/_default/posts-baseof.html
9. /layouts/_default/baseof.html
10. /themes/my-theme/layouts/_default/baseof.html
```

## Content Sections

Hugo generates a section tree that matches your content.

A "Section" is a collection of pages that gets defined based on the organization structure under the `content/` directory.

By default, all the first-level directories under `content/` form their own sections (root sections).

If a user needs to define a section foo at a deeper level, they need to create a directory named foo with an `_index.md` file (see Branch Bundles for more information).

The sections can be nested as deeply as you need.

```sh
content
└── blog        <-- Section, because first-level dir under content/
    ├── funny-cats
    │   ├── mypost.md
    │   └── kittens         <-- Section, because contains _index.md
    │       └── _index.md
    └── tech                <-- Section, because contains _index.md
        └── _index.md

```

## Tips and tricks

Link: [https://dev.to/remotesynth/quick-tips-and-tricks-for-hugo-development-7dc](https://dev.to/remotesynth/quick-tips-and-tricks-for-hugo-development-7dc)

### Lists

- List of pages

```go
{{ range .Site.RegularPages }}
<a href="{{ .Permalink }}">{{ .Title }}</a>
<br />
{{ end }}
```

- List of Categories
  Render all sites taxonomies

```go
<ul>
  {{ range $taxonomyname, $taxonomy := .Site.Taxonomies }}
  <li>
    <a href="{{ "/" | relLangURL }}{{ $taxonomyname | urlize }}">
      <strong> {{ $taxonomyname }} </strong>
      <span class="arrow">&#x25BC;</span>
    </a>

    <ul class="submenu">
      {{ range $key, $value := $taxonomy }}
      <li>
        <a href={{ .Page.Permalink }}>
          <strong>{{ $key }}</strong>
        </a>
      </li>
      <ul class="submenu-2">
        {{ range $value.Pages }}
        <li hugo-nav="{{ .RelPermalink}}">
          <a href="{{ .Permalink}}">
            {{ .LinkTitle }}
          </a>
        </li>
        {{ end }}
      </ul>
      {{ end }}
    </ul>
  </li>
  {{ end }}
</ul>
```

Show a list of categories with counts of articles on each category.

```go
{{ range $name, $items := .Site.Taxonomies.categories }}
<li>
  <a href="{{ $.Site.BaseURL }}categories/{{ $name | urlize | lower }}">
    {{ $name }} &nbsp;
    <span>({{ len $items }})</span>
  </a>
</li>
{{ end }}
```

- List of Tags
  Show a list of tags.

```go
{{ range $name, $taxonomy := .Site.Taxonomies.tags }}
<a href="/tags/{{ $name | urlize }}">{{ $name }}</a>
{{ end }}
```

### Nested menus

Link: https://bwaycer.github.io/hugo_tutorial.hugo/extras/menus/
This following example code renders the words [Is], [Has], and [Children] to demonstrate how the **IsMenuCurrent(), HasMenuCurrent(), and HasChildren()** functions work.

```html
<!-- 1. Inside layouts/index.html, layouts/_default/single.html, ... -->
<h1>{{ .Title }}</h1>

<!-- 2. Put this line in your main template, at the place where 
        you want to render the menu. -->
{{ partial "menu_include.html" . }}

<!-- 3. Inside layouts/partials/menu_include.html -->
{{ partial "menu_recursive.html" (dict "menu" .Site.Menus.main "page" . "site" .Site)
}}

<!-- 4. layouts/partials/menu_recursive.html -->
{{ $page := .page }} {{ $site := .site }}
<ul>
  {{ range .menu }} {{ $is := $page.IsMenuCurrent "main" . }} {{ $has :=
  $page.HasMenuCurrent "main" . }} {{ if .HasChildren }}
  <li>
    <a href="{{ .URL }}">
      {{ .Name }} {{ if $is }}[Is]{{ end }} {{ if $has }}[Has]{{ end }} {{ if
      .HasChildren }}[Children]{{ end }}
    </a>
    <!-- If the menu item has children, 
             include this partial template again (recursively) -->
    {{ partial "menu_recursive.html" (dict "menu" .Children "page" $page "site"
    $site) }}
  </li>
  {{ else }}
  <li>
    <a href="{{ .URL }}">
      {{ .Name }} {{ if $is }}[Is]{{ end }} {{ if $has }}[Has]{{ end }} {{ if
      .HasChildren }}[Children]{{ end }}
    </a>
  </li>
  {{ end }} {{ end }}
</ul>
```

The previous menu rendered with some conditionals:

```html
<!-- 5. layouts/partials/menu_recursive.html -->
{{ $page := .page }} {{ $site := .site }}
<ul>
  <!-- Menu items sorted alphabetically by name -->
  {{ range .menu.ByName }} {{ $is := $page.IsMenuCurrent "main" . }} {{ $has :=
  $page.HasMenuCurrent "main" . }} {{ if .HasChildren }}
  <li>
    <!-- Highlight the current item, by applying a conditional CSS style -->
    <a
      href="{{ .URL }}"
      class="{{ if $is }} active{{ end }}{{ if $has }} parent-active{{ end }}"
    >
      {{ .Name }}
      <!-- Show a » symbol if there is a sub-menu we haven't rendered -->
      {{ if not (or $is $has) }}»{{ end }}
    </a>
    <!-- Only render sub-menu for parent items and the current item -->
    {{ if or $is $has }} {{ partial "menu_recursive.html" (dict "menu" .Children
    "page" $page "site" $site) }} {{ end }}
  </li>
  {{ else }}
  <li>
    <a href="{{ .URL }}" class="{{ if $is }}active{{end}}">{{ .Name }}</a>
  </li>
  {{ end }} {{ end }}
</ul>
```

### Recent posts with "timeago"

To show the most recent three posts with dates in format 9 hours ago, 3 days ago etc. Install "timeago" javascript plugin. In hugo insert this in your theme.

```go
{{ range first 3 .Site.Pages }}
<div>
  <h5><a href="{{ .Permalink }}">{{ .Title }}</a></h5>
  <time class="timeago" datetime='{{ .Date.Format "2006-01-02T15:04:05-07:00" }}'>{{ .Date }}</time>
</div>
{{ end }}
```

### Taged posts

To show a list of posts for a specific tag. In this case I have a tag named "featured".

```go
{{ range .Site.Taxonomies.tags.featured }}
<div>
   <h5><a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a></h5>
   <time class="timeago" datetime='{{ .Page.Date.Format "2006-01-02T15:04:05-07:00" }}'>{{ .Page.Date }}</time>
</div>
{{ end }}
```

### First and After

You can combine first and after to make a more complicated query.
Render 3 featured posts after skipping the first one. Also render a featured_image that was in the content markdown in the front matter.

```go
  {{ range after 1 (first 3 .Site.Taxonomies.tags.featured) }}
<div>
  {{ with .Page.Params.featured_image }}<img src="{{ . }}">{{ end }}
  <h5>
    <a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a>
  </h5>
</div>
{{ end }}
```

### Upcoming events (or posts)

In the first case, the only future dated posts on the site are events, so we just query for pages with a date greater than now. We set this in a variable so that I can check if it is empty and display a message if it is. Otherwise, we just iterate through and display upcoming items.

```go
  {{ $upcoming := where .Site.RegularPages ".Date" "ge" now }}
{{ if ne (len $upcoming) 0 }}
    {{ range $upcoming }}
      // <!-- display upcoming events -->
    {{ end }}
{{ else }}
    <p>Shoot! There are no upcoming events</p>
{{ end }}
```

### Select only pages of a section

The query for past events is a little trickier since we need to select only pages in the events section. In this case, we just need to nest our where functions.

```go
{ $recorded := where (where .Site.RegularPages ".Date" "le" now) "Section" "events" }}
{{ if ne (len $recorded) 0 }}
    {{ range $recorded }}
    // ... <!-- display recorded events here -->
    {{ end }}
{{ else }}
    <p>Shoot! There are no recorded events</p>
{{ end }}
```

### Access a Params value inside a loop.

If you are inside of a loop you need to add \$ to the beginning of .Params to access the value. http://stackoverflow.com/questions/16734503/access-out-of-loop-value-inside-golang-templates-loop

```go
{{ with .Params.some_variable }}
  {{ with $.Params.some_other_variable }}{{ . }}{{ end }}{{ . }}
{{ end }}
```

### To tell if some value doesn’t exist.

```go
{{ if (not (isset .Params "some_variable")) }}Value not found{{ end }}
```

### Command useful for debugging

```go
{{ printf "%#v" $.Site }}
```

### Related links

Show 3 related links to a story based on similar tags.
https://discuss.gohugo.io/t/show-a-list-of-related-content/1488/5

```go
{{ $page_link := .Permalink }}
{{ $categories := .Params.categories }}
{{ range $page := .Site.Pages }}
{{ $has_common_categories := intersect $categories .Params.categories | len | lt 0 }}
{{ if and $has_common_categories (ne $page_link $page.Permalink) (lt ($.Scratch.Get "$c") 3)}}
{{ $.Scratch.Add "$c" 1 }}
 <a href="{{ $page.Permalink }}">{{ $page.Title }}</a>
<h5>{{ $page.Description }}</h5>
<hr>
{{ end }}
{{ end }}
```

### Related posts

Hugo has built-in support for [related content](https://gohugo.io/content-management/related/). It includes default configuration for how it determines if an item is related, but we can customize it within `config.yaml`. The key difference was that we relied primarily on the categories property of each page to determine if it was related and we wanted to include newer pages as we would like to recommend the current event, for instance, if we are viewing a related older event.

```yaml
related:
  threshold: 80
  includeNewer: true
  toLower: false
  indices:
    - name: categories
      weight: 100
    - name: date
      weight: 10
```

Then display the top five related pages to the current page.

```go
{{ $related := .Site.RegularPages.Related . | first 5 }}
{{ with $related }}
{{ range . }}
  // <!-- display related items here -->
{{ end }}
```

### Show multiple authors with special attributes.

This solution needs a data/authors directory in the root of your theme.Inside this directory put a file title it the same as the author’s name you want to use (very important to be exactly the same way you capitalize your author’s name in your front matter). So if your name was “John Doe”, the data file would be “John Doe.toml”. In the data file you can put the info you want about each author.

```go
    // in your /data/authors/John Doe.toml

    name = "John Doe"
    bio = "The most generic man in the world"
    location = "Normal, Il"
    website = "http://example.com"
    thumbnail = "/images/john.jpg"

    <!-- Start of post author -->
    {{ if not .Params.noauthor }}
    {{$author := index .Site.Data.authors (or .Params.author .Site.Params.author)}}
    {{$authorname := or $author.name .Site.Params.author }}
    {{$authorbio := or $author.bio .Site.Params.bio }}
    {{$authorlocation := or $author.location .Site.Params.author_location }}
    {{$authorwebsite := or $author.website .Site.Params.author_website }}
    {{$authorthumbnail := or $author.thumbnail .Site.Params.author_thumbnail }}
    <div class="post-author">
         <h6>Written By</h6>
         <hr>
         <img src="{{ $authorthumbnail }}" alt="{{ $authorname }} image" width="90" height="90">
         <h5>{{$authorname}}</h5>
         {{if $authorbio}}
            <span class="post-author__text">{{$authorbio}}</span>
         {{else}}
         <span class="post-author__text">Read <a href="{{.Site.BaseURL}}">
         more posts</a> by this author.</span>
         {{end}}
    </div>
    {{end}}
    <!-- End of post author -->
```

### Use a different template in \_default/single.html

Add at the top of the file:

```go
  {{ if .Params.page_template }}
  {{ partial .Params.page_template . }}
  {{ else }}
  <!-- regular single page template code -->
  {{ end }}
```

Then in partials/page/ create your new template file. As an example contact.html. Finally call this file in a regular content file called contact.html. In your front matter of your contact.html add a new parameter for your custom template.

```yaml
  ___
  page_template: 'page/contact'
  ___
```

### Basic Pagination

Hugo provides configuration and an object `(.Paginator)` to assist in [pagination](https://gohugo.io/templates/pagination/). The default number of items on a paginated list page is 10, but in this case we only wanted 5.
In order to do that, we change the setting in `config.yaml`

```yaml
paginate: 5
```

We show the navigation if there was more than one page, the back button only if there were previous pages and the forward button only if there were subsequent pages. Finally, the current page would have different styling and not be linked.

```go
{{ if gt .Paginator.TotalPages 1}}
  // <!-- Pagination -->
  <nav class="pagination">
    {{ $paginator := .Paginator }}
    {{ if .Paginator.HasPrev }}
    <a href="{{ .Paginator.Prev.URL }}" class="pagination__page pagination__icon pagination__page--next"><i class="ui-arrow-left"></i></a>
    {{ end }}
    {{ range .Paginator.Pagers }}
      {{ if eq .PageNumber $paginator.PageNumber }}
    <span class="pagination__page pagination__page--current">{{ .PageNumber }}</span>
      {{ else }}
    <a href="{{ .URL }}" class="pagination__page">{{ .PageNumber }}</a>
      {{ end }}
    {{ end }}
    {{ if .Paginator.HasNext }}
    <a href="{{ .Paginator.Next.URL }}" class="pagination__page pagination__icon pagination__page--next"><i class="ui-arrow-right"></i></a>
    {{ end }}
  </nav>
  {{ end }}
</div>
```

The first line of the above code checks if we have more than one total pages. **.Paginator.HasPrev** is used to determine if a previous paginated page exists and **.Paginator.HasNext** if a next page exists. Likewise **.Paginator.Prev** contains the preceding paginated page object and **.Paginator.Next** the next page object. **.Paginator.Pagers** contains all of the paginated pages to iterate through.

We assign a variable in `{{ $paginator := .Paginator }}` to compare **.PageNumber** of the paginated page object with the page number of the current page object, to change classes and properly highlight the current page on the navigation.

### Next-prev navigation

Navigate to previous and next post.
**.PrevInSection** returns the page object for the previous page within the same site section. If it doesn't exist, it will be null (nil in the case of Go). The with **.PrevInSection** simply allows me to use the shorthand dot-notation for the object properties (i.e. use .Permalink rather than .PrevInSection.Permalink).

```go
// <!-- Prev / Next Post -->
<nav class="entry-navigation">
    <div class="clearfix">
    {{ if ne .PrevInSection  nil }}
    <div class="entry-navigation--left">
        <i class="ui-arrow-left"></i>
        <span class="entry-navigation__label">Previous Event</span>
        <div class="entry-navigation__link">
        {{ with .PrevInSection }}
        <a href="{{.Permalink}}" rel="next">{{ .Title }}</a>
        {{ end }}
        </div>
    </div>
    {{ end }}
    {{ if ne .NextInSection  nil }}
    <div class="entry-navigation--right">
        <span class="entry-navigation__label">Next Event</span>
        <i class="ui-arrow-right"></i>
        <div class="entry-navigation__link">
        {{ with .NextInSection }}
        <a href="{{ .Permalink }}" rel="prev">{{ .Title }}</a>
        {{ end }}
        </div>
    </div>
    {{ end }}
    </div>
</nav>
```
