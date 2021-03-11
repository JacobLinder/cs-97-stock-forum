import React from "react";
import { VictoryLine, VictoryChart, VictoryPie } from 'victory';
import "./functions/stock-interactions.js";
import Button from "@material-ui/core/Button";
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
import BRKB from "./1y_data/BRK.B.csv";
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
import BFB from "./1y_data/BF.B.csv";
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

var miniGraph = CSVToArray(MMM);

class MiniGraph extends React.Component {
  constructor() {
    super();
  }

  render () {
    var stockSentiment = getSentimentHistory(this.props.ticker);
    if (this.props.ticker === 'MMM') {
      miniGraph = CSVToArray(MMM);
    }
    if (this.props.ticker === 'ABT') {
      miniGraph = CSVToArray(ABT);
    }
    if (this.props.ticker === 'ABBV') {
      miniGraph = CSVToArray(ABBV);
    }
    if (this.props.ticker === 'ABMD') {
      miniGraph = CSVToArray(ABMD);
    }
    if (this.props.ticker === 'ACN') {
      miniGraph = CSVToArray(ACN);
    }
    if (this.props.ticker === 'ATVI') {
      miniGraph = CSVToArray(ATVI);
    }
    if (this.props.ticker === 'ADBE') {
      miniGraph = CSVToArray(ADBE);
    }
    if (this.props.ticker === 'AMD') {
      miniGraph = CSVToArray(AMD);
    }
    if (this.props.ticker === 'AAP') {
      miniGraph = CSVToArray(AAP);
    }
    if (this.props.ticker === 'AES') {
      miniGraph = CSVToArray(AES);
    }
    if (this.props.ticker === 'AFL') {
      miniGraph = CSVToArray(AFL);
    }
    if (this.props.ticker === 'A') {
      miniGraph = CSVToArray(A);
    }
    if (this.props.ticker === 'APD') {
      miniGraph = CSVToArray(APD);
    }
    if (this.props.ticker === 'AKAM') {
      miniGraph = CSVToArray(AKAM);
    }
    if (this.props.ticker === 'ALK') {
      miniGraph = CSVToArray(ALK);
    }
    if (this.props.ticker === 'ALB') {
      miniGraph = CSVToArray(ALB);
    }
    if (this.props.ticker === 'ARE') {
      miniGraph = CSVToArray(ARE);
    }
    if (this.props.ticker === 'ALXN') {
      miniGraph = CSVToArray(ALXN);
    }
    if (this.props.ticker === 'ALGN') {
      miniGraph = CSVToArray(ALGN);
    }
    if (this.props.ticker === 'ALLE') {
      miniGraph = CSVToArray(ALLE);
    }
    if (this.props.ticker === 'LNT') {
      miniGraph = CSVToArray(LNT);
    }
    if (this.props.ticker === 'ALL') {
      miniGraph = CSVToArray(ALL);
    }
    if (this.props.ticker === 'GOOGL') {
      miniGraph = CSVToArray(GOOGL);
    }
    if (this.props.ticker === 'GOOG') {
      miniGraph = CSVToArray(GOOG);
    }
    if (this.props.ticker === 'MO') {
      miniGraph = CSVToArray(MO);
    }
    if (this.props.ticker === 'AMZN') {
      miniGraph = CSVToArray(AMZN);
    }
    if (this.props.ticker === 'AMCR') {
      miniGraph = CSVToArray(AMCR);
    }
    if (this.props.ticker === 'AEE') {
      miniGraph = CSVToArray(AEE);
    }
    if (this.props.ticker === 'AAL') {
      miniGraph = CSVToArray(AAL);
    }
    if (this.props.ticker === 'AEP') {
      miniGraph = CSVToArray(AEP);
    }
    if (this.props.ticker === 'AXP') {
      miniGraph = CSVToArray(AXP);
    }
    if (this.props.ticker === 'AIG') {
      miniGraph = CSVToArray(AIG);
    }
    if (this.props.ticker === 'AMT') {
      miniGraph = CSVToArray(AMT);
    }
    if (this.props.ticker === 'AWK') {
      miniGraph = CSVToArray(AWK);
    }
    if (this.props.ticker === 'AMP') {
      miniGraph = CSVToArray(AMP);
    }
    if (this.props.ticker === 'ABC') {
      miniGraph = CSVToArray(ABC);
    }
    if (this.props.ticker === 'AME') {
      miniGraph = CSVToArray(AME);
    }
    if (this.props.ticker === 'AMGN') {
      miniGraph = CSVToArray(AMGN);
    }
    if (this.props.ticker === 'APH') {
      miniGraph = CSVToArray(APH);
    }
    if (this.props.ticker === 'ADI') {
      miniGraph = CSVToArray(ADI);
    }
    if (this.props.ticker === 'ANSS') {
      miniGraph = CSVToArray(ANSS);
    }
    if (this.props.ticker === 'ANTM') {
      miniGraph = CSVToArray(ANTM);
    }
    if (this.props.ticker === 'AON') {
      miniGraph = CSVToArray(AON);
    }
    if (this.props.ticker === 'AOS') {
      miniGraph = CSVToArray(AOS);
    }
    if (this.props.ticker === 'APA') {
      miniGraph = CSVToArray(APA);
    }
    if (this.props.ticker === 'AAPL') {
      miniGraph = CSVToArray(AAPL);
    }
    if (this.props.ticker === 'AMAT') {
      miniGraph = CSVToArray(AMAT);
    }
    if (this.props.ticker === 'APTV') {
      miniGraph = CSVToArray(APTV);
    }
    if (this.props.ticker === 'ADM') {
      miniGraph = CSVToArray(ADM);
    }
    if (this.props.ticker === 'ANET') {
      miniGraph = CSVToArray(ANET);
    }
    if (this.props.ticker === 'AJG') {
      miniGraph = CSVToArray(AJG);
    }
    if (this.props.ticker === 'AIZ') {
      miniGraph = CSVToArray(AIZ);
    }
    if (this.props.ticker === 'T') {
      miniGraph = CSVToArray(T);
    }
    if (this.props.ticker === 'ATO') {
      miniGraph = CSVToArray(ATO);
    }
    if (this.props.ticker === 'ADSK') {
      miniGraph = CSVToArray(ADSK);
    }
    if (this.props.ticker === 'ADP') {
      miniGraph = CSVToArray(ADP);
    }
    if (this.props.ticker === 'AZO') {
      miniGraph = CSVToArray(AZO);
    }
    if (this.props.ticker === 'AVB') {
      miniGraph = CSVToArray(AVB);
    }
    if (this.props.ticker === 'AVY') {
      miniGraph = CSVToArray(AVY);
    }
    if (this.props.ticker === 'BKR') {
      miniGraph = CSVToArray(BKR);
    }
    if (this.props.ticker === 'BLL') {
      miniGraph = CSVToArray(BLL);
    }
    if (this.props.ticker === 'BAC') {
      miniGraph = CSVToArray(BAC);
    }
    if (this.props.ticker === 'BK') {
      miniGraph = CSVToArray(BK);
    }
    if (this.props.ticker === 'BAX') {
      miniGraph = CSVToArray(BAX);
    }
    if (this.props.ticker === 'BDX') {
      miniGraph = CSVToArray(BDX);
    }
    if (this.props.ticker === 'BRK.B') {
      miniGraph = CSVToArray(BRK.B);
    }
    if (this.props.ticker === 'BBY') {
      miniGraph = CSVToArray(BBY);
    }
    if (this.props.ticker === 'BIO') {
      miniGraph = CSVToArray(BIO);
    }
    if (this.props.ticker === 'BIIB') {
      miniGraph = CSVToArray(BIIB);
    }
    if (this.props.ticker === 'BLK') {
      miniGraph = CSVToArray(BLK);
    }
    if (this.props.ticker === 'BA') {
      miniGraph = CSVToArray(BA);
    }
    if (this.props.ticker === 'BKNG') {
      miniGraph = CSVToArray(BKNG);
    }
    if (this.props.ticker === 'BWA') {
      miniGraph = CSVToArray(BWA);
    }
    if (this.props.ticker === 'BXP') {
      miniGraph = CSVToArray(BXP);
    }
    if (this.props.ticker === 'BSX') {
      miniGraph = CSVToArray(BSX);
    }
    if (this.props.ticker === 'BMY') {
      miniGraph = CSVToArray(BMY);
    }
    if (this.props.ticker === 'AVGO') {
      miniGraph = CSVToArray(AVGO);
    }
    if (this.props.ticker === 'BR') {
      miniGraph = CSVToArray(BR);
    }
    if (this.props.ticker === 'BF.B') {
      miniGraph = CSVToArray(BF.B);
    }
    if (this.props.ticker === 'CHRW') {
      miniGraph = CSVToArray(CHRW);
    }
    if (this.props.ticker === 'COG') {
      miniGraph = CSVToArray(COG);
    }
    if (this.props.ticker === 'CDNS') {
      miniGraph = CSVToArray(CDNS);
    }
    if (this.props.ticker === 'CPB') {
      miniGraph = CSVToArray(CPB);
    }
    if (this.props.ticker === 'COF') {
      miniGraph = CSVToArray(COF);
    }
    if (this.props.ticker === 'CAH') {
      miniGraph = CSVToArray(CAH);
    }
    if (this.props.ticker === 'KMX') {
      miniGraph = CSVToArray(KMX);
    }
    if (this.props.ticker === 'CCL') {
      miniGraph = CSVToArray(CCL);
    }
    if (this.props.ticker === 'CARR') {
      miniGraph = CSVToArray(CARR);
    }
    if (this.props.ticker === 'CTLT') {
      miniGraph = CSVToArray(CTLT);
    }
    if (this.props.ticker === 'CAT') {
      miniGraph = CSVToArray(CAT);
    }
    if (this.props.ticker === 'CBOE') {
      miniGraph = CSVToArray(CBOE);
    }
    if (this.props.ticker === 'CBRE') {
      miniGraph = CSVToArray(CBRE);
    }
    if (this.props.ticker === 'CDW') {
      miniGraph = CSVToArray(CDW);
    }
    if (this.props.ticker === 'CE') {
      miniGraph = CSVToArray(CE);
    }
    if (this.props.ticker === 'CNC') {
      miniGraph = CSVToArray(CNC);
    }
    if (this.props.ticker === 'CNP') {
      miniGraph = CSVToArray(CNP);
    }
    if (this.props.ticker === 'CERN') {
      miniGraph = CSVToArray(CERN);
    }
    if (this.props.ticker === 'CF') {
      miniGraph = CSVToArray(CF);
    }
    if (this.props.ticker === 'SCHW') {
      miniGraph = CSVToArray(SCHW);
    }
    if (this.props.ticker === 'CHTR') {
      miniGraph = CSVToArray(CHTR);
    }
    if (this.props.ticker === 'CVX') {
      miniGraph = CSVToArray(CVX);
    }
    if (this.props.ticker === 'CMG') {
      miniGraph = CSVToArray(CMG);
    }
    if (this.props.ticker === 'CB') {
      miniGraph = CSVToArray(CB);
    }
    if (this.props.ticker === 'CHD') {
      miniGraph = CSVToArray(CHD);
    }
    if (this.props.ticker === 'CI') {
      miniGraph = CSVToArray(CI);
    }
    if (this.props.ticker === 'CINF') {
      miniGraph = CSVToArray(CINF);
    }
    if (this.props.ticker === 'CTAS') {
      miniGraph = CSVToArray(CTAS);
    }
    if (this.props.ticker === 'CSCO') {
      miniGraph = CSVToArray(CSCO);
    }
    if (this.props.ticker === 'C') {
      miniGraph = CSVToArray(C);
    }
    if (this.props.ticker === 'CFG') {
      miniGraph = CSVToArray(CFG);
    }
    if (this.props.ticker === 'CTXS') {
      miniGraph = CSVToArray(CTXS);
    }
    if (this.props.ticker === 'CLX') {
      miniGraph = CSVToArray(CLX);
    }
    if (this.props.ticker === 'CME') {
      miniGraph = CSVToArray(CME);
    }
    if (this.props.ticker === 'CMS') {
      miniGraph = CSVToArray(CMS);
    }
    if (this.props.ticker === 'KO') {
      miniGraph = CSVToArray(KO);
    }
    if (this.props.ticker === 'CTSH') {
      miniGraph = CSVToArray(CTSH);
    }
    if (this.props.ticker === 'CL') {
      miniGraph = CSVToArray(CL);
    }
    if (this.props.ticker === 'CMCSA') {
      miniGraph = CSVToArray(CMCSA);
    }
    if (this.props.ticker === 'CMA') {
      miniGraph = CSVToArray(CMA);
    }
    if (this.props.ticker === 'CAG') {
      miniGraph = CSVToArray(CAG);
    }
    if (this.props.ticker === 'COP') {
      miniGraph = CSVToArray(COP);
    }
    if (this.props.ticker === 'ED') {
      miniGraph = CSVToArray(ED);
    }
    if (this.props.ticker === 'STZ') {
      miniGraph = CSVToArray(STZ);
    }
    if (this.props.ticker === 'COO') {
      miniGraph = CSVToArray(COO);
    }
    if (this.props.ticker === 'CPRT') {
      miniGraph = CSVToArray(CPRT);
    }
    if (this.props.ticker === 'GLW') {
      miniGraph = CSVToArray(GLW);
    }
    if (this.props.ticker === 'CTVA') {
      miniGraph = CSVToArray(CTVA);
    }
    if (this.props.ticker === 'COST') {
      miniGraph = CSVToArray(COST);
    }
    if (this.props.ticker === 'CCI') {
      miniGraph = CSVToArray(CCI);
    }
    if (this.props.ticker === 'CSX') {
      miniGraph = CSVToArray(CSX);
    }
    if (this.props.ticker === 'CMI') {
      miniGraph = CSVToArray(CMI);
    }
    if (this.props.ticker === 'CVS') {
      miniGraph = CSVToArray(CVS);
    }
    if (this.props.ticker === 'DHI') {
      miniGraph = CSVToArray(DHI);
    }
    if (this.props.ticker === 'DHR') {
      miniGraph = CSVToArray(DHR);
    }
    if (this.props.ticker === 'DRI') {
      miniGraph = CSVToArray(DRI);
    }
    if (this.props.ticker === 'DVA') {
      miniGraph = CSVToArray(DVA);
    }
    if (this.props.ticker === 'DE') {
      miniGraph = CSVToArray(DE);
    }
    if (this.props.ticker === 'DAL') {
      miniGraph = CSVToArray(DAL);
    }
    if (this.props.ticker === 'XRAY') {
      miniGraph = CSVToArray(XRAY);
    }
    if (this.props.ticker === 'DVN') {
      miniGraph = CSVToArray(DVN);
    }
    if (this.props.ticker === 'DXCM') {
      miniGraph = CSVToArray(DXCM);
    }
    if (this.props.ticker === 'FANG') {
      miniGraph = CSVToArray(FANG);
    }
    if (this.props.ticker === 'DLR') {
      miniGraph = CSVToArray(DLR);
    }
    if (this.props.ticker === 'DFS') {
      miniGraph = CSVToArray(DFS);
    }
    if (this.props.ticker === 'DISCA') {
      miniGraph = CSVToArray(DISCA);
    }
    if (this.props.ticker === 'DISCK') {
      miniGraph = CSVToArray(DISCK);
    }
    if (this.props.ticker === 'DISH') {
      miniGraph = CSVToArray(DISH);
    }
    if (this.props.ticker === 'DG') {
      miniGraph = CSVToArray(DG);
    }
    if (this.props.ticker === 'DLTR') {
      miniGraph = CSVToArray(DLTR);
    }
    if (this.props.ticker === 'D') {
      miniGraph = CSVToArray(D);
    }
    if (this.props.ticker === 'DPZ') {
      miniGraph = CSVToArray(DPZ);
    }
    if (this.props.ticker === 'DOV') {
      miniGraph = CSVToArray(DOV);
    }
    if (this.props.ticker === 'DOW') {
      miniGraph = CSVToArray(DOW);
    }
    if (this.props.ticker === 'DTE') {
      miniGraph = CSVToArray(DTE);
    }
    if (this.props.ticker === 'DUK') {
      miniGraph = CSVToArray(DUK);
    }
    if (this.props.ticker === 'DRE') {
      miniGraph = CSVToArray(DRE);
    }
    if (this.props.ticker === 'DD') {
      miniGraph = CSVToArray(DD);
    }
    if (this.props.ticker === 'DXC') {
      miniGraph = CSVToArray(DXC);
    }
    if (this.props.ticker === 'EMN') {
      miniGraph = CSVToArray(EMN);
    }
    if (this.props.ticker === 'ETN') {
      miniGraph = CSVToArray(ETN);
    }
    if (this.props.ticker === 'EBAY') {
      miniGraph = CSVToArray(EBAY);
    }
    if (this.props.ticker === 'ECL') {
      miniGraph = CSVToArray(ECL);
    }
    if (this.props.ticker === 'EIX') {
      miniGraph = CSVToArray(EIX);
    }
    if (this.props.ticker === 'EW') {
      miniGraph = CSVToArray(EW);
    }
    if (this.props.ticker === 'EA') {
      miniGraph = CSVToArray(EA);
    }
    if (this.props.ticker === 'EMR') {
      miniGraph = CSVToArray(EMR);
    }
    if (this.props.ticker === 'ENPH') {
      miniGraph = CSVToArray(ENPH);
    }
    if (this.props.ticker === 'ETR') {
      miniGraph = CSVToArray(ETR);
    }
    if (this.props.ticker === 'EOG') {
      miniGraph = CSVToArray(EOG);
    }
    if (this.props.ticker === 'EFX') {
      miniGraph = CSVToArray(EFX);
    }
    if (this.props.ticker === 'EQIX') {
      miniGraph = CSVToArray(EQIX);
    }
    if (this.props.ticker === 'EQR') {
      miniGraph = CSVToArray(EQR);
    }
    if (this.props.ticker === 'ESS') {
      miniGraph = CSVToArray(ESS);
    }
    if (this.props.ticker === 'EL') {
      miniGraph = CSVToArray(EL);
    }
    if (this.props.ticker === 'ETSY') {
      miniGraph = CSVToArray(ETSY);
    }
    if (this.props.ticker === 'EVRG') {
      miniGraph = CSVToArray(EVRG);
    }
    if (this.props.ticker === 'ES') {
      miniGraph = CSVToArray(ES);
    }
    if (this.props.ticker === 'RE') {
      miniGraph = CSVToArray(RE);
    }
    if (this.props.ticker === 'EXC') {
      miniGraph = CSVToArray(EXC);
    }
    if (this.props.ticker === 'EXPE') {
      miniGraph = CSVToArray(EXPE);
    }
    if (this.props.ticker === 'EXPD') {
      miniGraph = CSVToArray(EXPD);
    }
    if (this.props.ticker === 'EXR') {
      miniGraph = CSVToArray(EXR);
    }
    if (this.props.ticker === 'XOM') {
      miniGraph = CSVToArray(XOM);
    }
    if (this.props.ticker === 'FFIV') {
      miniGraph = CSVToArray(FFIV);
    }
    if (this.props.ticker === 'FB') {
      miniGraph = CSVToArray(FB);
    }
    if (this.props.ticker === 'FAST') {
      miniGraph = CSVToArray(FAST);
    }
    if (this.props.ticker === 'FRT') {
      miniGraph = CSVToArray(FRT);
    }
    if (this.props.ticker === 'FDX') {
      miniGraph = CSVToArray(FDX);
    }
    if (this.props.ticker === 'FIS') {
      miniGraph = CSVToArray(FIS);
    }
    if (this.props.ticker === 'FITB') {
      miniGraph = CSVToArray(FITB);
    }
    if (this.props.ticker === 'FE') {
      miniGraph = CSVToArray(FE);
    }
    if (this.props.ticker === 'FRC') {
      miniGraph = CSVToArray(FRC);
    }
    if (this.props.ticker === 'FISV') {
      miniGraph = CSVToArray(FISV);
    }
    if (this.props.ticker === 'FLT') {
      miniGraph = CSVToArray(FLT);
    }
    if (this.props.ticker === 'FLIR') {
      miniGraph = CSVToArray(FLIR);
    }
    if (this.props.ticker === 'FLS') {
      miniGraph = CSVToArray(FLS);
    }
    if (this.props.ticker === 'FMC') {
      miniGraph = CSVToArray(FMC);
    }
    if (this.props.ticker === 'F') {
      miniGraph = CSVToArray(F);
    }
    if (this.props.ticker === 'FTNT') {
      miniGraph = CSVToArray(FTNT);
    }
    if (this.props.ticker === 'FTV') {
      miniGraph = CSVToArray(FTV);
    }
    if (this.props.ticker === 'FBHS') {
      miniGraph = CSVToArray(FBHS);
    }
    if (this.props.ticker === 'FOXA') {
      miniGraph = CSVToArray(FOXA);
    }
    if (this.props.ticker === 'FOX') {
      miniGraph = CSVToArray(FOX);
    }
    if (this.props.ticker === 'BEN') {
      miniGraph = CSVToArray(BEN);
    }
    if (this.props.ticker === 'FCX') {
      miniGraph = CSVToArray(FCX);
    }
    if (this.props.ticker === 'GPS') {
      miniGraph = CSVToArray(GPS);
    }
    if (this.props.ticker === 'GRMN') {
      miniGraph = CSVToArray(GRMN);
    }
    if (this.props.ticker === 'IT') {
      miniGraph = CSVToArray(IT);
    }
    if (this.props.ticker === 'GD') {
      miniGraph = CSVToArray(GD);
    }
    if (this.props.ticker === 'GE') {
      miniGraph = CSVToArray(GE);
    }
    if (this.props.ticker === 'GIS') {
      miniGraph = CSVToArray(GIS);
    }
    if (this.props.ticker === 'GM') {
      miniGraph = CSVToArray(GM);
    }
    if (this.props.ticker === 'GPC') {
      miniGraph = CSVToArray(GPC);
    }
    if (this.props.ticker === 'GILD') {
      miniGraph = CSVToArray(GILD);
    }
    if (this.props.ticker === 'GL') {
      miniGraph = CSVToArray(GL);
    }
    if (this.props.ticker === 'GPN') {
      miniGraph = CSVToArray(GPN);
    }
    if (this.props.ticker === 'GS') {
      miniGraph = CSVToArray(GS);
    }
    if (this.props.ticker === 'GWW') {
      miniGraph = CSVToArray(GWW);
    }
    if (this.props.ticker === 'HAL') {
      miniGraph = CSVToArray(HAL);
    }
    if (this.props.ticker === 'HBI') {
      miniGraph = CSVToArray(HBI);
    }
    if (this.props.ticker === 'HIG') {
      miniGraph = CSVToArray(HIG);
    }
    if (this.props.ticker === 'HAS') {
      miniGraph = CSVToArray(HAS);
    }
    if (this.props.ticker === 'HCA') {
      miniGraph = CSVToArray(HCA);
    }
    if (this.props.ticker === 'PEAK') {
      miniGraph = CSVToArray(PEAK);
    }
    if (this.props.ticker === 'HSIC') {
      miniGraph = CSVToArray(HSIC);
    }
    if (this.props.ticker === 'HSY') {
      miniGraph = CSVToArray(HSY);
    }
    if (this.props.ticker === 'HES') {
      miniGraph = CSVToArray(HES);
    }
    if (this.props.ticker === 'HPE') {
      miniGraph = CSVToArray(HPE);
    }
    if (this.props.ticker === 'HLT') {
      miniGraph = CSVToArray(HLT);
    }
    if (this.props.ticker === 'HFC') {
      miniGraph = CSVToArray(HFC);
    }
    if (this.props.ticker === 'HOLX') {
      miniGraph = CSVToArray(HOLX);
    }
    if (this.props.ticker === 'HD') {
      miniGraph = CSVToArray(HD);
    }
    if (this.props.ticker === 'HON') {
      miniGraph = CSVToArray(HON);
    }
    if (this.props.ticker === 'HRL') {
      miniGraph = CSVToArray(HRL);
    }
    if (this.props.ticker === 'HST') {
      miniGraph = CSVToArray(HST);
    }
    if (this.props.ticker === 'HWM') {
      miniGraph = CSVToArray(HWM);
    }
    if (this.props.ticker === 'HPQ') {
      miniGraph = CSVToArray(HPQ);
    }
    if (this.props.ticker === 'HUM') {
      miniGraph = CSVToArray(HUM);
    }
    if (this.props.ticker === 'HBAN') {
      miniGraph = CSVToArray(HBAN);
    }
    if (this.props.ticker === 'HII') {
      miniGraph = CSVToArray(HII);
    }
    if (this.props.ticker === 'IEX') {
      miniGraph = CSVToArray(IEX);
    }
    if (this.props.ticker === 'IDXX') {
      miniGraph = CSVToArray(IDXX);
    }
    if (this.props.ticker === 'INFO') {
      miniGraph = CSVToArray(INFO);
    }
    if (this.props.ticker === 'ITW') {
      miniGraph = CSVToArray(ITW);
    }
    if (this.props.ticker === 'ILMN') {
      miniGraph = CSVToArray(ILMN);
    }
    if (this.props.ticker === 'INCY') {
      miniGraph = CSVToArray(INCY);
    }
    if (this.props.ticker === 'IR') {
      miniGraph = CSVToArray(IR);
    }
    if (this.props.ticker === 'INTC') {
      miniGraph = CSVToArray(INTC);
    }
    if (this.props.ticker === 'ICE') {
      miniGraph = CSVToArray(ICE);
    }
    if (this.props.ticker === 'IBM') {
      miniGraph = CSVToArray(IBM);
    }
    if (this.props.ticker === 'IP') {
      miniGraph = CSVToArray(IP);
    }
    if (this.props.ticker === 'IPG') {
      miniGraph = CSVToArray(IPG);
    }
    if (this.props.ticker === 'IFF') {
      miniGraph = CSVToArray(IFF);
    }
    if (this.props.ticker === 'INTU') {
      miniGraph = CSVToArray(INTU);
    }
    if (this.props.ticker === 'ISRG') {
      miniGraph = CSVToArray(ISRG);
    }
    if (this.props.ticker === 'IVZ') {
      miniGraph = CSVToArray(IVZ);
    }
    if (this.props.ticker === 'IPGP') {
      miniGraph = CSVToArray(IPGP);
    }
    if (this.props.ticker === 'IQV') {
      miniGraph = CSVToArray(IQV);
    }
    if (this.props.ticker === 'IRM') {
      miniGraph = CSVToArray(IRM);
    }
    if (this.props.ticker === 'JKHY') {
      miniGraph = CSVToArray(JKHY);
    }
    if (this.props.ticker === 'J') {
      miniGraph = CSVToArray(J);
    }
    if (this.props.ticker === 'JBHT') {
      miniGraph = CSVToArray(JBHT);
    }
    if (this.props.ticker === 'SJM') {
      miniGraph = CSVToArray(SJM);
    }
    if (this.props.ticker === 'JNJ') {
      miniGraph = CSVToArray(JNJ);
    }
    if (this.props.ticker === 'JCI') {
      miniGraph = CSVToArray(JCI);
    }
    if (this.props.ticker === 'JPM') {
      miniGraph = CSVToArray(JPM);
    }
    if (this.props.ticker === 'JNPR') {
      miniGraph = CSVToArray(JNPR);
    }
    if (this.props.ticker === 'KSU') {
      miniGraph = CSVToArray(KSU);
    }
    if (this.props.ticker === 'K') {
      miniGraph = CSVToArray(K);
    }
    if (this.props.ticker === 'KEY') {
      miniGraph = CSVToArray(KEY);
    }
    if (this.props.ticker === 'KEYS') {
      miniGraph = CSVToArray(KEYS);
    }
    if (this.props.ticker === 'KMB') {
      miniGraph = CSVToArray(KMB);
    }
    if (this.props.ticker === 'KIM') {
      miniGraph = CSVToArray(KIM);
    }
    if (this.props.ticker === 'KMI') {
      miniGraph = CSVToArray(KMI);
    }
    if (this.props.ticker === 'KLAC') {
      miniGraph = CSVToArray(KLAC);
    }
    if (this.props.ticker === 'KHC') {
      miniGraph = CSVToArray(KHC);
    }
    if (this.props.ticker === 'KR') {
      miniGraph = CSVToArray(KR);
    }
    if (this.props.ticker === 'LB') {
      miniGraph = CSVToArray(LB);
    }
    if (this.props.ticker === 'LHX') {
      miniGraph = CSVToArray(LHX);
    }
    if (this.props.ticker === 'LH') {
      miniGraph = CSVToArray(LH);
    }
    if (this.props.ticker === 'LRCX') {
      miniGraph = CSVToArray(LRCX);
    }
    if (this.props.ticker === 'LW') {
      miniGraph = CSVToArray(LW);
    }
    if (this.props.ticker === 'LVS') {
      miniGraph = CSVToArray(LVS);
    }
    if (this.props.ticker === 'LEG') {
      miniGraph = CSVToArray(LEG);
    }
    if (this.props.ticker === 'LDOS') {
      miniGraph = CSVToArray(LDOS);
    }
    if (this.props.ticker === 'LEN') {
      miniGraph = CSVToArray(LEN);
    }
    if (this.props.ticker === 'LLY') {
      miniGraph = CSVToArray(LLY);
    }
    if (this.props.ticker === 'LNC') {
      miniGraph = CSVToArray(LNC);
    }
    if (this.props.ticker === 'LIN') {
      miniGraph = CSVToArray(LIN);
    }
    if (this.props.ticker === 'LYV') {
      miniGraph = CSVToArray(LYV);
    }
    if (this.props.ticker === 'LKQ') {
      miniGraph = CSVToArray(LKQ);
    }
    if (this.props.ticker === 'LMT') {
      miniGraph = CSVToArray(LMT);
    }
    if (this.props.ticker === 'L') {
      miniGraph = CSVToArray(L);
    }
    if (this.props.ticker === 'LOW') {
      miniGraph = CSVToArray(LOW);
    }
    if (this.props.ticker === 'LUMN') {
      miniGraph = CSVToArray(LUMN);
    }
    if (this.props.ticker === 'LYB') {
      miniGraph = CSVToArray(LYB);
    }
    if (this.props.ticker === 'MTB') {
      miniGraph = CSVToArray(MTB);
    }
    if (this.props.ticker === 'MRO') {
      miniGraph = CSVToArray(MRO);
    }
    if (this.props.ticker === 'MPC') {
      miniGraph = CSVToArray(MPC);
    }
    if (this.props.ticker === 'MKTX') {
      miniGraph = CSVToArray(MKTX);
    }
    if (this.props.ticker === 'MAR') {
      miniGraph = CSVToArray(MAR);
    }
    if (this.props.ticker === 'MMC') {
      miniGraph = CSVToArray(MMC);
    }
    if (this.props.ticker === 'MLM') {
      miniGraph = CSVToArray(MLM);
    }
    if (this.props.ticker === 'MAS') {
      miniGraph = CSVToArray(MAS);
    }
    if (this.props.ticker === 'MA') {
      miniGraph = CSVToArray(MA);
    }
    if (this.props.ticker === 'MKC') {
      miniGraph = CSVToArray(MKC);
    }
    if (this.props.ticker === 'MXIM') {
      miniGraph = CSVToArray(MXIM);
    }
    if (this.props.ticker === 'MCD') {
      miniGraph = CSVToArray(MCD);
    }
    if (this.props.ticker === 'MCK') {
      miniGraph = CSVToArray(MCK);
    }
    if (this.props.ticker === 'MDT') {
      miniGraph = CSVToArray(MDT);
    }
    if (this.props.ticker === 'MRK') {
      miniGraph = CSVToArray(MRK);
    }
    if (this.props.ticker === 'MET') {
      miniGraph = CSVToArray(MET);
    }
    if (this.props.ticker === 'MTD') {
      miniGraph = CSVToArray(MTD);
    }
    if (this.props.ticker === 'MGM') {
      miniGraph = CSVToArray(MGM);
    }
    if (this.props.ticker === 'MCHP') {
      miniGraph = CSVToArray(MCHP);
    }
    if (this.props.ticker === 'MU') {
      miniGraph = CSVToArray(MU);
    }
    if (this.props.ticker === 'MSFT') {
      miniGraph = CSVToArray(MSFT);
    }
    if (this.props.ticker === 'MAA') {
      miniGraph = CSVToArray(MAA);
    }
    if (this.props.ticker === 'MHK') {
      miniGraph = CSVToArray(MHK);
    }
    if (this.props.ticker === 'TAP') {
      miniGraph = CSVToArray(TAP);
    }
    if (this.props.ticker === 'MDLZ') {
      miniGraph = CSVToArray(MDLZ);
    }
    if (this.props.ticker === 'MPWR') {
      miniGraph = CSVToArray(MPWR);
    }
    if (this.props.ticker === 'MNST') {
      miniGraph = CSVToArray(MNST);
    }
    if (this.props.ticker === 'MCO') {
      miniGraph = CSVToArray(MCO);
    }
    if (this.props.ticker === 'MS') {
      miniGraph = CSVToArray(MS);
    }
    if (this.props.ticker === 'MOS') {
      miniGraph = CSVToArray(MOS);
    }
    if (this.props.ticker === 'MSI') {
      miniGraph = CSVToArray(MSI);
    }
    if (this.props.ticker === 'MSCI') {
      miniGraph = CSVToArray(MSCI);
    }
    if (this.props.ticker === 'NDAQ') {
      miniGraph = CSVToArray(NDAQ);
    }
    if (this.props.ticker === 'NTAP') {
      miniGraph = CSVToArray(NTAP);
    }
    if (this.props.ticker === 'NFLX') {
      miniGraph = CSVToArray(NFLX);
    }
    if (this.props.ticker === 'NWL') {
      miniGraph = CSVToArray(NWL);
    }
    if (this.props.ticker === 'NEM') {
      miniGraph = CSVToArray(NEM);
    }
    if (this.props.ticker === 'NWSA') {
      miniGraph = CSVToArray(NWSA);
    }
    if (this.props.ticker === 'NWS') {
      miniGraph = CSVToArray(NWS);
    }
    if (this.props.ticker === 'NEE') {
      miniGraph = CSVToArray(NEE);
    }
    if (this.props.ticker === 'NLSN') {
      miniGraph = CSVToArray(NLSN);
    }
    if (this.props.ticker === 'NKE') {
      miniGraph = CSVToArray(NKE);
    }
    if (this.props.ticker === 'NI') {
      miniGraph = CSVToArray(NI);
    }
    if (this.props.ticker === 'NSC') {
      miniGraph = CSVToArray(NSC);
    }
    if (this.props.ticker === 'NTRS') {
      miniGraph = CSVToArray(NTRS);
    }
    if (this.props.ticker === 'NOC') {
      miniGraph = CSVToArray(NOC);
    }
    if (this.props.ticker === 'NLOK') {
      miniGraph = CSVToArray(NLOK);
    }
    if (this.props.ticker === 'NCLH') {
      miniGraph = CSVToArray(NCLH);
    }
    if (this.props.ticker === 'NOV') {
      miniGraph = CSVToArray(NOV);
    }
    if (this.props.ticker === 'NRG') {
      miniGraph = CSVToArray(NRG);
    }
    if (this.props.ticker === 'NUE') {
      miniGraph = CSVToArray(NUE);
    }
    if (this.props.ticker === 'NVDA') {
      miniGraph = CSVToArray(NVDA);
    }
    if (this.props.ticker === 'NVR') {
      miniGraph = CSVToArray(NVR);
    }
    if (this.props.ticker === 'ORLY') {
      miniGraph = CSVToArray(ORLY);
    }
    if (this.props.ticker === 'OXY') {
      miniGraph = CSVToArray(OXY);
    }
    if (this.props.ticker === 'ODFL') {
      miniGraph = CSVToArray(ODFL);
    }
    if (this.props.ticker === 'OMC') {
      miniGraph = CSVToArray(OMC);
    }
    if (this.props.ticker === 'OKE') {
      miniGraph = CSVToArray(OKE);
    }
    if (this.props.ticker === 'ORCL') {
      miniGraph = CSVToArray(ORCL);
    }
    if (this.props.ticker === 'OTIS') {
      miniGraph = CSVToArray(OTIS);
    }
    if (this.props.ticker === 'PCAR') {
      miniGraph = CSVToArray(PCAR);
    }
    if (this.props.ticker === 'PKG') {
      miniGraph = CSVToArray(PKG);
    }
    if (this.props.ticker === 'PH') {
      miniGraph = CSVToArray(PH);
    }
    if (this.props.ticker === 'PAYX') {
      miniGraph = CSVToArray(PAYX);
    }
    if (this.props.ticker === 'PAYC') {
      miniGraph = CSVToArray(PAYC);
    }
    if (this.props.ticker === 'PYPL') {
      miniGraph = CSVToArray(PYPL);
    }
    if (this.props.ticker === 'PNR') {
      miniGraph = CSVToArray(PNR);
    }
    if (this.props.ticker === 'PBCT') {
      miniGraph = CSVToArray(PBCT);
    }
    if (this.props.ticker === 'PEP') {
      miniGraph = CSVToArray(PEP);
    }
    if (this.props.ticker === 'PKI') {
      miniGraph = CSVToArray(PKI);
    }
    if (this.props.ticker === 'PRGO') {
      miniGraph = CSVToArray(PRGO);
    }
    if (this.props.ticker === 'PFE') {
      miniGraph = CSVToArray(PFE);
    }
    if (this.props.ticker === 'PM') {
      miniGraph = CSVToArray(PM);
    }
    if (this.props.ticker === 'PSX') {
      miniGraph = CSVToArray(PSX);
    }
    if (this.props.ticker === 'PNW') {
      miniGraph = CSVToArray(PNW);
    }
    if (this.props.ticker === 'PXD') {
      miniGraph = CSVToArray(PXD);
    }
    if (this.props.ticker === 'PNC') {
      miniGraph = CSVToArray(PNC);
    }
    if (this.props.ticker === 'POOL') {
      miniGraph = CSVToArray(POOL);
    }
    if (this.props.ticker === 'PPG') {
      miniGraph = CSVToArray(PPG);
    }
    if (this.props.ticker === 'PPL') {
      miniGraph = CSVToArray(PPL);
    }
    if (this.props.ticker === 'PFG') {
      miniGraph = CSVToArray(PFG);
    }
    if (this.props.ticker === 'PG') {
      miniGraph = CSVToArray(PG);
    }
    if (this.props.ticker === 'PGR') {
      miniGraph = CSVToArray(PGR);
    }
    if (this.props.ticker === 'PLD') {
      miniGraph = CSVToArray(PLD);
    }
    if (this.props.ticker === 'PRU') {
      miniGraph = CSVToArray(PRU);
    }
    if (this.props.ticker === 'PEG') {
      miniGraph = CSVToArray(PEG);
    }
    if (this.props.ticker === 'PSA') {
      miniGraph = CSVToArray(PSA);
    }
    if (this.props.ticker === 'PHM') {
      miniGraph = CSVToArray(PHM);
    }
    if (this.props.ticker === 'PVH') {
      miniGraph = CSVToArray(PVH);
    }
    if (this.props.ticker === 'QRVO') {
      miniGraph = CSVToArray(QRVO);
    }
    if (this.props.ticker === 'PWR') {
      miniGraph = CSVToArray(PWR);
    }
    if (this.props.ticker === 'QCOM') {
      miniGraph = CSVToArray(QCOM);
    }
    if (this.props.ticker === 'DGX') {
      miniGraph = CSVToArray(DGX);
    }
    if (this.props.ticker === 'RL') {
      miniGraph = CSVToArray(RL);
    }
    if (this.props.ticker === 'RJF') {
      miniGraph = CSVToArray(RJF);
    }
    if (this.props.ticker === 'RTX') {
      miniGraph = CSVToArray(RTX);
    }
    if (this.props.ticker === 'O') {
      miniGraph = CSVToArray(O);
    }
    if (this.props.ticker === 'REG') {
      miniGraph = CSVToArray(REG);
    }
    if (this.props.ticker === 'REGN') {
      miniGraph = CSVToArray(REGN);
    }
    if (this.props.ticker === 'RF') {
      miniGraph = CSVToArray(RF);
    }
    if (this.props.ticker === 'RSG') {
      miniGraph = CSVToArray(RSG);
    }
    if (this.props.ticker === 'RMD') {
      miniGraph = CSVToArray(RMD);
    }
    if (this.props.ticker === 'RHI') {
      miniGraph = CSVToArray(RHI);
    }
    if (this.props.ticker === 'ROK') {
      miniGraph = CSVToArray(ROK);
    }
    if (this.props.ticker === 'ROL') {
      miniGraph = CSVToArray(ROL);
    }
    if (this.props.ticker === 'ROP') {
      miniGraph = CSVToArray(ROP);
    }
    if (this.props.ticker === 'ROST') {
      miniGraph = CSVToArray(ROST);
    }
    if (this.props.ticker === 'RCL') {
      miniGraph = CSVToArray(RCL);
    }
    if (this.props.ticker === 'SPGI') {
      miniGraph = CSVToArray(SPGI);
    }
    if (this.props.ticker === 'CRM') {
      miniGraph = CSVToArray(CRM);
    }
    if (this.props.ticker === 'SBAC') {
      miniGraph = CSVToArray(SBAC);
    }
    if (this.props.ticker === 'SLB') {
      miniGraph = CSVToArray(SLB);
    }
    if (this.props.ticker === 'STX') {
      miniGraph = CSVToArray(STX);
    }
    if (this.props.ticker === 'SEE') {
      miniGraph = CSVToArray(SEE);
    }
    if (this.props.ticker === 'SRE') {
      miniGraph = CSVToArray(SRE);
    }
    if (this.props.ticker === 'NOW') {
      miniGraph = CSVToArray(NOW);
    }
    if (this.props.ticker === 'SHW') {
      miniGraph = CSVToArray(SHW);
    }
    if (this.props.ticker === 'SPG') {
      miniGraph = CSVToArray(SPG);
    }
    if (this.props.ticker === 'SWKS') {
      miniGraph = CSVToArray(SWKS);
    }
    if (this.props.ticker === 'SLG') {
      miniGraph = CSVToArray(SLG);
    }
    if (this.props.ticker === 'SNA') {
      miniGraph = CSVToArray(SNA);
    }
    if (this.props.ticker === 'SO') {
      miniGraph = CSVToArray(SO);
    }
    if (this.props.ticker === 'LUV') {
      miniGraph = CSVToArray(LUV);
    }
    if (this.props.ticker === 'SWK') {
      miniGraph = CSVToArray(SWK);
    }
    if (this.props.ticker === 'SBUX') {
      miniGraph = CSVToArray(SBUX);
    }
    if (this.props.ticker === 'STT') {
      miniGraph = CSVToArray(STT);
    }
    if (this.props.ticker === 'STE') {
      miniGraph = CSVToArray(STE);
    }
    if (this.props.ticker === 'SYK') {
      miniGraph = CSVToArray(SYK);
    }
    if (this.props.ticker === 'SIVB') {
      miniGraph = CSVToArray(SIVB);
    }
    if (this.props.ticker === 'SYF') {
      miniGraph = CSVToArray(SYF);
    }
    if (this.props.ticker === 'SNPS') {
      miniGraph = CSVToArray(SNPS);
    }
    if (this.props.ticker === 'SYY') {
      miniGraph = CSVToArray(SYY);
    }
    if (this.props.ticker === 'TMUS') {
      miniGraph = CSVToArray(TMUS);
    }
    if (this.props.ticker === 'TROW') {
      miniGraph = CSVToArray(TROW);
    }
    if (this.props.ticker === 'TTWO') {
      miniGraph = CSVToArray(TTWO);
    }
    if (this.props.ticker === 'TPR') {
      miniGraph = CSVToArray(TPR);
    }
    if (this.props.ticker === 'TGT') {
      miniGraph = CSVToArray(TGT);
    }
    if (this.props.ticker === 'TEL') {
      miniGraph = CSVToArray(TEL);
    }
    if (this.props.ticker === 'TDY') {
      miniGraph = CSVToArray(TDY);
    }
    if (this.props.ticker === 'TFX') {
      miniGraph = CSVToArray(TFX);
    }
    if (this.props.ticker === 'TER') {
      miniGraph = CSVToArray(TER);
    }
    if (this.props.ticker === 'TSLA') {
      miniGraph = CSVToArray(TSLA);
    }
    if (this.props.ticker === 'TXN') {
      miniGraph = CSVToArray(TXN);
    }
    if (this.props.ticker === 'TXT') {
      miniGraph = CSVToArray(TXT);
    }
    if (this.props.ticker === 'TMO') {
      miniGraph = CSVToArray(TMO);
    }
    if (this.props.ticker === 'TJX') {
      miniGraph = CSVToArray(TJX);
    }
    if (this.props.ticker === 'TSCO') {
      miniGraph = CSVToArray(TSCO);
    }
    if (this.props.ticker === 'TT') {
      miniGraph = CSVToArray(TT);
    }
    if (this.props.ticker === 'TDG') {
      miniGraph = CSVToArray(TDG);
    }
    if (this.props.ticker === 'TRV') {
      miniGraph = CSVToArray(TRV);
    }
    if (this.props.ticker === 'TRMB') {
      miniGraph = CSVToArray(TRMB);
    }
    if (this.props.ticker === 'TFC') {
      miniGraph = CSVToArray(TFC);
    }
    if (this.props.ticker === 'TWTR') {
      miniGraph = CSVToArray(TWTR);
    }
    if (this.props.ticker === 'TYL') {
      miniGraph = CSVToArray(TYL);
    }
    if (this.props.ticker === 'TSN') {
      miniGraph = CSVToArray(TSN);
    }
    if (this.props.ticker === 'UDR') {
      miniGraph = CSVToArray(UDR);
    }
    if (this.props.ticker === 'ULTA') {
      miniGraph = CSVToArray(ULTA);
    }
    if (this.props.ticker === 'USB') {
      miniGraph = CSVToArray(USB);
    }
    if (this.props.ticker === 'UAA') {
      miniGraph = CSVToArray(UAA);
    }
    if (this.props.ticker === 'UA') {
      miniGraph = CSVToArray(UA);
    }
    if (this.props.ticker === 'UNP') {
      miniGraph = CSVToArray(UNP);
    }
    if (this.props.ticker === 'UAL') {
      miniGraph = CSVToArray(UAL);
    }
    if (this.props.ticker === 'UNH') {
      miniGraph = CSVToArray(UNH);
    }
    if (this.props.ticker === 'UPS') {
      miniGraph = CSVToArray(UPS);
    }
    if (this.props.ticker === 'URI') {
      miniGraph = CSVToArray(URI);
    }
    if (this.props.ticker === 'UHS') {
      miniGraph = CSVToArray(UHS);
    }
    if (this.props.ticker === 'UNM') {
      miniGraph = CSVToArray(UNM);
    }
    if (this.props.ticker === 'VLO') {
      miniGraph = CSVToArray(VLO);
    }
    if (this.props.ticker === 'VAR') {
      miniGraph = CSVToArray(VAR);
    }
    if (this.props.ticker === 'VTR') {
      miniGraph = CSVToArray(VTR);
    }
    if (this.props.ticker === 'VRSN') {
      miniGraph = CSVToArray(VRSN);
    }
    if (this.props.ticker === 'VRSK') {
      miniGraph = CSVToArray(VRSK);
    }
    if (this.props.ticker === 'VZ') {
      miniGraph = CSVToArray(VZ);
    }
    if (this.props.ticker === 'VRTX') {
      miniGraph = CSVToArray(VRTX);
    }
    if (this.props.ticker === 'VFC') {
      miniGraph = CSVToArray(VFC);
    }
    if (this.props.ticker === 'VIAC') {
      miniGraph = CSVToArray(VIAC);
    }
    if (this.props.ticker === 'VTRS') {
      miniGraph = CSVToArray(VTRS);
    }
    if (this.props.ticker === 'V') {
      miniGraph = CSVToArray(V);
    }
    if (this.props.ticker === 'VNT') {
      miniGraph = CSVToArray(VNT);
    }
    if (this.props.ticker === 'VNO') {
      miniGraph = CSVToArray(VNO);
    }
    if (this.props.ticker === 'VMC') {
      miniGraph = CSVToArray(VMC);
    }
    if (this.props.ticker === 'WRB') {
      miniGraph = CSVToArray(WRB);
    }
    if (this.props.ticker === 'WAB') {
      miniGraph = CSVToArray(WAB);
    }
    if (this.props.ticker === 'WMT') {
      miniGraph = CSVToArray(WMT);
    }
    if (this.props.ticker === 'WBA') {
      miniGraph = CSVToArray(WBA);
    }
    if (this.props.ticker === 'DIS') {
      miniGraph = CSVToArray(DIS);
    }
    if (this.props.ticker === 'WM') {
      miniGraph = CSVToArray(WM);
    }
    if (this.props.ticker === 'WAT') {
      miniGraph = CSVToArray(WAT);
    }
    if (this.props.ticker === 'WEC') {
      miniGraph = CSVToArray(WEC);
    }
    if (this.props.ticker === 'WFC') {
      miniGraph = CSVToArray(WFC);
    }
    if (this.props.ticker === 'WELL') {
      miniGraph = CSVToArray(WELL);
    }
    if (this.props.ticker === 'WST') {
      miniGraph = CSVToArray(WST);
    }
    if (this.props.ticker === 'WDC') {
      miniGraph = CSVToArray(WDC);
    }
    if (this.props.ticker === 'WU') {
      miniGraph = CSVToArray(WU);
    }
    if (this.props.ticker === 'WRK') {
      miniGraph = CSVToArray(WRK);
    }
    if (this.props.ticker === 'WY') {
      miniGraph = CSVToArray(WY);
    }
    if (this.props.ticker === 'WHR') {
      miniGraph = CSVToArray(WHR);
    }
    if (this.props.ticker === 'WMB') {
      miniGraph = CSVToArray(WMB);
    }
    if (this.props.ticker === 'WLTW') {
      miniGraph = CSVToArray(WLTW);
    }
    if (this.props.ticker === 'WYNN') {
      miniGraph = CSVToArray(WYNN);
    }
    if (this.props.ticker === 'XEL') {
      miniGraph = CSVToArray(XEL);
    }
    if (this.props.ticker === 'XRX') {
      miniGraph = CSVToArray(XRX);
    }
    if (this.props.ticker === 'XLNX') {
      miniGraph = CSVToArray(XLNX);
    }
    if (this.props.ticker === 'XYL') {
      miniGraph = CSVToArray(XYL);
    }
    if (this.props.ticker === 'YUM') {
      miniGraph = CSVToArray(YUM);
    }
    if (this.props.ticker === 'ZBRA') {
      miniGraph = CSVToArray(ZBRA);
    }
    if (this.props.ticker === 'ZBH') {
      miniGraph = CSVToArray(ZBH);
    }
    if (this.props.ticker === 'ZION') {
      miniGraph = CSVToArray(ZION);
    }
    if (this.props.ticker === 'ZTS') {
      miniGraph = CSVToArray(ZTS);
    }
    const style1 = {
      height: "50px",
      width: "96%",
      color: "white",
      backgroundColor: "coral",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style2 = {
      height: "30px",
      width: "20%",
      color: "black",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style3 = {
      color: "white",
      backgroundColor: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style4 = {
      color: "white",
      backgroundColor: "grey",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style5 = {
      color: "white",
      backgroundColor: "green",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style6 = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style7 = {
      color: "green",
      padding: "10px",
      fontFamily: "Arial"
    };
    var difference;
    var price;
    var percentChange;
    var style;
    if ((miniGraph[miniGraph.length - 1] - miniGraph[miniGraph.length - 2]) > 0) {
      difference = "+" + (miniGraph[miniGraph.length - 1] - miniGraph[miniGraph.length - 2]).toFixed(2).toString();
      percentChange = "+" + ((miniGraph[miniGraph.length - 1] - miniGraph[miniGraph.length - 2]) * 100 / miniGraph[miniGraph.length - 2]).toFixed(2).toString();
      style = style7;
    }
    else {
      difference = "" + (miniGraph[miniGraph.length - 1] - miniGraph[miniGraph.length - 2]).toFixed(2).toString();
      percentChange = "" + ((miniGraph[miniGraph.length - 1] - miniGraph[miniGraph.length - 2]) * 100 / miniGraph[miniGraph.length - 2]).toFixed(2).toString();
      style = style6;
    }
    price = (parseFloat(miniGraph[miniGraph.length - 1])).toFixed(2);
    return (
      <div style={{border: "solid black"}} className="row">
      <h1 style={style1}>{this.props.ticker}</h1>
      <h1 style={style2}>{price}</h1>
      <h1 style={style}>{difference} ({percentChange}%)</h1>
      <h2>
          <Button style={style3} variant="contained" color="secondary">Bearish</Button>
          <Button  style={style4} variant="contained" color="secondary">Neutral</Button>
          <Button  style={style5} variant="contained" color="secondary">Bullish</Button>
      </h2>
      <VictoryChart width='600' height='300'>
      <VictoryLine data={miniGraph} x='Date' y='Price' />
      </VictoryChart>
      <VictoryPie data={[
      { x: "bullish", y: stockSentiment.bullish },
      { x: "neutral", y: stockSentiment.neutral },
      { x: "bearish", y: stockSentiment.bearish }
      ]} />
      </div>
    );
  }
}