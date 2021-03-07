import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart } from 'victory';
import MMM from "./1y_data/MMM.csv";
import ABT from "./1y_data/ABT.csv";
import ABBV from "./1y_data/ABBV.csv";
import ABMD from "./1y_data/ABMD.csv";
import ACN from "./1y_data/ACN.csv";
import ATVI from "./1y_data/ATVI.csv";
import ADBE from "./1y_data/ADBE.csv";
import AMD from "./1y_data/AMD.csv";
import AAP from "./1y_data/AAP.csv";
import AES from "./1y_data/AES.csv";
import AFL from "./1y_data/AFL.csv";
import A from "./1y_data/A.csv";
import APD from "./1y_data/APD.csv";
import AKAM from "./1y_data/AKAM.csv";
import ALK from "./1y_data/ALK.csv";
import ALB from "./1y_data/ALB.csv";
import ARE from "./1y_data/ARE.csv";
import ALXN from "./1y_data/ALXN.csv";
import ALGN from "./1y_data/ALGN.csv";
import ALLE from "./1y_data/ALLE.csv";
import LNT from "./1y_data/LNT.csv";
import ALL from "./1y_data/ALL.csv";
import GOOGL from "./1y_data/GOOGL.csv";
import GOOG from "./1y_data/GOOG.csv";
import MO from "./1y_data/MO.csv";
import AMZN from "./1y_data/AMZN.csv";
import AMCR from "./1y_data/AMCR.csv";
import AEE from "./1y_data/AEE.csv";
import AAL from "./1y_data/AAL.csv";
import AEP from "./1y_data/AEP.csv";
import AXP from "./1y_data/AXP.csv";
import AIG from "./1y_data/AIG.csv";
import AMT from "./1y_data/AMT.csv";
import AWK from "./1y_data/AWK.csv";
import AMP from "./1y_data/AMP.csv";
import ABC from "./1y_data/ABC.csv";
import AME from "./1y_data/AME.csv";
import AMGN from "./1y_data/AMGN.csv";
import APH from "./1y_data/APH.csv";
import ADI from "./1y_data/ADI.csv";
import ANSS from "./1y_data/ANSS.csv";
import ANTM from "./1y_data/ANTM.csv";
import AON from "./1y_data/AON.csv";
import AOS from "./1y_data/AOS.csv";
import APA from "./1y_data/APA.csv";
import AAPL from "./1y_data/AAPL.csv";
import AMAT from "./1y_data/AMAT.csv";
import APTV from "./1y_data/APTV.csv";
import ADM from "./1y_data/ADM.csv";
import ANET from "./1y_data/ANET.csv";
import AJG from "./1y_data/AJG.csv";
import AIZ from "./1y_data/AIZ.csv";
import T from "./1y_data/T.csv";
import ATO from "./1y_data/ATO.csv";
import ADSK from "./1y_data/ADSK.csv";
import ADP from "./1y_data/ADP.csv";
import AZO from "./1y_data/AZO.csv";
import AVB from "./1y_data/AVB.csv";
import AVY from "./1y_data/AVY.csv";
import BKR from "./1y_data/BKR.csv";
import BLL from "./1y_data/BLL.csv";
import BAC from "./1y_data/BAC.csv";
import BK from "./1y_data/BK.csv";
import BAX from "./1y_data/BAX.csv";
import BDX from "./1y_data/BDX.csv";
import BRK.B from "./1y_data/BRK.B.csv";
import BBY from "./1y_data/BBY.csv";
import BIO from "./1y_data/BIO.csv";
import BIIB from "./1y_data/BIIB.csv";
import BLK from "./1y_data/BLK.csv";
import BA from "./1y_data/BA.csv";
import BKNG from "./1y_data/BKNG.csv";
import BWA from "./1y_data/BWA.csv";
import BXP from "./1y_data/BXP.csv";
import BSX from "./1y_data/BSX.csv";
import BMY from "./1y_data/BMY.csv";
import AVGO from "./1y_data/AVGO.csv";
import BR from "./1y_data/BR.csv";
import BF.B from "./1y_data/BF.B.csv";
import CHRW from "./1y_data/CHRW.csv";
import COG from "./1y_data/COG.csv";
import CDNS from "./1y_data/CDNS.csv";
import CPB from "./1y_data/CPB.csv";
import COF from "./1y_data/COF.csv";
import CAH from "./1y_data/CAH.csv";
import KMX from "./1y_data/KMX.csv";
import CCL from "./1y_data/CCL.csv";
import CARR from "./1y_data/CARR.csv";
import CTLT from "./1y_data/CTLT.csv";
import CAT from "./1y_data/CAT.csv";
import CBOE from "./1y_data/CBOE.csv";
import CBRE from "./1y_data/CBRE.csv";
import CDW from "./1y_data/CDW.csv";
import CE from "./1y_data/CE.csv";
import CNC from "./1y_data/CNC.csv";
import CNP from "./1y_data/CNP.csv";
import CERN from "./1y_data/CERN.csv";
import CF from "./1y_data/CF.csv";
import SCHW from "./1y_data/SCHW.csv";
import CHTR from "./1y_data/CHTR.csv";
import CVX from "./1y_data/CVX.csv";
import CMG from "./1y_data/CMG.csv";
import CB from "./1y_data/CB.csv";
import CHD from "./1y_data/CHD.csv";
import CI from "./1y_data/CI.csv";
import CINF from "./1y_data/CINF.csv";
import CTAS from "./1y_data/CTAS.csv";
import CSCO from "./1y_data/CSCO.csv";
import C from "./1y_data/C.csv";
import CFG from "./1y_data/CFG.csv";
import CTXS from "./1y_data/CTXS.csv";
import CLX from "./1y_data/CLX.csv";
import CME from "./1y_data/CME.csv";
import CMS from "./1y_data/CMS.csv";
import KO from "./1y_data/KO.csv";
import CTSH from "./1y_data/CTSH.csv";
import CL from "./1y_data/CL.csv";
import CMCSA from "./1y_data/CMCSA.csv";
import CMA from "./1y_data/CMA.csv";
import CAG from "./1y_data/CAG.csv";
import COP from "./1y_data/COP.csv";
import ED from "./1y_data/ED.csv";
import STZ from "./1y_data/STZ.csv";
import COO from "./1y_data/COO.csv";
import CPRT from "./1y_data/CPRT.csv";
import GLW from "./1y_data/GLW.csv";
import CTVA from "./1y_data/CTVA.csv";
import COST from "./1y_data/COST.csv";
import CCI from "./1y_data/CCI.csv";
import CSX from "./1y_data/CSX.csv";
import CMI from "./1y_data/CMI.csv";
import CVS from "./1y_data/CVS.csv";
import DHI from "./1y_data/DHI.csv";
import DHR from "./1y_data/DHR.csv";
import DRI from "./1y_data/DRI.csv";
import DVA from "./1y_data/DVA.csv";
import DE from "./1y_data/DE.csv";
import DAL from "./1y_data/DAL.csv";
import XRAY from "./1y_data/XRAY.csv";
import DVN from "./1y_data/DVN.csv";
import DXCM from "./1y_data/DXCM.csv";
import FANG from "./1y_data/FANG.csv";
import DLR from "./1y_data/DLR.csv";
import DFS from "./1y_data/DFS.csv";
import DISCA from "./1y_data/DISCA.csv";
import DISCK from "./1y_data/DISCK.csv";
import DISH from "./1y_data/DISH.csv";
import DG from "./1y_data/DG.csv";
import DLTR from "./1y_data/DLTR.csv";
import D from "./1y_data/D.csv";
import DPZ from "./1y_data/DPZ.csv";
import DOV from "./1y_data/DOV.csv";
import DOW from "./1y_data/DOW.csv";
import DTE from "./1y_data/DTE.csv";
import DUK from "./1y_data/DUK.csv";
import DRE from "./1y_data/DRE.csv";
import DD from "./1y_data/DD.csv";
import DXC from "./1y_data/DXC.csv";
import EMN from "./1y_data/EMN.csv";
import ETN from "./1y_data/ETN.csv";
import EBAY from "./1y_data/EBAY.csv";
import ECL from "./1y_data/ECL.csv";
import EIX from "./1y_data/EIX.csv";
import EW from "./1y_data/EW.csv";
import EA from "./1y_data/EA.csv";
import EMR from "./1y_data/EMR.csv";
import ENPH from "./1y_data/ENPH.csv";
import ETR from "./1y_data/ETR.csv";
import EOG from "./1y_data/EOG.csv";
import EFX from "./1y_data/EFX.csv";
import EQIX from "./1y_data/EQIX.csv";
import EQR from "./1y_data/EQR.csv";
import ESS from "./1y_data/ESS.csv";
import EL from "./1y_data/EL.csv";
import ETSY from "./1y_data/ETSY.csv";
import EVRG from "./1y_data/EVRG.csv";
import ES from "./1y_data/ES.csv";
import RE from "./1y_data/RE.csv";
import EXC from "./1y_data/EXC.csv";
import EXPE from "./1y_data/EXPE.csv";
import EXPD from "./1y_data/EXPD.csv";
import EXR from "./1y_data/EXR.csv";
import XOM from "./1y_data/XOM.csv";
import FFIV from "./1y_data/FFIV.csv";
import FB from "./1y_data/FB.csv";
import FAST from "./1y_data/FAST.csv";
import FRT from "./1y_data/FRT.csv";
import FDX from "./1y_data/FDX.csv";
import FIS from "./1y_data/FIS.csv";
import FITB from "./1y_data/FITB.csv";
import FE from "./1y_data/FE.csv";
import FRC from "./1y_data/FRC.csv";
import FISV from "./1y_data/FISV.csv";
import FLT from "./1y_data/FLT.csv";
import FLIR from "./1y_data/FLIR.csv";
import FLS from "./1y_data/FLS.csv";
import FMC from "./1y_data/FMC.csv";
import F from "./1y_data/F.csv";
import FTNT from "./1y_data/FTNT.csv";
import FTV from "./1y_data/FTV.csv";
import FBHS from "./1y_data/FBHS.csv";
import FOXA from "./1y_data/FOXA.csv";
import FOX from "./1y_data/FOX.csv";
import BEN from "./1y_data/BEN.csv";
import FCX from "./1y_data/FCX.csv";
import GPS from "./1y_data/GPS.csv";
import GRMN from "./1y_data/GRMN.csv";
import IT from "./1y_data/IT.csv";
import GD from "./1y_data/GD.csv";
import GE from "./1y_data/GE.csv";
import GIS from "./1y_data/GIS.csv";
import GM from "./1y_data/GM.csv";
import GPC from "./1y_data/GPC.csv";
import GILD from "./1y_data/GILD.csv";
import GL from "./1y_data/GL.csv";
import GPN from "./1y_data/GPN.csv";
import GS from "./1y_data/GS.csv";
import GWW from "./1y_data/GWW.csv";
import HAL from "./1y_data/HAL.csv";
import HBI from "./1y_data/HBI.csv";
import HIG from "./1y_data/HIG.csv";
import HAS from "./1y_data/HAS.csv";
import HCA from "./1y_data/HCA.csv";
import PEAK from "./1y_data/PEAK.csv";
import HSIC from "./1y_data/HSIC.csv";
import HSY from "./1y_data/HSY.csv";
import HES from "./1y_data/HES.csv";
import HPE from "./1y_data/HPE.csv";
import HLT from "./1y_data/HLT.csv";
import HFC from "./1y_data/HFC.csv";
import HOLX from "./1y_data/HOLX.csv";
import HD from "./1y_data/HD.csv";
import HON from "./1y_data/HON.csv";
import HRL from "./1y_data/HRL.csv";
import HST from "./1y_data/HST.csv";
import HWM from "./1y_data/HWM.csv";
import HPQ from "./1y_data/HPQ.csv";
import HUM from "./1y_data/HUM.csv";
import HBAN from "./1y_data/HBAN.csv";
import HII from "./1y_data/HII.csv";
import IEX from "./1y_data/IEX.csv";
import IDXX from "./1y_data/IDXX.csv";
import INFO from "./1y_data/INFO.csv";
import ITW from "./1y_data/ITW.csv";
import ILMN from "./1y_data/ILMN.csv";
import INCY from "./1y_data/INCY.csv";
import IR from "./1y_data/IR.csv";
import INTC from "./1y_data/INTC.csv";
import ICE from "./1y_data/ICE.csv";
import IBM from "./1y_data/IBM.csv";
import IP from "./1y_data/IP.csv";
import IPG from "./1y_data/IPG.csv";
import IFF from "./1y_data/IFF.csv";
import INTU from "./1y_data/INTU.csv";
import ISRG from "./1y_data/ISRG.csv";
import IVZ from "./1y_data/IVZ.csv";
import IPGP from "./1y_data/IPGP.csv";
import IQV from "./1y_data/IQV.csv";
import IRM from "./1y_data/IRM.csv";
import JKHY from "./1y_data/JKHY.csv";
import J from "./1y_data/J.csv";
import JBHT from "./1y_data/JBHT.csv";
import SJM from "./1y_data/SJM.csv";
import JNJ from "./1y_data/JNJ.csv";
import JCI from "./1y_data/JCI.csv";
import JPM from "./1y_data/JPM.csv";
import JNPR from "./1y_data/JNPR.csv";
import KSU from "./1y_data/KSU.csv";
import K from "./1y_data/K.csv";
import KEY from "./1y_data/KEY.csv";
import KEYS from "./1y_data/KEYS.csv";
import KMB from "./1y_data/KMB.csv";
import KIM from "./1y_data/KIM.csv";
import KMI from "./1y_data/KMI.csv";
import KLAC from "./1y_data/KLAC.csv";
import KHC from "./1y_data/KHC.csv";
import KR from "./1y_data/KR.csv";
import LB from "./1y_data/LB.csv";
import LHX from "./1y_data/LHX.csv";
import LH from "./1y_data/LH.csv";
import LRCX from "./1y_data/LRCX.csv";
import LW from "./1y_data/LW.csv";
import LVS from "./1y_data/LVS.csv";
import LEG from "./1y_data/LEG.csv";
import LDOS from "./1y_data/LDOS.csv";
import LEN from "./1y_data/LEN.csv";
import LLY from "./1y_data/LLY.csv";
import LNC from "./1y_data/LNC.csv";
import LIN from "./1y_data/LIN.csv";
import LYV from "./1y_data/LYV.csv";
import LKQ from "./1y_data/LKQ.csv";
import LMT from "./1y_data/LMT.csv";
import L from "./1y_data/L.csv";
import LOW from "./1y_data/LOW.csv";
import LUMN from "./1y_data/LUMN.csv";
import LYB from "./1y_data/LYB.csv";
import MTB from "./1y_data/MTB.csv";
import MRO from "./1y_data/MRO.csv";
import MPC from "./1y_data/MPC.csv";
import MKTX from "./1y_data/MKTX.csv";
import MAR from "./1y_data/MAR.csv";
import MMC from "./1y_data/MMC.csv";
import MLM from "./1y_data/MLM.csv";
import MAS from "./1y_data/MAS.csv";
import MA from "./1y_data/MA.csv";
import MKC from "./1y_data/MKC.csv";
import MXIM from "./1y_data/MXIM.csv";
import MCD from "./1y_data/MCD.csv";
import MCK from "./1y_data/MCK.csv";
import MDT from "./1y_data/MDT.csv";
import MRK from "./1y_data/MRK.csv";
import MET from "./1y_data/MET.csv";
import MTD from "./1y_data/MTD.csv";
import MGM from "./1y_data/MGM.csv";
import MCHP from "./1y_data/MCHP.csv";
import MU from "./1y_data/MU.csv";
import MSFT from "./1y_data/MSFT.csv";
import MAA from "./1y_data/MAA.csv";
import MHK from "./1y_data/MHK.csv";
import TAP from "./1y_data/TAP.csv";
import MDLZ from "./1y_data/MDLZ.csv";
import MPWR from "./1y_data/MPWR.csv";
import MNST from "./1y_data/MNST.csv";
import MCO from "./1y_data/MCO.csv";
import MS from "./1y_data/MS.csv";
import MOS from "./1y_data/MOS.csv";
import MSI from "./1y_data/MSI.csv";
import MSCI from "./1y_data/MSCI.csv";
import NDAQ from "./1y_data/NDAQ.csv";
import NTAP from "./1y_data/NTAP.csv";
import NFLX from "./1y_data/NFLX.csv";
import NWL from "./1y_data/NWL.csv";
import NEM from "./1y_data/NEM.csv";
import NWSA from "./1y_data/NWSA.csv";
import NWS from "./1y_data/NWS.csv";
import NEE from "./1y_data/NEE.csv";
import NLSN from "./1y_data/NLSN.csv";
import NKE from "./1y_data/NKE.csv";
import NI from "./1y_data/NI.csv";
import NSC from "./1y_data/NSC.csv";
import NTRS from "./1y_data/NTRS.csv";
import NOC from "./1y_data/NOC.csv";
import NLOK from "./1y_data/NLOK.csv";
import NCLH from "./1y_data/NCLH.csv";
import NOV from "./1y_data/NOV.csv";
import NRG from "./1y_data/NRG.csv";
import NUE from "./1y_data/NUE.csv";
import NVDA from "./1y_data/NVDA.csv";
import NVR from "./1y_data/NVR.csv";
import ORLY from "./1y_data/ORLY.csv";
import OXY from "./1y_data/OXY.csv";
import ODFL from "./1y_data/ODFL.csv";
import OMC from "./1y_data/OMC.csv";
import OKE from "./1y_data/OKE.csv";
import ORCL from "./1y_data/ORCL.csv";
import OTIS from "./1y_data/OTIS.csv";
import PCAR from "./1y_data/PCAR.csv";
import PKG from "./1y_data/PKG.csv";
import PH from "./1y_data/PH.csv";
import PAYX from "./1y_data/PAYX.csv";
import PAYC from "./1y_data/PAYC.csv";
import PYPL from "./1y_data/PYPL.csv";
import PNR from "./1y_data/PNR.csv";
import PBCT from "./1y_data/PBCT.csv";
import PEP from "./1y_data/PEP.csv";
import PKI from "./1y_data/PKI.csv";
import PRGO from "./1y_data/PRGO.csv";
import PFE from "./1y_data/PFE.csv";
import PM from "./1y_data/PM.csv";
import PSX from "./1y_data/PSX.csv";
import PNW from "./1y_data/PNW.csv";
import PXD from "./1y_data/PXD.csv";
import PNC from "./1y_data/PNC.csv";
import POOL from "./1y_data/POOL.csv";
import PPG from "./1y_data/PPG.csv";
import PPL from "./1y_data/PPL.csv";
import PFG from "./1y_data/PFG.csv";
import PG from "./1y_data/PG.csv";
import PGR from "./1y_data/PGR.csv";
import PLD from "./1y_data/PLD.csv";
import PRU from "./1y_data/PRU.csv";
import PEG from "./1y_data/PEG.csv";
import PSA from "./1y_data/PSA.csv";
import PHM from "./1y_data/PHM.csv";
import PVH from "./1y_data/PVH.csv";
import QRVO from "./1y_data/QRVO.csv";
import PWR from "./1y_data/PWR.csv";
import QCOM from "./1y_data/QCOM.csv";
import DGX from "./1y_data/DGX.csv";
import RL from "./1y_data/RL.csv";
import RJF from "./1y_data/RJF.csv";
import RTX from "./1y_data/RTX.csv";
import O from "./1y_data/O.csv";
import REG from "./1y_data/REG.csv";
import REGN from "./1y_data/REGN.csv";
import RF from "./1y_data/RF.csv";
import RSG from "./1y_data/RSG.csv";
import RMD from "./1y_data/RMD.csv";
import RHI from "./1y_data/RHI.csv";
import ROK from "./1y_data/ROK.csv";
import ROL from "./1y_data/ROL.csv";
import ROP from "./1y_data/ROP.csv";
import ROST from "./1y_data/ROST.csv";
import RCL from "./1y_data/RCL.csv";
import SPGI from "./1y_data/SPGI.csv";
import CRM from "./1y_data/CRM.csv";
import SBAC from "./1y_data/SBAC.csv";
import SLB from "./1y_data/SLB.csv";
import STX from "./1y_data/STX.csv";
import SEE from "./1y_data/SEE.csv";
import SRE from "./1y_data/SRE.csv";
import NOW from "./1y_data/NOW.csv";
import SHW from "./1y_data/SHW.csv";
import SPG from "./1y_data/SPG.csv";
import SWKS from "./1y_data/SWKS.csv";
import SLG from "./1y_data/SLG.csv";
import SNA from "./1y_data/SNA.csv";
import SO from "./1y_data/SO.csv";
import LUV from "./1y_data/LUV.csv";
import SWK from "./1y_data/SWK.csv";
import SBUX from "./1y_data/SBUX.csv";
import STT from "./1y_data/STT.csv";
import STE from "./1y_data/STE.csv";
import SYK from "./1y_data/SYK.csv";
import SIVB from "./1y_data/SIVB.csv";
import SYF from "./1y_data/SYF.csv";
import SNPS from "./1y_data/SNPS.csv";
import SYY from "./1y_data/SYY.csv";
import TMUS from "./1y_data/TMUS.csv";
import TROW from "./1y_data/TROW.csv";
import TTWO from "./1y_data/TTWO.csv";
import TPR from "./1y_data/TPR.csv";
import TGT from "./1y_data/TGT.csv";
import TEL from "./1y_data/TEL.csv";
import TDY from "./1y_data/TDY.csv";
import TFX from "./1y_data/TFX.csv";
import TER from "./1y_data/TER.csv";
import TSLA from "./1y_data/TSLA.csv";
import TXN from "./1y_data/TXN.csv";
import TXT from "./1y_data/TXT.csv";
import TMO from "./1y_data/TMO.csv";
import TJX from "./1y_data/TJX.csv";
import TSCO from "./1y_data/TSCO.csv";
import TT from "./1y_data/TT.csv";
import TDG from "./1y_data/TDG.csv";
import TRV from "./1y_data/TRV.csv";
import TRMB from "./1y_data/TRMB.csv";
import TFC from "./1y_data/TFC.csv";
import TWTR from "./1y_data/TWTR.csv";
import TYL from "./1y_data/TYL.csv";
import TSN from "./1y_data/TSN.csv";
import UDR from "./1y_data/UDR.csv";
import ULTA from "./1y_data/ULTA.csv";
import USB from "./1y_data/USB.csv";
import UAA from "./1y_data/UAA.csv";
import UA from "./1y_data/UA.csv";
import UNP from "./1y_data/UNP.csv";
import UAL from "./1y_data/UAL.csv";
import UNH from "./1y_data/UNH.csv";
import UPS from "./1y_data/UPS.csv";
import URI from "./1y_data/URI.csv";
import UHS from "./1y_data/UHS.csv";
import UNM from "./1y_data/UNM.csv";
import VLO from "./1y_data/VLO.csv";
import VAR from "./1y_data/VAR.csv";
import VTR from "./1y_data/VTR.csv";
import VRSN from "./1y_data/VRSN.csv";
import VRSK from "./1y_data/VRSK.csv";
import VZ from "./1y_data/VZ.csv";
import VRTX from "./1y_data/VRTX.csv";
import VFC from "./1y_data/VFC.csv";
import VIAC from "./1y_data/VIAC.csv";
import VTRS from "./1y_data/VTRS.csv";
import V from "./1y_data/V.csv";
import VNT from "./1y_data/VNT.csv";
import VNO from "./1y_data/VNO.csv";
import VMC from "./1y_data/VMC.csv";
import WRB from "./1y_data/WRB.csv";
import WAB from "./1y_data/WAB.csv";
import WMT from "./1y_data/WMT.csv";
import WBA from "./1y_data/WBA.csv";
import DIS from "./1y_data/DIS.csv";
import WM from "./1y_data/WM.csv";
import WAT from "./1y_data/WAT.csv";
import WEC from "./1y_data/WEC.csv";
import WFC from "./1y_data/WFC.csv";
import WELL from "./1y_data/WELL.csv";
import WST from "./1y_data/WST.csv";
import WDC from "./1y_data/WDC.csv";
import WU from "./1y_data/WU.csv";
import WRK from "./1y_data/WRK.csv";
import WY from "./1y_data/WY.csv";
import WHR from "./1y_data/WHR.csv";
import WMB from "./1y_data/WMB.csv";
import WLTW from "./1y_data/WLTW.csv";
import WYNN from "./1y_data/WYNN.csv";
import XEL from "./1y_data/XEL.csv";
import XRX from "./1y_data/XRX.csv";
import XLNX from "./1y_data/XLNX.csv";
import XYL from "./1y_data/XYL.csv";
import YUM from "./1y_data/YUM.csv";
import ZBRA from "./1y_data/ZBRA.csv";
import ZBH from "./1y_data/ZBH.csv";
import ZION from "./1y_data/ZION.csv";
import ZTS from "./1y_data/ZTS.csv";

function CSVToArray(csv) {
  var lines = csv.split("\n");
  return lines.splice(1, lines.length)
}

const ticker = 'MMM';

var miniGraph = CSVToArray(MMM);

if (ticker === 'MMM') {
  miniGraph = CSVToArray(MMM);
}
if (ticker === 'ABT') {
  miniGraph = CSVToArray(ABT);
}
if (ticker === 'ABBV') {
  miniGraph = CSVToArray(ABBV);
}
if (ticker === 'ABMD') {
  miniGraph = CSVToArray(ABMD);
}
if (ticker === 'ACN') {
  miniGraph = CSVToArray(ACN);
}
if (ticker === 'ATVI') {
  miniGraph = CSVToArray(ATVI);
}
if (ticker === 'ADBE') {
  miniGraph = CSVToArray(ADBE);
}
if (ticker === 'AMD') {
  miniGraph = CSVToArray(AMD);
}
if (ticker === 'AAP') {
  miniGraph = CSVToArray(AAP);
}
if (ticker === 'AES') {
  miniGraph = CSVToArray(AES);
}
if (ticker === 'AFL') {
  miniGraph = CSVToArray(AFL);
}
if (ticker === 'A') {
  miniGraph = CSVToArray(A);
}
if (ticker === 'APD') {
  miniGraph = CSVToArray(APD);
}
if (ticker === 'AKAM') {
  miniGraph = CSVToArray(AKAM);
}
if (ticker === 'ALK') {
  miniGraph = CSVToArray(ALK);
}
if (ticker === 'ALB') {
  miniGraph = CSVToArray(ALB);
}
if (ticker === 'ARE') {
  miniGraph = CSVToArray(ARE);
}
if (ticker === 'ALXN') {
  miniGraph = CSVToArray(ALXN);
}
if (ticker === 'ALGN') {
  miniGraph = CSVToArray(ALGN);
}
if (ticker === 'ALLE') {
  miniGraph = CSVToArray(ALLE);
}
if (ticker === 'LNT') {
  miniGraph = CSVToArray(LNT);
}
if (ticker === 'ALL') {
  miniGraph = CSVToArray(ALL);
}
if (ticker === 'GOOGL') {
  miniGraph = CSVToArray(GOOGL);
}
if (ticker === 'GOOG') {
  miniGraph = CSVToArray(GOOG);
}
if (ticker === 'MO') {
  miniGraph = CSVToArray(MO);
}
if (ticker === 'AMZN') {
  miniGraph = CSVToArray(AMZN);
}
if (ticker === 'AMCR') {
  miniGraph = CSVToArray(AMCR);
}
if (ticker === 'AEE') {
  miniGraph = CSVToArray(AEE);
}
if (ticker === 'AAL') {
  miniGraph = CSVToArray(AAL);
}
if (ticker === 'AEP') {
  miniGraph = CSVToArray(AEP);
}
if (ticker === 'AXP') {
  miniGraph = CSVToArray(AXP);
}
if (ticker === 'AIG') {
  miniGraph = CSVToArray(AIG);
}
if (ticker === 'AMT') {
  miniGraph = CSVToArray(AMT);
}
if (ticker === 'AWK') {
  miniGraph = CSVToArray(AWK);
}
if (ticker === 'AMP') {
  miniGraph = CSVToArray(AMP);
}
if (ticker === 'ABC') {
  miniGraph = CSVToArray(ABC);
}
if (ticker === 'AME') {
  miniGraph = CSVToArray(AME);
}
if (ticker === 'AMGN') {
  miniGraph = CSVToArray(AMGN);
}
if (ticker === 'APH') {
  miniGraph = CSVToArray(APH);
}
if (ticker === 'ADI') {
  miniGraph = CSVToArray(ADI);
}
if (ticker === 'ANSS') {
  miniGraph = CSVToArray(ANSS);
}
if (ticker === 'ANTM') {
  miniGraph = CSVToArray(ANTM);
}
if (ticker === 'AON') {
  miniGraph = CSVToArray(AON);
}
if (ticker === 'AOS') {
  miniGraph = CSVToArray(AOS);
}
if (ticker === 'APA') {
  miniGraph = CSVToArray(APA);
}
if (ticker === 'AAPL') {
  miniGraph = CSVToArray(AAPL);
}
if (ticker === 'AMAT') {
  miniGraph = CSVToArray(AMAT);
}
if (ticker === 'APTV') {
  miniGraph = CSVToArray(APTV);
}
if (ticker === 'ADM') {
  miniGraph = CSVToArray(ADM);
}
if (ticker === 'ANET') {
  miniGraph = CSVToArray(ANET);
}
if (ticker === 'AJG') {
  miniGraph = CSVToArray(AJG);
}
if (ticker === 'AIZ') {
  miniGraph = CSVToArray(AIZ);
}
if (ticker === 'T') {
  miniGraph = CSVToArray(T);
}
if (ticker === 'ATO') {
  miniGraph = CSVToArray(ATO);
}
if (ticker === 'ADSK') {
  miniGraph = CSVToArray(ADSK);
}
if (ticker === 'ADP') {
  miniGraph = CSVToArray(ADP);
}
if (ticker === 'AZO') {
  miniGraph = CSVToArray(AZO);
}
if (ticker === 'AVB') {
  miniGraph = CSVToArray(AVB);
}
if (ticker === 'AVY') {
  miniGraph = CSVToArray(AVY);
}
if (ticker === 'BKR') {
  miniGraph = CSVToArray(BKR);
}
if (ticker === 'BLL') {
  miniGraph = CSVToArray(BLL);
}
if (ticker === 'BAC') {
  miniGraph = CSVToArray(BAC);
}
if (ticker === 'BK') {
  miniGraph = CSVToArray(BK);
}
if (ticker === 'BAX') {
  miniGraph = CSVToArray(BAX);
}
if (ticker === 'BDX') {
  miniGraph = CSVToArray(BDX);
}
if (ticker === 'BRK.B') {
  miniGraph = CSVToArray(BRK.B);
}
if (ticker === 'BBY') {
  miniGraph = CSVToArray(BBY);
}
if (ticker === 'BIO') {
  miniGraph = CSVToArray(BIO);
}
if (ticker === 'BIIB') {
  miniGraph = CSVToArray(BIIB);
}
if (ticker === 'BLK') {
  miniGraph = CSVToArray(BLK);
}
if (ticker === 'BA') {
  miniGraph = CSVToArray(BA);
}
if (ticker === 'BKNG') {
  miniGraph = CSVToArray(BKNG);
}
if (ticker === 'BWA') {
  miniGraph = CSVToArray(BWA);
}
if (ticker === 'BXP') {
  miniGraph = CSVToArray(BXP);
}
if (ticker === 'BSX') {
  miniGraph = CSVToArray(BSX);
}
if (ticker === 'BMY') {
  miniGraph = CSVToArray(BMY);
}
if (ticker === 'AVGO') {
  miniGraph = CSVToArray(AVGO);
}
if (ticker === 'BR') {
  miniGraph = CSVToArray(BR);
}
if (ticker === 'BF.B') {
  miniGraph = CSVToArray(BF.B);
}
if (ticker === 'CHRW') {
  miniGraph = CSVToArray(CHRW);
}
if (ticker === 'COG') {
  miniGraph = CSVToArray(COG);
}
if (ticker === 'CDNS') {
  miniGraph = CSVToArray(CDNS);
}
if (ticker === 'CPB') {
  miniGraph = CSVToArray(CPB);
}
if (ticker === 'COF') {
  miniGraph = CSVToArray(COF);
}
if (ticker === 'CAH') {
  miniGraph = CSVToArray(CAH);
}
if (ticker === 'KMX') {
  miniGraph = CSVToArray(KMX);
}
if (ticker === 'CCL') {
  miniGraph = CSVToArray(CCL);
}
if (ticker === 'CARR') {
  miniGraph = CSVToArray(CARR);
}
if (ticker === 'CTLT') {
  miniGraph = CSVToArray(CTLT);
}
if (ticker === 'CAT') {
  miniGraph = CSVToArray(CAT);
}
if (ticker === 'CBOE') {
  miniGraph = CSVToArray(CBOE);
}
if (ticker === 'CBRE') {
  miniGraph = CSVToArray(CBRE);
}
if (ticker === 'CDW') {
  miniGraph = CSVToArray(CDW);
}
if (ticker === 'CE') {
  miniGraph = CSVToArray(CE);
}
if (ticker === 'CNC') {
  miniGraph = CSVToArray(CNC);
}
if (ticker === 'CNP') {
  miniGraph = CSVToArray(CNP);
}
if (ticker === 'CERN') {
  miniGraph = CSVToArray(CERN);
}
if (ticker === 'CF') {
  miniGraph = CSVToArray(CF);
}
if (ticker === 'SCHW') {
  miniGraph = CSVToArray(SCHW);
}
if (ticker === 'CHTR') {
  miniGraph = CSVToArray(CHTR);
}
if (ticker === 'CVX') {
  miniGraph = CSVToArray(CVX);
}
if (ticker === 'CMG') {
  miniGraph = CSVToArray(CMG);
}
if (ticker === 'CB') {
  miniGraph = CSVToArray(CB);
}
if (ticker === 'CHD') {
  miniGraph = CSVToArray(CHD);
}
if (ticker === 'CI') {
  miniGraph = CSVToArray(CI);
}
if (ticker === 'CINF') {
  miniGraph = CSVToArray(CINF);
}
if (ticker === 'CTAS') {
  miniGraph = CSVToArray(CTAS);
}
if (ticker === 'CSCO') {
  miniGraph = CSVToArray(CSCO);
}
if (ticker === 'C') {
  miniGraph = CSVToArray(C);
}
if (ticker === 'CFG') {
  miniGraph = CSVToArray(CFG);
}
if (ticker === 'CTXS') {
  miniGraph = CSVToArray(CTXS);
}
if (ticker === 'CLX') {
  miniGraph = CSVToArray(CLX);
}
if (ticker === 'CME') {
  miniGraph = CSVToArray(CME);
}
if (ticker === 'CMS') {
  miniGraph = CSVToArray(CMS);
}
if (ticker === 'KO') {
  miniGraph = CSVToArray(KO);
}
if (ticker === 'CTSH') {
  miniGraph = CSVToArray(CTSH);
}
if (ticker === 'CL') {
  miniGraph = CSVToArray(CL);
}
if (ticker === 'CMCSA') {
  miniGraph = CSVToArray(CMCSA);
}
if (ticker === 'CMA') {
  miniGraph = CSVToArray(CMA);
}
if (ticker === 'CAG') {
  miniGraph = CSVToArray(CAG);
}
if (ticker === 'COP') {
  miniGraph = CSVToArray(COP);
}
if (ticker === 'ED') {
  miniGraph = CSVToArray(ED);
}
if (ticker === 'STZ') {
  miniGraph = CSVToArray(STZ);
}
if (ticker === 'COO') {
  miniGraph = CSVToArray(COO);
}
if (ticker === 'CPRT') {
  miniGraph = CSVToArray(CPRT);
}
if (ticker === 'GLW') {
  miniGraph = CSVToArray(GLW);
}
if (ticker === 'CTVA') {
  miniGraph = CSVToArray(CTVA);
}
if (ticker === 'COST') {
  miniGraph = CSVToArray(COST);
}
if (ticker === 'CCI') {
  miniGraph = CSVToArray(CCI);
}
if (ticker === 'CSX') {
  miniGraph = CSVToArray(CSX);
}
if (ticker === 'CMI') {
  miniGraph = CSVToArray(CMI);
}
if (ticker === 'CVS') {
  miniGraph = CSVToArray(CVS);
}
if (ticker === 'DHI') {
  miniGraph = CSVToArray(DHI);
}
if (ticker === 'DHR') {
  miniGraph = CSVToArray(DHR);
}
if (ticker === 'DRI') {
  miniGraph = CSVToArray(DRI);
}
if (ticker === 'DVA') {
  miniGraph = CSVToArray(DVA);
}
if (ticker === 'DE') {
  miniGraph = CSVToArray(DE);
}
if (ticker === 'DAL') {
  miniGraph = CSVToArray(DAL);
}
if (ticker === 'XRAY') {
  miniGraph = CSVToArray(XRAY);
}
if (ticker === 'DVN') {
  miniGraph = CSVToArray(DVN);
}
if (ticker === 'DXCM') {
  miniGraph = CSVToArray(DXCM);
}
if (ticker === 'FANG') {
  miniGraph = CSVToArray(FANG);
}
if (ticker === 'DLR') {
  miniGraph = CSVToArray(DLR);
}
if (ticker === 'DFS') {
  miniGraph = CSVToArray(DFS);
}
if (ticker === 'DISCA') {
  miniGraph = CSVToArray(DISCA);
}
if (ticker === 'DISCK') {
  miniGraph = CSVToArray(DISCK);
}
if (ticker === 'DISH') {
  miniGraph = CSVToArray(DISH);
}
if (ticker === 'DG') {
  miniGraph = CSVToArray(DG);
}
if (ticker === 'DLTR') {
  miniGraph = CSVToArray(DLTR);
}
if (ticker === 'D') {
  miniGraph = CSVToArray(D);
}
if (ticker === 'DPZ') {
  miniGraph = CSVToArray(DPZ);
}
if (ticker === 'DOV') {
  miniGraph = CSVToArray(DOV);
}
if (ticker === 'DOW') {
  miniGraph = CSVToArray(DOW);
}
if (ticker === 'DTE') {
  miniGraph = CSVToArray(DTE);
}
if (ticker === 'DUK') {
  miniGraph = CSVToArray(DUK);
}
if (ticker === 'DRE') {
  miniGraph = CSVToArray(DRE);
}
if (ticker === 'DD') {
  miniGraph = CSVToArray(DD);
}
if (ticker === 'DXC') {
  miniGraph = CSVToArray(DXC);
}
if (ticker === 'EMN') {
  miniGraph = CSVToArray(EMN);
}
if (ticker === 'ETN') {
  miniGraph = CSVToArray(ETN);
}
if (ticker === 'EBAY') {
  miniGraph = CSVToArray(EBAY);
}
if (ticker === 'ECL') {
  miniGraph = CSVToArray(ECL);
}
if (ticker === 'EIX') {
  miniGraph = CSVToArray(EIX);
}
if (ticker === 'EW') {
  miniGraph = CSVToArray(EW);
}
if (ticker === 'EA') {
  miniGraph = CSVToArray(EA);
}
if (ticker === 'EMR') {
  miniGraph = CSVToArray(EMR);
}
if (ticker === 'ENPH') {
  miniGraph = CSVToArray(ENPH);
}
if (ticker === 'ETR') {
  miniGraph = CSVToArray(ETR);
}
if (ticker === 'EOG') {
  miniGraph = CSVToArray(EOG);
}
if (ticker === 'EFX') {
  miniGraph = CSVToArray(EFX);
}
if (ticker === 'EQIX') {
  miniGraph = CSVToArray(EQIX);
}
if (ticker === 'EQR') {
  miniGraph = CSVToArray(EQR);
}
if (ticker === 'ESS') {
  miniGraph = CSVToArray(ESS);
}
if (ticker === 'EL') {
  miniGraph = CSVToArray(EL);
}
if (ticker === 'ETSY') {
  miniGraph = CSVToArray(ETSY);
}
if (ticker === 'EVRG') {
  miniGraph = CSVToArray(EVRG);
}
if (ticker === 'ES') {
  miniGraph = CSVToArray(ES);
}
if (ticker === 'RE') {
  miniGraph = CSVToArray(RE);
}
if (ticker === 'EXC') {
  miniGraph = CSVToArray(EXC);
}
if (ticker === 'EXPE') {
  miniGraph = CSVToArray(EXPE);
}
if (ticker === 'EXPD') {
  miniGraph = CSVToArray(EXPD);
}
if (ticker === 'EXR') {
  miniGraph = CSVToArray(EXR);
}
if (ticker === 'XOM') {
  miniGraph = CSVToArray(XOM);
}
if (ticker === 'FFIV') {
  miniGraph = CSVToArray(FFIV);
}
if (ticker === 'FB') {
  miniGraph = CSVToArray(FB);
}
if (ticker === 'FAST') {
  miniGraph = CSVToArray(FAST);
}
if (ticker === 'FRT') {
  miniGraph = CSVToArray(FRT);
}
if (ticker === 'FDX') {
  miniGraph = CSVToArray(FDX);
}
if (ticker === 'FIS') {
  miniGraph = CSVToArray(FIS);
}
if (ticker === 'FITB') {
  miniGraph = CSVToArray(FITB);
}
if (ticker === 'FE') {
  miniGraph = CSVToArray(FE);
}
if (ticker === 'FRC') {
  miniGraph = CSVToArray(FRC);
}
if (ticker === 'FISV') {
  miniGraph = CSVToArray(FISV);
}
if (ticker === 'FLT') {
  miniGraph = CSVToArray(FLT);
}
if (ticker === 'FLIR') {
  miniGraph = CSVToArray(FLIR);
}
if (ticker === 'FLS') {
  miniGraph = CSVToArray(FLS);
}
if (ticker === 'FMC') {
  miniGraph = CSVToArray(FMC);
}
if (ticker === 'F') {
  miniGraph = CSVToArray(F);
}
if (ticker === 'FTNT') {
  miniGraph = CSVToArray(FTNT);
}
if (ticker === 'FTV') {
  miniGraph = CSVToArray(FTV);
}
if (ticker === 'FBHS') {
  miniGraph = CSVToArray(FBHS);
}
if (ticker === 'FOXA') {
  miniGraph = CSVToArray(FOXA);
}
if (ticker === 'FOX') {
  miniGraph = CSVToArray(FOX);
}
if (ticker === 'BEN') {
  miniGraph = CSVToArray(BEN);
}
if (ticker === 'FCX') {
  miniGraph = CSVToArray(FCX);
}
if (ticker === 'GPS') {
  miniGraph = CSVToArray(GPS);
}
if (ticker === 'GRMN') {
  miniGraph = CSVToArray(GRMN);
}
if (ticker === 'IT') {
  miniGraph = CSVToArray(IT);
}
if (ticker === 'GD') {
  miniGraph = CSVToArray(GD);
}
if (ticker === 'GE') {
  miniGraph = CSVToArray(GE);
}
if (ticker === 'GIS') {
  miniGraph = CSVToArray(GIS);
}
if (ticker === 'GM') {
  miniGraph = CSVToArray(GM);
}
if (ticker === 'GPC') {
  miniGraph = CSVToArray(GPC);
}
if (ticker === 'GILD') {
  miniGraph = CSVToArray(GILD);
}
if (ticker === 'GL') {
  miniGraph = CSVToArray(GL);
}
if (ticker === 'GPN') {
  miniGraph = CSVToArray(GPN);
}
if (ticker === 'GS') {
  miniGraph = CSVToArray(GS);
}
if (ticker === 'GWW') {
  miniGraph = CSVToArray(GWW);
}
if (ticker === 'HAL') {
  miniGraph = CSVToArray(HAL);
}
if (ticker === 'HBI') {
  miniGraph = CSVToArray(HBI);
}
if (ticker === 'HIG') {
  miniGraph = CSVToArray(HIG);
}
if (ticker === 'HAS') {
  miniGraph = CSVToArray(HAS);
}
if (ticker === 'HCA') {
  miniGraph = CSVToArray(HCA);
}
if (ticker === 'PEAK') {
  miniGraph = CSVToArray(PEAK);
}
if (ticker === 'HSIC') {
  miniGraph = CSVToArray(HSIC);
}
if (ticker === 'HSY') {
  miniGraph = CSVToArray(HSY);
}
if (ticker === 'HES') {
  miniGraph = CSVToArray(HES);
}
if (ticker === 'HPE') {
  miniGraph = CSVToArray(HPE);
}
if (ticker === 'HLT') {
  miniGraph = CSVToArray(HLT);
}
if (ticker === 'HFC') {
  miniGraph = CSVToArray(HFC);
}
if (ticker === 'HOLX') {
  miniGraph = CSVToArray(HOLX);
}
if (ticker === 'HD') {
  miniGraph = CSVToArray(HD);
}
if (ticker === 'HON') {
  miniGraph = CSVToArray(HON);
}
if (ticker === 'HRL') {
  miniGraph = CSVToArray(HRL);
}
if (ticker === 'HST') {
  miniGraph = CSVToArray(HST);
}
if (ticker === 'HWM') {
  miniGraph = CSVToArray(HWM);
}
if (ticker === 'HPQ') {
  miniGraph = CSVToArray(HPQ);
}
if (ticker === 'HUM') {
  miniGraph = CSVToArray(HUM);
}
if (ticker === 'HBAN') {
  miniGraph = CSVToArray(HBAN);
}
if (ticker === 'HII') {
  miniGraph = CSVToArray(HII);
}
if (ticker === 'IEX') {
  miniGraph = CSVToArray(IEX);
}
if (ticker === 'IDXX') {
  miniGraph = CSVToArray(IDXX);
}
if (ticker === 'INFO') {
  miniGraph = CSVToArray(INFO);
}
if (ticker === 'ITW') {
  miniGraph = CSVToArray(ITW);
}
if (ticker === 'ILMN') {
  miniGraph = CSVToArray(ILMN);
}
if (ticker === 'INCY') {
  miniGraph = CSVToArray(INCY);
}
if (ticker === 'IR') {
  miniGraph = CSVToArray(IR);
}
if (ticker === 'INTC') {
  miniGraph = CSVToArray(INTC);
}
if (ticker === 'ICE') {
  miniGraph = CSVToArray(ICE);
}
if (ticker === 'IBM') {
  miniGraph = CSVToArray(IBM);
}
if (ticker === 'IP') {
  miniGraph = CSVToArray(IP);
}
if (ticker === 'IPG') {
  miniGraph = CSVToArray(IPG);
}
if (ticker === 'IFF') {
  miniGraph = CSVToArray(IFF);
}
if (ticker === 'INTU') {
  miniGraph = CSVToArray(INTU);
}
if (ticker === 'ISRG') {
  miniGraph = CSVToArray(ISRG);
}
if (ticker === 'IVZ') {
  miniGraph = CSVToArray(IVZ);
}
if (ticker === 'IPGP') {
  miniGraph = CSVToArray(IPGP);
}
if (ticker === 'IQV') {
  miniGraph = CSVToArray(IQV);
}
if (ticker === 'IRM') {
  miniGraph = CSVToArray(IRM);
}
if (ticker === 'JKHY') {
  miniGraph = CSVToArray(JKHY);
}
if (ticker === 'J') {
  miniGraph = CSVToArray(J);
}
if (ticker === 'JBHT') {
  miniGraph = CSVToArray(JBHT);
}
if (ticker === 'SJM') {
  miniGraph = CSVToArray(SJM);
}
if (ticker === 'JNJ') {
  miniGraph = CSVToArray(JNJ);
}
if (ticker === 'JCI') {
  miniGraph = CSVToArray(JCI);
}
if (ticker === 'JPM') {
  miniGraph = CSVToArray(JPM);
}
if (ticker === 'JNPR') {
  miniGraph = CSVToArray(JNPR);
}
if (ticker === 'KSU') {
  miniGraph = CSVToArray(KSU);
}
if (ticker === 'K') {
  miniGraph = CSVToArray(K);
}
if (ticker === 'KEY') {
  miniGraph = CSVToArray(KEY);
}
if (ticker === 'KEYS') {
  miniGraph = CSVToArray(KEYS);
}
if (ticker === 'KMB') {
  miniGraph = CSVToArray(KMB);
}
if (ticker === 'KIM') {
  miniGraph = CSVToArray(KIM);
}
if (ticker === 'KMI') {
  miniGraph = CSVToArray(KMI);
}
if (ticker === 'KLAC') {
  miniGraph = CSVToArray(KLAC);
}
if (ticker === 'KHC') {
  miniGraph = CSVToArray(KHC);
}
if (ticker === 'KR') {
  miniGraph = CSVToArray(KR);
}
if (ticker === 'LB') {
  miniGraph = CSVToArray(LB);
}
if (ticker === 'LHX') {
  miniGraph = CSVToArray(LHX);
}
if (ticker === 'LH') {
  miniGraph = CSVToArray(LH);
}
if (ticker === 'LRCX') {
  miniGraph = CSVToArray(LRCX);
}
if (ticker === 'LW') {
  miniGraph = CSVToArray(LW);
}
if (ticker === 'LVS') {
  miniGraph = CSVToArray(LVS);
}
if (ticker === 'LEG') {
  miniGraph = CSVToArray(LEG);
}
if (ticker === 'LDOS') {
  miniGraph = CSVToArray(LDOS);
}
if (ticker === 'LEN') {
  miniGraph = CSVToArray(LEN);
}
if (ticker === 'LLY') {
  miniGraph = CSVToArray(LLY);
}
if (ticker === 'LNC') {
  miniGraph = CSVToArray(LNC);
}
if (ticker === 'LIN') {
  miniGraph = CSVToArray(LIN);
}
if (ticker === 'LYV') {
  miniGraph = CSVToArray(LYV);
}
if (ticker === 'LKQ') {
  miniGraph = CSVToArray(LKQ);
}
if (ticker === 'LMT') {
  miniGraph = CSVToArray(LMT);
}
if (ticker === 'L') {
  miniGraph = CSVToArray(L);
}
if (ticker === 'LOW') {
  miniGraph = CSVToArray(LOW);
}
if (ticker === 'LUMN') {
  miniGraph = CSVToArray(LUMN);
}
if (ticker === 'LYB') {
  miniGraph = CSVToArray(LYB);
}
if (ticker === 'MTB') {
  miniGraph = CSVToArray(MTB);
}
if (ticker === 'MRO') {
  miniGraph = CSVToArray(MRO);
}
if (ticker === 'MPC') {
  miniGraph = CSVToArray(MPC);
}
if (ticker === 'MKTX') {
  miniGraph = CSVToArray(MKTX);
}
if (ticker === 'MAR') {
  miniGraph = CSVToArray(MAR);
}
if (ticker === 'MMC') {
  miniGraph = CSVToArray(MMC);
}
if (ticker === 'MLM') {
  miniGraph = CSVToArray(MLM);
}
if (ticker === 'MAS') {
  miniGraph = CSVToArray(MAS);
}
if (ticker === 'MA') {
  miniGraph = CSVToArray(MA);
}
if (ticker === 'MKC') {
  miniGraph = CSVToArray(MKC);
}
if (ticker === 'MXIM') {
  miniGraph = CSVToArray(MXIM);
}
if (ticker === 'MCD') {
  miniGraph = CSVToArray(MCD);
}
if (ticker === 'MCK') {
  miniGraph = CSVToArray(MCK);
}
if (ticker === 'MDT') {
  miniGraph = CSVToArray(MDT);
}
if (ticker === 'MRK') {
  miniGraph = CSVToArray(MRK);
}
if (ticker === 'MET') {
  miniGraph = CSVToArray(MET);
}
if (ticker === 'MTD') {
  miniGraph = CSVToArray(MTD);
}
if (ticker === 'MGM') {
  miniGraph = CSVToArray(MGM);
}
if (ticker === 'MCHP') {
  miniGraph = CSVToArray(MCHP);
}
if (ticker === 'MU') {
  miniGraph = CSVToArray(MU);
}
if (ticker === 'MSFT') {
  miniGraph = CSVToArray(MSFT);
}
if (ticker === 'MAA') {
  miniGraph = CSVToArray(MAA);
}
if (ticker === 'MHK') {
  miniGraph = CSVToArray(MHK);
}
if (ticker === 'TAP') {
  miniGraph = CSVToArray(TAP);
}
if (ticker === 'MDLZ') {
  miniGraph = CSVToArray(MDLZ);
}
if (ticker === 'MPWR') {
  miniGraph = CSVToArray(MPWR);
}
if (ticker === 'MNST') {
  miniGraph = CSVToArray(MNST);
}
if (ticker === 'MCO') {
  miniGraph = CSVToArray(MCO);
}
if (ticker === 'MS') {
  miniGraph = CSVToArray(MS);
}
if (ticker === 'MOS') {
  miniGraph = CSVToArray(MOS);
}
if (ticker === 'MSI') {
  miniGraph = CSVToArray(MSI);
}
if (ticker === 'MSCI') {
  miniGraph = CSVToArray(MSCI);
}
if (ticker === 'NDAQ') {
  miniGraph = CSVToArray(NDAQ);
}
if (ticker === 'NTAP') {
  miniGraph = CSVToArray(NTAP);
}
if (ticker === 'NFLX') {
  miniGraph = CSVToArray(NFLX);
}
if (ticker === 'NWL') {
  miniGraph = CSVToArray(NWL);
}
if (ticker === 'NEM') {
  miniGraph = CSVToArray(NEM);
}
if (ticker === 'NWSA') {
  miniGraph = CSVToArray(NWSA);
}
if (ticker === 'NWS') {
  miniGraph = CSVToArray(NWS);
}
if (ticker === 'NEE') {
  miniGraph = CSVToArray(NEE);
}
if (ticker === 'NLSN') {
  miniGraph = CSVToArray(NLSN);
}
if (ticker === 'NKE') {
  miniGraph = CSVToArray(NKE);
}
if (ticker === 'NI') {
  miniGraph = CSVToArray(NI);
}
if (ticker === 'NSC') {
  miniGraph = CSVToArray(NSC);
}
if (ticker === 'NTRS') {
  miniGraph = CSVToArray(NTRS);
}
if (ticker === 'NOC') {
  miniGraph = CSVToArray(NOC);
}
if (ticker === 'NLOK') {
  miniGraph = CSVToArray(NLOK);
}
if (ticker === 'NCLH') {
  miniGraph = CSVToArray(NCLH);
}
if (ticker === 'NOV') {
  miniGraph = CSVToArray(NOV);
}
if (ticker === 'NRG') {
  miniGraph = CSVToArray(NRG);
}
if (ticker === 'NUE') {
  miniGraph = CSVToArray(NUE);
}
if (ticker === 'NVDA') {
  miniGraph = CSVToArray(NVDA);
}
if (ticker === 'NVR') {
  miniGraph = CSVToArray(NVR);
}
if (ticker === 'ORLY') {
  miniGraph = CSVToArray(ORLY);
}
if (ticker === 'OXY') {
  miniGraph = CSVToArray(OXY);
}
if (ticker === 'ODFL') {
  miniGraph = CSVToArray(ODFL);
}
if (ticker === 'OMC') {
  miniGraph = CSVToArray(OMC);
}
if (ticker === 'OKE') {
  miniGraph = CSVToArray(OKE);
}
if (ticker === 'ORCL') {
  miniGraph = CSVToArray(ORCL);
}
if (ticker === 'OTIS') {
  miniGraph = CSVToArray(OTIS);
}
if (ticker === 'PCAR') {
  miniGraph = CSVToArray(PCAR);
}
if (ticker === 'PKG') {
  miniGraph = CSVToArray(PKG);
}
if (ticker === 'PH') {
  miniGraph = CSVToArray(PH);
}
if (ticker === 'PAYX') {
  miniGraph = CSVToArray(PAYX);
}
if (ticker === 'PAYC') {
  miniGraph = CSVToArray(PAYC);
}
if (ticker === 'PYPL') {
  miniGraph = CSVToArray(PYPL);
}
if (ticker === 'PNR') {
  miniGraph = CSVToArray(PNR);
}
if (ticker === 'PBCT') {
  miniGraph = CSVToArray(PBCT);
}
if (ticker === 'PEP') {
  miniGraph = CSVToArray(PEP);
}
if (ticker === 'PKI') {
  miniGraph = CSVToArray(PKI);
}
if (ticker === 'PRGO') {
  miniGraph = CSVToArray(PRGO);
}
if (ticker === 'PFE') {
  miniGraph = CSVToArray(PFE);
}
if (ticker === 'PM') {
  miniGraph = CSVToArray(PM);
}
if (ticker === 'PSX') {
  miniGraph = CSVToArray(PSX);
}
if (ticker === 'PNW') {
  miniGraph = CSVToArray(PNW);
}
if (ticker === 'PXD') {
  miniGraph = CSVToArray(PXD);
}
if (ticker === 'PNC') {
  miniGraph = CSVToArray(PNC);
}
if (ticker === 'POOL') {
  miniGraph = CSVToArray(POOL);
}
if (ticker === 'PPG') {
  miniGraph = CSVToArray(PPG);
}
if (ticker === 'PPL') {
  miniGraph = CSVToArray(PPL);
}
if (ticker === 'PFG') {
  miniGraph = CSVToArray(PFG);
}
if (ticker === 'PG') {
  miniGraph = CSVToArray(PG);
}
if (ticker === 'PGR') {
  miniGraph = CSVToArray(PGR);
}
if (ticker === 'PLD') {
  miniGraph = CSVToArray(PLD);
}
if (ticker === 'PRU') {
  miniGraph = CSVToArray(PRU);
}
if (ticker === 'PEG') {
  miniGraph = CSVToArray(PEG);
}
if (ticker === 'PSA') {
  miniGraph = CSVToArray(PSA);
}
if (ticker === 'PHM') {
  miniGraph = CSVToArray(PHM);
}
if (ticker === 'PVH') {
  miniGraph = CSVToArray(PVH);
}
if (ticker === 'QRVO') {
  miniGraph = CSVToArray(QRVO);
}
if (ticker === 'PWR') {
  miniGraph = CSVToArray(PWR);
}
if (ticker === 'QCOM') {
  miniGraph = CSVToArray(QCOM);
}
if (ticker === 'DGX') {
  miniGraph = CSVToArray(DGX);
}
if (ticker === 'RL') {
  miniGraph = CSVToArray(RL);
}
if (ticker === 'RJF') {
  miniGraph = CSVToArray(RJF);
}
if (ticker === 'RTX') {
  miniGraph = CSVToArray(RTX);
}
if (ticker === 'O') {
  miniGraph = CSVToArray(O);
}
if (ticker === 'REG') {
  miniGraph = CSVToArray(REG);
}
if (ticker === 'REGN') {
  miniGraph = CSVToArray(REGN);
}
if (ticker === 'RF') {
  miniGraph = CSVToArray(RF);
}
if (ticker === 'RSG') {
  miniGraph = CSVToArray(RSG);
}
if (ticker === 'RMD') {
  miniGraph = CSVToArray(RMD);
}
if (ticker === 'RHI') {
  miniGraph = CSVToArray(RHI);
}
if (ticker === 'ROK') {
  miniGraph = CSVToArray(ROK);
}
if (ticker === 'ROL') {
  miniGraph = CSVToArray(ROL);
}
if (ticker === 'ROP') {
  miniGraph = CSVToArray(ROP);
}
if (ticker === 'ROST') {
  miniGraph = CSVToArray(ROST);
}
if (ticker === 'RCL') {
  miniGraph = CSVToArray(RCL);
}
if (ticker === 'SPGI') {
  miniGraph = CSVToArray(SPGI);
}
if (ticker === 'CRM') {
  miniGraph = CSVToArray(CRM);
}
if (ticker === 'SBAC') {
  miniGraph = CSVToArray(SBAC);
}
if (ticker === 'SLB') {
  miniGraph = CSVToArray(SLB);
}
if (ticker === 'STX') {
  miniGraph = CSVToArray(STX);
}
if (ticker === 'SEE') {
  miniGraph = CSVToArray(SEE);
}
if (ticker === 'SRE') {
  miniGraph = CSVToArray(SRE);
}
if (ticker === 'NOW') {
  miniGraph = CSVToArray(NOW);
}
if (ticker === 'SHW') {
  miniGraph = CSVToArray(SHW);
}
if (ticker === 'SPG') {
  miniGraph = CSVToArray(SPG);
}
if (ticker === 'SWKS') {
  miniGraph = CSVToArray(SWKS);
}
if (ticker === 'SLG') {
  miniGraph = CSVToArray(SLG);
}
if (ticker === 'SNA') {
  miniGraph = CSVToArray(SNA);
}
if (ticker === 'SO') {
  miniGraph = CSVToArray(SO);
}
if (ticker === 'LUV') {
  miniGraph = CSVToArray(LUV);
}
if (ticker === 'SWK') {
  miniGraph = CSVToArray(SWK);
}
if (ticker === 'SBUX') {
  miniGraph = CSVToArray(SBUX);
}
if (ticker === 'STT') {
  miniGraph = CSVToArray(STT);
}
if (ticker === 'STE') {
  miniGraph = CSVToArray(STE);
}
if (ticker === 'SYK') {
  miniGraph = CSVToArray(SYK);
}
if (ticker === 'SIVB') {
  miniGraph = CSVToArray(SIVB);
}
if (ticker === 'SYF') {
  miniGraph = CSVToArray(SYF);
}
if (ticker === 'SNPS') {
  miniGraph = CSVToArray(SNPS);
}
if (ticker === 'SYY') {
  miniGraph = CSVToArray(SYY);
}
if (ticker === 'TMUS') {
  miniGraph = CSVToArray(TMUS);
}
if (ticker === 'TROW') {
  miniGraph = CSVToArray(TROW);
}
if (ticker === 'TTWO') {
  miniGraph = CSVToArray(TTWO);
}
if (ticker === 'TPR') {
  miniGraph = CSVToArray(TPR);
}
if (ticker === 'TGT') {
  miniGraph = CSVToArray(TGT);
}
if (ticker === 'TEL') {
  miniGraph = CSVToArray(TEL);
}
if (ticker === 'TDY') {
  miniGraph = CSVToArray(TDY);
}
if (ticker === 'TFX') {
  miniGraph = CSVToArray(TFX);
}
if (ticker === 'TER') {
  miniGraph = CSVToArray(TER);
}
if (ticker === 'TSLA') {
  miniGraph = CSVToArray(TSLA);
}
if (ticker === 'TXN') {
  miniGraph = CSVToArray(TXN);
}
if (ticker === 'TXT') {
  miniGraph = CSVToArray(TXT);
}
if (ticker === 'TMO') {
  miniGraph = CSVToArray(TMO);
}
if (ticker === 'TJX') {
  miniGraph = CSVToArray(TJX);
}
if (ticker === 'TSCO') {
  miniGraph = CSVToArray(TSCO);
}
if (ticker === 'TT') {
  miniGraph = CSVToArray(TT);
}
if (ticker === 'TDG') {
  miniGraph = CSVToArray(TDG);
}
if (ticker === 'TRV') {
  miniGraph = CSVToArray(TRV);
}
if (ticker === 'TRMB') {
  miniGraph = CSVToArray(TRMB);
}
if (ticker === 'TFC') {
  miniGraph = CSVToArray(TFC);
}
if (ticker === 'TWTR') {
  miniGraph = CSVToArray(TWTR);
}
if (ticker === 'TYL') {
  miniGraph = CSVToArray(TYL);
}
if (ticker === 'TSN') {
  miniGraph = CSVToArray(TSN);
}
if (ticker === 'UDR') {
  miniGraph = CSVToArray(UDR);
}
if (ticker === 'ULTA') {
  miniGraph = CSVToArray(ULTA);
}
if (ticker === 'USB') {
  miniGraph = CSVToArray(USB);
}
if (ticker === 'UAA') {
  miniGraph = CSVToArray(UAA);
}
if (ticker === 'UA') {
  miniGraph = CSVToArray(UA);
}
if (ticker === 'UNP') {
  miniGraph = CSVToArray(UNP);
}
if (ticker === 'UAL') {
  miniGraph = CSVToArray(UAL);
}
if (ticker === 'UNH') {
  miniGraph = CSVToArray(UNH);
}
if (ticker === 'UPS') {
  miniGraph = CSVToArray(UPS);
}
if (ticker === 'URI') {
  miniGraph = CSVToArray(URI);
}
if (ticker === 'UHS') {
  miniGraph = CSVToArray(UHS);
}
if (ticker === 'UNM') {
  miniGraph = CSVToArray(UNM);
}
if (ticker === 'VLO') {
  miniGraph = CSVToArray(VLO);
}
if (ticker === 'VAR') {
  miniGraph = CSVToArray(VAR);
}
if (ticker === 'VTR') {
  miniGraph = CSVToArray(VTR);
}
if (ticker === 'VRSN') {
  miniGraph = CSVToArray(VRSN);
}
if (ticker === 'VRSK') {
  miniGraph = CSVToArray(VRSK);
}
if (ticker === 'VZ') {
  miniGraph = CSVToArray(VZ);
}
if (ticker === 'VRTX') {
  miniGraph = CSVToArray(VRTX);
}
if (ticker === 'VFC') {
  miniGraph = CSVToArray(VFC);
}
if (ticker === 'VIAC') {
  miniGraph = CSVToArray(VIAC);
}
if (ticker === 'VTRS') {
  miniGraph = CSVToArray(VTRS);
}
if (ticker === 'V') {
  miniGraph = CSVToArray(V);
}
if (ticker === 'VNT') {
  miniGraph = CSVToArray(VNT);
}
if (ticker === 'VNO') {
  miniGraph = CSVToArray(VNO);
}
if (ticker === 'VMC') {
  miniGraph = CSVToArray(VMC);
}
if (ticker === 'WRB') {
  miniGraph = CSVToArray(WRB);
}
if (ticker === 'WAB') {
  miniGraph = CSVToArray(WAB);
}
if (ticker === 'WMT') {
  miniGraph = CSVToArray(WMT);
}
if (ticker === 'WBA') {
  miniGraph = CSVToArray(WBA);
}
if (ticker === 'DIS') {
  miniGraph = CSVToArray(DIS);
}
if (ticker === 'WM') {
  miniGraph = CSVToArray(WM);
}
if (ticker === 'WAT') {
  miniGraph = CSVToArray(WAT);
}
if (ticker === 'WEC') {
  miniGraph = CSVToArray(WEC);
}
if (ticker === 'WFC') {
  miniGraph = CSVToArray(WFC);
}
if (ticker === 'WELL') {
  miniGraph = CSVToArray(WELL);
}
if (ticker === 'WST') {
  miniGraph = CSVToArray(WST);
}
if (ticker === 'WDC') {
  miniGraph = CSVToArray(WDC);
}
if (ticker === 'WU') {
  miniGraph = CSVToArray(WU);
}
if (ticker === 'WRK') {
  miniGraph = CSVToArray(WRK);
}
if (ticker === 'WY') {
  miniGraph = CSVToArray(WY);
}
if (ticker === 'WHR') {
  miniGraph = CSVToArray(WHR);
}
if (ticker === 'WMB') {
  miniGraph = CSVToArray(WMB);
}
if (ticker === 'WLTW') {
  miniGraph = CSVToArray(WLTW);
}
if (ticker === 'WYNN') {
  miniGraph = CSVToArray(WYNN);
}
if (ticker === 'XEL') {
  miniGraph = CSVToArray(XEL);
}
if (ticker === 'XRX') {
  miniGraph = CSVToArray(XRX);
}
if (ticker === 'XLNX') {
  miniGraph = CSVToArray(XLNX);
}
if (ticker === 'XYL') {
  miniGraph = CSVToArray(XYL);
}
if (ticker === 'YUM') {
  miniGraph = CSVToArray(YUM);
}
if (ticker === 'ZBRA') {
  miniGraph = CSVToArray(ZBRA);
}
if (ticker === 'ZBH') {
  miniGraph = CSVToArray(ZBH);
}
if (ticker === 'ZION') {
  miniGraph = CSVToArray(ZION);
}
if (ticker === 'ZTS') {
  miniGraph = CSVToArray(ZTS);
}

const MiniGraph = () => {
  return (
    <h1>{ticker}</h1>
     <h1>Current Price: {miniGraph[miniGraph.length - 1]}</h1>
    <VictoryChart width='600' height='300'>
    <VictoryLine data={miniGraph} x='Date' y='Price' />
    </VictoryChart>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<MiniGraph />, rootElement);
