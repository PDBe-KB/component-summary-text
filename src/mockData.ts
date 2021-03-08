import {SummaryData} from './app/summary-text/summary-text.models';

export const MOCK_DATA: SummaryData = {
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
    },
    {
      label: 'UniProt',
      text: 'P0DTD1',
      italic: false,
      show_long: true,
      source: 'Uniprot',
      source_url: ''
    },
    {
      label: 'Biological function',
      text: 'Methyltransferase that mediates mRNA cap 2\'-O-ribose methylation to the 5\'-cap structure ' +
        'of viral mRNAs. N7-methyl guanosine cap is a prerequisite for binding of nsp16. Therefore plays' +
        ' an essential role in viral mRNAs cap methylation which is essential to evade immune system',
      italic: false,
      show_long: false,
      source: 'UniProt',
      source_url: 'url'
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
};
