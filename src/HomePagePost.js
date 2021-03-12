import React, { useState } from "react";
import { VictoryLine, VictoryChart, VictoryPie } from 'victory';
import { getSentimentHistory } from "./functions/stock-interactions.js";
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
import BRKB from "./1y_data/BRK-B.csv";
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
import BFB from "./1y_data/BF-B.csv";
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

export default function MiniGraph(props) {

  const CSVToArray = (csv) => {
    var lines = csv.split("\n");
    return lines.splice(1, lines.length)
  }

  var miniGraph = CSVToArray(MMM);

  const [stockSentiment, setStockSentiment] = useState({
    bullish: 0,
    bearish: 0,
    neutral: 0
  });

  const loadSentiment = async() => {
    const sentiment = await getSentimentHistory(props.ticker);
    setStockSentiment(sentiment);
  }
  if (props.ticker === 'MMM') {
    miniGraph = CSVToArray(MMM);
  }
  else if (props.ticker === 'ABT') {
    miniGraph = CSVToArray(ABT);
  }
  else if (props.ticker === 'ABBV') {
    miniGraph = CSVToArray(ABBV);
  }
  else if (props.ticker === 'ABMD') {
    miniGraph = CSVToArray(ABMD);
  }
  else if (props.ticker === 'ACN') {
    miniGraph = CSVToArray(ACN);
  }
  else if (props.ticker === 'ATVI') {
    miniGraph = CSVToArray(ATVI);
  }
  else if (props.ticker === 'ADBE') {
    miniGraph = CSVToArray(ADBE);
  }
  else if (props.ticker === 'AMD') {
    miniGraph = CSVToArray(AMD);
  }
  else if (props.ticker === 'AAP') {
    miniGraph = CSVToArray(AAP);
  }
  else if (props.ticker === 'AES') {
    miniGraph = CSVToArray(AES);
  }
  else if (props.ticker === 'AFL') {
    miniGraph = CSVToArray(AFL);
  }
  else if (props.ticker === 'A') {
    miniGraph = CSVToArray(A);
  }
  else if (props.ticker === 'APD') {
    miniGraph = CSVToArray(APD);
  }
  else if (props.ticker === 'AKAM') {
    miniGraph = CSVToArray(AKAM);
  }
  else if (props.ticker === 'ALK') {
    miniGraph = CSVToArray(ALK);
  }
  else if (props.ticker === 'ALB') {
    miniGraph = CSVToArray(ALB);
  }
  else if (props.ticker === 'ARE') {
    miniGraph = CSVToArray(ARE);
  }
  else if (props.ticker === 'ALXN') {
    miniGraph = CSVToArray(ALXN);
  }
  else if (props.ticker === 'ALGN') {
    miniGraph = CSVToArray(ALGN);
  }
  else if (props.ticker === 'ALLE') {
    miniGraph = CSVToArray(ALLE);
  }
  else if (props.ticker === 'LNT') {
    miniGraph = CSVToArray(LNT);
  }
  else if (props.ticker === 'ALL') {
    miniGraph = CSVToArray(ALL);
  }
  else if (props.ticker === 'GOOGL') {
    miniGraph = CSVToArray(GOOGL);
  }
  else if (props.ticker === 'GOOG') {
    miniGraph = CSVToArray(GOOG);
  }
  else if (props.ticker === 'MO') {
    miniGraph = CSVToArray(MO);
  }
  else if (props.ticker === 'AMZN') {
    miniGraph = CSVToArray(AMZN);
  }
  else if (props.ticker === 'AMCR') {
    miniGraph = CSVToArray(AMCR);
  }
  else if (props.ticker === 'AEE') {
    miniGraph = CSVToArray(AEE);
  }
  else if (props.ticker === 'AAL') {
    miniGraph = CSVToArray(AAL);
  }
  else if (props.ticker === 'AEP') {
    miniGraph = CSVToArray(AEP);
  }
  else if (props.ticker === 'AXP') {
    miniGraph = CSVToArray(AXP);
  }
  else if (props.ticker === 'AIG') {
    miniGraph = CSVToArray(AIG);
  }
  else if (props.ticker === 'AMT') {
    miniGraph = CSVToArray(AMT);
  }
  else if (props.ticker === 'AWK') {
    miniGraph = CSVToArray(AWK);
  }
  else if (props.ticker === 'AMP') {
    miniGraph = CSVToArray(AMP);
  }
  else if (props.ticker === 'ABC') {
    miniGraph = CSVToArray(ABC);
  }
  else if (props.ticker === 'AME') {
    miniGraph = CSVToArray(AME);
  }
  else if (props.ticker === 'AMGN') {
    miniGraph = CSVToArray(AMGN);
  }
  else if (props.ticker === 'APH') {
    miniGraph = CSVToArray(APH);
  }
  else if (props.ticker === 'ADI') {
    miniGraph = CSVToArray(ADI);
  }
  else if (props.ticker === 'ANSS') {
    miniGraph = CSVToArray(ANSS);
  }
  else if (props.ticker === 'ANTM') {
    miniGraph = CSVToArray(ANTM);
  }
  else if (props.ticker === 'AON') {
    miniGraph = CSVToArray(AON);
  }
  else if (props.ticker === 'AOS') {
    miniGraph = CSVToArray(AOS);
  }
  else if (props.ticker === 'APA') {
    miniGraph = CSVToArray(APA);
  }
  else if (props.ticker === 'AAPL') {
    miniGraph = CSVToArray(AAPL);
  }
  else if (props.ticker === 'AMAT') {
    miniGraph = CSVToArray(AMAT);
  }
  else if (props.ticker === 'APTV') {
    miniGraph = CSVToArray(APTV);
  }
  else if (props.ticker === 'ADM') {
    miniGraph = CSVToArray(ADM);
  }
  else if (props.ticker === 'ANET') {
    miniGraph = CSVToArray(ANET);
  }
  else if (props.ticker === 'AJG') {
    miniGraph = CSVToArray(AJG);
  }
  else if (props.ticker === 'AIZ') {
    miniGraph = CSVToArray(AIZ);
  }
  else if (props.ticker === 'T') {
    miniGraph = CSVToArray(T);
  }
  else if (props.ticker === 'ATO') {
    miniGraph = CSVToArray(ATO);
  }
  else if (props.ticker === 'ADSK') {
    miniGraph = CSVToArray(ADSK);
  }
  else if (props.ticker === 'ADP') {
    miniGraph = CSVToArray(ADP);
  }
  else if (props.ticker === 'AZO') {
    miniGraph = CSVToArray(AZO);
  }
  else if (props.ticker === 'AVB') {
    miniGraph = CSVToArray(AVB);
  }
  else if (props.ticker === 'AVY') {
    miniGraph = CSVToArray(AVY);
  }
  else if (props.ticker === 'BKR') {
    miniGraph = CSVToArray(BKR);
  }
  else if (props.ticker === 'BLL') {
    miniGraph = CSVToArray(BLL);
  }
  else if (props.ticker === 'BAC') {
    miniGraph = CSVToArray(BAC);
  }
  else if (props.ticker === 'BK') {
    miniGraph = CSVToArray(BK);
  }
  else if (props.ticker === 'BAX') {
    miniGraph = CSVToArray(BAX);
  }
  else if (props.ticker === 'BDX') {
    miniGraph = CSVToArray(BDX);
  }
  else if (props.ticker === 'BRK.B') {
    miniGraph = CSVToArray(BRKB);
  }
  else if (props.ticker === 'BBY') {
    miniGraph = CSVToArray(BBY);
  }
  else if (props.ticker === 'BIO') {
    miniGraph = CSVToArray(BIO);
  }
  else if (props.ticker === 'BIIB') {
    miniGraph = CSVToArray(BIIB);
  }
  else if (props.ticker === 'BLK') {
    miniGraph = CSVToArray(BLK);
  }
  else if (props.ticker === 'BA') {
    miniGraph = CSVToArray(BA);
  }
  else if (props.ticker === 'BKNG') {
    miniGraph = CSVToArray(BKNG);
  }
  else if (props.ticker === 'BWA') {
    miniGraph = CSVToArray(BWA);
  }
  else if (props.ticker === 'BXP') {
    miniGraph = CSVToArray(BXP);
  }
  else if (props.ticker === 'BSX') {
    miniGraph = CSVToArray(BSX);
  }
  else if (props.ticker === 'BMY') {
    miniGraph = CSVToArray(BMY);
  }
  else if (props.ticker === 'AVGO') {
    miniGraph = CSVToArray(AVGO);
  }
  else if (props.ticker === 'BR') {
    miniGraph = CSVToArray(BR);
  }
  else if (props.ticker === 'BF.B') {
    miniGraph = CSVToArray(BFB);
  }
  else if (props.ticker === 'CHRW') {
    miniGraph = CSVToArray(CHRW);
  }
  else if (props.ticker === 'COG') {
    miniGraph = CSVToArray(COG);
  }
  else if (props.ticker === 'CDNS') {
    miniGraph = CSVToArray(CDNS);
  }
  else if (props.ticker === 'CPB') {
    miniGraph = CSVToArray(CPB);
  }
  else if (props.ticker === 'COF') {
    miniGraph = CSVToArray(COF);
  }
  else if (props.ticker === 'CAH') {
    miniGraph = CSVToArray(CAH);
  }
  else if (props.ticker === 'KMX') {
    miniGraph = CSVToArray(KMX);
  }
  else if (props.ticker === 'CCL') {
    miniGraph = CSVToArray(CCL);
  }
  else if (props.ticker === 'CARR') {
    miniGraph = CSVToArray(CARR);
  }
  else if (props.ticker === 'CTLT') {
    miniGraph = CSVToArray(CTLT);
  }
  else if (props.ticker === 'CAT') {
    miniGraph = CSVToArray(CAT);
  }
  else if (props.ticker === 'CBOE') {
    miniGraph = CSVToArray(CBOE);
  }
  else if (props.ticker === 'CBRE') {
    miniGraph = CSVToArray(CBRE);
  }
  else if (props.ticker === 'CDW') {
    miniGraph = CSVToArray(CDW);
  }
  else if (props.ticker === 'CE') {
    miniGraph = CSVToArray(CE);
  }
  else if (props.ticker === 'CNC') {
    miniGraph = CSVToArray(CNC);
  }
  else if (props.ticker === 'CNP') {
    miniGraph = CSVToArray(CNP);
  }
  else if (props.ticker === 'CERN') {
    miniGraph = CSVToArray(CERN);
  }
  else if (props.ticker === 'CF') {
    miniGraph = CSVToArray(CF);
  }
  else if (props.ticker === 'SCHW') {
    miniGraph = CSVToArray(SCHW);
  }
  else if (props.ticker === 'CHTR') {
    miniGraph = CSVToArray(CHTR);
  }
  else if (props.ticker === 'CVX') {
    miniGraph = CSVToArray(CVX);
  }
  else if (props.ticker === 'CMG') {
    miniGraph = CSVToArray(CMG);
  }
  else if (props.ticker === 'CB') {
    miniGraph = CSVToArray(CB);
  }
  else if (props.ticker === 'CHD') {
    miniGraph = CSVToArray(CHD);
  }
  else if (props.ticker === 'CI') {
    miniGraph = CSVToArray(CI);
  }
  else if (props.ticker === 'CINF') {
    miniGraph = CSVToArray(CINF);
  }
  else if (props.ticker === 'CTAS') {
    miniGraph = CSVToArray(CTAS);
  }
  else if (props.ticker === 'CSCO') {
    miniGraph = CSVToArray(CSCO);
  }
  else if (props.ticker === 'C') {
    miniGraph = CSVToArray(C);
  }
  else if (props.ticker === 'CFG') {
    miniGraph = CSVToArray(CFG);
  }
  else if (props.ticker === 'CTXS') {
    miniGraph = CSVToArray(CTXS);
  }
  else if (props.ticker === 'CLX') {
    miniGraph = CSVToArray(CLX);
  }
  else if (props.ticker === 'CME') {
    miniGraph = CSVToArray(CME);
  }
  else if (props.ticker === 'CMS') {
    miniGraph = CSVToArray(CMS);
  }
  else if (props.ticker === 'KO') {
    miniGraph = CSVToArray(KO);
  }
  else if (props.ticker === 'CTSH') {
    miniGraph = CSVToArray(CTSH);
  }
  else if (props.ticker === 'CL') {
    miniGraph = CSVToArray(CL);
  }
  else if (props.ticker === 'CMCSA') {
    miniGraph = CSVToArray(CMCSA);
  }
  else if (props.ticker === 'CMA') {
    miniGraph = CSVToArray(CMA);
  }
  else if (props.ticker === 'CAG') {
    miniGraph = CSVToArray(CAG);
  }
  else if (props.ticker === 'COP') {
    miniGraph = CSVToArray(COP);
  }
  else if (props.ticker === 'ED') {
    miniGraph = CSVToArray(ED);
  }
  else if (props.ticker === 'STZ') {
    miniGraph = CSVToArray(STZ);
  }
  else if (props.ticker === 'COO') {
    miniGraph = CSVToArray(COO);
  }
  else if (props.ticker === 'CPRT') {
    miniGraph = CSVToArray(CPRT);
  }
  else if (props.ticker === 'GLW') {
    miniGraph = CSVToArray(GLW);
  }
  else if (props.ticker === 'CTVA') {
    miniGraph = CSVToArray(CTVA);
  }
  else if (props.ticker === 'COST') {
    miniGraph = CSVToArray(COST);
  }
  else if (props.ticker === 'CCI') {
    miniGraph = CSVToArray(CCI);
  }
  else if (props.ticker === 'CSX') {
    miniGraph = CSVToArray(CSX);
  }
  else if (props.ticker === 'CMI') {
    miniGraph = CSVToArray(CMI);
  }
  else if (props.ticker === 'CVS') {
    miniGraph = CSVToArray(CVS);
  }
  else if (props.ticker === 'DHI') {
    miniGraph = CSVToArray(DHI);
  }
  else if (props.ticker === 'DHR') {
    miniGraph = CSVToArray(DHR);
  }
  else if (props.ticker === 'DRI') {
    miniGraph = CSVToArray(DRI);
  }
  else if (props.ticker === 'DVA') {
    miniGraph = CSVToArray(DVA);
  }
  else if (props.ticker === 'DE') {
    miniGraph = CSVToArray(DE);
  }
  else if (props.ticker === 'DAL') {
    miniGraph = CSVToArray(DAL);
  }
  else if (props.ticker === 'XRAY') {
    miniGraph = CSVToArray(XRAY);
  }
  else if (props.ticker === 'DVN') {
    miniGraph = CSVToArray(DVN);
  }
  else if (props.ticker === 'DXCM') {
    miniGraph = CSVToArray(DXCM);
  }
  else if (props.ticker === 'FANG') {
    miniGraph = CSVToArray(FANG);
  }
  else if (props.ticker === 'DLR') {
    miniGraph = CSVToArray(DLR);
  }
  else if (props.ticker === 'DFS') {
    miniGraph = CSVToArray(DFS);
  }
  else if (props.ticker === 'DISCA') {
    miniGraph = CSVToArray(DISCA);
  }
  else if (props.ticker === 'DISCK') {
    miniGraph = CSVToArray(DISCK);
  }
  else if (props.ticker === 'DISH') {
    miniGraph = CSVToArray(DISH);
  }
  else if (props.ticker === 'DG') {
    miniGraph = CSVToArray(DG);
  }
  else if (props.ticker === 'DLTR') {
    miniGraph = CSVToArray(DLTR);
  }
  else if (props.ticker === 'D') {
    miniGraph = CSVToArray(D);
  }
  else if (props.ticker === 'DPZ') {
    miniGraph = CSVToArray(DPZ);
  }
  else if (props.ticker === 'DOV') {
    miniGraph = CSVToArray(DOV);
  }
  else if (props.ticker === 'DOW') {
    miniGraph = CSVToArray(DOW);
  }
  else if (props.ticker === 'DTE') {
    miniGraph = CSVToArray(DTE);
  }
  else if (props.ticker === 'DUK') {
    miniGraph = CSVToArray(DUK);
  }
  else if (props.ticker === 'DRE') {
    miniGraph = CSVToArray(DRE);
  }
  else if (props.ticker === 'DD') {
    miniGraph = CSVToArray(DD);
  }
  else if (props.ticker === 'DXC') {
    miniGraph = CSVToArray(DXC);
  }
  else if (props.ticker === 'EMN') {
    miniGraph = CSVToArray(EMN);
  }
  else if (props.ticker === 'ETN') {
    miniGraph = CSVToArray(ETN);
  }
  else if (props.ticker === 'EBAY') {
    miniGraph = CSVToArray(EBAY);
  }
  else if (props.ticker === 'ECL') {
    miniGraph = CSVToArray(ECL);
  }
  else if (props.ticker === 'EIX') {
    miniGraph = CSVToArray(EIX);
  }
  else if (props.ticker === 'EW') {
    miniGraph = CSVToArray(EW);
  }
  else if (props.ticker === 'EA') {
    miniGraph = CSVToArray(EA);
  }
  else if (props.ticker === 'EMR') {
    miniGraph = CSVToArray(EMR);
  }
  else if (props.ticker === 'ENPH') {
    miniGraph = CSVToArray(ENPH);
  }
  else if (props.ticker === 'ETR') {
    miniGraph = CSVToArray(ETR);
  }
  else if (props.ticker === 'EOG') {
    miniGraph = CSVToArray(EOG);
  }
  else if (props.ticker === 'EFX') {
    miniGraph = CSVToArray(EFX);
  }
  else if (props.ticker === 'EQIX') {
    miniGraph = CSVToArray(EQIX);
  }
  else if (props.ticker === 'EQR') {
    miniGraph = CSVToArray(EQR);
  }
  else if (props.ticker === 'ESS') {
    miniGraph = CSVToArray(ESS);
  }
  else if (props.ticker === 'EL') {
    miniGraph = CSVToArray(EL);
  }
  else if (props.ticker === 'ETSY') {
    miniGraph = CSVToArray(ETSY);
  }
  else if (props.ticker === 'EVRG') {
    miniGraph = CSVToArray(EVRG);
  }
  else if (props.ticker === 'ES') {
    miniGraph = CSVToArray(ES);
  }
  else if (props.ticker === 'RE') {
    miniGraph = CSVToArray(RE);
  }
  else if (props.ticker === 'EXC') {
    miniGraph = CSVToArray(EXC);
  }
  else if (props.ticker === 'EXPE') {
    miniGraph = CSVToArray(EXPE);
  }
  else if (props.ticker === 'EXPD') {
    miniGraph = CSVToArray(EXPD);
  }
  else if (props.ticker === 'EXR') {
    miniGraph = CSVToArray(EXR);
  }
  else if (props.ticker === 'XOM') {
    miniGraph = CSVToArray(XOM);
  }
  else if (props.ticker === 'FFIV') {
    miniGraph = CSVToArray(FFIV);
  }
  else if (props.ticker === 'FB') {
    miniGraph = CSVToArray(FB);
  }
  else if (props.ticker === 'FAST') {
    miniGraph = CSVToArray(FAST);
  }
  else if (props.ticker === 'FRT') {
    miniGraph = CSVToArray(FRT);
  }
  else if (props.ticker === 'FDX') {
    miniGraph = CSVToArray(FDX);
  }
  else if (props.ticker === 'FIS') {
    miniGraph = CSVToArray(FIS);
  }
  else if (props.ticker === 'FITB') {
    miniGraph = CSVToArray(FITB);
  }
  else if (props.ticker === 'FE') {
    miniGraph = CSVToArray(FE);
  }
  else if (props.ticker === 'FRC') {
    miniGraph = CSVToArray(FRC);
  }
  else if (props.ticker === 'FISV') {
    miniGraph = CSVToArray(FISV);
  }
  else if (props.ticker === 'FLT') {
    miniGraph = CSVToArray(FLT);
  }
  else if (props.ticker === 'FLIR') {
    miniGraph = CSVToArray(FLIR);
  }
  else if (props.ticker === 'FLS') {
    miniGraph = CSVToArray(FLS);
  }
  else if (props.ticker === 'FMC') {
    miniGraph = CSVToArray(FMC);
  }
  else if (props.ticker === 'F') {
    miniGraph = CSVToArray(F);
  }
  else if (props.ticker === 'FTNT') {
    miniGraph = CSVToArray(FTNT);
  }
  else if (props.ticker === 'FTV') {
    miniGraph = CSVToArray(FTV);
  }
  else if (props.ticker === 'FBHS') {
    miniGraph = CSVToArray(FBHS);
  }
  else if (props.ticker === 'FOXA') {
    miniGraph = CSVToArray(FOXA);
  }
  else if (props.ticker === 'FOX') {
    miniGraph = CSVToArray(FOX);
  }
  else if (props.ticker === 'BEN') {
    miniGraph = CSVToArray(BEN);
  }
  else if (props.ticker === 'FCX') {
    miniGraph = CSVToArray(FCX);
  }
  else if (props.ticker === 'GPS') {
    miniGraph = CSVToArray(GPS);
  }
  else if (props.ticker === 'GRMN') {
    miniGraph = CSVToArray(GRMN);
  }
  else if (props.ticker === 'IT') {
    miniGraph = CSVToArray(IT);
  }
  else if (props.ticker === 'GD') {
    miniGraph = CSVToArray(GD);
  }
  else if (props.ticker === 'GE') {
    miniGraph = CSVToArray(GE);
  }
  else if (props.ticker === 'GIS') {
    miniGraph = CSVToArray(GIS);
  }
  else if (props.ticker === 'GM') {
    miniGraph = CSVToArray(GM);
  }
  else if (props.ticker === 'GPC') {
    miniGraph = CSVToArray(GPC);
  }
  else if (props.ticker === 'GILD') {
    miniGraph = CSVToArray(GILD);
  }
  else if (props.ticker === 'GL') {
    miniGraph = CSVToArray(GL);
  }
  else if (props.ticker === 'GPN') {
    miniGraph = CSVToArray(GPN);
  }
  else if (props.ticker === 'GS') {
    miniGraph = CSVToArray(GS);
  }
  else if (props.ticker === 'GWW') {
    miniGraph = CSVToArray(GWW);
  }
  else if (props.ticker === 'HAL') {
    miniGraph = CSVToArray(HAL);
  }
  else if (props.ticker === 'HBI') {
    miniGraph = CSVToArray(HBI);
  }
  else if (props.ticker === 'HIG') {
    miniGraph = CSVToArray(HIG);
  }
  else if (props.ticker === 'HAS') {
    miniGraph = CSVToArray(HAS);
  }
  else if (props.ticker === 'HCA') {
    miniGraph = CSVToArray(HCA);
  }
  else if (props.ticker === 'PEAK') {
    miniGraph = CSVToArray(PEAK);
  }
  else if (props.ticker === 'HSIC') {
    miniGraph = CSVToArray(HSIC);
  }
  else if (props.ticker === 'HSY') {
    miniGraph = CSVToArray(HSY);
  }
  else if (props.ticker === 'HES') {
    miniGraph = CSVToArray(HES);
  }
  else if (props.ticker === 'HPE') {
    miniGraph = CSVToArray(HPE);
  }
  else if (props.ticker === 'HLT') {
    miniGraph = CSVToArray(HLT);
  }
  else if (props.ticker === 'HFC') {
    miniGraph = CSVToArray(HFC);
  }
  else if (props.ticker === 'HOLX') {
    miniGraph = CSVToArray(HOLX);
  }
  else if (props.ticker === 'HD') {
    miniGraph = CSVToArray(HD);
  }
  else if (props.ticker === 'HON') {
    miniGraph = CSVToArray(HON);
  }
  else if (props.ticker === 'HRL') {
    miniGraph = CSVToArray(HRL);
  }
  else if (props.ticker === 'HST') {
    miniGraph = CSVToArray(HST);
  }
  else if (props.ticker === 'HWM') {
    miniGraph = CSVToArray(HWM);
  }
  else if (props.ticker === 'HPQ') {
    miniGraph = CSVToArray(HPQ);
  }
  else if (props.ticker === 'HUM') {
    miniGraph = CSVToArray(HUM);
  }
  else if (props.ticker === 'HBAN') {
    miniGraph = CSVToArray(HBAN);
  }
  else if (props.ticker === 'HII') {
    miniGraph = CSVToArray(HII);
  }
  else if (props.ticker === 'IEX') {
    miniGraph = CSVToArray(IEX);
  }
  else if (props.ticker === 'IDXX') {
    miniGraph = CSVToArray(IDXX);
  }
  else if (props.ticker === 'INFO') {
    miniGraph = CSVToArray(INFO);
  }
  else if (props.ticker === 'ITW') {
    miniGraph = CSVToArray(ITW);
  }
  else if (props.ticker === 'ILMN') {
    miniGraph = CSVToArray(ILMN);
  }
  else if (props.ticker === 'INCY') {
    miniGraph = CSVToArray(INCY);
  }
  else if (props.ticker === 'IR') {
    miniGraph = CSVToArray(IR);
  }
  else if (props.ticker === 'INTC') {
    miniGraph = CSVToArray(INTC);
  }
  else if (props.ticker === 'ICE') {
    miniGraph = CSVToArray(ICE);
  }
  else if (props.ticker === 'IBM') {
    miniGraph = CSVToArray(IBM);
  }
  else if (props.ticker === 'IP') {
    miniGraph = CSVToArray(IP);
  }
  else if (props.ticker === 'IPG') {
    miniGraph = CSVToArray(IPG);
  }
  else if (props.ticker === 'IFF') {
    miniGraph = CSVToArray(IFF);
  }
  else if (props.ticker === 'INTU') {
    miniGraph = CSVToArray(INTU);
  }
  else if (props.ticker === 'ISRG') {
    miniGraph = CSVToArray(ISRG);
  }
  else if (props.ticker === 'IVZ') {
    miniGraph = CSVToArray(IVZ);
  }
  else if (props.ticker === 'IPGP') {
    miniGraph = CSVToArray(IPGP);
  }
  else if (props.ticker === 'IQV') {
    miniGraph = CSVToArray(IQV);
  }
  else if (props.ticker === 'IRM') {
    miniGraph = CSVToArray(IRM);
  }
  else if (props.ticker === 'JKHY') {
    miniGraph = CSVToArray(JKHY);
  }
  else if (props.ticker === 'J') {
    miniGraph = CSVToArray(J);
  }
  else if (props.ticker === 'JBHT') {
    miniGraph = CSVToArray(JBHT);
  }
  else if (props.ticker === 'SJM') {
    miniGraph = CSVToArray(SJM);
  }
  else if (props.ticker === 'JNJ') {
    miniGraph = CSVToArray(JNJ);
  }
  else if (props.ticker === 'JCI') {
    miniGraph = CSVToArray(JCI);
  }
  else if (props.ticker === 'JPM') {
    miniGraph = CSVToArray(JPM);
  }
  else if (props.ticker === 'JNPR') {
    miniGraph = CSVToArray(JNPR);
  }
  else if (props.ticker === 'KSU') {
    miniGraph = CSVToArray(KSU);
  }
  else if (props.ticker === 'K') {
    miniGraph = CSVToArray(K);
  }
  else if (props.ticker === 'KEY') {
    miniGraph = CSVToArray(KEY);
  }
  else if (props.ticker === 'KEYS') {
    miniGraph = CSVToArray(KEYS);
  }
  else if (props.ticker === 'KMB') {
    miniGraph = CSVToArray(KMB);
  }
  else if (props.ticker === 'KIM') {
    miniGraph = CSVToArray(KIM);
  }
  else if (props.ticker === 'KMI') {
    miniGraph = CSVToArray(KMI);
  }
  else if (props.ticker === 'KLAC') {
    miniGraph = CSVToArray(KLAC);
  }
  else if (props.ticker === 'KHC') {
    miniGraph = CSVToArray(KHC);
  }
  else if (props.ticker === 'KR') {
    miniGraph = CSVToArray(KR);
  }
  else if (props.ticker === 'LB') {
    miniGraph = CSVToArray(LB);
  }
  else if (props.ticker === 'LHX') {
    miniGraph = CSVToArray(LHX);
  }
  else if (props.ticker === 'LH') {
    miniGraph = CSVToArray(LH);
  }
  else if (props.ticker === 'LRCX') {
    miniGraph = CSVToArray(LRCX);
  }
  else if (props.ticker === 'LW') {
    miniGraph = CSVToArray(LW);
  }
  else if (props.ticker === 'LVS') {
    miniGraph = CSVToArray(LVS);
  }
  else if (props.ticker === 'LEG') {
    miniGraph = CSVToArray(LEG);
  }
  else if (props.ticker === 'LDOS') {
    miniGraph = CSVToArray(LDOS);
  }
  else if (props.ticker === 'LEN') {
    miniGraph = CSVToArray(LEN);
  }
  else if (props.ticker === 'LLY') {
    miniGraph = CSVToArray(LLY);
  }
  else if (props.ticker === 'LNC') {
    miniGraph = CSVToArray(LNC);
  }
  else if (props.ticker === 'LIN') {
    miniGraph = CSVToArray(LIN);
  }
  else if (props.ticker === 'LYV') {
    miniGraph = CSVToArray(LYV);
  }
  else if (props.ticker === 'LKQ') {
    miniGraph = CSVToArray(LKQ);
  }
  else if (props.ticker === 'LMT') {
    miniGraph = CSVToArray(LMT);
  }
  else if (props.ticker === 'L') {
    miniGraph = CSVToArray(L);
  }
  else if (props.ticker === 'LOW') {
    miniGraph = CSVToArray(LOW);
  }
  else if (props.ticker === 'LUMN') {
    miniGraph = CSVToArray(LUMN);
  }
  else if (props.ticker === 'LYB') {
    miniGraph = CSVToArray(LYB);
  }
  else if (props.ticker === 'MTB') {
    miniGraph = CSVToArray(MTB);
  }
  else if (props.ticker === 'MRO') {
    miniGraph = CSVToArray(MRO);
  }
  else if (props.ticker === 'MPC') {
    miniGraph = CSVToArray(MPC);
  }
  else if (props.ticker === 'MKTX') {
    miniGraph = CSVToArray(MKTX);
  }
  else if (props.ticker === 'MAR') {
    miniGraph = CSVToArray(MAR);
  }
  else if (props.ticker === 'MMC') {
    miniGraph = CSVToArray(MMC);
  }
  else if (props.ticker === 'MLM') {
    miniGraph = CSVToArray(MLM);
  }
  else if (props.ticker === 'MAS') {
    miniGraph = CSVToArray(MAS);
  }
  else if (props.ticker === 'MA') {
    miniGraph = CSVToArray(MA);
  }
  else if (props.ticker === 'MKC') {
    miniGraph = CSVToArray(MKC);
  }
  else if (props.ticker === 'MXIM') {
    miniGraph = CSVToArray(MXIM);
  }
  else if (props.ticker === 'MCD') {
    miniGraph = CSVToArray(MCD);
  }
  else if (props.ticker === 'MCK') {
    miniGraph = CSVToArray(MCK);
  }
  else if (props.ticker === 'MDT') {
    miniGraph = CSVToArray(MDT);
  }
  else if (props.ticker === 'MRK') {
    miniGraph = CSVToArray(MRK);
  }
  else if (props.ticker === 'MET') {
    miniGraph = CSVToArray(MET);
  }
  else if (props.ticker === 'MTD') {
    miniGraph = CSVToArray(MTD);
  }
  else if (props.ticker === 'MGM') {
    miniGraph = CSVToArray(MGM);
  }
  else if (props.ticker === 'MCHP') {
    miniGraph = CSVToArray(MCHP);
  }
  else if (props.ticker === 'MU') {
    miniGraph = CSVToArray(MU);
  }
  else if (props.ticker === 'MSFT') {
    miniGraph = CSVToArray(MSFT);
  }
  else if (props.ticker === 'MAA') {
    miniGraph = CSVToArray(MAA);
  }
  else if (props.ticker === 'MHK') {
    miniGraph = CSVToArray(MHK);
  }
  else if (props.ticker === 'TAP') {
    miniGraph = CSVToArray(TAP);
  }
  else if (props.ticker === 'MDLZ') {
    miniGraph = CSVToArray(MDLZ);
  }
  else if (props.ticker === 'MPWR') {
    miniGraph = CSVToArray(MPWR);
  }
  else if (props.ticker === 'MNST') {
    miniGraph = CSVToArray(MNST);
  }
  else if (props.ticker === 'MCO') {
    miniGraph = CSVToArray(MCO);
  }
  else if (props.ticker === 'MS') {
    miniGraph = CSVToArray(MS);
  }
  else if (props.ticker === 'MOS') {
    miniGraph = CSVToArray(MOS);
  }
  else if (props.ticker === 'MSI') {
    miniGraph = CSVToArray(MSI);
  }
  else if (props.ticker === 'MSCI') {
    miniGraph = CSVToArray(MSCI);
  }
  else if (props.ticker === 'NDAQ') {
    miniGraph = CSVToArray(NDAQ);
  }
  else if (props.ticker === 'NTAP') {
    miniGraph = CSVToArray(NTAP);
  }
  else if (props.ticker === 'NFLX') {
    miniGraph = CSVToArray(NFLX);
  }
  else if (props.ticker === 'NWL') {
    miniGraph = CSVToArray(NWL);
  }
  else if (props.ticker === 'NEM') {
    miniGraph = CSVToArray(NEM);
  }
  else if (props.ticker === 'NWSA') {
    miniGraph = CSVToArray(NWSA);
  }
  else if (props.ticker === 'NWS') {
    miniGraph = CSVToArray(NWS);
  }
  else if (props.ticker === 'NEE') {
    miniGraph = CSVToArray(NEE);
  }
  else if (props.ticker === 'NLSN') {
    miniGraph = CSVToArray(NLSN);
  }
  else if (props.ticker === 'NKE') {
    miniGraph = CSVToArray(NKE);
  }
  else if (props.ticker === 'NI') {
    miniGraph = CSVToArray(NI);
  }
  else if (props.ticker === 'NSC') {
    miniGraph = CSVToArray(NSC);
  }
  else if (props.ticker === 'NTRS') {
    miniGraph = CSVToArray(NTRS);
  }
  else if (props.ticker === 'NOC') {
    miniGraph = CSVToArray(NOC);
  }
  else if (props.ticker === 'NLOK') {
    miniGraph = CSVToArray(NLOK);
  }
  else if (props.ticker === 'NCLH') {
    miniGraph = CSVToArray(NCLH);
  }
  else if (props.ticker === 'NOV') {
    miniGraph = CSVToArray(NOV);
  }
  else if (props.ticker === 'NRG') {
    miniGraph = CSVToArray(NRG);
  }
  else if (props.ticker === 'NUE') {
    miniGraph = CSVToArray(NUE);
  }
  else if (props.ticker === 'NVDA') {
    miniGraph = CSVToArray(NVDA);
  }
  else if (props.ticker === 'NVR') {
    miniGraph = CSVToArray(NVR);
  }
  else if (props.ticker === 'ORLY') {
    miniGraph = CSVToArray(ORLY);
  }
  else if (props.ticker === 'OXY') {
    miniGraph = CSVToArray(OXY);
  }
  else if (props.ticker === 'ODFL') {
    miniGraph = CSVToArray(ODFL);
  }
  else if (props.ticker === 'OMC') {
    miniGraph = CSVToArray(OMC);
  }
  else if (props.ticker === 'OKE') {
    miniGraph = CSVToArray(OKE);
  }
  else if (props.ticker === 'ORCL') {
    miniGraph = CSVToArray(ORCL);
  }
  else if (props.ticker === 'OTIS') {
    miniGraph = CSVToArray(OTIS);
  }
  else if (props.ticker === 'PCAR') {
    miniGraph = CSVToArray(PCAR);
  }
  else if (props.ticker === 'PKG') {
    miniGraph = CSVToArray(PKG);
  }
  else if (props.ticker === 'PH') {
    miniGraph = CSVToArray(PH);
  }
  else if (props.ticker === 'PAYX') {
    miniGraph = CSVToArray(PAYX);
  }
  else if (props.ticker === 'PAYC') {
    miniGraph = CSVToArray(PAYC);
  }
  else if (props.ticker === 'PYPL') {
    miniGraph = CSVToArray(PYPL);
  }
  else if (props.ticker === 'PNR') {
    miniGraph = CSVToArray(PNR);
  }
  else if (props.ticker === 'PBCT') {
    miniGraph = CSVToArray(PBCT);
  }
  else if (props.ticker === 'PEP') {
    miniGraph = CSVToArray(PEP);
  }
  else if (props.ticker === 'PKI') {
    miniGraph = CSVToArray(PKI);
  }
  else if (props.ticker === 'PRGO') {
    miniGraph = CSVToArray(PRGO);
  }
  else if (props.ticker === 'PFE') {
    miniGraph = CSVToArray(PFE);
  }
  else if (props.ticker === 'PM') {
    miniGraph = CSVToArray(PM);
  }
  else if (props.ticker === 'PSX') {
    miniGraph = CSVToArray(PSX);
  }
  else if (props.ticker === 'PNW') {
    miniGraph = CSVToArray(PNW);
  }
  else if (props.ticker === 'PXD') {
    miniGraph = CSVToArray(PXD);
  }
  else if (props.ticker === 'PNC') {
    miniGraph = CSVToArray(PNC);
  }
  else if (props.ticker === 'POOL') {
    miniGraph = CSVToArray(POOL);
  }
  else if (props.ticker === 'PPG') {
    miniGraph = CSVToArray(PPG);
  }
  else if (props.ticker === 'PPL') {
    miniGraph = CSVToArray(PPL);
  }
  else if (props.ticker === 'PFG') {
    miniGraph = CSVToArray(PFG);
  }
  else if (props.ticker === 'PG') {
    miniGraph = CSVToArray(PG);
  }
  else if (props.ticker === 'PGR') {
    miniGraph = CSVToArray(PGR);
  }
  else if (props.ticker === 'PLD') {
    miniGraph = CSVToArray(PLD);
  }
  else if (props.ticker === 'PRU') {
    miniGraph = CSVToArray(PRU);
  }
  else if (props.ticker === 'PEG') {
    miniGraph = CSVToArray(PEG);
  }
  else if (props.ticker === 'PSA') {
    miniGraph = CSVToArray(PSA);
  }
  else if (props.ticker === 'PHM') {
    miniGraph = CSVToArray(PHM);
  }
  else if (props.ticker === 'PVH') {
    miniGraph = CSVToArray(PVH);
  }
  else if (props.ticker === 'QRVO') {
    miniGraph = CSVToArray(QRVO);
  }
  else if (props.ticker === 'PWR') {
    miniGraph = CSVToArray(PWR);
  }
  else if (props.ticker === 'QCOM') {
    miniGraph = CSVToArray(QCOM);
  }
  else if (props.ticker === 'DGX') {
    miniGraph = CSVToArray(DGX);
  }
  else if (props.ticker === 'RL') {
    miniGraph = CSVToArray(RL);
  }
  else if (props.ticker === 'RJF') {
    miniGraph = CSVToArray(RJF);
  }
  else if (props.ticker === 'RTX') {
    miniGraph = CSVToArray(RTX);
  }
  else if (props.ticker === 'O') {
    miniGraph = CSVToArray(O);
  }
  else if (props.ticker === 'REG') {
    miniGraph = CSVToArray(REG);
  }
  else if (props.ticker === 'REGN') {
    miniGraph = CSVToArray(REGN);
  }
  else if (props.ticker === 'RF') {
    miniGraph = CSVToArray(RF);
  }
  else if (props.ticker === 'RSG') {
    miniGraph = CSVToArray(RSG);
  }
  else if (props.ticker === 'RMD') {
    miniGraph = CSVToArray(RMD);
  }
  else if (props.ticker === 'RHI') {
    miniGraph = CSVToArray(RHI);
  }
  else if (props.ticker === 'ROK') {
    miniGraph = CSVToArray(ROK);
  }
  else if (props.ticker === 'ROL') {
    miniGraph = CSVToArray(ROL);
  }
  else if (props.ticker === 'ROP') {
    miniGraph = CSVToArray(ROP);
  }
  else if (props.ticker === 'ROST') {
    miniGraph = CSVToArray(ROST);
  }
  else if (props.ticker === 'RCL') {
    miniGraph = CSVToArray(RCL);
  }
  else if (props.ticker === 'SPGI') {
    miniGraph = CSVToArray(SPGI);
  }
  else if (props.ticker === 'CRM') {
    miniGraph = CSVToArray(CRM);
  }
  else if (props.ticker === 'SBAC') {
    miniGraph = CSVToArray(SBAC);
  }
  else if (props.ticker === 'SLB') {
    miniGraph = CSVToArray(SLB);
  }
  else if (props.ticker === 'STX') {
    miniGraph = CSVToArray(STX);
  }
  else if (props.ticker === 'SEE') {
    miniGraph = CSVToArray(SEE);
  }
  else if (props.ticker === 'SRE') {
    miniGraph = CSVToArray(SRE);
  }
  else if (props.ticker === 'NOW') {
    miniGraph = CSVToArray(NOW);
  }
  else if (props.ticker === 'SHW') {
    miniGraph = CSVToArray(SHW);
  }
  else if (props.ticker === 'SPG') {
    miniGraph = CSVToArray(SPG);
  }
  else if (props.ticker === 'SWKS') {
    miniGraph = CSVToArray(SWKS);
  }
  else if (props.ticker === 'SLG') {
    miniGraph = CSVToArray(SLG);
  }
  else if (props.ticker === 'SNA') {
    miniGraph = CSVToArray(SNA);
  }
  else if (props.ticker === 'SO') {
    miniGraph = CSVToArray(SO);
  }
  else if (props.ticker === 'LUV') {
    miniGraph = CSVToArray(LUV);
  }
  else if (props.ticker === 'SWK') {
    miniGraph = CSVToArray(SWK);
  }
  else if (props.ticker === 'SBUX') {
    miniGraph = CSVToArray(SBUX);
  }
  else if (props.ticker === 'STT') {
    miniGraph = CSVToArray(STT);
  }
  else if (props.ticker === 'STE') {
    miniGraph = CSVToArray(STE);
  }
  else if (props.ticker === 'SYK') {
    miniGraph = CSVToArray(SYK);
  }
  else if (props.ticker === 'SIVB') {
    miniGraph = CSVToArray(SIVB);
  }
  else if (props.ticker === 'SYF') {
    miniGraph = CSVToArray(SYF);
  }
  else if (props.ticker === 'SNPS') {
    miniGraph = CSVToArray(SNPS);
  }
  else if (props.ticker === 'SYY') {
    miniGraph = CSVToArray(SYY);
  }
  else if (props.ticker === 'TMUS') {
    miniGraph = CSVToArray(TMUS);
  }
  else if (props.ticker === 'TROW') {
    miniGraph = CSVToArray(TROW);
  }
  else if (props.ticker === 'TTWO') {
    miniGraph = CSVToArray(TTWO);
  }
  else if (props.ticker === 'TPR') {
    miniGraph = CSVToArray(TPR);
  }
  else if (props.ticker === 'TGT') {
    miniGraph = CSVToArray(TGT);
  }
  else if (props.ticker === 'TEL') {
    miniGraph = CSVToArray(TEL);
  }
  else if (props.ticker === 'TDY') {
    miniGraph = CSVToArray(TDY);
  }
  else if (props.ticker === 'TFX') {
    miniGraph = CSVToArray(TFX);
  }
  else if (props.ticker === 'TER') {
    miniGraph = CSVToArray(TER);
  }
  else if (props.ticker === 'TSLA') {
    miniGraph = CSVToArray(TSLA);
  }
  else if (props.ticker === 'TXN') {
    miniGraph = CSVToArray(TXN);
  }
  else if (props.ticker === 'TXT') {
    miniGraph = CSVToArray(TXT);
  }
  else if (props.ticker === 'TMO') {
    miniGraph = CSVToArray(TMO);
  }
  else if (props.ticker === 'TJX') {
    miniGraph = CSVToArray(TJX);
  }
  else if (props.ticker === 'TSCO') {
    miniGraph = CSVToArray(TSCO);
  }
  else if (props.ticker === 'TT') {
    miniGraph = CSVToArray(TT);
  }
  else if (props.ticker === 'TDG') {
    miniGraph = CSVToArray(TDG);
  }
  else if (props.ticker === 'TRV') {
    miniGraph = CSVToArray(TRV);
  }
  else if (props.ticker === 'TRMB') {
    miniGraph = CSVToArray(TRMB);
  }
  else if (props.ticker === 'TFC') {
    miniGraph = CSVToArray(TFC);
  }
  else if (props.ticker === 'TWTR') {
    miniGraph = CSVToArray(TWTR);
  }
  else if (props.ticker === 'TYL') {
    miniGraph = CSVToArray(TYL);
  }
  else if (props.ticker === 'TSN') {
    miniGraph = CSVToArray(TSN);
  }
  else if (props.ticker === 'UDR') {
    miniGraph = CSVToArray(UDR);
  }
  else if (props.ticker === 'ULTA') {
    miniGraph = CSVToArray(ULTA);
  }
  else if (props.ticker === 'USB') {
    miniGraph = CSVToArray(USB);
  }
  else if (props.ticker === 'UAA') {
    miniGraph = CSVToArray(UAA);
  }
  else if (props.ticker === 'UA') {
    miniGraph = CSVToArray(UA);
  }
  else if (props.ticker === 'UNP') {
    miniGraph = CSVToArray(UNP);
  }
  else if (props.ticker === 'UAL') {
    miniGraph = CSVToArray(UAL);
  }
  else if (props.ticker === 'UNH') {
    miniGraph = CSVToArray(UNH);
  }
  else if (props.ticker === 'UPS') {
    miniGraph = CSVToArray(UPS);
  }
  else if (props.ticker === 'URI') {
    miniGraph = CSVToArray(URI);
  }
  else if (props.ticker === 'UHS') {
    miniGraph = CSVToArray(UHS);
  }
  else if (props.ticker === 'UNM') {
    miniGraph = CSVToArray(UNM);
  }
  else if (props.ticker === 'VLO') {
    miniGraph = CSVToArray(VLO);
  }
  else if (props.ticker === 'VAR') {
    miniGraph = CSVToArray(VAR);
  }
  else if (props.ticker === 'VTR') {
    miniGraph = CSVToArray(VTR);
  }
  else if (props.ticker === 'VRSN') {
    miniGraph = CSVToArray(VRSN);
  }
  else if (props.ticker === 'VRSK') {
    miniGraph = CSVToArray(VRSK);
  }
  else if (props.ticker === 'VZ') {
    miniGraph = CSVToArray(VZ);
  }
  else if (props.ticker === 'VRTX') {
    miniGraph = CSVToArray(VRTX);
  }
  else if (props.ticker === 'VFC') {
    miniGraph = CSVToArray(VFC);
  }
  else if (props.ticker === 'VIAC') {
    miniGraph = CSVToArray(VIAC);
  }
  else if (props.ticker === 'VTRS') {
    miniGraph = CSVToArray(VTRS);
  }
  else if (props.ticker === 'V') {
    miniGraph = CSVToArray(V);
  }
  else if (props.ticker === 'VNT') {
    miniGraph = CSVToArray(VNT);
  }
  else if (props.ticker === 'VNO') {
    miniGraph = CSVToArray(VNO);
  }
  else if (props.ticker === 'VMC') {
    miniGraph = CSVToArray(VMC);
  }
  else if (props.ticker === 'WRB') {
    miniGraph = CSVToArray(WRB);
  }
  else if (props.ticker === 'WAB') {
    miniGraph = CSVToArray(WAB);
  }
  else if (props.ticker === 'WMT') {
    miniGraph = CSVToArray(WMT);
  }
  else if (props.ticker === 'WBA') {
    miniGraph = CSVToArray(WBA);
  }
  else if (props.ticker === 'DIS') {
    miniGraph = CSVToArray(DIS);
  }
  else if (props.ticker === 'WM') {
    miniGraph = CSVToArray(WM);
  }
  else if (props.ticker === 'WAT') {
    miniGraph = CSVToArray(WAT);
  }
  else if (props.ticker === 'WEC') {
    miniGraph = CSVToArray(WEC);
  }
  else if (props.ticker === 'WFC') {
    miniGraph = CSVToArray(WFC);
  }
  else if (props.ticker === 'WELL') {
    miniGraph = CSVToArray(WELL);
  }
  else if (props.ticker === 'WST') {
    miniGraph = CSVToArray(WST);
  }
  else if (props.ticker === 'WDC') {
    miniGraph = CSVToArray(WDC);
  }
  else if (props.ticker === 'WU') {
    miniGraph = CSVToArray(WU);
  }
  else if (props.ticker === 'WRK') {
    miniGraph = CSVToArray(WRK);
  }
  else if (props.ticker === 'WY') {
    miniGraph = CSVToArray(WY);
  }
  else if (props.ticker === 'WHR') {
    miniGraph = CSVToArray(WHR);
  }
  else if (props.ticker === 'WMB') {
    miniGraph = CSVToArray(WMB);
  }
  else if (props.ticker === 'WLTW') {
    miniGraph = CSVToArray(WLTW);
  }
  else if (props.ticker === 'WYNN') {
    miniGraph = CSVToArray(WYNN);
  }
  else if (props.ticker === 'XEL') {
    miniGraph = CSVToArray(XEL);
  }
  else if (props.ticker === 'XRX') {
    miniGraph = CSVToArray(XRX);
  }
  else if (props.ticker === 'XLNX') {
    miniGraph = CSVToArray(XLNX);
  }
  else if (props.ticker === 'XYL') {
    miniGraph = CSVToArray(XYL);
  }
  else if (props.ticker === 'YUM') {
    miniGraph = CSVToArray(YUM);
  }
  else if (props.ticker === 'ZBRA') {
    miniGraph = CSVToArray(ZBRA);
  }
  else if (props.ticker === 'ZBH') {
    miniGraph = CSVToArray(ZBH);
  }
  else if (props.ticker === 'ZION') {
    miniGraph = CSVToArray(ZION);
  }
  else if (props.ticker === 'ZTS') {
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
    <h1 style={style1}>{props.ticker}</h1>
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
