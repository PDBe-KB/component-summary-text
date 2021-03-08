/*
This class stores information on the summary text and their labels

The data will be coming from UniProt API, for example:
https://www.ebi.ac.uk/proteins/api/proteins?offset=0&size=1&accession=Q99ZW2
*/


export class SummaryText {
  label: string; // Label for the text, e.g. 'Organism'
  text: string; // Text
  italic: boolean; // I.e. true/false
  show_long: boolean; // Show the full text, no matter how long, i.e. true/false
  source: string; // Source of the information, if external, e.g. UniProt
  source_url: string; // Link to the source of information, if external
}

export class SummaryData {
  title: string; // For example 'Q99ZW2'
  subtitle: string; // For example 'CRISPR-associated endonuclease Cas9/Csn1',
  flags: Flag[]; // Flags, for example EC number for enzymes
  text_limit: number; // Number of words displayed; additional words are collapsed by default, except of show_long is true
  texts: SummaryText[];
}

export class Flag {
  name: string; // Flag name
  color: string; // Background color of the flag
  url: string; // URL to external resource, if applicable
  tooltip: string; // Tooltip text
}
