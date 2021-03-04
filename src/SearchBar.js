import React from "react";
import Select from "react-select";
import ReactDOM from 'react-dom';

const tickers = [
  {label: 'MMM' },
  {label: 'ABT' },
  {label: 'ABBV' },
  {label: 'ABMD' },
  {label: 'ACN' },
  {label: 'ATVI' },
  {label: 'ADBE' },
  {label: 'AMD' },
  {label: 'AAP' },
  {label: 'AES' },
  {label: 'AFL' },
  {label: 'A' },
  {label: 'APD' },
  {label: 'AKAM' },
  {label: 'ALK' },
  {label: 'ALB' },
  {label: 'ARE' },
  {label: 'ALXN' },
  {label: 'ALGN' },
  {label: 'ALLE' },
  {label: 'LNT' },
  {label: 'ALL' },
  {label: 'GOOGL' },
  {label: 'GOOG' },
  {label: 'MO' },
  {label: 'AMZN' },
  {label: 'AMCR' },
  {label: 'AEE' },
  {label: 'AAL' },
  {label: 'AEP' },
  {label: 'AXP' },
  {label: 'AIG' },
  {label: 'AMT' },
  {label: 'AWK' },
  {label: 'AMP' },
  {label: 'ABC' },
  {label: 'AME' },
  {label: 'AMGN' },
  {label: 'APH' },
  {label: 'ADI' },
  {label: 'ANSS' },
  {label: 'ANTM' },
  {label: 'AON' },
  {label: 'AOS' },
  {label: 'APA' },
  {label: 'AAPL' },
  {label: 'AMAT' },
  {label: 'APTV' },
  {label: 'ADM' },
  {label: 'ANET' },
  {label: 'AJG' },
  {label: 'AIZ' },
  {label: 'T' },
  {label: 'ATO' },
  {label: 'ADSK' },
  {label: 'ADP' },
  {label: 'AZO' },
  {label: 'AVB' },
  {label: 'AVY' },
  {label: 'BKR' },
  {label: 'BLL' },
  {label: 'BAC' },
  {label: 'BK' },
  {label: 'BAX' },
  {label: 'BDX' },
  {label: 'BRK.B' },
  {label: 'BBY' },
  {label: 'BIO' },
  {label: 'BIIB' },
  {label: 'BLK' },
  {label: 'BA' },
  {label: 'BKNG' },
  {label: 'BWA' },
  {label: 'BXP' },
  {label: 'BSX' },
  {label: 'BMY' },
  {label: 'AVGO' },
  {label: 'BR' },
  {label: 'BF.B' },
  {label: 'CHRW' },
  {label: 'COG' },
  {label: 'CDNS' },
  {label: 'CPB' },
  {label: 'COF' },
  {label: 'CAH' },
  {label: 'KMX' },
  {label: 'CCL' },
  {label: 'CARR' },
  {label: 'CTLT' },
  {label: 'CAT' },
  {label: 'CBOE' },
  {label: 'CBRE' },
  {label: 'CDW' },
  {label: 'CE' },
  {label: 'CNC' },
  {label: 'CNP' },
  {label: 'CERN' },
  {label: 'CF' },
  {label: 'SCHW' },
  {label: 'CHTR' },
  {label: 'CVX' },
  {label: 'CMG' },
  {label: 'CB' },
  {label: 'CHD' },
  {label: 'CI' },
  {label: 'CINF' },
  {label: 'CTAS' },
  {label: 'CSCO' },
  {label: 'C' },
  {label: 'CFG' },
  {label: 'CTXS' },
  {label: 'CLX' },
  {label: 'CME' },
  {label: 'CMS' },
  {label: 'KO' },
  {label: 'CTSH' },
  {label: 'CL' },
  {label: 'CMCSA' },
  {label: 'CMA' },
  {label: 'CAG' },
  {label: 'COP' },
  {label: 'ED' },
  {label: 'STZ' },
  {label: 'COO' },
  {label: 'CPRT' },
  {label: 'GLW' },
  {label: 'CTVA' },
  {label: 'COST' },
  {label: 'CCI' },
  {label: 'CSX' },
  {label: 'CMI' },
  {label: 'CVS' },
  {label: 'DHI' },
  {label: 'DHR' },
  {label: 'DRI' },
  {label: 'DVA' },
  {label: 'DE' },
  {label: 'DAL' },
  {label: 'XRAY' },
  {label: 'DVN' },
  {label: 'DXCM' },
  {label: 'FANG' },
  {label: 'DLR' },
  {label: 'DFS' },
  {label: 'DISCA' },
  {label: 'DISCK' },
  {label: 'DISH' },
  {label: 'DG' },
  {label: 'DLTR' },
  {label: 'D' },
  {label: 'DPZ' },
  {label: 'DOV' },
  {label: 'DOW' },
  {label: 'DTE' },
  {label: 'DUK' },
  {label: 'DRE' },
  {label: 'DD' },
  {label: 'DXC' },
  {label: 'EMN' },
  {label: 'ETN' },
  {label: 'EBAY' },
  {label: 'ECL' },
  {label: 'EIX' },
  {label: 'EW' },
  {label: 'EA' },
  {label: 'EMR' },
  {label: 'ENPH' },
  {label: 'ETR' },
  {label: 'EOG' },
  {label: 'EFX' },
  {label: 'EQIX' },
  {label: 'EQR' },
  {label: 'ESS' },
  {label: 'EL' },
  {label: 'ETSY' },
  {label: 'EVRG' },
  {label: 'ES' },
  {label: 'RE' },
  {label: 'EXC' },
  {label: 'EXPE' },
  {label: 'EXPD' },
  {label: 'EXR' },
  {label: 'XOM' },
  {label: 'FFIV' },
  {label: 'FB' },
  {label: 'FAST' },
  {label: 'FRT' },
  {label: 'FDX' },
  {label: 'FIS' },
  {label: 'FITB' },
  {label: 'FE' },
  {label: 'FRC' },
  {label: 'FISV' },
  {label: 'FLT' },
  {label: 'FLIR' },
  {label: 'FLS' },
  {label: 'FMC' },
  {label: 'F' },
  {label: 'FTNT' },
  {label: 'FTV' },
  {label: 'FBHS' },
  {label: 'FOXA' },
  {label: 'FOX' },
  {label: 'BEN' },
  {label: 'FCX' },
  {label: 'GPS' },
  {label: 'GRMN' },
  {label: 'IT' },
  {label: 'GD' },
  {label: 'GE' },
  {label: 'GIS' },
  {label: 'GM' },
  {label: 'GPC' },
  {label: 'GILD' },
  {label: 'GL' },
  {label: 'GPN' },
  {label: 'GS' },
  {label: 'GWW' },
  {label: 'HAL' },
  {label: 'HBI' },
  {label: 'HIG' },
  {label: 'HAS' },
  {label: 'HCA' },
  {label: 'PEAK' },
  {label: 'HSIC' },
  {label: 'HSY' },
  {label: 'HES' },
  {label: 'HPE' },
  {label: 'HLT' },
  {label: 'HFC' },
  {label: 'HOLX' },
  {label: 'HD' },
  {label: 'HON' },
  {label: 'HRL' },
  {label: 'HST' },
  {label: 'HWM' },
  {label: 'HPQ' },
  {label: 'HUM' },
  {label: 'HBAN' },
  {label: 'HII' },
  {label: 'IEX' },
  {label: 'IDXX' },
  {label: 'INFO' },
  {label: 'ITW' },
  {label: 'ILMN' },
  {label: 'INCY' },
  {label: 'IR' },
  {label: 'INTC' },
  {label: 'ICE' },
  {label: 'IBM' },
  {label: 'IP' },
  {label: 'IPG' },
  {label: 'IFF' },
  {label: 'INTU' },
  {label: 'ISRG' },
  {label: 'IVZ' },
  {label: 'IPGP' },
  {label: 'IQV' },
  {label: 'IRM' },
  {label: 'JKHY' },
  {label: 'J' },
  {label: 'JBHT' },
  {label: 'SJM' },
  {label: 'JNJ' },
  {label: 'JCI' },
  {label: 'JPM' },
  {label: 'JNPR' },
  {label: 'KSU' },
  {label: 'K' },
  {label: 'KEY' },
  {label: 'KEYS' },
  {label: 'KMB' },
  {label: 'KIM' },
  {label: 'KMI' },
  {label: 'KLAC' },
  {label: 'KHC' },
  {label: 'KR' },
  {label: 'LB' },
  {label: 'LHX' },
  {label: 'LH' },
  {label: 'LRCX' },
  {label: 'LW' },
  {label: 'LVS' },
  {label: 'LEG' },
  {label: 'LDOS' },
  {label: 'LEN' },
  {label: 'LLY' },
  {label: 'LNC' },
  {label: 'LIN' },
  {label: 'LYV' },
  {label: 'LKQ' },
  {label: 'LMT' },
  {label: 'L' },
  {label: 'LOW' },
  {label: 'LUMN' },
  {label: 'LYB' },
  {label: 'MTB' },
  {label: 'MRO' },
  {label: 'MPC' },
  {label: 'MKTX' },
  {label: 'MAR' },
  {label: 'MMC' },
  {label: 'MLM' },
  {label: 'MAS' },
  {label: 'MA' },
  {label: 'MKC' },
  {label: 'MXIM' },
  {label: 'MCD' },
  {label: 'MCK' },
  {label: 'MDT' },
  {label: 'MRK' },
  {label: 'MET' },
  {label: 'MTD' },
  {label: 'MGM' },
  {label: 'MCHP' },
  {label: 'MU' },
  {label: 'MSFT' },
  {label: 'MAA' },
  {label: 'MHK' },
  {label: 'TAP' },
  {label: 'MDLZ' },
  {label: 'MPWR' },
  {label: 'MNST' },
  {label: 'MCO' },
  {label: 'MS' },
  {label: 'MOS' },
  {label: 'MSI' },
  {label: 'MSCI' },
  {label: 'NDAQ' },
  {label: 'NTAP' },
  {label: 'NFLX' },
  {label: 'NWL' },
  {label: 'NEM' },
  {label: 'NWSA' },
  {label: 'NWS' },
  {label: 'NEE' },
  {label: 'NLSN' },
  {label: 'NKE' },
  {label: 'NI' },
  {label: 'NSC' },
  {label: 'NTRS' },
  {label: 'NOC' },
  {label: 'NLOK' },
  {label: 'NCLH' },
  {label: 'NOV' },
  {label: 'NRG' },
  {label: 'NUE' },
  {label: 'NVDA' },
  {label: 'NVR' },
  {label: 'ORLY' },
  {label: 'OXY' },
  {label: 'ODFL' },
  {label: 'OMC' },
  {label: 'OKE' },
  {label: 'ORCL' },
  {label: 'OTIS' },
  {label: 'PCAR' },
  {label: 'PKG' },
  {label: 'PH' },
  {label: 'PAYX' },
  {label: 'PAYC' },
  {label: 'PYPL' },
  {label: 'PNR' },
  {label: 'PBCT' },
  {label: 'PEP' },
  {label: 'PKI' },
  {label: 'PRGO' },
  {label: 'PFE' },
  {label: 'PM' },
  {label: 'PSX' },
  {label: 'PNW' },
  {label: 'PXD' },
  {label: 'PNC' },
  {label: 'POOL' },
  {label: 'PPG' },
  {label: 'PPL' },
  {label: 'PFG' },
  {label: 'PG' },
  {label: 'PGR' },
  {label: 'PLD' },
  {label: 'PRU' },
  {label: 'PEG' },
  {label: 'PSA' },
  {label: 'PHM' },
  {label: 'PVH' },
  {label: 'QRVO' },
  {label: 'PWR' },
  {label: 'QCOM' },
  {label: 'DGX' },
  {label: 'RL' },
  {label: 'RJF' },
  {label: 'RTX' },
  {label: 'O' },
  {label: 'REG' },
  {label: 'REGN' },
  {label: 'RF' },
  {label: 'RSG' },
  {label: 'RMD' },
  {label: 'RHI' },
  {label: 'ROK' },
  {label: 'ROL' },
  {label: 'ROP' },
  {label: 'ROST' },
  {label: 'RCL' },
  {label: 'SPGI' },
  {label: 'CRM' },
  {label: 'SBAC' },
  {label: 'SLB' },
  {label: 'STX' },
  {label: 'SEE' },
  {label: 'SRE' },
  {label: 'NOW' },
  {label: 'SHW' },
  {label: 'SPG' },
  {label: 'SWKS' },
  {label: 'SLG' },
  {label: 'SNA' },
  {label: 'SO' },
  {label: 'LUV' },
  {label: 'SWK' },
  {label: 'SBUX' },
  {label: 'STT' },
  {label: 'STE' },
  {label: 'SYK' },
  {label: 'SIVB' },
  {label: 'SYF' },
  {label: 'SNPS' },
  {label: 'SYY' },
  {label: 'TMUS' },
  {label: 'TROW' },
  {label: 'TTWO' },
  {label: 'TPR' },
  {label: 'TGT' },
  {label: 'TEL' },
  {label: 'TDY' },
  {label: 'TFX' },
  {label: 'TER' },
  {label: 'TSLA' },
  {label: 'TXN' },
  {label: 'TXT' },
  {label: 'TMO' },
  {label: 'TJX' },
  {label: 'TSCO' },
  {label: 'TT' },
  {label: 'TDG' },
  {label: 'TRV' },
  {label: 'TRMB' },
  {label: 'TFC' },
  {label: 'TWTR' },
  {label: 'TYL' },
  {label: 'TSN' },
  {label: 'UDR' },
  {label: 'ULTA' },
  {label: 'USB' },
  {label: 'UAA' },
  {label: 'UA' },
  {label: 'UNP' },
  {label: 'UAL' },
  {label: 'UNH' },
  {label: 'UPS' },
  {label: 'URI' },
  {label: 'UHS' },
  {label: 'UNM' },
  {label: 'VLO' },
  {label: 'VAR' },
  {label: 'VTR' },
  {label: 'VRSN' },
  {label: 'VRSK' },
  {label: 'VZ' },
  {label: 'VRTX' },
  {label: 'VFC' },
  {label: 'VIAC' },
  {label: 'VTRS' },
  {label: 'V' },
  {label: 'VNT' },
  {label: 'VNO' },
  {label: 'VMC' },
  {label: 'WRB' },
  {label: 'WAB' },
  {label: 'WMT' },
  {label: 'WBA' },
  {label: 'DIS' },
  {label: 'WM' },
  {label: 'WAT' },
  {label: 'WEC' },
  {label: 'WFC' },
  {label: 'WELL' },
  {label: 'WST' },
  {label: 'WDC' },
  {label: 'WU' },
  {label: 'WRK' },
  {label: 'WY' },
  {label: 'WHR' },
  {label: 'WMB' },
  {label: 'WLTW' },
  {label: 'WYNN' },
  {label: 'XEL' },
  {label: 'XRX' },
  {label: 'XLNX' },
  {label: 'XYL' },
  {label: 'YUM' },
  {label: 'ZBRA' },
  {label: 'ZBH' },
  {label: 'ZION' },
  {label: 'ZTS' }
]

const SearchBar = () => (
  <Select options={tickers} />
)

const rootElement = document.getElementById('root');
ReactDOM.render(<SearchBar />, rootElement);
