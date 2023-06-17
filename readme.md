## Stencil Table Example

This repo contains some rough example code that attempts to make a basic suite of web components for tables.

The constraints for this were:
- A simple DX where you can use custom elements to populate the data
- Clean semantic HTML rendered inside the shadow root of the table web component

### How does it do it?

It's rather simple, but the main concept is that the cells have a method on them that will return the expected markup. The parent row will call that method and inject it into its `<tr>`. The table web component will then look for all slotted rows and ask for their content too. This essentially produces a clean result inside the shadowroot. 


### Why do it this way?

There are multiple ways in which we can get a table inside a design system. The first of which is using the lightdom with a thin wrapper around the table markup for styling. This has some advantages because the table markup is in the light dom it can be edited by WYSIWYG editors such as CKEditor. However, this is quite cumbersome and lacks control.

Another option is to create a suite of web components such as `<x-table>`, `<x-table-row>` and `<x-table-cell>` which renders out the analagous table markup. The main issue with this is that the browser will see an incorrect structure. The desired structure should be something like:

```html
<table>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Cell</td>
    </tr>
  </tbody>
</table>
```

However, when using custom elements you'll get something like this:

```html
<table>
  <thead>
    <x-table-row>
        #shadow-root
        <tr>
            <x-table-cell>
                #shadow-root
                <th>Header</th>
            </x-table-cell>
        </tr>
    </x-table-row>
  </thead>
    <tbody>
        <x-table-row>
        #shadow-root
            <tr>
                <x-table-cell>
                    #shadow-root
                    <td>Cell</td>
                </x-table-cell>
            </tr>
        </x-table-row>
    </tbody>
</table>
```

This isn't desirable because table elements are expected to have child elements of a specific type. Not conforming with the expected structure has effects on accessibility and layout.

Therefore, we just use the child elements as wrappers that render nothing more than a slot. We then take what is slotted and insert it into our shadowroot of the table.