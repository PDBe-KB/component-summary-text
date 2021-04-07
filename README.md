PDBe-KB Summary Text Component
=
[![Build Status](https://www.travis-ci.com/PDBe-KB/component-summary-text.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-summary-text)
[![codecov](https://codecov.io/gh/PDBe-KB/component-summary-text/branch/main/graph/badge.svg?token=XGRVGF9LDY)](https://codecov.io/gh/PDBe-KB/component-summary-text)
[![Maintainability](https://api.codeclimate.com/v1/badges/c757f22f7c1635df3ef8/maintainability)](https://codeclimate.com/github/PDBe-KB/component-summary-text/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that displays textual summary information. 

This web component is used on the PDBe-KB Aggregated Views of Proteins to display summary information on a particular UniProt accession, including: 
1. protein name 
2. gene name 
3. species
4. biological function 

It also supports flags (for example enzyme classification ids) and has an embedded "tutorial" web component.

**Important:** This web component depends on the "tutorial" component which is available from [https://github.com/PDBe-KB/component-tutorial](https://github.com/PDBe-KB/component-tutorial)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-summary-text/main/pdbe-kb-summary-text.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-summary-text.git
cd component-summary-text
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds another PDBe-KB web component: [https://github.com/PDBe-KB/component-tutorial](https://github.com/PDBe-KB/component-tutorial)

In order to use all the features of this web component, retrieve the tutorial component and replace the contents of the `src/app/tutorial` folder with those files.

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryTextComponent } from './summary-text/summary-text.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SummaryTextComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 2.) Add the component to a template:
```angular2html
<app-summary-text [data]="data"></app-summary-text>
```

The data model for the input data is described in 
`src/app/summary-text/summary-text.models.ts`

##### Example input data

```angular2html
{
  title: 'Replicase polyprotein 1ab',
  subtitle: 'Gene: rep',
  texts: [
    {
      label: 'Organism',
      text: 'Severe acute respiratory syndrome coronavirus 2 (2019-nCoV)',
      italic: true,
      show_long: true,
      source: '',
      source_url: ''
    }
  ],
  text_limit: 70,
  flags: [
    {
      name: 'Enzyme: EC 2.7.7.48',
      color: 'color',
      url: 'url',
      tooltip: 'tooltip'
    }
  ],
}
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-summary-text/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-summary-text/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
