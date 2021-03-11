import ReactDOM from "react-dom";
import { VictoryLine, VictoryChart, VictoryPie } from "victory";
import React from "react";
import Button from "@material-ui/core/Button";
import "./functions/stock-interactions.js";
import MMM1M from "./1m_data/MMM.csv";
import MMM3M from "./3m_data/MMM.csv";
import MMM6M from "./6m_data/MMM.csv";
import MMM1Y from "./1y_data/MMM.csv";
import ABT1M from "./1m_data/ABT.csv";
import ABT3M from "./3m_data/ABT.csv";
import ABT6M from "./6m_data/ABT.csv";
import ABT1Y from "./1y_data/ABT.csv";
import ABBV1M from "./1m_data/ABBV.csv";
import ABBV3M from "./3m_data/ABBV.csv";
import ABBV6M from "./6m_data/ABBV.csv";
import ABBV1Y from "./1y_data/ABBV.csv";
import ABMD1M from "./1m_data/ABMD.csv";
import ABMD3M from "./3m_data/ABMD.csv";
import ABMD6M from "./6m_data/ABMD.csv";
import ABMD1Y from "./1y_data/ABMD.csv";
import ACN1M from "./1m_data/ACN.csv";
import ACN3M from "./3m_data/ACN.csv";
import ACN6M from "./6m_data/ACN.csv";
import ACN1Y from "./1y_data/ACN.csv";
import ATVI1M from "./1m_data/ATVI.csv";
import ATVI3M from "./3m_data/ATVI.csv";
import ATVI6M from "./6m_data/ATVI.csv";
import ATVI1Y from "./1y_data/ATVI.csv";
import ADBE1M from "./1m_data/ADBE.csv";
import ADBE3M from "./3m_data/ADBE.csv";
import ADBE6M from "./6m_data/ADBE.csv";
import ADBE1Y from "./1y_data/ADBE.csv";
import AMD1M from "./1m_data/AMD.csv";
import AMD3M from "./3m_data/AMD.csv";
import AMD6M from "./6m_data/AMD.csv";
import AMD1Y from "./1y_data/AMD.csv";
import AAP1M from "./1m_data/AAP.csv";
import AAP3M from "./3m_data/AAP.csv";
import AAP6M from "./6m_data/AAP.csv";
import AAP1Y from "./1y_data/AAP.csv";
import AES1M from "./1m_data/AES.csv";
import AES3M from "./3m_data/AES.csv";
import AES6M from "./6m_data/AES.csv";
import AES1Y from "./1y_data/AES.csv";
import AFL1M from "./1m_data/AFL.csv";
import AFL3M from "./3m_data/AFL.csv";
import AFL6M from "./6m_data/AFL.csv";
import AFL1Y from "./1y_data/AFL.csv";
import A1M from "./1m_data/A.csv";
import A3M from "./3m_data/A.csv";
import A6M from "./6m_data/A.csv";
import A1Y from "./1y_data/A.csv";
import APD1M from "./1m_data/APD.csv";
import APD3M from "./3m_data/APD.csv";
import APD6M from "./6m_data/APD.csv";
import APD1Y from "./1y_data/APD.csv";
import AKAM1M from "./1m_data/AKAM.csv";
import AKAM3M from "./3m_data/AKAM.csv";
import AKAM6M from "./6m_data/AKAM.csv";
import AKAM1Y from "./1y_data/AKAM.csv";
import ALK1M from "./1m_data/ALK.csv";
import ALK3M from "./3m_data/ALK.csv";
import ALK6M from "./6m_data/ALK.csv";
import ALK1Y from "./1y_data/ALK.csv";
import ALB1M from "./1m_data/ALB.csv";
import ALB3M from "./3m_data/ALB.csv";
import ALB6M from "./6m_data/ALB.csv";
import ALB1Y from "./1y_data/ALB.csv";
import ARE1M from "./1m_data/ARE.csv";
import ARE3M from "./3m_data/ARE.csv";
import ARE6M from "./6m_data/ARE.csv";
import ARE1Y from "./1y_data/ARE.csv";
import ALXN1M from "./1m_data/ALXN.csv";
import ALXN3M from "./3m_data/ALXN.csv";
import ALXN6M from "./6m_data/ALXN.csv";
import ALXN1Y from "./1y_data/ALXN.csv";
import ALGN1M from "./1m_data/ALGN.csv";
import ALGN3M from "./3m_data/ALGN.csv";
import ALGN6M from "./6m_data/ALGN.csv";
import ALGN1Y from "./1y_data/ALGN.csv";
import ALLE1M from "./1m_data/ALLE.csv";
import ALLE3M from "./3m_data/ALLE.csv";
import ALLE6M from "./6m_data/ALLE.csv";
import ALLE1Y from "./1y_data/ALLE.csv";
import LNT1M from "./1m_data/LNT.csv";
import LNT3M from "./3m_data/LNT.csv";
import LNT6M from "./6m_data/LNT.csv";
import LNT1Y from "./1y_data/LNT.csv";
import ALL1M from "./1m_data/ALL.csv";
import ALL3M from "./3m_data/ALL.csv";
import ALL6M from "./6m_data/ALL.csv";
import ALL1Y from "./1y_data/ALL.csv";
import GOOGL1M from "./1m_data/GOOGL.csv";
import GOOGL3M from "./3m_data/GOOGL.csv";
import GOOGL6M from "./6m_data/GOOGL.csv";
import GOOGL1Y from "./1y_data/GOOGL.csv";
import GOOG1M from "./1m_data/GOOG.csv";
import GOOG3M from "./3m_data/GOOG.csv";
import GOOG6M from "./6m_data/GOOG.csv";
import GOOG1Y from "./1y_data/GOOG.csv";
import MO1M from "./1m_data/MO.csv";
import MO3M from "./3m_data/MO.csv";
import MO6M from "./6m_data/MO.csv";
import MO1Y from "./1y_data/MO.csv";
import AMZN1M from "./1m_data/AMZN.csv";
import AMZN3M from "./3m_data/AMZN.csv";
import AMZN6M from "./6m_data/AMZN.csv";
import AMZN1Y from "./1y_data/AMZN.csv";
import AMCR1M from "./1m_data/AMCR.csv";
import AMCR3M from "./3m_data/AMCR.csv";
import AMCR6M from "./6m_data/AMCR.csv";
import AMCR1Y from "./1y_data/AMCR.csv";
import AEE1M from "./1m_data/AEE.csv";
import AEE3M from "./3m_data/AEE.csv";
import AEE6M from "./6m_data/AEE.csv";
import AEE1Y from "./1y_data/AEE.csv";
import AAL1M from "./1m_data/AAL.csv";
import AAL3M from "./3m_data/AAL.csv";
import AAL6M from "./6m_data/AAL.csv";
import AAL1Y from "./1y_data/AAL.csv";
import AEP1M from "./1m_data/AEP.csv";
import AEP3M from "./3m_data/AEP.csv";
import AEP6M from "./6m_data/AEP.csv";
import AEP1Y from "./1y_data/AEP.csv";
import AXP1M from "./1m_data/AXP.csv";
import AXP3M from "./3m_data/AXP.csv";
import AXP6M from "./6m_data/AXP.csv";
import AXP1Y from "./1y_data/AXP.csv";
import AIG1M from "./1m_data/AIG.csv";
import AIG3M from "./3m_data/AIG.csv";
import AIG6M from "./6m_data/AIG.csv";
import AIG1Y from "./1y_data/AIG.csv";
import AMT1M from "./1m_data/AMT.csv";
import AMT3M from "./3m_data/AMT.csv";
import AMT6M from "./6m_data/AMT.csv";
import AMT1Y from "./1y_data/AMT.csv";
import AWK1M from "./1m_data/AWK.csv";
import AWK3M from "./3m_data/AWK.csv";
import AWK6M from "./6m_data/AWK.csv";
import AWK1Y from "./1y_data/AWK.csv";
import AMP1M from "./1m_data/AMP.csv";
import AMP3M from "./3m_data/AMP.csv";
import AMP6M from "./6m_data/AMP.csv";
import AMP1Y from "./1y_data/AMP.csv";
import ABC1M from "./1m_data/ABC.csv";
import ABC3M from "./3m_data/ABC.csv";
import ABC6M from "./6m_data/ABC.csv";
import ABC1Y from "./1y_data/ABC.csv";
import AME1M from "./1m_data/AME.csv";
import AME3M from "./3m_data/AME.csv";
import AME6M from "./6m_data/AME.csv";
import AME1Y from "./1y_data/AME.csv";
import AMGN1M from "./1m_data/AMGN.csv";
import AMGN3M from "./3m_data/AMGN.csv";
import AMGN6M from "./6m_data/AMGN.csv";
import AMGN1Y from "./1y_data/AMGN.csv";
import APH1M from "./1m_data/APH.csv";
import APH3M from "./3m_data/APH.csv";
import APH6M from "./6m_data/APH.csv";
import APH1Y from "./1y_data/APH.csv";
import ADI1M from "./1m_data/ADI.csv";
import ADI3M from "./3m_data/ADI.csv";
import ADI6M from "./6m_data/ADI.csv";
import ADI1Y from "./1y_data/ADI.csv";
import ANSS1M from "./1m_data/ANSS.csv";
import ANSS3M from "./3m_data/ANSS.csv";
import ANSS6M from "./6m_data/ANSS.csv";
import ANSS1Y from "./1y_data/ANSS.csv";
import ANTM1M from "./1m_data/ANTM.csv";
import ANTM3M from "./3m_data/ANTM.csv";
import ANTM6M from "./6m_data/ANTM.csv";
import ANTM1Y from "./1y_data/ANTM.csv";
import AON1M from "./1m_data/AON.csv";
import AON3M from "./3m_data/AON.csv";
import AON6M from "./6m_data/AON.csv";
import AON1Y from "./1y_data/AON.csv";
import AOS1M from "./1m_data/AOS.csv";
import AOS3M from "./3m_data/AOS.csv";
import AOS6M from "./6m_data/AOS.csv";
import AOS1Y from "./1y_data/AOS.csv";
import APA1M from "./1m_data/APA.csv";
import APA3M from "./3m_data/APA.csv";
import APA6M from "./6m_data/APA.csv";
import APA1Y from "./1y_data/APA.csv";
import AAPL1M from "./1m_data/AAPL.csv";
import AAPL3M from "./3m_data/AAPL.csv";
import AAPL6M from "./6m_data/AAPL.csv";
import AAPL1Y from "./1y_data/AAPL.csv";
import AMAT1M from "./1m_data/AMAT.csv";
import AMAT3M from "./3m_data/AMAT.csv";
import AMAT6M from "./6m_data/AMAT.csv";
import AMAT1Y from "./1y_data/AMAT.csv";
import APTV1M from "./1m_data/APTV.csv";
import APTV3M from "./3m_data/APTV.csv";
import APTV6M from "./6m_data/APTV.csv";
import APTV1Y from "./1y_data/APTV.csv";
import ADM1M from "./1m_data/ADM.csv";
import ADM3M from "./3m_data/ADM.csv";
import ADM6M from "./6m_data/ADM.csv";
import ADM1Y from "./1y_data/ADM.csv";
import ANET1M from "./1m_data/ANET.csv";
import ANET3M from "./3m_data/ANET.csv";
import ANET6M from "./6m_data/ANET.csv";
import ANET1Y from "./1y_data/ANET.csv";
import AJG1M from "./1m_data/AJG.csv";
import AJG3M from "./3m_data/AJG.csv";
import AJG6M from "./6m_data/AJG.csv";
import AJG1Y from "./1y_data/AJG.csv";
import AIZ1M from "./1m_data/AIZ.csv";
import AIZ3M from "./3m_data/AIZ.csv";
import AIZ6M from "./6m_data/AIZ.csv";
import AIZ1Y from "./1y_data/AIZ.csv";
import T1M from "./1m_data/T.csv";
import T3M from "./3m_data/T.csv";
import T6M from "./6m_data/T.csv";
import T1Y from "./1y_data/T.csv";
import ATO1M from "./1m_data/ATO.csv";
import ATO3M from "./3m_data/ATO.csv";
import ATO6M from "./6m_data/ATO.csv";
import ATO1Y from "./1y_data/ATO.csv";
import ADSK1M from "./1m_data/ADSK.csv";
import ADSK3M from "./3m_data/ADSK.csv";
import ADSK6M from "./6m_data/ADSK.csv";
import ADSK1Y from "./1y_data/ADSK.csv";
import ADP1M from "./1m_data/ADP.csv";
import ADP3M from "./3m_data/ADP.csv";
import ADP6M from "./6m_data/ADP.csv";
import ADP1Y from "./1y_data/ADP.csv";
import AZO1M from "./1m_data/AZO.csv";
import AZO3M from "./3m_data/AZO.csv";
import AZO6M from "./6m_data/AZO.csv";
import AZO1Y from "./1y_data/AZO.csv";
import AVB1M from "./1m_data/AVB.csv";
import AVB3M from "./3m_data/AVB.csv";
import AVB6M from "./6m_data/AVB.csv";
import AVB1Y from "./1y_data/AVB.csv";
import AVY1M from "./1m_data/AVY.csv";
import AVY3M from "./3m_data/AVY.csv";
import AVY6M from "./6m_data/AVY.csv";
import AVY1Y from "./1y_data/AVY.csv";
import BKR1M from "./1m_data/BKR.csv";
import BKR3M from "./3m_data/BKR.csv";
import BKR6M from "./6m_data/BKR.csv";
import BKR1Y from "./1y_data/BKR.csv";
import BLL1M from "./1m_data/BLL.csv";
import BLL3M from "./3m_data/BLL.csv";
import BLL6M from "./6m_data/BLL.csv";
import BLL1Y from "./1y_data/BLL.csv";
import BAC1M from "./1m_data/BAC.csv";
import BAC3M from "./3m_data/BAC.csv";
import BAC6M from "./6m_data/BAC.csv";
import BAC1Y from "./1y_data/BAC.csv";
import BK1M from "./1m_data/BK.csv";
import BK3M from "./3m_data/BK.csv";
import BK6M from "./6m_data/BK.csv";
import BK1Y from "./1y_data/BK.csv";
import BAX1M from "./1m_data/BAX.csv";
import BAX3M from "./3m_data/BAX.csv";
import BAX6M from "./6m_data/BAX.csv";
import BAX1Y from "./1y_data/BAX.csv";
import BDX1M from "./1m_data/BDX.csv";
import BDX3M from "./3m_data/BDX.csv";
import BDX6M from "./6m_data/BDX.csv";
import BDX1Y from "./1y_data/BDX.csv";
import BRKB1M from "./1m_data/BRK.B.csv";
import BRKB3M from "./3m_data/BRK.B.csv";
import BRKB6M from "./6m_data/BRK.B.csv";
import BRKB1Y from "./1y_data/BRK.B.csv";
import BBY1M from "./1m_data/BBY.csv";
import BBY3M from "./3m_data/BBY.csv";
import BBY6M from "./6m_data/BBY.csv";
import BBY1Y from "./1y_data/BBY.csv";
import BIO1M from "./1m_data/BIO.csv";
import BIO3M from "./3m_data/BIO.csv";
import BIO6M from "./6m_data/BIO.csv";
import BIO1Y from "./1y_data/BIO.csv";
import BIIB1M from "./1m_data/BIIB.csv";
import BIIB3M from "./3m_data/BIIB.csv";
import BIIB6M from "./6m_data/BIIB.csv";
import BIIB1Y from "./1y_data/BIIB.csv";
import BLK1M from "./1m_data/BLK.csv";
import BLK3M from "./3m_data/BLK.csv";
import BLK6M from "./6m_data/BLK.csv";
import BLK1Y from "./1y_data/BLK.csv";
import BA1M from "./1m_data/BA.csv";
import BA3M from "./3m_data/BA.csv";
import BA6M from "./6m_data/BA.csv";
import BA1Y from "./1y_data/BA.csv";
import BKNG1M from "./1m_data/BKNG.csv";
import BKNG3M from "./3m_data/BKNG.csv";
import BKNG6M from "./6m_data/BKNG.csv";
import BKNG1Y from "./1y_data/BKNG.csv";
import BWA1M from "./1m_data/BWA.csv";
import BWA3M from "./3m_data/BWA.csv";
import BWA6M from "./6m_data/BWA.csv";
import BWA1Y from "./1y_data/BWA.csv";
import BXP1M from "./1m_data/BXP.csv";
import BXP3M from "./3m_data/BXP.csv";
import BXP6M from "./6m_data/BXP.csv";
import BXP1Y from "./1y_data/BXP.csv";
import BSX1M from "./1m_data/BSX.csv";
import BSX3M from "./3m_data/BSX.csv";
import BSX6M from "./6m_data/BSX.csv";
import BSX1Y from "./1y_data/BSX.csv";
import BMY1M from "./1m_data/BMY.csv";
import BMY3M from "./3m_data/BMY.csv";
import BMY6M from "./6m_data/BMY.csv";
import BMY1Y from "./1y_data/BMY.csv";
import AVGO1M from "./1m_data/AVGO.csv";
import AVGO3M from "./3m_data/AVGO.csv";
import AVGO6M from "./6m_data/AVGO.csv";
import AVGO1Y from "./1y_data/AVGO.csv";
import BR1M from "./1m_data/BR.csv";
import BR3M from "./3m_data/BR.csv";
import BR6M from "./6m_data/BR.csv";
import BR1Y from "./1y_data/BR.csv";
import BFB1M from "./1m_data/BF.B.csv";
import BFB3M from "./3m_data/BF.B.csv";
import BFB6M from "./6m_data/BF.B.csv";
import BFB1Y from "./1y_data/BF.B.csv";
import CHRW1M from "./1m_data/CHRW.csv";
import CHRW3M from "./3m_data/CHRW.csv";
import CHRW6M from "./6m_data/CHRW.csv";
import CHRW1Y from "./1y_data/CHRW.csv";
import COG1M from "./1m_data/COG.csv";
import COG3M from "./3m_data/COG.csv";
import COG6M from "./6m_data/COG.csv";
import COG1Y from "./1y_data/COG.csv";
import CDNS1M from "./1m_data/CDNS.csv";
import CDNS3M from "./3m_data/CDNS.csv";
import CDNS6M from "./6m_data/CDNS.csv";
import CDNS1Y from "./1y_data/CDNS.csv";
import CPB1M from "./1m_data/CPB.csv";
import CPB3M from "./3m_data/CPB.csv";
import CPB6M from "./6m_data/CPB.csv";
import CPB1Y from "./1y_data/CPB.csv";
import COF1M from "./1m_data/COF.csv";
import COF3M from "./3m_data/COF.csv";
import COF6M from "./6m_data/COF.csv";
import COF1Y from "./1y_data/COF.csv";
import CAH1M from "./1m_data/CAH.csv";
import CAH3M from "./3m_data/CAH.csv";
import CAH6M from "./6m_data/CAH.csv";
import CAH1Y from "./1y_data/CAH.csv";
import KMX1M from "./1m_data/KMX.csv";
import KMX3M from "./3m_data/KMX.csv";
import KMX6M from "./6m_data/KMX.csv";
import KMX1Y from "./1y_data/KMX.csv";
import CCL1M from "./1m_data/CCL.csv";
import CCL3M from "./3m_data/CCL.csv";
import CCL6M from "./6m_data/CCL.csv";
import CCL1Y from "./1y_data/CCL.csv";
import CARR1M from "./1m_data/CARR.csv";
import CARR3M from "./3m_data/CARR.csv";
import CARR6M from "./6m_data/CARR.csv";
import CARR1Y from "./1y_data/CARR.csv";
import CTLT1M from "./1m_data/CTLT.csv";
import CTLT3M from "./3m_data/CTLT.csv";
import CTLT6M from "./6m_data/CTLT.csv";
import CTLT1Y from "./1y_data/CTLT.csv";
import CAT1M from "./1m_data/CAT.csv";
import CAT3M from "./3m_data/CAT.csv";
import CAT6M from "./6m_data/CAT.csv";
import CAT1Y from "./1y_data/CAT.csv";
import CBOE1M from "./1m_data/CBOE.csv";
import CBOE3M from "./3m_data/CBOE.csv";
import CBOE6M from "./6m_data/CBOE.csv";
import CBOE1Y from "./1y_data/CBOE.csv";
import CBRE1M from "./1m_data/CBRE.csv";
import CBRE3M from "./3m_data/CBRE.csv";
import CBRE6M from "./6m_data/CBRE.csv";
import CBRE1Y from "./1y_data/CBRE.csv";
import CDW1M from "./1m_data/CDW.csv";
import CDW3M from "./3m_data/CDW.csv";
import CDW6M from "./6m_data/CDW.csv";
import CDW1Y from "./1y_data/CDW.csv";
import CE1M from "./1m_data/CE.csv";
import CE3M from "./3m_data/CE.csv";
import CE6M from "./6m_data/CE.csv";
import CE1Y from "./1y_data/CE.csv";
import CNC1M from "./1m_data/CNC.csv";
import CNC3M from "./3m_data/CNC.csv";
import CNC6M from "./6m_data/CNC.csv";
import CNC1Y from "./1y_data/CNC.csv";
import CNP1M from "./1m_data/CNP.csv";
import CNP3M from "./3m_data/CNP.csv";
import CNP6M from "./6m_data/CNP.csv";
import CNP1Y from "./1y_data/CNP.csv";
import CERN1M from "./1m_data/CERN.csv";
import CERN3M from "./3m_data/CERN.csv";
import CERN6M from "./6m_data/CERN.csv";
import CERN1Y from "./1y_data/CERN.csv";
import CF1M from "./1m_data/CF.csv";
import CF3M from "./3m_data/CF.csv";
import CF6M from "./6m_data/CF.csv";
import CF1Y from "./1y_data/CF.csv";
import SCHW1M from "./1m_data/SCHW.csv";
import SCHW3M from "./3m_data/SCHW.csv";
import SCHW6M from "./6m_data/SCHW.csv";
import SCHW1Y from "./1y_data/SCHW.csv";
import CHTR1M from "./1m_data/CHTR.csv";
import CHTR3M from "./3m_data/CHTR.csv";
import CHTR6M from "./6m_data/CHTR.csv";
import CHTR1Y from "./1y_data/CHTR.csv";
import CVX1M from "./1m_data/CVX.csv";
import CVX3M from "./3m_data/CVX.csv";
import CVX6M from "./6m_data/CVX.csv";
import CVX1Y from "./1y_data/CVX.csv";
import CMG1M from "./1m_data/CMG.csv";
import CMG3M from "./3m_data/CMG.csv";
import CMG6M from "./6m_data/CMG.csv";
import CMG1Y from "./1y_data/CMG.csv";
import CB1M from "./1m_data/CB.csv";
import CB3M from "./3m_data/CB.csv";
import CB6M from "./6m_data/CB.csv";
import CB1Y from "./1y_data/CB.csv";
import CHD1M from "./1m_data/CHD.csv";
import CHD3M from "./3m_data/CHD.csv";
import CHD6M from "./6m_data/CHD.csv";
import CHD1Y from "./1y_data/CHD.csv";
import CI1M from "./1m_data/CI.csv";
import CI3M from "./3m_data/CI.csv";
import CI6M from "./6m_data/CI.csv";
import CI1Y from "./1y_data/CI.csv";
import CINF1M from "./1m_data/CINF.csv";
import CINF3M from "./3m_data/CINF.csv";
import CINF6M from "./6m_data/CINF.csv";
import CINF1Y from "./1y_data/CINF.csv";
import CTAS1M from "./1m_data/CTAS.csv";
import CTAS3M from "./3m_data/CTAS.csv";
import CTAS6M from "./6m_data/CTAS.csv";
import CTAS1Y from "./1y_data/CTAS.csv";
import CSCO1M from "./1m_data/CSCO.csv";
import CSCO3M from "./3m_data/CSCO.csv";
import CSCO6M from "./6m_data/CSCO.csv";
import CSCO1Y from "./1y_data/CSCO.csv";
import C1M from "./1m_data/C.csv";
import C3M from "./3m_data/C.csv";
import C6M from "./6m_data/C.csv";
import C1Y from "./1y_data/C.csv";
import CFG1M from "./1m_data/CFG.csv";
import CFG3M from "./3m_data/CFG.csv";
import CFG6M from "./6m_data/CFG.csv";
import CFG1Y from "./1y_data/CFG.csv";
import CTXS1M from "./1m_data/CTXS.csv";
import CTXS3M from "./3m_data/CTXS.csv";
import CTXS6M from "./6m_data/CTXS.csv";
import CTXS1Y from "./1y_data/CTXS.csv";
import CLX1M from "./1m_data/CLX.csv";
import CLX3M from "./3m_data/CLX.csv";
import CLX6M from "./6m_data/CLX.csv";
import CLX1Y from "./1y_data/CLX.csv";
import CME1M from "./1m_data/CME.csv";
import CME3M from "./3m_data/CME.csv";
import CME6M from "./6m_data/CME.csv";
import CME1Y from "./1y_data/CME.csv";
import CMS1M from "./1m_data/CMS.csv";
import CMS3M from "./3m_data/CMS.csv";
import CMS6M from "./6m_data/CMS.csv";
import CMS1Y from "./1y_data/CMS.csv";
import KO1M from "./1m_data/KO.csv";
import KO3M from "./3m_data/KO.csv";
import KO6M from "./6m_data/KO.csv";
import KO1Y from "./1y_data/KO.csv";
import CTSH1M from "./1m_data/CTSH.csv";
import CTSH3M from "./3m_data/CTSH.csv";
import CTSH6M from "./6m_data/CTSH.csv";
import CTSH1Y from "./1y_data/CTSH.csv";
import CL1M from "./1m_data/CL.csv";
import CL3M from "./3m_data/CL.csv";
import CL6M from "./6m_data/CL.csv";
import CL1Y from "./1y_data/CL.csv";
import CMCSA1M from "./1m_data/CMCSA.csv";
import CMCSA3M from "./3m_data/CMCSA.csv";
import CMCSA6M from "./6m_data/CMCSA.csv";
import CMCSA1Y from "./1y_data/CMCSA.csv";
import CMA1M from "./1m_data/CMA.csv";
import CMA3M from "./3m_data/CMA.csv";
import CMA6M from "./6m_data/CMA.csv";
import CMA1Y from "./1y_data/CMA.csv";
import CAG1M from "./1m_data/CAG.csv";
import CAG3M from "./3m_data/CAG.csv";
import CAG6M from "./6m_data/CAG.csv";
import CAG1Y from "./1y_data/CAG.csv";
import COP1M from "./1m_data/COP.csv";
import COP3M from "./3m_data/COP.csv";
import COP6M from "./6m_data/COP.csv";
import COP1Y from "./1y_data/COP.csv";
import ED1M from "./1m_data/ED.csv";
import ED3M from "./3m_data/ED.csv";
import ED6M from "./6m_data/ED.csv";
import ED1Y from "./1y_data/ED.csv";
import STZ1M from "./1m_data/STZ.csv";
import STZ3M from "./3m_data/STZ.csv";
import STZ6M from "./6m_data/STZ.csv";
import STZ1Y from "./1y_data/STZ.csv";
import COO1M from "./1m_data/COO.csv";
import COO3M from "./3m_data/COO.csv";
import COO6M from "./6m_data/COO.csv";
import COO1Y from "./1y_data/COO.csv";
import CPRT1M from "./1m_data/CPRT.csv";
import CPRT3M from "./3m_data/CPRT.csv";
import CPRT6M from "./6m_data/CPRT.csv";
import CPRT1Y from "./1y_data/CPRT.csv";
import GLW1M from "./1m_data/GLW.csv";
import GLW3M from "./3m_data/GLW.csv";
import GLW6M from "./6m_data/GLW.csv";
import GLW1Y from "./1y_data/GLW.csv";
import CTVA1M from "./1m_data/CTVA.csv";
import CTVA3M from "./3m_data/CTVA.csv";
import CTVA6M from "./6m_data/CTVA.csv";
import CTVA1Y from "./1y_data/CTVA.csv";
import COST1M from "./1m_data/COST.csv";
import COST3M from "./3m_data/COST.csv";
import COST6M from "./6m_data/COST.csv";
import COST1Y from "./1y_data/COST.csv";
import CCI1M from "./1m_data/CCI.csv";
import CCI3M from "./3m_data/CCI.csv";
import CCI6M from "./6m_data/CCI.csv";
import CCI1Y from "./1y_data/CCI.csv";
import CSX1M from "./1m_data/CSX.csv";
import CSX3M from "./3m_data/CSX.csv";
import CSX6M from "./6m_data/CSX.csv";
import CSX1Y from "./1y_data/CSX.csv";
import CMI1M from "./1m_data/CMI.csv";
import CMI3M from "./3m_data/CMI.csv";
import CMI6M from "./6m_data/CMI.csv";
import CMI1Y from "./1y_data/CMI.csv";
import CVS1M from "./1m_data/CVS.csv";
import CVS3M from "./3m_data/CVS.csv";
import CVS6M from "./6m_data/CVS.csv";
import CVS1Y from "./1y_data/CVS.csv";
import DHI1M from "./1m_data/DHI.csv";
import DHI3M from "./3m_data/DHI.csv";
import DHI6M from "./6m_data/DHI.csv";
import DHI1Y from "./1y_data/DHI.csv";
import DHR1M from "./1m_data/DHR.csv";
import DHR3M from "./3m_data/DHR.csv";
import DHR6M from "./6m_data/DHR.csv";
import DHR1Y from "./1y_data/DHR.csv";
import DRI1M from "./1m_data/DRI.csv";
import DRI3M from "./3m_data/DRI.csv";
import DRI6M from "./6m_data/DRI.csv";
import DRI1Y from "./1y_data/DRI.csv";
import DVA1M from "./1m_data/DVA.csv";
import DVA3M from "./3m_data/DVA.csv";
import DVA6M from "./6m_data/DVA.csv";
import DVA1Y from "./1y_data/DVA.csv";
import DE1M from "./1m_data/DE.csv";
import DE3M from "./3m_data/DE.csv";
import DE6M from "./6m_data/DE.csv";
import DE1Y from "./1y_data/DE.csv";
import DAL1M from "./1m_data/DAL.csv";
import DAL3M from "./3m_data/DAL.csv";
import DAL6M from "./6m_data/DAL.csv";
import DAL1Y from "./1y_data/DAL.csv";
import XRAY1M from "./1m_data/XRAY.csv";
import XRAY3M from "./3m_data/XRAY.csv";
import XRAY6M from "./6m_data/XRAY.csv";
import XRAY1Y from "./1y_data/XRAY.csv";
import DVN1M from "./1m_data/DVN.csv";
import DVN3M from "./3m_data/DVN.csv";
import DVN6M from "./6m_data/DVN.csv";
import DVN1Y from "./1y_data/DVN.csv";
import DXCM1M from "./1m_data/DXCM.csv";
import DXCM3M from "./3m_data/DXCM.csv";
import DXCM6M from "./6m_data/DXCM.csv";
import DXCM1Y from "./1y_data/DXCM.csv";
import FANG1M from "./1m_data/FANG.csv";
import FANG3M from "./3m_data/FANG.csv";
import FANG6M from "./6m_data/FANG.csv";
import FANG1Y from "./1y_data/FANG.csv";
import DLR1M from "./1m_data/DLR.csv";
import DLR3M from "./3m_data/DLR.csv";
import DLR6M from "./6m_data/DLR.csv";
import DLR1Y from "./1y_data/DLR.csv";
import DFS1M from "./1m_data/DFS.csv";
import DFS3M from "./3m_data/DFS.csv";
import DFS6M from "./6m_data/DFS.csv";
import DFS1Y from "./1y_data/DFS.csv";
import DISCA1M from "./1m_data/DISCA.csv";
import DISCA3M from "./3m_data/DISCA.csv";
import DISCA6M from "./6m_data/DISCA.csv";
import DISCA1Y from "./1y_data/DISCA.csv";
import DISCK1M from "./1m_data/DISCK.csv";
import DISCK3M from "./3m_data/DISCK.csv";
import DISCK6M from "./6m_data/DISCK.csv";
import DISCK1Y from "./1y_data/DISCK.csv";
import DISH1M from "./1m_data/DISH.csv";
import DISH3M from "./3m_data/DISH.csv";
import DISH6M from "./6m_data/DISH.csv";
import DISH1Y from "./1y_data/DISH.csv";
import DG1M from "./1m_data/DG.csv";
import DG3M from "./3m_data/DG.csv";
import DG6M from "./6m_data/DG.csv";
import DG1Y from "./1y_data/DG.csv";
import DLTR1M from "./1m_data/DLTR.csv";
import DLTR3M from "./3m_data/DLTR.csv";
import DLTR6M from "./6m_data/DLTR.csv";
import DLTR1Y from "./1y_data/DLTR.csv";
import D1M from "./1m_data/D.csv";
import D3M from "./3m_data/D.csv";
import D6M from "./6m_data/D.csv";
import D1Y from "./1y_data/D.csv";
import DPZ1M from "./1m_data/DPZ.csv";
import DPZ3M from "./3m_data/DPZ.csv";
import DPZ6M from "./6m_data/DPZ.csv";
import DPZ1Y from "./1y_data/DPZ.csv";
import DOV1M from "./1m_data/DOV.csv";
import DOV3M from "./3m_data/DOV.csv";
import DOV6M from "./6m_data/DOV.csv";
import DOV1Y from "./1y_data/DOV.csv";
import DOW1M from "./1m_data/DOW.csv";
import DOW3M from "./3m_data/DOW.csv";
import DOW6M from "./6m_data/DOW.csv";
import DOW1Y from "./1y_data/DOW.csv";
import DTE1M from "./1m_data/DTE.csv";
import DTE3M from "./3m_data/DTE.csv";
import DTE6M from "./6m_data/DTE.csv";
import DTE1Y from "./1y_data/DTE.csv";
import DUK1M from "./1m_data/DUK.csv";
import DUK3M from "./3m_data/DUK.csv";
import DUK6M from "./6m_data/DUK.csv";
import DUK1Y from "./1y_data/DUK.csv";
import DRE1M from "./1m_data/DRE.csv";
import DRE3M from "./3m_data/DRE.csv";
import DRE6M from "./6m_data/DRE.csv";
import DRE1Y from "./1y_data/DRE.csv";
import DD1M from "./1m_data/DD.csv";
import DD3M from "./3m_data/DD.csv";
import DD6M from "./6m_data/DD.csv";
import DD1Y from "./1y_data/DD.csv";
import DXC1M from "./1m_data/DXC.csv";
import DXC3M from "./3m_data/DXC.csv";
import DXC6M from "./6m_data/DXC.csv";
import DXC1Y from "./1y_data/DXC.csv";
import EMN1M from "./1m_data/EMN.csv";
import EMN3M from "./3m_data/EMN.csv";
import EMN6M from "./6m_data/EMN.csv";
import EMN1Y from "./1y_data/EMN.csv";
import ETN1M from "./1m_data/ETN.csv";
import ETN3M from "./3m_data/ETN.csv";
import ETN6M from "./6m_data/ETN.csv";
import ETN1Y from "./1y_data/ETN.csv";
import EBAY1M from "./1m_data/EBAY.csv";
import EBAY3M from "./3m_data/EBAY.csv";
import EBAY6M from "./6m_data/EBAY.csv";
import EBAY1Y from "./1y_data/EBAY.csv";
import ECL1M from "./1m_data/ECL.csv";
import ECL3M from "./3m_data/ECL.csv";
import ECL6M from "./6m_data/ECL.csv";
import ECL1Y from "./1y_data/ECL.csv";
import EIX1M from "./1m_data/EIX.csv";
import EIX3M from "./3m_data/EIX.csv";
import EIX6M from "./6m_data/EIX.csv";
import EIX1Y from "./1y_data/EIX.csv";
import EW1M from "./1m_data/EW.csv";
import EW3M from "./3m_data/EW.csv";
import EW6M from "./6m_data/EW.csv";
import EW1Y from "./1y_data/EW.csv";
import EA1M from "./1m_data/EA.csv";
import EA3M from "./3m_data/EA.csv";
import EA6M from "./6m_data/EA.csv";
import EA1Y from "./1y_data/EA.csv";
import EMR1M from "./1m_data/EMR.csv";
import EMR3M from "./3m_data/EMR.csv";
import EMR6M from "./6m_data/EMR.csv";
import EMR1Y from "./1y_data/EMR.csv";
import ENPH1M from "./1m_data/ENPH.csv";
import ENPH3M from "./3m_data/ENPH.csv";
import ENPH6M from "./6m_data/ENPH.csv";
import ENPH1Y from "./1y_data/ENPH.csv";
import ETR1M from "./1m_data/ETR.csv";
import ETR3M from "./3m_data/ETR.csv";
import ETR6M from "./6m_data/ETR.csv";
import ETR1Y from "./1y_data/ETR.csv";
import EOG1M from "./1m_data/EOG.csv";
import EOG3M from "./3m_data/EOG.csv";
import EOG6M from "./6m_data/EOG.csv";
import EOG1Y from "./1y_data/EOG.csv";
import EFX1M from "./1m_data/EFX.csv";
import EFX3M from "./3m_data/EFX.csv";
import EFX6M from "./6m_data/EFX.csv";
import EFX1Y from "./1y_data/EFX.csv";
import EQIX1M from "./1m_data/EQIX.csv";
import EQIX3M from "./3m_data/EQIX.csv";
import EQIX6M from "./6m_data/EQIX.csv";
import EQIX1Y from "./1y_data/EQIX.csv";
import EQR1M from "./1m_data/EQR.csv";
import EQR3M from "./3m_data/EQR.csv";
import EQR6M from "./6m_data/EQR.csv";
import EQR1Y from "./1y_data/EQR.csv";
import ESS1M from "./1m_data/ESS.csv";
import ESS3M from "./3m_data/ESS.csv";
import ESS6M from "./6m_data/ESS.csv";
import ESS1Y from "./1y_data/ESS.csv";
import EL1M from "./1m_data/EL.csv";
import EL3M from "./3m_data/EL.csv";
import EL6M from "./6m_data/EL.csv";
import EL1Y from "./1y_data/EL.csv";
import ETSY1M from "./1m_data/ETSY.csv";
import ETSY3M from "./3m_data/ETSY.csv";
import ETSY6M from "./6m_data/ETSY.csv";
import ETSY1Y from "./1y_data/ETSY.csv";
import EVRG1M from "./1m_data/EVRG.csv";
import EVRG3M from "./3m_data/EVRG.csv";
import EVRG6M from "./6m_data/EVRG.csv";
import EVRG1Y from "./1y_data/EVRG.csv";
import ES1M from "./1m_data/ES.csv";
import ES3M from "./3m_data/ES.csv";
import ES6M from "./6m_data/ES.csv";
import ES1Y from "./1y_data/ES.csv";
import RE1M from "./1m_data/RE.csv";
import RE3M from "./3m_data/RE.csv";
import RE6M from "./6m_data/RE.csv";
import RE1Y from "./1y_data/RE.csv";
import EXC1M from "./1m_data/EXC.csv";
import EXC3M from "./3m_data/EXC.csv";
import EXC6M from "./6m_data/EXC.csv";
import EXC1Y from "./1y_data/EXC.csv";
import EXPE1M from "./1m_data/EXPE.csv";
import EXPE3M from "./3m_data/EXPE.csv";
import EXPE6M from "./6m_data/EXPE.csv";
import EXPE1Y from "./1y_data/EXPE.csv";
import EXPD1M from "./1m_data/EXPD.csv";
import EXPD3M from "./3m_data/EXPD.csv";
import EXPD6M from "./6m_data/EXPD.csv";
import EXPD1Y from "./1y_data/EXPD.csv";
import EXR1M from "./1m_data/EXR.csv";
import EXR3M from "./3m_data/EXR.csv";
import EXR6M from "./6m_data/EXR.csv";
import EXR1Y from "./1y_data/EXR.csv";
import XOM1M from "./1m_data/XOM.csv";
import XOM3M from "./3m_data/XOM.csv";
import XOM6M from "./6m_data/XOM.csv";
import XOM1Y from "./1y_data/XOM.csv";
import FFIV1M from "./1m_data/FFIV.csv";
import FFIV3M from "./3m_data/FFIV.csv";
import FFIV6M from "./6m_data/FFIV.csv";
import FFIV1Y from "./1y_data/FFIV.csv";
import FB1M from "./1m_data/FB.csv";
import FB3M from "./3m_data/FB.csv";
import FB6M from "./6m_data/FB.csv";
import FB1Y from "./1y_data/FB.csv";
import FAST1M from "./1m_data/FAST.csv";
import FAST3M from "./3m_data/FAST.csv";
import FAST6M from "./6m_data/FAST.csv";
import FAST1Y from "./1y_data/FAST.csv";
import FRT1M from "./1m_data/FRT.csv";
import FRT3M from "./3m_data/FRT.csv";
import FRT6M from "./6m_data/FRT.csv";
import FRT1Y from "./1y_data/FRT.csv";
import FDX1M from "./1m_data/FDX.csv";
import FDX3M from "./3m_data/FDX.csv";
import FDX6M from "./6m_data/FDX.csv";
import FDX1Y from "./1y_data/FDX.csv";
import FIS1M from "./1m_data/FIS.csv";
import FIS3M from "./3m_data/FIS.csv";
import FIS6M from "./6m_data/FIS.csv";
import FIS1Y from "./1y_data/FIS.csv";
import FITB1M from "./1m_data/FITB.csv";
import FITB3M from "./3m_data/FITB.csv";
import FITB6M from "./6m_data/FITB.csv";
import FITB1Y from "./1y_data/FITB.csv";
import FE1M from "./1m_data/FE.csv";
import FE3M from "./3m_data/FE.csv";
import FE6M from "./6m_data/FE.csv";
import FE1Y from "./1y_data/FE.csv";
import FRC1M from "./1m_data/FRC.csv";
import FRC3M from "./3m_data/FRC.csv";
import FRC6M from "./6m_data/FRC.csv";
import FRC1Y from "./1y_data/FRC.csv";
import FISV1M from "./1m_data/FISV.csv";
import FISV3M from "./3m_data/FISV.csv";
import FISV6M from "./6m_data/FISV.csv";
import FISV1Y from "./1y_data/FISV.csv";
import FLT1M from "./1m_data/FLT.csv";
import FLT3M from "./3m_data/FLT.csv";
import FLT6M from "./6m_data/FLT.csv";
import FLT1Y from "./1y_data/FLT.csv";
import FLIR1M from "./1m_data/FLIR.csv";
import FLIR3M from "./3m_data/FLIR.csv";
import FLIR6M from "./6m_data/FLIR.csv";
import FLIR1Y from "./1y_data/FLIR.csv";
import FLS1M from "./1m_data/FLS.csv";
import FLS3M from "./3m_data/FLS.csv";
import FLS6M from "./6m_data/FLS.csv";
import FLS1Y from "./1y_data/FLS.csv";
import FMC1M from "./1m_data/FMC.csv";
import FMC3M from "./3m_data/FMC.csv";
import FMC6M from "./6m_data/FMC.csv";
import FMC1Y from "./1y_data/FMC.csv";
import F1M from "./1m_data/F.csv";
import F3M from "./3m_data/F.csv";
import F6M from "./6m_data/F.csv";
import F1Y from "./1y_data/F.csv";
import FTNT1M from "./1m_data/FTNT.csv";
import FTNT3M from "./3m_data/FTNT.csv";
import FTNT6M from "./6m_data/FTNT.csv";
import FTNT1Y from "./1y_data/FTNT.csv";
import FTV1M from "./1m_data/FTV.csv";
import FTV3M from "./3m_data/FTV.csv";
import FTV6M from "./6m_data/FTV.csv";
import FTV1Y from "./1y_data/FTV.csv";
import FBHS1M from "./1m_data/FBHS.csv";
import FBHS3M from "./3m_data/FBHS.csv";
import FBHS6M from "./6m_data/FBHS.csv";
import FBHS1Y from "./1y_data/FBHS.csv";
import FOXA1M from "./1m_data/FOXA.csv";
import FOXA3M from "./3m_data/FOXA.csv";
import FOXA6M from "./6m_data/FOXA.csv";
import FOXA1Y from "./1y_data/FOXA.csv";
import FOX1M from "./1m_data/FOX.csv";
import FOX3M from "./3m_data/FOX.csv";
import FOX6M from "./6m_data/FOX.csv";
import FOX1Y from "./1y_data/FOX.csv";
import BEN1M from "./1m_data/BEN.csv";
import BEN3M from "./3m_data/BEN.csv";
import BEN6M from "./6m_data/BEN.csv";
import BEN1Y from "./1y_data/BEN.csv";
import FCX1M from "./1m_data/FCX.csv";
import FCX3M from "./3m_data/FCX.csv";
import FCX6M from "./6m_data/FCX.csv";
import FCX1Y from "./1y_data/FCX.csv";
import GPS1M from "./1m_data/GPS.csv";
import GPS3M from "./3m_data/GPS.csv";
import GPS6M from "./6m_data/GPS.csv";
import GPS1Y from "./1y_data/GPS.csv";
import GRMN1M from "./1m_data/GRMN.csv";
import GRMN3M from "./3m_data/GRMN.csv";
import GRMN6M from "./6m_data/GRMN.csv";
import GRMN1Y from "./1y_data/GRMN.csv";
import IT1M from "./1m_data/IT.csv";
import IT3M from "./3m_data/IT.csv";
import IT6M from "./6m_data/IT.csv";
import IT1Y from "./1y_data/IT.csv";
import GD1M from "./1m_data/GD.csv";
import GD3M from "./3m_data/GD.csv";
import GD6M from "./6m_data/GD.csv";
import GD1Y from "./1y_data/GD.csv";
import GE1M from "./1m_data/GE.csv";
import GE3M from "./3m_data/GE.csv";
import GE6M from "./6m_data/GE.csv";
import GE1Y from "./1y_data/GE.csv";
import GIS1M from "./1m_data/GIS.csv";
import GIS3M from "./3m_data/GIS.csv";
import GIS6M from "./6m_data/GIS.csv";
import GIS1Y from "./1y_data/GIS.csv";
import GM1M from "./1m_data/GM.csv";
import GM3M from "./3m_data/GM.csv";
import GM6M from "./6m_data/GM.csv";
import GM1Y from "./1y_data/GM.csv";
import GPC1M from "./1m_data/GPC.csv";
import GPC3M from "./3m_data/GPC.csv";
import GPC6M from "./6m_data/GPC.csv";
import GPC1Y from "./1y_data/GPC.csv";
import GILD1M from "./1m_data/GILD.csv";
import GILD3M from "./3m_data/GILD.csv";
import GILD6M from "./6m_data/GILD.csv";
import GILD1Y from "./1y_data/GILD.csv";
import GL1M from "./1m_data/GL.csv";
import GL3M from "./3m_data/GL.csv";
import GL6M from "./6m_data/GL.csv";
import GL1Y from "./1y_data/GL.csv";
import GPN1M from "./1m_data/GPN.csv";
import GPN3M from "./3m_data/GPN.csv";
import GPN6M from "./6m_data/GPN.csv";
import GPN1Y from "./1y_data/GPN.csv";
import GS1M from "./1m_data/GS.csv";
import GS3M from "./3m_data/GS.csv";
import GS6M from "./6m_data/GS.csv";
import GS1Y from "./1y_data/GS.csv";
import GWW1M from "./1m_data/GWW.csv";
import GWW3M from "./3m_data/GWW.csv";
import GWW6M from "./6m_data/GWW.csv";
import GWW1Y from "./1y_data/GWW.csv";
import HAL1M from "./1m_data/HAL.csv";
import HAL3M from "./3m_data/HAL.csv";
import HAL6M from "./6m_data/HAL.csv";
import HAL1Y from "./1y_data/HAL.csv";
import HBI1M from "./1m_data/HBI.csv";
import HBI3M from "./3m_data/HBI.csv";
import HBI6M from "./6m_data/HBI.csv";
import HBI1Y from "./1y_data/HBI.csv";
import HIG1M from "./1m_data/HIG.csv";
import HIG3M from "./3m_data/HIG.csv";
import HIG6M from "./6m_data/HIG.csv";
import HIG1Y from "./1y_data/HIG.csv";
import HAS1M from "./1m_data/HAS.csv";
import HAS3M from "./3m_data/HAS.csv";
import HAS6M from "./6m_data/HAS.csv";
import HAS1Y from "./1y_data/HAS.csv";
import HCA1M from "./1m_data/HCA.csv";
import HCA3M from "./3m_data/HCA.csv";
import HCA6M from "./6m_data/HCA.csv";
import HCA1Y from "./1y_data/HCA.csv";
import PEAK1M from "./1m_data/PEAK.csv";
import PEAK3M from "./3m_data/PEAK.csv";
import PEAK6M from "./6m_data/PEAK.csv";
import PEAK1Y from "./1y_data/PEAK.csv";
import HSIC1M from "./1m_data/HSIC.csv";
import HSIC3M from "./3m_data/HSIC.csv";
import HSIC6M from "./6m_data/HSIC.csv";
import HSIC1Y from "./1y_data/HSIC.csv";
import HSY1M from "./1m_data/HSY.csv";
import HSY3M from "./3m_data/HSY.csv";
import HSY6M from "./6m_data/HSY.csv";
import HSY1Y from "./1y_data/HSY.csv";
import HES1M from "./1m_data/HES.csv";
import HES3M from "./3m_data/HES.csv";
import HES6M from "./6m_data/HES.csv";
import HES1Y from "./1y_data/HES.csv";
import HPE1M from "./1m_data/HPE.csv";
import HPE3M from "./3m_data/HPE.csv";
import HPE6M from "./6m_data/HPE.csv";
import HPE1Y from "./1y_data/HPE.csv";
import HLT1M from "./1m_data/HLT.csv";
import HLT3M from "./3m_data/HLT.csv";
import HLT6M from "./6m_data/HLT.csv";
import HLT1Y from "./1y_data/HLT.csv";
import HFC1M from "./1m_data/HFC.csv";
import HFC3M from "./3m_data/HFC.csv";
import HFC6M from "./6m_data/HFC.csv";
import HFC1Y from "./1y_data/HFC.csv";
import HOLX1M from "./1m_data/HOLX.csv";
import HOLX3M from "./3m_data/HOLX.csv";
import HOLX6M from "./6m_data/HOLX.csv";
import HOLX1Y from "./1y_data/HOLX.csv";
import HD1M from "./1m_data/HD.csv";
import HD3M from "./3m_data/HD.csv";
import HD6M from "./6m_data/HD.csv";
import HD1Y from "./1y_data/HD.csv";
import HON1M from "./1m_data/HON.csv";
import HON3M from "./3m_data/HON.csv";
import HON6M from "./6m_data/HON.csv";
import HON1Y from "./1y_data/HON.csv";
import HRL1M from "./1m_data/HRL.csv";
import HRL3M from "./3m_data/HRL.csv";
import HRL6M from "./6m_data/HRL.csv";
import HRL1Y from "./1y_data/HRL.csv";
import HST1M from "./1m_data/HST.csv";
import HST3M from "./3m_data/HST.csv";
import HST6M from "./6m_data/HST.csv";
import HST1Y from "./1y_data/HST.csv";
import HWM1M from "./1m_data/HWM.csv";
import HWM3M from "./3m_data/HWM.csv";
import HWM6M from "./6m_data/HWM.csv";
import HWM1Y from "./1y_data/HWM.csv";
import HPQ1M from "./1m_data/HPQ.csv";
import HPQ3M from "./3m_data/HPQ.csv";
import HPQ6M from "./6m_data/HPQ.csv";
import HPQ1Y from "./1y_data/HPQ.csv";
import HUM1M from "./1m_data/HUM.csv";
import HUM3M from "./3m_data/HUM.csv";
import HUM6M from "./6m_data/HUM.csv";
import HUM1Y from "./1y_data/HUM.csv";
import HBAN1M from "./1m_data/HBAN.csv";
import HBAN3M from "./3m_data/HBAN.csv";
import HBAN6M from "./6m_data/HBAN.csv";
import HBAN1Y from "./1y_data/HBAN.csv";
import HII1M from "./1m_data/HII.csv";
import HII3M from "./3m_data/HII.csv";
import HII6M from "./6m_data/HII.csv";
import HII1Y from "./1y_data/HII.csv";
import IEX1M from "./1m_data/IEX.csv";
import IEX3M from "./3m_data/IEX.csv";
import IEX6M from "./6m_data/IEX.csv";
import IEX1Y from "./1y_data/IEX.csv";
import IDXX1M from "./1m_data/IDXX.csv";
import IDXX3M from "./3m_data/IDXX.csv";
import IDXX6M from "./6m_data/IDXX.csv";
import IDXX1Y from "./1y_data/IDXX.csv";
import INFO1M from "./1m_data/INFO.csv";
import INFO3M from "./3m_data/INFO.csv";
import INFO6M from "./6m_data/INFO.csv";
import INFO1Y from "./1y_data/INFO.csv";
import ITW1M from "./1m_data/ITW.csv";
import ITW3M from "./3m_data/ITW.csv";
import ITW6M from "./6m_data/ITW.csv";
import ITW1Y from "./1y_data/ITW.csv";
import ILMN1M from "./1m_data/ILMN.csv";
import ILMN3M from "./3m_data/ILMN.csv";
import ILMN6M from "./6m_data/ILMN.csv";
import ILMN1Y from "./1y_data/ILMN.csv";
import INCY1M from "./1m_data/INCY.csv";
import INCY3M from "./3m_data/INCY.csv";
import INCY6M from "./6m_data/INCY.csv";
import INCY1Y from "./1y_data/INCY.csv";
import IR1M from "./1m_data/IR.csv";
import IR3M from "./3m_data/IR.csv";
import IR6M from "./6m_data/IR.csv";
import IR1Y from "./1y_data/IR.csv";
import INTC1M from "./1m_data/INTC.csv";
import INTC3M from "./3m_data/INTC.csv";
import INTC6M from "./6m_data/INTC.csv";
import INTC1Y from "./1y_data/INTC.csv";
import ICE1M from "./1m_data/ICE.csv";
import ICE3M from "./3m_data/ICE.csv";
import ICE6M from "./6m_data/ICE.csv";
import ICE1Y from "./1y_data/ICE.csv";
import IBM1M from "./1m_data/IBM.csv";
import IBM3M from "./3m_data/IBM.csv";
import IBM6M from "./6m_data/IBM.csv";
import IBM1Y from "./1y_data/IBM.csv";
import IP1M from "./1m_data/IP.csv";
import IP3M from "./3m_data/IP.csv";
import IP6M from "./6m_data/IP.csv";
import IP1Y from "./1y_data/IP.csv";
import IPG1M from "./1m_data/IPG.csv";
import IPG3M from "./3m_data/IPG.csv";
import IPG6M from "./6m_data/IPG.csv";
import IPG1Y from "./1y_data/IPG.csv";
import IFF1M from "./1m_data/IFF.csv";
import IFF3M from "./3m_data/IFF.csv";
import IFF6M from "./6m_data/IFF.csv";
import IFF1Y from "./1y_data/IFF.csv";
import INTU1M from "./1m_data/INTU.csv";
import INTU3M from "./3m_data/INTU.csv";
import INTU6M from "./6m_data/INTU.csv";
import INTU1Y from "./1y_data/INTU.csv";
import ISRG1M from "./1m_data/ISRG.csv";
import ISRG3M from "./3m_data/ISRG.csv";
import ISRG6M from "./6m_data/ISRG.csv";
import ISRG1Y from "./1y_data/ISRG.csv";
import IVZ1M from "./1m_data/IVZ.csv";
import IVZ3M from "./3m_data/IVZ.csv";
import IVZ6M from "./6m_data/IVZ.csv";
import IVZ1Y from "./1y_data/IVZ.csv";
import IPGP1M from "./1m_data/IPGP.csv";
import IPGP3M from "./3m_data/IPGP.csv";
import IPGP6M from "./6m_data/IPGP.csv";
import IPGP1Y from "./1y_data/IPGP.csv";
import IQV1M from "./1m_data/IQV.csv";
import IQV3M from "./3m_data/IQV.csv";
import IQV6M from "./6m_data/IQV.csv";
import IQV1Y from "./1y_data/IQV.csv";
import IRM1M from "./1m_data/IRM.csv";
import IRM3M from "./3m_data/IRM.csv";
import IRM6M from "./6m_data/IRM.csv";
import IRM1Y from "./1y_data/IRM.csv";
import JKHY1M from "./1m_data/JKHY.csv";
import JKHY3M from "./3m_data/JKHY.csv";
import JKHY6M from "./6m_data/JKHY.csv";
import JKHY1Y from "./1y_data/JKHY.csv";
import J1M from "./1m_data/J.csv";
import J3M from "./3m_data/J.csv";
import J6M from "./6m_data/J.csv";
import J1Y from "./1y_data/J.csv";
import JBHT1M from "./1m_data/JBHT.csv";
import JBHT3M from "./3m_data/JBHT.csv";
import JBHT6M from "./6m_data/JBHT.csv";
import JBHT1Y from "./1y_data/JBHT.csv";
import SJM1M from "./1m_data/SJM.csv";
import SJM3M from "./3m_data/SJM.csv";
import SJM6M from "./6m_data/SJM.csv";
import SJM1Y from "./1y_data/SJM.csv";
import JNJ1M from "./1m_data/JNJ.csv";
import JNJ3M from "./3m_data/JNJ.csv";
import JNJ6M from "./6m_data/JNJ.csv";
import JNJ1Y from "./1y_data/JNJ.csv";
import JCI1M from "./1m_data/JCI.csv";
import JCI3M from "./3m_data/JCI.csv";
import JCI6M from "./6m_data/JCI.csv";
import JCI1Y from "./1y_data/JCI.csv";
import JPM1M from "./1m_data/JPM.csv";
import JPM3M from "./3m_data/JPM.csv";
import JPM6M from "./6m_data/JPM.csv";
import JPM1Y from "./1y_data/JPM.csv";
import JNPR1M from "./1m_data/JNPR.csv";
import JNPR3M from "./3m_data/JNPR.csv";
import JNPR6M from "./6m_data/JNPR.csv";
import JNPR1Y from "./1y_data/JNPR.csv";
import KSU1M from "./1m_data/KSU.csv";
import KSU3M from "./3m_data/KSU.csv";
import KSU6M from "./6m_data/KSU.csv";
import KSU1Y from "./1y_data/KSU.csv";
import K1M from "./1m_data/K.csv";
import K3M from "./3m_data/K.csv";
import K6M from "./6m_data/K.csv";
import K1Y from "./1y_data/K.csv";
import KEY1M from "./1m_data/KEY.csv";
import KEY3M from "./3m_data/KEY.csv";
import KEY6M from "./6m_data/KEY.csv";
import KEY1Y from "./1y_data/KEY.csv";
import KEYS1M from "./1m_data/KEYS.csv";
import KEYS3M from "./3m_data/KEYS.csv";
import KEYS6M from "./6m_data/KEYS.csv";
import KEYS1Y from "./1y_data/KEYS.csv";
import KMB1M from "./1m_data/KMB.csv";
import KMB3M from "./3m_data/KMB.csv";
import KMB6M from "./6m_data/KMB.csv";
import KMB1Y from "./1y_data/KMB.csv";
import KIM1M from "./1m_data/KIM.csv";
import KIM3M from "./3m_data/KIM.csv";
import KIM6M from "./6m_data/KIM.csv";
import KIM1Y from "./1y_data/KIM.csv";
import KMI1M from "./1m_data/KMI.csv";
import KMI3M from "./3m_data/KMI.csv";
import KMI6M from "./6m_data/KMI.csv";
import KMI1Y from "./1y_data/KMI.csv";
import KLAC1M from "./1m_data/KLAC.csv";
import KLAC3M from "./3m_data/KLAC.csv";
import KLAC6M from "./6m_data/KLAC.csv";
import KLAC1Y from "./1y_data/KLAC.csv";
import KHC1M from "./1m_data/KHC.csv";
import KHC3M from "./3m_data/KHC.csv";
import KHC6M from "./6m_data/KHC.csv";
import KHC1Y from "./1y_data/KHC.csv";
import KR1M from "./1m_data/KR.csv";
import KR3M from "./3m_data/KR.csv";
import KR6M from "./6m_data/KR.csv";
import KR1Y from "./1y_data/KR.csv";
import LB1M from "./1m_data/LB.csv";
import LB3M from "./3m_data/LB.csv";
import LB6M from "./6m_data/LB.csv";
import LB1Y from "./1y_data/LB.csv";
import LHX1M from "./1m_data/LHX.csv";
import LHX3M from "./3m_data/LHX.csv";
import LHX6M from "./6m_data/LHX.csv";
import LHX1Y from "./1y_data/LHX.csv";
import LH1M from "./1m_data/LH.csv";
import LH3M from "./3m_data/LH.csv";
import LH6M from "./6m_data/LH.csv";
import LH1Y from "./1y_data/LH.csv";
import LRCX1M from "./1m_data/LRCX.csv";
import LRCX3M from "./3m_data/LRCX.csv";
import LRCX6M from "./6m_data/LRCX.csv";
import LRCX1Y from "./1y_data/LRCX.csv";
import LW1M from "./1m_data/LW.csv";
import LW3M from "./3m_data/LW.csv";
import LW6M from "./6m_data/LW.csv";
import LW1Y from "./1y_data/LW.csv";
import LVS1M from "./1m_data/LVS.csv";
import LVS3M from "./3m_data/LVS.csv";
import LVS6M from "./6m_data/LVS.csv";
import LVS1Y from "./1y_data/LVS.csv";
import LEG1M from "./1m_data/LEG.csv";
import LEG3M from "./3m_data/LEG.csv";
import LEG6M from "./6m_data/LEG.csv";
import LEG1Y from "./1y_data/LEG.csv";
import LDOS1M from "./1m_data/LDOS.csv";
import LDOS3M from "./3m_data/LDOS.csv";
import LDOS6M from "./6m_data/LDOS.csv";
import LDOS1Y from "./1y_data/LDOS.csv";
import LEN1M from "./1m_data/LEN.csv";
import LEN3M from "./3m_data/LEN.csv";
import LEN6M from "./6m_data/LEN.csv";
import LEN1Y from "./1y_data/LEN.csv";
import LLY1M from "./1m_data/LLY.csv";
import LLY3M from "./3m_data/LLY.csv";
import LLY6M from "./6m_data/LLY.csv";
import LLY1Y from "./1y_data/LLY.csv";
import LNC1M from "./1m_data/LNC.csv";
import LNC3M from "./3m_data/LNC.csv";
import LNC6M from "./6m_data/LNC.csv";
import LNC1Y from "./1y_data/LNC.csv";
import LIN1M from "./1m_data/LIN.csv";
import LIN3M from "./3m_data/LIN.csv";
import LIN6M from "./6m_data/LIN.csv";
import LIN1Y from "./1y_data/LIN.csv";
import LYV1M from "./1m_data/LYV.csv";
import LYV3M from "./3m_data/LYV.csv";
import LYV6M from "./6m_data/LYV.csv";
import LYV1Y from "./1y_data/LYV.csv";
import LKQ1M from "./1m_data/LKQ.csv";
import LKQ3M from "./3m_data/LKQ.csv";
import LKQ6M from "./6m_data/LKQ.csv";
import LKQ1Y from "./1y_data/LKQ.csv";
import LMT1M from "./1m_data/LMT.csv";
import LMT3M from "./3m_data/LMT.csv";
import LMT6M from "./6m_data/LMT.csv";
import LMT1Y from "./1y_data/LMT.csv";
import L1M from "./1m_data/L.csv";
import L3M from "./3m_data/L.csv";
import L6M from "./6m_data/L.csv";
import L1Y from "./1y_data/L.csv";
import LOW1M from "./1m_data/LOW.csv";
import LOW3M from "./3m_data/LOW.csv";
import LOW6M from "./6m_data/LOW.csv";
import LOW1Y from "./1y_data/LOW.csv";
import LUMN1M from "./1m_data/LUMN.csv";
import LUMN3M from "./3m_data/LUMN.csv";
import LUMN6M from "./6m_data/LUMN.csv";
import LUMN1Y from "./1y_data/LUMN.csv";
import LYB1M from "./1m_data/LYB.csv";
import LYB3M from "./3m_data/LYB.csv";
import LYB6M from "./6m_data/LYB.csv";
import LYB1Y from "./1y_data/LYB.csv";
import MTB1M from "./1m_data/MTB.csv";
import MTB3M from "./3m_data/MTB.csv";
import MTB6M from "./6m_data/MTB.csv";
import MTB1Y from "./1y_data/MTB.csv";
import MRO1M from "./1m_data/MRO.csv";
import MRO3M from "./3m_data/MRO.csv";
import MRO6M from "./6m_data/MRO.csv";
import MRO1Y from "./1y_data/MRO.csv";
import MPC1M from "./1m_data/MPC.csv";
import MPC3M from "./3m_data/MPC.csv";
import MPC6M from "./6m_data/MPC.csv";
import MPC1Y from "./1y_data/MPC.csv";
import MKTX1M from "./1m_data/MKTX.csv";
import MKTX3M from "./3m_data/MKTX.csv";
import MKTX6M from "./6m_data/MKTX.csv";
import MKTX1Y from "./1y_data/MKTX.csv";
import MAR1M from "./1m_data/MAR.csv";
import MAR3M from "./3m_data/MAR.csv";
import MAR6M from "./6m_data/MAR.csv";
import MAR1Y from "./1y_data/MAR.csv";
import MMC1M from "./1m_data/MMC.csv";
import MMC3M from "./3m_data/MMC.csv";
import MMC6M from "./6m_data/MMC.csv";
import MMC1Y from "./1y_data/MMC.csv";
import MLM1M from "./1m_data/MLM.csv";
import MLM3M from "./3m_data/MLM.csv";
import MLM6M from "./6m_data/MLM.csv";
import MLM1Y from "./1y_data/MLM.csv";
import MAS1M from "./1m_data/MAS.csv";
import MAS3M from "./3m_data/MAS.csv";
import MAS6M from "./6m_data/MAS.csv";
import MAS1Y from "./1y_data/MAS.csv";
import MA1M from "./1m_data/MA.csv";
import MA3M from "./3m_data/MA.csv";
import MA6M from "./6m_data/MA.csv";
import MA1Y from "./1y_data/MA.csv";
import MKC1M from "./1m_data/MKC.csv";
import MKC3M from "./3m_data/MKC.csv";
import MKC6M from "./6m_data/MKC.csv";
import MKC1Y from "./1y_data/MKC.csv";
import MXIM1M from "./1m_data/MXIM.csv";
import MXIM3M from "./3m_data/MXIM.csv";
import MXIM6M from "./6m_data/MXIM.csv";
import MXIM1Y from "./1y_data/MXIM.csv";
import MCD1M from "./1m_data/MCD.csv";
import MCD3M from "./3m_data/MCD.csv";
import MCD6M from "./6m_data/MCD.csv";
import MCD1Y from "./1y_data/MCD.csv";
import MCK1M from "./1m_data/MCK.csv";
import MCK3M from "./3m_data/MCK.csv";
import MCK6M from "./6m_data/MCK.csv";
import MCK1Y from "./1y_data/MCK.csv";
import MDT1M from "./1m_data/MDT.csv";
import MDT3M from "./3m_data/MDT.csv";
import MDT6M from "./6m_data/MDT.csv";
import MDT1Y from "./1y_data/MDT.csv";
import MRK1M from "./1m_data/MRK.csv";
import MRK3M from "./3m_data/MRK.csv";
import MRK6M from "./6m_data/MRK.csv";
import MRK1Y from "./1y_data/MRK.csv";
import MET1M from "./1m_data/MET.csv";
import MET3M from "./3m_data/MET.csv";
import MET6M from "./6m_data/MET.csv";
import MET1Y from "./1y_data/MET.csv";
import MTD1M from "./1m_data/MTD.csv";
import MTD3M from "./3m_data/MTD.csv";
import MTD6M from "./6m_data/MTD.csv";
import MTD1Y from "./1y_data/MTD.csv";
import MGM1M from "./1m_data/MGM.csv";
import MGM3M from "./3m_data/MGM.csv";
import MGM6M from "./6m_data/MGM.csv";
import MGM1Y from "./1y_data/MGM.csv";
import MCHP1M from "./1m_data/MCHP.csv";
import MCHP3M from "./3m_data/MCHP.csv";
import MCHP6M from "./6m_data/MCHP.csv";
import MCHP1Y from "./1y_data/MCHP.csv";
import MU1M from "./1m_data/MU.csv";
import MU3M from "./3m_data/MU.csv";
import MU6M from "./6m_data/MU.csv";
import MU1Y from "./1y_data/MU.csv";
import MSFT1M from "./1m_data/MSFT.csv";
import MSFT3M from "./3m_data/MSFT.csv";
import MSFT6M from "./6m_data/MSFT.csv";
import MSFT1Y from "./1y_data/MSFT.csv";
import MAA1M from "./1m_data/MAA.csv";
import MAA3M from "./3m_data/MAA.csv";
import MAA6M from "./6m_data/MAA.csv";
import MAA1Y from "./1y_data/MAA.csv";
import MHK1M from "./1m_data/MHK.csv";
import MHK3M from "./3m_data/MHK.csv";
import MHK6M from "./6m_data/MHK.csv";
import MHK1Y from "./1y_data/MHK.csv";
import TAP1M from "./1m_data/TAP.csv";
import TAP3M from "./3m_data/TAP.csv";
import TAP6M from "./6m_data/TAP.csv";
import TAP1Y from "./1y_data/TAP.csv";
import MDLZ1M from "./1m_data/MDLZ.csv";
import MDLZ3M from "./3m_data/MDLZ.csv";
import MDLZ6M from "./6m_data/MDLZ.csv";
import MDLZ1Y from "./1y_data/MDLZ.csv";
import MPWR1M from "./1m_data/MPWR.csv";
import MPWR3M from "./3m_data/MPWR.csv";
import MPWR6M from "./6m_data/MPWR.csv";
import MPWR1Y from "./1y_data/MPWR.csv";
import MNST1M from "./1m_data/MNST.csv";
import MNST3M from "./3m_data/MNST.csv";
import MNST6M from "./6m_data/MNST.csv";
import MNST1Y from "./1y_data/MNST.csv";
import MCO1M from "./1m_data/MCO.csv";
import MCO3M from "./3m_data/MCO.csv";
import MCO6M from "./6m_data/MCO.csv";
import MCO1Y from "./1y_data/MCO.csv";
import MS1M from "./1m_data/MS.csv";
import MS3M from "./3m_data/MS.csv";
import MS6M from "./6m_data/MS.csv";
import MS1Y from "./1y_data/MS.csv";
import MOS1M from "./1m_data/MOS.csv";
import MOS3M from "./3m_data/MOS.csv";
import MOS6M from "./6m_data/MOS.csv";
import MOS1Y from "./1y_data/MOS.csv";
import MSI1M from "./1m_data/MSI.csv";
import MSI3M from "./3m_data/MSI.csv";
import MSI6M from "./6m_data/MSI.csv";
import MSI1Y from "./1y_data/MSI.csv";
import MSCI1M from "./1m_data/MSCI.csv";
import MSCI3M from "./3m_data/MSCI.csv";
import MSCI6M from "./6m_data/MSCI.csv";
import MSCI1Y from "./1y_data/MSCI.csv";
import NDAQ1M from "./1m_data/NDAQ.csv";
import NDAQ3M from "./3m_data/NDAQ.csv";
import NDAQ6M from "./6m_data/NDAQ.csv";
import NDAQ1Y from "./1y_data/NDAQ.csv";
import NTAP1M from "./1m_data/NTAP.csv";
import NTAP3M from "./3m_data/NTAP.csv";
import NTAP6M from "./6m_data/NTAP.csv";
import NTAP1Y from "./1y_data/NTAP.csv";
import NFLX1M from "./1m_data/NFLX.csv";
import NFLX3M from "./3m_data/NFLX.csv";
import NFLX6M from "./6m_data/NFLX.csv";
import NFLX1Y from "./1y_data/NFLX.csv";
import NWL1M from "./1m_data/NWL.csv";
import NWL3M from "./3m_data/NWL.csv";
import NWL6M from "./6m_data/NWL.csv";
import NWL1Y from "./1y_data/NWL.csv";
import NEM1M from "./1m_data/NEM.csv";
import NEM3M from "./3m_data/NEM.csv";
import NEM6M from "./6m_data/NEM.csv";
import NEM1Y from "./1y_data/NEM.csv";
import NWSA1M from "./1m_data/NWSA.csv";
import NWSA3M from "./3m_data/NWSA.csv";
import NWSA6M from "./6m_data/NWSA.csv";
import NWSA1Y from "./1y_data/NWSA.csv";
import NWS1M from "./1m_data/NWS.csv";
import NWS3M from "./3m_data/NWS.csv";
import NWS6M from "./6m_data/NWS.csv";
import NWS1Y from "./1y_data/NWS.csv";
import NEE1M from "./1m_data/NEE.csv";
import NEE3M from "./3m_data/NEE.csv";
import NEE6M from "./6m_data/NEE.csv";
import NEE1Y from "./1y_data/NEE.csv";
import NLSN1M from "./1m_data/NLSN.csv";
import NLSN3M from "./3m_data/NLSN.csv";
import NLSN6M from "./6m_data/NLSN.csv";
import NLSN1Y from "./1y_data/NLSN.csv";
import NKE1M from "./1m_data/NKE.csv";
import NKE3M from "./3m_data/NKE.csv";
import NKE6M from "./6m_data/NKE.csv";
import NKE1Y from "./1y_data/NKE.csv";
import NI1M from "./1m_data/NI.csv";
import NI3M from "./3m_data/NI.csv";
import NI6M from "./6m_data/NI.csv";
import NI1Y from "./1y_data/NI.csv";
import NSC1M from "./1m_data/NSC.csv";
import NSC3M from "./3m_data/NSC.csv";
import NSC6M from "./6m_data/NSC.csv";
import NSC1Y from "./1y_data/NSC.csv";
import NTRS1M from "./1m_data/NTRS.csv";
import NTRS3M from "./3m_data/NTRS.csv";
import NTRS6M from "./6m_data/NTRS.csv";
import NTRS1Y from "./1y_data/NTRS.csv";
import NOC1M from "./1m_data/NOC.csv";
import NOC3M from "./3m_data/NOC.csv";
import NOC6M from "./6m_data/NOC.csv";
import NOC1Y from "./1y_data/NOC.csv";
import NLOK1M from "./1m_data/NLOK.csv";
import NLOK3M from "./3m_data/NLOK.csv";
import NLOK6M from "./6m_data/NLOK.csv";
import NLOK1Y from "./1y_data/NLOK.csv";
import NCLH1M from "./1m_data/NCLH.csv";
import NCLH3M from "./3m_data/NCLH.csv";
import NCLH6M from "./6m_data/NCLH.csv";
import NCLH1Y from "./1y_data/NCLH.csv";
import NOV1M from "./1m_data/NOV.csv";
import NOV3M from "./3m_data/NOV.csv";
import NOV6M from "./6m_data/NOV.csv";
import NOV1Y from "./1y_data/NOV.csv";
import NRG1M from "./1m_data/NRG.csv";
import NRG3M from "./3m_data/NRG.csv";
import NRG6M from "./6m_data/NRG.csv";
import NRG1Y from "./1y_data/NRG.csv";
import NUE1M from "./1m_data/NUE.csv";
import NUE3M from "./3m_data/NUE.csv";
import NUE6M from "./6m_data/NUE.csv";
import NUE1Y from "./1y_data/NUE.csv";
import NVDA1M from "./1m_data/NVDA.csv";
import NVDA3M from "./3m_data/NVDA.csv";
import NVDA6M from "./6m_data/NVDA.csv";
import NVDA1Y from "./1y_data/NVDA.csv";
import NVR1M from "./1m_data/NVR.csv";
import NVR3M from "./3m_data/NVR.csv";
import NVR6M from "./6m_data/NVR.csv";
import NVR1Y from "./1y_data/NVR.csv";
import ORLY1M from "./1m_data/ORLY.csv";
import ORLY3M from "./3m_data/ORLY.csv";
import ORLY6M from "./6m_data/ORLY.csv";
import ORLY1Y from "./1y_data/ORLY.csv";
import OXY1M from "./1m_data/OXY.csv";
import OXY3M from "./3m_data/OXY.csv";
import OXY6M from "./6m_data/OXY.csv";
import OXY1Y from "./1y_data/OXY.csv";
import ODFL1M from "./1m_data/ODFL.csv";
import ODFL3M from "./3m_data/ODFL.csv";
import ODFL6M from "./6m_data/ODFL.csv";
import ODFL1Y from "./1y_data/ODFL.csv";
import OMC1M from "./1m_data/OMC.csv";
import OMC3M from "./3m_data/OMC.csv";
import OMC6M from "./6m_data/OMC.csv";
import OMC1Y from "./1y_data/OMC.csv";
import OKE1M from "./1m_data/OKE.csv";
import OKE3M from "./3m_data/OKE.csv";
import OKE6M from "./6m_data/OKE.csv";
import OKE1Y from "./1y_data/OKE.csv";
import ORCL1M from "./1m_data/ORCL.csv";
import ORCL3M from "./3m_data/ORCL.csv";
import ORCL6M from "./6m_data/ORCL.csv";
import ORCL1Y from "./1y_data/ORCL.csv";
import OTIS1M from "./1m_data/OTIS.csv";
import OTIS3M from "./3m_data/OTIS.csv";
import OTIS6M from "./6m_data/OTIS.csv";
import OTIS1Y from "./1y_data/OTIS.csv";
import PCAR1M from "./1m_data/PCAR.csv";
import PCAR3M from "./3m_data/PCAR.csv";
import PCAR6M from "./6m_data/PCAR.csv";
import PCAR1Y from "./1y_data/PCAR.csv";
import PKG1M from "./1m_data/PKG.csv";
import PKG3M from "./3m_data/PKG.csv";
import PKG6M from "./6m_data/PKG.csv";
import PKG1Y from "./1y_data/PKG.csv";
import PH1M from "./1m_data/PH.csv";
import PH3M from "./3m_data/PH.csv";
import PH6M from "./6m_data/PH.csv";
import PH1Y from "./1y_data/PH.csv";
import PAYX1M from "./1m_data/PAYX.csv";
import PAYX3M from "./3m_data/PAYX.csv";
import PAYX6M from "./6m_data/PAYX.csv";
import PAYX1Y from "./1y_data/PAYX.csv";
import PAYC1M from "./1m_data/PAYC.csv";
import PAYC3M from "./3m_data/PAYC.csv";
import PAYC6M from "./6m_data/PAYC.csv";
import PAYC1Y from "./1y_data/PAYC.csv";
import PYPL1M from "./1m_data/PYPL.csv";
import PYPL3M from "./3m_data/PYPL.csv";
import PYPL6M from "./6m_data/PYPL.csv";
import PYPL1Y from "./1y_data/PYPL.csv";
import PNR1M from "./1m_data/PNR.csv";
import PNR3M from "./3m_data/PNR.csv";
import PNR6M from "./6m_data/PNR.csv";
import PNR1Y from "./1y_data/PNR.csv";
import PBCT1M from "./1m_data/PBCT.csv";
import PBCT3M from "./3m_data/PBCT.csv";
import PBCT6M from "./6m_data/PBCT.csv";
import PBCT1Y from "./1y_data/PBCT.csv";
import PEP1M from "./1m_data/PEP.csv";
import PEP3M from "./3m_data/PEP.csv";
import PEP6M from "./6m_data/PEP.csv";
import PEP1Y from "./1y_data/PEP.csv";
import PKI1M from "./1m_data/PKI.csv";
import PKI3M from "./3m_data/PKI.csv";
import PKI6M from "./6m_data/PKI.csv";
import PKI1Y from "./1y_data/PKI.csv";
import PRGO1M from "./1m_data/PRGO.csv";
import PRGO3M from "./3m_data/PRGO.csv";
import PRGO6M from "./6m_data/PRGO.csv";
import PRGO1Y from "./1y_data/PRGO.csv";
import PFE1M from "./1m_data/PFE.csv";
import PFE3M from "./3m_data/PFE.csv";
import PFE6M from "./6m_data/PFE.csv";
import PFE1Y from "./1y_data/PFE.csv";
import PM1M from "./1m_data/PM.csv";
import PM3M from "./3m_data/PM.csv";
import PM6M from "./6m_data/PM.csv";
import PM1Y from "./1y_data/PM.csv";
import PSX1M from "./1m_data/PSX.csv";
import PSX3M from "./3m_data/PSX.csv";
import PSX6M from "./6m_data/PSX.csv";
import PSX1Y from "./1y_data/PSX.csv";
import PNW1M from "./1m_data/PNW.csv";
import PNW3M from "./3m_data/PNW.csv";
import PNW6M from "./6m_data/PNW.csv";
import PNW1Y from "./1y_data/PNW.csv";
import PXD1M from "./1m_data/PXD.csv";
import PXD3M from "./3m_data/PXD.csv";
import PXD6M from "./6m_data/PXD.csv";
import PXD1Y from "./1y_data/PXD.csv";
import PNC1M from "./1m_data/PNC.csv";
import PNC3M from "./3m_data/PNC.csv";
import PNC6M from "./6m_data/PNC.csv";
import PNC1Y from "./1y_data/PNC.csv";
import POOL1M from "./1m_data/POOL.csv";
import POOL3M from "./3m_data/POOL.csv";
import POOL6M from "./6m_data/POOL.csv";
import POOL1Y from "./1y_data/POOL.csv";
import PPG1M from "./1m_data/PPG.csv";
import PPG3M from "./3m_data/PPG.csv";
import PPG6M from "./6m_data/PPG.csv";
import PPG1Y from "./1y_data/PPG.csv";
import PPL1M from "./1m_data/PPL.csv";
import PPL3M from "./3m_data/PPL.csv";
import PPL6M from "./6m_data/PPL.csv";
import PPL1Y from "./1y_data/PPL.csv";
import PFG1M from "./1m_data/PFG.csv";
import PFG3M from "./3m_data/PFG.csv";
import PFG6M from "./6m_data/PFG.csv";
import PFG1Y from "./1y_data/PFG.csv";
import PG1M from "./1m_data/PG.csv";
import PG3M from "./3m_data/PG.csv";
import PG6M from "./6m_data/PG.csv";
import PG1Y from "./1y_data/PG.csv";
import PGR1M from "./1m_data/PGR.csv";
import PGR3M from "./3m_data/PGR.csv";
import PGR6M from "./6m_data/PGR.csv";
import PGR1Y from "./1y_data/PGR.csv";
import PLD1M from "./1m_data/PLD.csv";
import PLD3M from "./3m_data/PLD.csv";
import PLD6M from "./6m_data/PLD.csv";
import PLD1Y from "./1y_data/PLD.csv";
import PRU1M from "./1m_data/PRU.csv";
import PRU3M from "./3m_data/PRU.csv";
import PRU6M from "./6m_data/PRU.csv";
import PRU1Y from "./1y_data/PRU.csv";
import PEG1M from "./1m_data/PEG.csv";
import PEG3M from "./3m_data/PEG.csv";
import PEG6M from "./6m_data/PEG.csv";
import PEG1Y from "./1y_data/PEG.csv";
import PSA1M from "./1m_data/PSA.csv";
import PSA3M from "./3m_data/PSA.csv";
import PSA6M from "./6m_data/PSA.csv";
import PSA1Y from "./1y_data/PSA.csv";
import PHM1M from "./1m_data/PHM.csv";
import PHM3M from "./3m_data/PHM.csv";
import PHM6M from "./6m_data/PHM.csv";
import PHM1Y from "./1y_data/PHM.csv";
import PVH1M from "./1m_data/PVH.csv";
import PVH3M from "./3m_data/PVH.csv";
import PVH6M from "./6m_data/PVH.csv";
import PVH1Y from "./1y_data/PVH.csv";
import QRVO1M from "./1m_data/QRVO.csv";
import QRVO3M from "./3m_data/QRVO.csv";
import QRVO6M from "./6m_data/QRVO.csv";
import QRVO1Y from "./1y_data/QRVO.csv";
import PWR1M from "./1m_data/PWR.csv";
import PWR3M from "./3m_data/PWR.csv";
import PWR6M from "./6m_data/PWR.csv";
import PWR1Y from "./1y_data/PWR.csv";
import QCOM1M from "./1m_data/QCOM.csv";
import QCOM3M from "./3m_data/QCOM.csv";
import QCOM6M from "./6m_data/QCOM.csv";
import QCOM1Y from "./1y_data/QCOM.csv";
import DGX1M from "./1m_data/DGX.csv";
import DGX3M from "./3m_data/DGX.csv";
import DGX6M from "./6m_data/DGX.csv";
import DGX1Y from "./1y_data/DGX.csv";
import RL1M from "./1m_data/RL.csv";
import RL3M from "./3m_data/RL.csv";
import RL6M from "./6m_data/RL.csv";
import RL1Y from "./1y_data/RL.csv";
import RJF1M from "./1m_data/RJF.csv";
import RJF3M from "./3m_data/RJF.csv";
import RJF6M from "./6m_data/RJF.csv";
import RJF1Y from "./1y_data/RJF.csv";
import RTX1M from "./1m_data/RTX.csv";
import RTX3M from "./3m_data/RTX.csv";
import RTX6M from "./6m_data/RTX.csv";
import RTX1Y from "./1y_data/RTX.csv";
import O1M from "./1m_data/O.csv";
import O3M from "./3m_data/O.csv";
import O6M from "./6m_data/O.csv";
import O1Y from "./1y_data/O.csv";
import REG1M from "./1m_data/REG.csv";
import REG3M from "./3m_data/REG.csv";
import REG6M from "./6m_data/REG.csv";
import REG1Y from "./1y_data/REG.csv";
import REGN1M from "./1m_data/REGN.csv";
import REGN3M from "./3m_data/REGN.csv";
import REGN6M from "./6m_data/REGN.csv";
import REGN1Y from "./1y_data/REGN.csv";
import RF1M from "./1m_data/RF.csv";
import RF3M from "./3m_data/RF.csv";
import RF6M from "./6m_data/RF.csv";
import RF1Y from "./1y_data/RF.csv";
import RSG1M from "./1m_data/RSG.csv";
import RSG3M from "./3m_data/RSG.csv";
import RSG6M from "./6m_data/RSG.csv";
import RSG1Y from "./1y_data/RSG.csv";
import RMD1M from "./1m_data/RMD.csv";
import RMD3M from "./3m_data/RMD.csv";
import RMD6M from "./6m_data/RMD.csv";
import RMD1Y from "./1y_data/RMD.csv";
import RHI1M from "./1m_data/RHI.csv";
import RHI3M from "./3m_data/RHI.csv";
import RHI6M from "./6m_data/RHI.csv";
import RHI1Y from "./1y_data/RHI.csv";
import ROK1M from "./1m_data/ROK.csv";
import ROK3M from "./3m_data/ROK.csv";
import ROK6M from "./6m_data/ROK.csv";
import ROK1Y from "./1y_data/ROK.csv";
import ROL1M from "./1m_data/ROL.csv";
import ROL3M from "./3m_data/ROL.csv";
import ROL6M from "./6m_data/ROL.csv";
import ROL1Y from "./1y_data/ROL.csv";
import ROP1M from "./1m_data/ROP.csv";
import ROP3M from "./3m_data/ROP.csv";
import ROP6M from "./6m_data/ROP.csv";
import ROP1Y from "./1y_data/ROP.csv";
import ROST1M from "./1m_data/ROST.csv";
import ROST3M from "./3m_data/ROST.csv";
import ROST6M from "./6m_data/ROST.csv";
import ROST1Y from "./1y_data/ROST.csv";
import RCL1M from "./1m_data/RCL.csv";
import RCL3M from "./3m_data/RCL.csv";
import RCL6M from "./6m_data/RCL.csv";
import RCL1Y from "./1y_data/RCL.csv";
import SPGI1M from "./1m_data/SPGI.csv";
import SPGI3M from "./3m_data/SPGI.csv";
import SPGI6M from "./6m_data/SPGI.csv";
import SPGI1Y from "./1y_data/SPGI.csv";
import CRM1M from "./1m_data/CRM.csv";
import CRM3M from "./3m_data/CRM.csv";
import CRM6M from "./6m_data/CRM.csv";
import CRM1Y from "./1y_data/CRM.csv";
import SBAC1M from "./1m_data/SBAC.csv";
import SBAC3M from "./3m_data/SBAC.csv";
import SBAC6M from "./6m_data/SBAC.csv";
import SBAC1Y from "./1y_data/SBAC.csv";
import SLB1M from "./1m_data/SLB.csv";
import SLB3M from "./3m_data/SLB.csv";
import SLB6M from "./6m_data/SLB.csv";
import SLB1Y from "./1y_data/SLB.csv";
import STX1M from "./1m_data/STX.csv";
import STX3M from "./3m_data/STX.csv";
import STX6M from "./6m_data/STX.csv";
import STX1Y from "./1y_data/STX.csv";
import SEE1M from "./1m_data/SEE.csv";
import SEE3M from "./3m_data/SEE.csv";
import SEE6M from "./6m_data/SEE.csv";
import SEE1Y from "./1y_data/SEE.csv";
import SRE1M from "./1m_data/SRE.csv";
import SRE3M from "./3m_data/SRE.csv";
import SRE6M from "./6m_data/SRE.csv";
import SRE1Y from "./1y_data/SRE.csv";
import NOW1M from "./1m_data/NOW.csv";
import NOW3M from "./3m_data/NOW.csv";
import NOW6M from "./6m_data/NOW.csv";
import NOW1Y from "./1y_data/NOW.csv";
import SHW1M from "./1m_data/SHW.csv";
import SHW3M from "./3m_data/SHW.csv";
import SHW6M from "./6m_data/SHW.csv";
import SHW1Y from "./1y_data/SHW.csv";
import SPG1M from "./1m_data/SPG.csv";
import SPG3M from "./3m_data/SPG.csv";
import SPG6M from "./6m_data/SPG.csv";
import SPG1Y from "./1y_data/SPG.csv";
import SWKS1M from "./1m_data/SWKS.csv";
import SWKS3M from "./3m_data/SWKS.csv";
import SWKS6M from "./6m_data/SWKS.csv";
import SWKS1Y from "./1y_data/SWKS.csv";
import SLG1M from "./1m_data/SLG.csv";
import SLG3M from "./3m_data/SLG.csv";
import SLG6M from "./6m_data/SLG.csv";
import SLG1Y from "./1y_data/SLG.csv";
import SNA1M from "./1m_data/SNA.csv";
import SNA3M from "./3m_data/SNA.csv";
import SNA6M from "./6m_data/SNA.csv";
import SNA1Y from "./1y_data/SNA.csv";
import SO1M from "./1m_data/SO.csv";
import SO3M from "./3m_data/SO.csv";
import SO6M from "./6m_data/SO.csv";
import SO1Y from "./1y_data/SO.csv";
import LUV1M from "./1m_data/LUV.csv";
import LUV3M from "./3m_data/LUV.csv";
import LUV6M from "./6m_data/LUV.csv";
import LUV1Y from "./1y_data/LUV.csv";
import SWK1M from "./1m_data/SWK.csv";
import SWK3M from "./3m_data/SWK.csv";
import SWK6M from "./6m_data/SWK.csv";
import SWK1Y from "./1y_data/SWK.csv";
import SBUX1M from "./1m_data/SBUX.csv";
import SBUX3M from "./3m_data/SBUX.csv";
import SBUX6M from "./6m_data/SBUX.csv";
import SBUX1Y from "./1y_data/SBUX.csv";
import STT1M from "./1m_data/STT.csv";
import STT3M from "./3m_data/STT.csv";
import STT6M from "./6m_data/STT.csv";
import STT1Y from "./1y_data/STT.csv";
import STE1M from "./1m_data/STE.csv";
import STE3M from "./3m_data/STE.csv";
import STE6M from "./6m_data/STE.csv";
import STE1Y from "./1y_data/STE.csv";
import SYK1M from "./1m_data/SYK.csv";
import SYK3M from "./3m_data/SYK.csv";
import SYK6M from "./6m_data/SYK.csv";
import SYK1Y from "./1y_data/SYK.csv";
import SIVB1M from "./1m_data/SIVB.csv";
import SIVB3M from "./3m_data/SIVB.csv";
import SIVB6M from "./6m_data/SIVB.csv";
import SIVB1Y from "./1y_data/SIVB.csv";
import SYF1M from "./1m_data/SYF.csv";
import SYF3M from "./3m_data/SYF.csv";
import SYF6M from "./6m_data/SYF.csv";
import SYF1Y from "./1y_data/SYF.csv";
import SNPS1M from "./1m_data/SNPS.csv";
import SNPS3M from "./3m_data/SNPS.csv";
import SNPS6M from "./6m_data/SNPS.csv";
import SNPS1Y from "./1y_data/SNPS.csv";
import SYY1M from "./1m_data/SYY.csv";
import SYY3M from "./3m_data/SYY.csv";
import SYY6M from "./6m_data/SYY.csv";
import SYY1Y from "./1y_data/SYY.csv";
import TMUS1M from "./1m_data/TMUS.csv";
import TMUS3M from "./3m_data/TMUS.csv";
import TMUS6M from "./6m_data/TMUS.csv";
import TMUS1Y from "./1y_data/TMUS.csv";
import TROW1M from "./1m_data/TROW.csv";
import TROW3M from "./3m_data/TROW.csv";
import TROW6M from "./6m_data/TROW.csv";
import TROW1Y from "./1y_data/TROW.csv";
import TTWO1M from "./1m_data/TTWO.csv";
import TTWO3M from "./3m_data/TTWO.csv";
import TTWO6M from "./6m_data/TTWO.csv";
import TTWO1Y from "./1y_data/TTWO.csv";
import TPR1M from "./1m_data/TPR.csv";
import TPR3M from "./3m_data/TPR.csv";
import TPR6M from "./6m_data/TPR.csv";
import TPR1Y from "./1y_data/TPR.csv";
import TGT1M from "./1m_data/TGT.csv";
import TGT3M from "./3m_data/TGT.csv";
import TGT6M from "./6m_data/TGT.csv";
import TGT1Y from "./1y_data/TGT.csv";
import TEL1M from "./1m_data/TEL.csv";
import TEL3M from "./3m_data/TEL.csv";
import TEL6M from "./6m_data/TEL.csv";
import TEL1Y from "./1y_data/TEL.csv";
import TDY1M from "./1m_data/TDY.csv";
import TDY3M from "./3m_data/TDY.csv";
import TDY6M from "./6m_data/TDY.csv";
import TDY1Y from "./1y_data/TDY.csv";
import TFX1M from "./1m_data/TFX.csv";
import TFX3M from "./3m_data/TFX.csv";
import TFX6M from "./6m_data/TFX.csv";
import TFX1Y from "./1y_data/TFX.csv";
import TER1M from "./1m_data/TER.csv";
import TER3M from "./3m_data/TER.csv";
import TER6M from "./6m_data/TER.csv";
import TER1Y from "./1y_data/TER.csv";
import TSLA1M from "./1m_data/TSLA.csv";
import TSLA3M from "./3m_data/TSLA.csv";
import TSLA6M from "./6m_data/TSLA.csv";
import TSLA1Y from "./1y_data/TSLA.csv";
import TXN1M from "./1m_data/TXN.csv";
import TXN3M from "./3m_data/TXN.csv";
import TXN6M from "./6m_data/TXN.csv";
import TXN1Y from "./1y_data/TXN.csv";
import TXT1M from "./1m_data/TXT.csv";
import TXT3M from "./3m_data/TXT.csv";
import TXT6M from "./6m_data/TXT.csv";
import TXT1Y from "./1y_data/TXT.csv";
import TMO1M from "./1m_data/TMO.csv";
import TMO3M from "./3m_data/TMO.csv";
import TMO6M from "./6m_data/TMO.csv";
import TMO1Y from "./1y_data/TMO.csv";
import TJX1M from "./1m_data/TJX.csv";
import TJX3M from "./3m_data/TJX.csv";
import TJX6M from "./6m_data/TJX.csv";
import TJX1Y from "./1y_data/TJX.csv";
import TSCO1M from "./1m_data/TSCO.csv";
import TSCO3M from "./3m_data/TSCO.csv";
import TSCO6M from "./6m_data/TSCO.csv";
import TSCO1Y from "./1y_data/TSCO.csv";
import TT1M from "./1m_data/TT.csv";
import TT3M from "./3m_data/TT.csv";
import TT6M from "./6m_data/TT.csv";
import TT1Y from "./1y_data/TT.csv";
import TDG1M from "./1m_data/TDG.csv";
import TDG3M from "./3m_data/TDG.csv";
import TDG6M from "./6m_data/TDG.csv";
import TDG1Y from "./1y_data/TDG.csv";
import TRV1M from "./1m_data/TRV.csv";
import TRV3M from "./3m_data/TRV.csv";
import TRV6M from "./6m_data/TRV.csv";
import TRV1Y from "./1y_data/TRV.csv";
import TRMB1M from "./1m_data/TRMB.csv";
import TRMB3M from "./3m_data/TRMB.csv";
import TRMB6M from "./6m_data/TRMB.csv";
import TRMB1Y from "./1y_data/TRMB.csv";
import TFC1M from "./1m_data/TFC.csv";
import TFC3M from "./3m_data/TFC.csv";
import TFC6M from "./6m_data/TFC.csv";
import TFC1Y from "./1y_data/TFC.csv";
import TWTR1M from "./1m_data/TWTR.csv";
import TWTR3M from "./3m_data/TWTR.csv";
import TWTR6M from "./6m_data/TWTR.csv";
import TWTR1Y from "./1y_data/TWTR.csv";
import TYL1M from "./1m_data/TYL.csv";
import TYL3M from "./3m_data/TYL.csv";
import TYL6M from "./6m_data/TYL.csv";
import TYL1Y from "./1y_data/TYL.csv";
import TSN1M from "./1m_data/TSN.csv";
import TSN3M from "./3m_data/TSN.csv";
import TSN6M from "./6m_data/TSN.csv";
import TSN1Y from "./1y_data/TSN.csv";
import UDR1M from "./1m_data/UDR.csv";
import UDR3M from "./3m_data/UDR.csv";
import UDR6M from "./6m_data/UDR.csv";
import UDR1Y from "./1y_data/UDR.csv";
import ULTA1M from "./1m_data/ULTA.csv";
import ULTA3M from "./3m_data/ULTA.csv";
import ULTA6M from "./6m_data/ULTA.csv";
import ULTA1Y from "./1y_data/ULTA.csv";
import USB1M from "./1m_data/USB.csv";
import USB3M from "./3m_data/USB.csv";
import USB6M from "./6m_data/USB.csv";
import USB1Y from "./1y_data/USB.csv";
import UAA1M from "./1m_data/UAA.csv";
import UAA3M from "./3m_data/UAA.csv";
import UAA6M from "./6m_data/UAA.csv";
import UAA1Y from "./1y_data/UAA.csv";
import UA1M from "./1m_data/UA.csv";
import UA3M from "./3m_data/UA.csv";
import UA6M from "./6m_data/UA.csv";
import UA1Y from "./1y_data/UA.csv";
import UNP1M from "./1m_data/UNP.csv";
import UNP3M from "./3m_data/UNP.csv";
import UNP6M from "./6m_data/UNP.csv";
import UNP1Y from "./1y_data/UNP.csv";
import UAL1M from "./1m_data/UAL.csv";
import UAL3M from "./3m_data/UAL.csv";
import UAL6M from "./6m_data/UAL.csv";
import UAL1Y from "./1y_data/UAL.csv";
import UNH1M from "./1m_data/UNH.csv";
import UNH3M from "./3m_data/UNH.csv";
import UNH6M from "./6m_data/UNH.csv";
import UNH1Y from "./1y_data/UNH.csv";
import UPS1M from "./1m_data/UPS.csv";
import UPS3M from "./3m_data/UPS.csv";
import UPS6M from "./6m_data/UPS.csv";
import UPS1Y from "./1y_data/UPS.csv";
import URI1M from "./1m_data/URI.csv";
import URI3M from "./3m_data/URI.csv";
import URI6M from "./6m_data/URI.csv";
import URI1Y from "./1y_data/URI.csv";
import UHS1M from "./1m_data/UHS.csv";
import UHS3M from "./3m_data/UHS.csv";
import UHS6M from "./6m_data/UHS.csv";
import UHS1Y from "./1y_data/UHS.csv";
import UNM1M from "./1m_data/UNM.csv";
import UNM3M from "./3m_data/UNM.csv";
import UNM6M from "./6m_data/UNM.csv";
import UNM1Y from "./1y_data/UNM.csv";
import VLO1M from "./1m_data/VLO.csv";
import VLO3M from "./3m_data/VLO.csv";
import VLO6M from "./6m_data/VLO.csv";
import VLO1Y from "./1y_data/VLO.csv";
import VAR1M from "./1m_data/VAR.csv";
import VAR3M from "./3m_data/VAR.csv";
import VAR6M from "./6m_data/VAR.csv";
import VAR1Y from "./1y_data/VAR.csv";
import VTR1M from "./1m_data/VTR.csv";
import VTR3M from "./3m_data/VTR.csv";
import VTR6M from "./6m_data/VTR.csv";
import VTR1Y from "./1y_data/VTR.csv";
import VRSN1M from "./1m_data/VRSN.csv";
import VRSN3M from "./3m_data/VRSN.csv";
import VRSN6M from "./6m_data/VRSN.csv";
import VRSN1Y from "./1y_data/VRSN.csv";
import VRSK1M from "./1m_data/VRSK.csv";
import VRSK3M from "./3m_data/VRSK.csv";
import VRSK6M from "./6m_data/VRSK.csv";
import VRSK1Y from "./1y_data/VRSK.csv";
import VZ1M from "./1m_data/VZ.csv";
import VZ3M from "./3m_data/VZ.csv";
import VZ6M from "./6m_data/VZ.csv";
import VZ1Y from "./1y_data/VZ.csv";
import VRTX1M from "./1m_data/VRTX.csv";
import VRTX3M from "./3m_data/VRTX.csv";
import VRTX6M from "./6m_data/VRTX.csv";
import VRTX1Y from "./1y_data/VRTX.csv";
import VFC1M from "./1m_data/VFC.csv";
import VFC3M from "./3m_data/VFC.csv";
import VFC6M from "./6m_data/VFC.csv";
import VFC1Y from "./1y_data/VFC.csv";
import VIAC1M from "./1m_data/VIAC.csv";
import VIAC3M from "./3m_data/VIAC.csv";
import VIAC6M from "./6m_data/VIAC.csv";
import VIAC1Y from "./1y_data/VIAC.csv";
import VTRS1M from "./1m_data/VTRS.csv";
import VTRS3M from "./3m_data/VTRS.csv";
import VTRS6M from "./6m_data/VTRS.csv";
import VTRS1Y from "./1y_data/VTRS.csv";
import V1M from "./1m_data/V.csv";
import V3M from "./3m_data/V.csv";
import V6M from "./6m_data/V.csv";
import V1Y from "./1y_data/V.csv";
import VNT1M from "./1m_data/VNT.csv";
import VNT3M from "./3m_data/VNT.csv";
import VNT6M from "./6m_data/VNT.csv";
import VNT1Y from "./1y_data/VNT.csv";
import VNO1M from "./1m_data/VNO.csv";
import VNO3M from "./3m_data/VNO.csv";
import VNO6M from "./6m_data/VNO.csv";
import VNO1Y from "./1y_data/VNO.csv";
import VMC1M from "./1m_data/VMC.csv";
import VMC3M from "./3m_data/VMC.csv";
import VMC6M from "./6m_data/VMC.csv";
import VMC1Y from "./1y_data/VMC.csv";
import WRB1M from "./1m_data/WRB.csv";
import WRB3M from "./3m_data/WRB.csv";
import WRB6M from "./6m_data/WRB.csv";
import WRB1Y from "./1y_data/WRB.csv";
import WAB1M from "./1m_data/WAB.csv";
import WAB3M from "./3m_data/WAB.csv";
import WAB6M from "./6m_data/WAB.csv";
import WAB1Y from "./1y_data/WAB.csv";
import WMT1M from "./1m_data/WMT.csv";
import WMT3M from "./3m_data/WMT.csv";
import WMT6M from "./6m_data/WMT.csv";
import WMT1Y from "./1y_data/WMT.csv";
import WBA1M from "./1m_data/WBA.csv";
import WBA3M from "./3m_data/WBA.csv";
import WBA6M from "./6m_data/WBA.csv";
import WBA1Y from "./1y_data/WBA.csv";
import DIS1M from "./1m_data/DIS.csv";
import DIS3M from "./3m_data/DIS.csv";
import DIS6M from "./6m_data/DIS.csv";
import DIS1Y from "./1y_data/DIS.csv";
import WM1M from "./1m_data/WM.csv";
import WM3M from "./3m_data/WM.csv";
import WM6M from "./6m_data/WM.csv";
import WM1Y from "./1y_data/WM.csv";
import WAT1M from "./1m_data/WAT.csv";
import WAT3M from "./3m_data/WAT.csv";
import WAT6M from "./6m_data/WAT.csv";
import WAT1Y from "./1y_data/WAT.csv";
import WEC1M from "./1m_data/WEC.csv";
import WEC3M from "./3m_data/WEC.csv";
import WEC6M from "./6m_data/WEC.csv";
import WEC1Y from "./1y_data/WEC.csv";
import WFC1M from "./1m_data/WFC.csv";
import WFC3M from "./3m_data/WFC.csv";
import WFC6M from "./6m_data/WFC.csv";
import WFC1Y from "./1y_data/WFC.csv";
import WELL1M from "./1m_data/WELL.csv";
import WELL3M from "./3m_data/WELL.csv";
import WELL6M from "./6m_data/WELL.csv";
import WELL1Y from "./1y_data/WELL.csv";
import WST1M from "./1m_data/WST.csv";
import WST3M from "./3m_data/WST.csv";
import WST6M from "./6m_data/WST.csv";
import WST1Y from "./1y_data/WST.csv";
import WDC1M from "./1m_data/WDC.csv";
import WDC3M from "./3m_data/WDC.csv";
import WDC6M from "./6m_data/WDC.csv";
import WDC1Y from "./1y_data/WDC.csv";
import WU1M from "./1m_data/WU.csv";
import WU3M from "./3m_data/WU.csv";
import WU6M from "./6m_data/WU.csv";
import WU1Y from "./1y_data/WU.csv";
import WRK1M from "./1m_data/WRK.csv";
import WRK3M from "./3m_data/WRK.csv";
import WRK6M from "./6m_data/WRK.csv";
import WRK1Y from "./1y_data/WRK.csv";
import WY1M from "./1m_data/WY.csv";
import WY3M from "./3m_data/WY.csv";
import WY6M from "./6m_data/WY.csv";
import WY1Y from "./1y_data/WY.csv";
import WHR1M from "./1m_data/WHR.csv";
import WHR3M from "./3m_data/WHR.csv";
import WHR6M from "./6m_data/WHR.csv";
import WHR1Y from "./1y_data/WHR.csv";
import WMB1M from "./1m_data/WMB.csv";
import WMB3M from "./3m_data/WMB.csv";
import WMB6M from "./6m_data/WMB.csv";
import WMB1Y from "./1y_data/WMB.csv";
import WLTW1M from "./1m_data/WLTW.csv";
import WLTW3M from "./3m_data/WLTW.csv";
import WLTW6M from "./6m_data/WLTW.csv";
import WLTW1Y from "./1y_data/WLTW.csv";
import WYNN1M from "./1m_data/WYNN.csv";
import WYNN3M from "./3m_data/WYNN.csv";
import WYNN6M from "./6m_data/WYNN.csv";
import WYNN1Y from "./1y_data/WYNN.csv";
import XEL1M from "./1m_data/XEL.csv";
import XEL3M from "./3m_data/XEL.csv";
import XEL6M from "./6m_data/XEL.csv";
import XEL1Y from "./1y_data/XEL.csv";
import XRX1M from "./1m_data/XRX.csv";
import XRX3M from "./3m_data/XRX.csv";
import XRX6M from "./6m_data/XRX.csv";
import XRX1Y from "./1y_data/XRX.csv";
import XLNX1M from "./1m_data/XLNX.csv";
import XLNX3M from "./3m_data/XLNX.csv";
import XLNX6M from "./6m_data/XLNX.csv";
import XLNX1Y from "./1y_data/XLNX.csv";
import XYL1M from "./1m_data/XYL.csv";
import XYL3M from "./3m_data/XYL.csv";
import XYL6M from "./6m_data/XYL.csv";
import XYL1Y from "./1y_data/XYL.csv";
import YUM1M from "./1m_data/YUM.csv";
import YUM3M from "./3m_data/YUM.csv";
import YUM6M from "./6m_data/YUM.csv";
import YUM1Y from "./1y_data/YUM.csv";
import ZBRA1M from "./1m_data/ZBRA.csv";
import ZBRA3M from "./3m_data/ZBRA.csv";
import ZBRA6M from "./6m_data/ZBRA.csv";
import ZBRA1Y from "./1y_data/ZBRA.csv";
import ZBH1M from "./1m_data/ZBH.csv";
import ZBH3M from "./3m_data/ZBH.csv";
import ZBH6M from "./6m_data/ZBH.csv";
import ZBH1Y from "./1y_data/ZBH.csv";
import ZION1M from "./1m_data/ZION.csv";
import ZION3M from "./3m_data/ZION.csv";
import ZION6M from "./6m_data/ZION.csv";
import ZION1Y from "./1y_data/ZION.csv";
import ZTS1M from "./1m_data/ZTS.csv";
import ZTS3M from "./3m_data/ZTS.csv";
import ZTS6M from "./6m_data/ZTS.csv";
import ZTS1Y from "./1y_data/ZTS.csv";

function CSVToArray(csv) {
  var lines = csv.split("\n");
  return lines.splice(1, lines.length)
}

var firstGraph = CSVToArray(MMM1M);
var secondGraph = CSVToArray(MMM3M);
var thirdGraph = CSVToArray(MMM6M);
var fourthGraph = CSVToArray(MMM1Y);

class Graph extends React.Component {
  constructor() {
    super();
    this.state = {graph: firstGraph}
  }
  
  onClick1 = () => { this.setState({graph: firstGraph}) }
  onClick2 = () => { this.setState({graph: secondGraph}) }
  onClick3 = () => { this.setState({graph: thirdGraph}) }
  onClick4 = () => { this.setState({graph: fourthGraph}) }
  
  render() {
    var stockSentiment = getSentimentHistory(this.props.ticker);
    if (this.props.ticker === 'MMM') {
      firstGraph = CSVToArray(MMM1M);
      secondGraph = CSVToArray(MMM3M);
      thirdGraph = CSVToArray(MMM6M);
      fourthGraph = CSVToArray(MMM1Y);
    }
    if (this.props.ticker === 'ABT') {
      firstGraph = CSVToArray(ABT1M);
      secondGraph = CSVToArray(ABT3M);
      thirdGraph = CSVToArray(ABT6M);
      fourthGraph = CSVToArray(ABT1Y);
    }
    if (this.props.ticker === 'ABBV') {
      firstGraph = CSVToArray(ABBV1M);
      secondGraph = CSVToArray(ABBV3M);
      thirdGraph = CSVToArray(ABBV6M);
      fourthGraph = CSVToArray(ABBV1Y);
    }
    if (this.props.ticker === 'ABMD') {
      firstGraph = CSVToArray(ABMD1M);
      secondGraph = CSVToArray(ABMD3M);
      thirdGraph = CSVToArray(ABMD6M);
      fourthGraph = CSVToArray(ABMD1Y);
    }
    if (this.props.ticker === 'ACN') {
      firstGraph = CSVToArray(ACN1M);
      secondGraph = CSVToArray(ACN3M);
      thirdGraph = CSVToArray(ACN6M);
      fourthGraph = CSVToArray(ACN1Y);
    }
    if (this.props.ticker === 'ATVI') {
      firstGraph = CSVToArray(ATVI1M);
      secondGraph = CSVToArray(ATVI3M);
      thirdGraph = CSVToArray(ATVI6M);
      fourthGraph = CSVToArray(ATVI1Y);
    }
    if (this.props.ticker === 'ADBE') {
      firstGraph = CSVToArray(ADBE1M);
      secondGraph = CSVToArray(ADBE3M);
      thirdGraph = CSVToArray(ADBE6M);
      fourthGraph = CSVToArray(ADBE1Y);
    }
    if (this.props.ticker === 'AMD') {
      firstGraph = CSVToArray(AMD1M);
      secondGraph = CSVToArray(AMD3M);
      thirdGraph = CSVToArray(AMD6M);
      fourthGraph = CSVToArray(AMD1Y);
    }
    if (this.props.ticker === 'AAP') {
      firstGraph = CSVToArray(AAP1M);
      secondGraph = CSVToArray(AAP3M);
      thirdGraph = CSVToArray(AAP6M);
      fourthGraph = CSVToArray(AAP1Y);
    }
    if (this.props.ticker === 'AES') {
      firstGraph = CSVToArray(AES1M);
      secondGraph = CSVToArray(AES3M);
      thirdGraph = CSVToArray(AES6M);
      fourthGraph = CSVToArray(AES1Y);
    }
    if (this.props.ticker === 'AFL') {
      firstGraph = CSVToArray(AFL1M);
      secondGraph = CSVToArray(AFL3M);
      thirdGraph = CSVToArray(AFL6M);
      fourthGraph = CSVToArray(AFL1Y);
    }
    if (this.props.ticker === 'A') {
      firstGraph = CSVToArray(A1M);
      secondGraph = CSVToArray(A3M);
      thirdGraph = CSVToArray(A6M);
      fourthGraph = CSVToArray(A1Y);
    }
    if (this.props.ticker === 'APD') {
      firstGraph = CSVToArray(APD1M);
      secondGraph = CSVToArray(APD3M);
      thirdGraph = CSVToArray(APD6M);
      fourthGraph = CSVToArray(APD1Y);
    }
    if (this.props.ticker === 'AKAM') {
      firstGraph = CSVToArray(AKAM1M);
      secondGraph = CSVToArray(AKAM3M);
      thirdGraph = CSVToArray(AKAM6M);
      fourthGraph = CSVToArray(AKAM1Y);
    }
    if (this.props.ticker === 'ALK') {
      firstGraph = CSVToArray(ALK1M);
      secondGraph = CSVToArray(ALK3M);
      thirdGraph = CSVToArray(ALK6M);
      fourthGraph = CSVToArray(ALK1Y);
    }
    if (this.props.ticker === 'ALB') {
      firstGraph = CSVToArray(ALB1M);
      secondGraph = CSVToArray(ALB3M);
      thirdGraph = CSVToArray(ALB6M);
      fourthGraph = CSVToArray(ALB1Y);
    }
    if (this.props.ticker === 'ARE') {
      firstGraph = CSVToArray(ARE1M);
      secondGraph = CSVToArray(ARE3M);
      thirdGraph = CSVToArray(ARE6M);
      fourthGraph = CSVToArray(ARE1Y);
    }
    if (this.props.ticker === 'ALXN') {
      firstGraph = CSVToArray(ALXN1M);
      secondGraph = CSVToArray(ALXN3M);
      thirdGraph = CSVToArray(ALXN6M);
      fourthGraph = CSVToArray(ALXN1Y);
    }
    if (this.props.ticker === 'ALGN') {
      firstGraph = CSVToArray(ALGN1M);
      secondGraph = CSVToArray(ALGN3M);
      thirdGraph = CSVToArray(ALGN6M);
      fourthGraph = CSVToArray(ALGN1Y);
    }
    if (this.props.ticker === 'ALLE') {
      firstGraph = CSVToArray(ALLE1M);
      secondGraph = CSVToArray(ALLE3M);
      thirdGraph = CSVToArray(ALLE6M);
      fourthGraph = CSVToArray(ALLE1Y);
    }
    if (this.props.ticker === 'LNT') {
      firstGraph = CSVToArray(LNT1M);
      secondGraph = CSVToArray(LNT3M);
      thirdGraph = CSVToArray(LNT6M);
      fourthGraph = CSVToArray(LNT1Y);
    }
    if (this.props.ticker === 'ALL') {
      firstGraph = CSVToArray(ALL1M);
      secondGraph = CSVToArray(ALL3M);
      thirdGraph = CSVToArray(ALL6M);
      fourthGraph = CSVToArray(ALL1Y);
    }
    if (this.props.ticker === 'GOOGL') {
      firstGraph = CSVToArray(GOOGL1M);
      secondGraph = CSVToArray(GOOGL3M);
      thirdGraph = CSVToArray(GOOGL6M);
      fourthGraph = CSVToArray(GOOGL1Y);
    }
    if (this.props.ticker === 'GOOG') {
      firstGraph = CSVToArray(GOOG1M);
      secondGraph = CSVToArray(GOOG3M);
      thirdGraph = CSVToArray(GOOG6M);
      fourthGraph = CSVToArray(GOOG1Y);
    }
    if (this.props.ticker === 'MO') {
      firstGraph = CSVToArray(MO1M);
      secondGraph = CSVToArray(MO3M);
      thirdGraph = CSVToArray(MO6M);
      fourthGraph = CSVToArray(MO1Y);
    }
    if (this.props.ticker === 'AMZN') {
      firstGraph = CSVToArray(AMZN1M);
      secondGraph = CSVToArray(AMZN3M);
      thirdGraph = CSVToArray(AMZN6M);
      fourthGraph = CSVToArray(AMZN1Y);
    }
    if (this.props.ticker === 'AMCR') {
      firstGraph = CSVToArray(AMCR1M);
      secondGraph = CSVToArray(AMCR3M);
      thirdGraph = CSVToArray(AMCR6M);
      fourthGraph = CSVToArray(AMCR1Y);
    }
    if (this.props.ticker === 'AEE') {
      firstGraph = CSVToArray(AEE1M);
      secondGraph = CSVToArray(AEE3M);
      thirdGraph = CSVToArray(AEE6M);
      fourthGraph = CSVToArray(AEE1Y);
    }
    if (this.props.ticker === 'AAL') {
      firstGraph = CSVToArray(AAL1M);
      secondGraph = CSVToArray(AAL3M);
      thirdGraph = CSVToArray(AAL6M);
      fourthGraph = CSVToArray(AAL1Y);
    }
    if (this.props.ticker === 'AEP') {
      firstGraph = CSVToArray(AEP1M);
      secondGraph = CSVToArray(AEP3M);
      thirdGraph = CSVToArray(AEP6M);
      fourthGraph = CSVToArray(AEP1Y);
    }
    if (this.props.ticker === 'AXP') {
      firstGraph = CSVToArray(AXP1M);
      secondGraph = CSVToArray(AXP3M);
      thirdGraph = CSVToArray(AXP6M);
      fourthGraph = CSVToArray(AXP1Y);
    }
    if (this.props.ticker === 'AIG') {
      firstGraph = CSVToArray(AIG1M);
      secondGraph = CSVToArray(AIG3M);
      thirdGraph = CSVToArray(AIG6M);
      fourthGraph = CSVToArray(AIG1Y);
    }
    if (this.props.ticker === 'AMT') {
      firstGraph = CSVToArray(AMT1M);
      secondGraph = CSVToArray(AMT3M);
      thirdGraph = CSVToArray(AMT6M);
      fourthGraph = CSVToArray(AMT1Y);
    }
    if (this.props.ticker === 'AWK') {
      firstGraph = CSVToArray(AWK1M);
      secondGraph = CSVToArray(AWK3M);
      thirdGraph = CSVToArray(AWK6M);
      fourthGraph = CSVToArray(AWK1Y);
    }
    if (this.props.ticker === 'AMP') {
      firstGraph = CSVToArray(AMP1M);
      secondGraph = CSVToArray(AMP3M);
      thirdGraph = CSVToArray(AMP6M);
      fourthGraph = CSVToArray(AMP1Y);
    }
    if (this.props.ticker === 'ABC') {
      firstGraph = CSVToArray(ABC1M);
      secondGraph = CSVToArray(ABC3M);
      thirdGraph = CSVToArray(ABC6M);
      fourthGraph = CSVToArray(ABC1Y);
    }
    if (this.props.ticker === 'AME') {
      firstGraph = CSVToArray(AME1M);
      secondGraph = CSVToArray(AME3M);
      thirdGraph = CSVToArray(AME6M);
      fourthGraph = CSVToArray(AME1Y);
    }
    if (this.props.ticker === 'AMGN') {
      firstGraph = CSVToArray(AMGN1M);
      secondGraph = CSVToArray(AMGN3M);
      thirdGraph = CSVToArray(AMGN6M);
      fourthGraph = CSVToArray(AMGN1Y);
    }
    if (this.props.ticker === 'APH') {
      firstGraph = CSVToArray(APH1M);
      secondGraph = CSVToArray(APH3M);
      thirdGraph = CSVToArray(APH6M);
      fourthGraph = CSVToArray(APH1Y);
    }
    if (this.props.ticker === 'ADI') {
      firstGraph = CSVToArray(ADI1M);
      secondGraph = CSVToArray(ADI3M);
      thirdGraph = CSVToArray(ADI6M);
      fourthGraph = CSVToArray(ADI1Y);
    }
    if (this.props.ticker === 'ANSS') {
      firstGraph = CSVToArray(ANSS1M);
      secondGraph = CSVToArray(ANSS3M);
      thirdGraph = CSVToArray(ANSS6M);
      fourthGraph = CSVToArray(ANSS1Y);
    }
    if (this.props.ticker === 'ANTM') {
      firstGraph = CSVToArray(ANTM1M);
      secondGraph = CSVToArray(ANTM3M);
      thirdGraph = CSVToArray(ANTM6M);
      fourthGraph = CSVToArray(ANTM1Y);
    }
    if (this.props.ticker === 'AON') {
      firstGraph = CSVToArray(AON1M);
      secondGraph = CSVToArray(AON3M);
      thirdGraph = CSVToArray(AON6M);
      fourthGraph = CSVToArray(AON1Y);
    }
    if (this.props.ticker === 'AOS') {
      firstGraph = CSVToArray(AOS1M);
      secondGraph = CSVToArray(AOS3M);
      thirdGraph = CSVToArray(AOS6M);
      fourthGraph = CSVToArray(AOS1Y);
    }
    if (this.props.ticker === 'APA') {
      firstGraph = CSVToArray(APA1M);
      secondGraph = CSVToArray(APA3M);
      thirdGraph = CSVToArray(APA6M);
      fourthGraph = CSVToArray(APA1Y);
    }
    if (this.props.ticker === 'AAPL') {
      firstGraph = CSVToArray(AAPL1M);
      secondGraph = CSVToArray(AAPL3M);
      thirdGraph = CSVToArray(AAPL6M);
      fourthGraph = CSVToArray(AAPL1Y);
    }
    if (this.props.ticker === 'AMAT') {
      firstGraph = CSVToArray(AMAT1M);
      secondGraph = CSVToArray(AMAT3M);
      thirdGraph = CSVToArray(AMAT6M);
      fourthGraph = CSVToArray(AMAT1Y);
    }
    if (this.props.ticker === 'APTV') {
      firstGraph = CSVToArray(APTV1M);
      secondGraph = CSVToArray(APTV3M);
      thirdGraph = CSVToArray(APTV6M);
      fourthGraph = CSVToArray(APTV1Y);
    }
    if (this.props.ticker === 'ADM') {
      firstGraph = CSVToArray(ADM1M);
      secondGraph = CSVToArray(ADM3M);
      thirdGraph = CSVToArray(ADM6M);
      fourthGraph = CSVToArray(ADM1Y);
    }
    if (this.props.ticker === 'ANET') {
      firstGraph = CSVToArray(ANET1M);
      secondGraph = CSVToArray(ANET3M);
      thirdGraph = CSVToArray(ANET6M);
      fourthGraph = CSVToArray(ANET1Y);
    }
    if (this.props.ticker === 'AJG') {
      firstGraph = CSVToArray(AJG1M);
      secondGraph = CSVToArray(AJG3M);
      thirdGraph = CSVToArray(AJG6M);
      fourthGraph = CSVToArray(AJG1Y);
    }
    if (this.props.ticker === 'AIZ') {
      firstGraph = CSVToArray(AIZ1M);
      secondGraph = CSVToArray(AIZ3M);
      thirdGraph = CSVToArray(AIZ6M);
      fourthGraph = CSVToArray(AIZ1Y);
    }
    if (this.props.ticker === 'T') {
      firstGraph = CSVToArray(T1M);
      secondGraph = CSVToArray(T3M);
      thirdGraph = CSVToArray(T6M);
      fourthGraph = CSVToArray(T1Y);
    }
    if (this.props.ticker === 'ATO') {
      firstGraph = CSVToArray(ATO1M);
      secondGraph = CSVToArray(ATO3M);
      thirdGraph = CSVToArray(ATO6M);
      fourthGraph = CSVToArray(ATO1Y);
    }
    if (this.props.ticker === 'ADSK') {
      firstGraph = CSVToArray(ADSK1M);
      secondGraph = CSVToArray(ADSK3M);
      thirdGraph = CSVToArray(ADSK6M);
      fourthGraph = CSVToArray(ADSK1Y);
    }
    if (this.props.ticker === 'ADP') {
      firstGraph = CSVToArray(ADP1M);
      secondGraph = CSVToArray(ADP3M);
      thirdGraph = CSVToArray(ADP6M);
      fourthGraph = CSVToArray(ADP1Y);
    }
    if (this.props.ticker === 'AZO') {
      firstGraph = CSVToArray(AZO1M);
      secondGraph = CSVToArray(AZO3M);
      thirdGraph = CSVToArray(AZO6M);
      fourthGraph = CSVToArray(AZO1Y);
    }
    if (this.props.ticker === 'AVB') {
      firstGraph = CSVToArray(AVB1M);
      secondGraph = CSVToArray(AVB3M);
      thirdGraph = CSVToArray(AVB6M);
      fourthGraph = CSVToArray(AVB1Y);
    }
    if (this.props.ticker === 'AVY') {
      firstGraph = CSVToArray(AVY1M);
      secondGraph = CSVToArray(AVY3M);
      thirdGraph = CSVToArray(AVY6M);
      fourthGraph = CSVToArray(AVY1Y);
    }
    if (this.props.ticker === 'BKR') {
      firstGraph = CSVToArray(BKR1M);
      secondGraph = CSVToArray(BKR3M);
      thirdGraph = CSVToArray(BKR6M);
      fourthGraph = CSVToArray(BKR1Y);
    }
    if (this.props.ticker === 'BLL') {
      firstGraph = CSVToArray(BLL1M);
      secondGraph = CSVToArray(BLL3M);
      thirdGraph = CSVToArray(BLL6M);
      fourthGraph = CSVToArray(BLL1Y);
    }
    if (this.props.ticker === 'BAC') {
      firstGraph = CSVToArray(BAC1M);
      secondGraph = CSVToArray(BAC3M);
      thirdGraph = CSVToArray(BAC6M);
      fourthGraph = CSVToArray(BAC1Y);
    }
    if (this.props.ticker === 'BK') {
      firstGraph = CSVToArray(BK1M);
      secondGraph = CSVToArray(BK3M);
      thirdGraph = CSVToArray(BK6M);
      fourthGraph = CSVToArray(BK1Y);
    }
    if (this.props.ticker === 'BAX') {
      firstGraph = CSVToArray(BAX1M);
      secondGraph = CSVToArray(BAX3M);
      thirdGraph = CSVToArray(BAX6M);
      fourthGraph = CSVToArray(BAX1Y);
    }
    if (this.props.ticker === 'BDX') {
      firstGraph = CSVToArray(BDX1M);
      secondGraph = CSVToArray(BDX3M);
      thirdGraph = CSVToArray(BDX6M);
      fourthGraph = CSVToArray(BDX1Y);
    }
    if (this.props.ticker === 'BRK.B') {
      firstGraph = CSVToArray(BRK.B1M);
      secondGraph = CSVToArray(BRK.B3M);
      thirdGraph = CSVToArray(BRK.B6M);
      fourthGraph = CSVToArray(BRK.B1Y);
    }
    if (this.props.ticker === 'BBY') {
      firstGraph = CSVToArray(BBY1M);
      secondGraph = CSVToArray(BBY3M);
      thirdGraph = CSVToArray(BBY6M);
      fourthGraph = CSVToArray(BBY1Y);
    }
    if (this.props.ticker === 'BIO') {
      firstGraph = CSVToArray(BIO1M);
      secondGraph = CSVToArray(BIO3M);
      thirdGraph = CSVToArray(BIO6M);
      fourthGraph = CSVToArray(BIO1Y);
    }
    if (this.props.ticker === 'BIIB') {
      firstGraph = CSVToArray(BIIB1M);
      secondGraph = CSVToArray(BIIB3M);
      thirdGraph = CSVToArray(BIIB6M);
      fourthGraph = CSVToArray(BIIB1Y);
    }
    if (this.props.ticker === 'BLK') {
      firstGraph = CSVToArray(BLK1M);
      secondGraph = CSVToArray(BLK3M);
      thirdGraph = CSVToArray(BLK6M);
      fourthGraph = CSVToArray(BLK1Y);
    }
    if (this.props.ticker === 'BA') {
      firstGraph = CSVToArray(BA1M);
      secondGraph = CSVToArray(BA3M);
      thirdGraph = CSVToArray(BA6M);
      fourthGraph = CSVToArray(BA1Y);
    }
    if (this.props.ticker === 'BKNG') {
      firstGraph = CSVToArray(BKNG1M);
      secondGraph = CSVToArray(BKNG3M);
      thirdGraph = CSVToArray(BKNG6M);
      fourthGraph = CSVToArray(BKNG1Y);
    }
    if (this.props.ticker === 'BWA') {
      firstGraph = CSVToArray(BWA1M);
      secondGraph = CSVToArray(BWA3M);
      thirdGraph = CSVToArray(BWA6M);
      fourthGraph = CSVToArray(BWA1Y);
    }
    if (this.props.ticker === 'BXP') {
      firstGraph = CSVToArray(BXP1M);
      secondGraph = CSVToArray(BXP3M);
      thirdGraph = CSVToArray(BXP6M);
      fourthGraph = CSVToArray(BXP1Y);
    }
    if (this.props.ticker === 'BSX') {
      firstGraph = CSVToArray(BSX1M);
      secondGraph = CSVToArray(BSX3M);
      thirdGraph = CSVToArray(BSX6M);
      fourthGraph = CSVToArray(BSX1Y);
    }
    if (this.props.ticker === 'BMY') {
      firstGraph = CSVToArray(BMY1M);
      secondGraph = CSVToArray(BMY3M);
      thirdGraph = CSVToArray(BMY6M);
      fourthGraph = CSVToArray(BMY1Y);
    }
    if (this.props.ticker === 'AVGO') {
      firstGraph = CSVToArray(AVGO1M);
      secondGraph = CSVToArray(AVGO3M);
      thirdGraph = CSVToArray(AVGO6M);
      fourthGraph = CSVToArray(AVGO1Y);
    }
    if (this.props.ticker === 'BR') {
      firstGraph = CSVToArray(BR1M);
      secondGraph = CSVToArray(BR3M);
      thirdGraph = CSVToArray(BR6M);
      fourthGraph = CSVToArray(BR1Y);
    }
    if (this.props.ticker === 'BF.B') {
      firstGraph = CSVToArray(BF.B1M);
      secondGraph = CSVToArray(BF.B3M);
      thirdGraph = CSVToArray(BF.B6M);
      fourthGraph = CSVToArray(BF.B1Y);
    }
    if (this.props.ticker === 'CHRW') {
      firstGraph = CSVToArray(CHRW1M);
      secondGraph = CSVToArray(CHRW3M);
      thirdGraph = CSVToArray(CHRW6M);
      fourthGraph = CSVToArray(CHRW1Y);
    }
    if (this.props.ticker === 'COG') {
      firstGraph = CSVToArray(COG1M);
      secondGraph = CSVToArray(COG3M);
      thirdGraph = CSVToArray(COG6M);
      fourthGraph = CSVToArray(COG1Y);
    }
    if (this.props.ticker === 'CDNS') {
      firstGraph = CSVToArray(CDNS1M);
      secondGraph = CSVToArray(CDNS3M);
      thirdGraph = CSVToArray(CDNS6M);
      fourthGraph = CSVToArray(CDNS1Y);
    }
    if (this.props.ticker === 'CPB') {
      firstGraph = CSVToArray(CPB1M);
      secondGraph = CSVToArray(CPB3M);
      thirdGraph = CSVToArray(CPB6M);
      fourthGraph = CSVToArray(CPB1Y);
    }
    if (this.props.ticker === 'COF') {
      firstGraph = CSVToArray(COF1M);
      secondGraph = CSVToArray(COF3M);
      thirdGraph = CSVToArray(COF6M);
      fourthGraph = CSVToArray(COF1Y);
    }
    if (this.props.ticker === 'CAH') {
      firstGraph = CSVToArray(CAH1M);
      secondGraph = CSVToArray(CAH3M);
      thirdGraph = CSVToArray(CAH6M);
      fourthGraph = CSVToArray(CAH1Y);
    }
    if (this.props.ticker === 'KMX') {
      firstGraph = CSVToArray(KMX1M);
      secondGraph = CSVToArray(KMX3M);
      thirdGraph = CSVToArray(KMX6M);
      fourthGraph = CSVToArray(KMX1Y);
    }
    if (this.props.ticker === 'CCL') {
      firstGraph = CSVToArray(CCL1M);
      secondGraph = CSVToArray(CCL3M);
      thirdGraph = CSVToArray(CCL6M);
      fourthGraph = CSVToArray(CCL1Y);
    }
    if (this.props.ticker === 'CARR') {
      firstGraph = CSVToArray(CARR1M);
      secondGraph = CSVToArray(CARR3M);
      thirdGraph = CSVToArray(CARR6M);
      fourthGraph = CSVToArray(CARR1Y);
    }
    if (this.props.ticker === 'CTLT') {
      firstGraph = CSVToArray(CTLT1M);
      secondGraph = CSVToArray(CTLT3M);
      thirdGraph = CSVToArray(CTLT6M);
      fourthGraph = CSVToArray(CTLT1Y);
    }
    if (this.props.ticker === 'CAT') {
      firstGraph = CSVToArray(CAT1M);
      secondGraph = CSVToArray(CAT3M);
      thirdGraph = CSVToArray(CAT6M);
      fourthGraph = CSVToArray(CAT1Y);
    }
    if (this.props.ticker === 'CBOE') {
      firstGraph = CSVToArray(CBOE1M);
      secondGraph = CSVToArray(CBOE3M);
      thirdGraph = CSVToArray(CBOE6M);
      fourthGraph = CSVToArray(CBOE1Y);
    }
    if (this.props.ticker === 'CBRE') {
      firstGraph = CSVToArray(CBRE1M);
      secondGraph = CSVToArray(CBRE3M);
      thirdGraph = CSVToArray(CBRE6M);
      fourthGraph = CSVToArray(CBRE1Y);
    }
    if (this.props.ticker === 'CDW') {
      firstGraph = CSVToArray(CDW1M);
      secondGraph = CSVToArray(CDW3M);
      thirdGraph = CSVToArray(CDW6M);
      fourthGraph = CSVToArray(CDW1Y);
    }
    if (this.props.ticker === 'CE') {
      firstGraph = CSVToArray(CE1M);
      secondGraph = CSVToArray(CE3M);
      thirdGraph = CSVToArray(CE6M);
      fourthGraph = CSVToArray(CE1Y);
    }
    if (this.props.ticker === 'CNC') {
      firstGraph = CSVToArray(CNC1M);
      secondGraph = CSVToArray(CNC3M);
      thirdGraph = CSVToArray(CNC6M);
      fourthGraph = CSVToArray(CNC1Y);
    }
    if (this.props.ticker === 'CNP') {
      firstGraph = CSVToArray(CNP1M);
      secondGraph = CSVToArray(CNP3M);
      thirdGraph = CSVToArray(CNP6M);
      fourthGraph = CSVToArray(CNP1Y);
    }
    if (this.props.ticker === 'CERN') {
      firstGraph = CSVToArray(CERN1M);
      secondGraph = CSVToArray(CERN3M);
      thirdGraph = CSVToArray(CERN6M);
      fourthGraph = CSVToArray(CERN1Y);
    }
    if (this.props.ticker === 'CF') {
      firstGraph = CSVToArray(CF1M);
      secondGraph = CSVToArray(CF3M);
      thirdGraph = CSVToArray(CF6M);
      fourthGraph = CSVToArray(CF1Y);
    }
    if (this.props.ticker === 'SCHW') {
      firstGraph = CSVToArray(SCHW1M);
      secondGraph = CSVToArray(SCHW3M);
      thirdGraph = CSVToArray(SCHW6M);
      fourthGraph = CSVToArray(SCHW1Y);
    }
    if (this.props.ticker === 'CHTR') {
      firstGraph = CSVToArray(CHTR1M);
      secondGraph = CSVToArray(CHTR3M);
      thirdGraph = CSVToArray(CHTR6M);
      fourthGraph = CSVToArray(CHTR1Y);
    }
    if (this.props.ticker === 'CVX') {
      firstGraph = CSVToArray(CVX1M);
      secondGraph = CSVToArray(CVX3M);
      thirdGraph = CSVToArray(CVX6M);
      fourthGraph = CSVToArray(CVX1Y);
    }
    if (this.props.ticker === 'CMG') {
      firstGraph = CSVToArray(CMG1M);
      secondGraph = CSVToArray(CMG3M);
      thirdGraph = CSVToArray(CMG6M);
      fourthGraph = CSVToArray(CMG1Y);
    }
    if (this.props.ticker === 'CB') {
      firstGraph = CSVToArray(CB1M);
      secondGraph = CSVToArray(CB3M);
      thirdGraph = CSVToArray(CB6M);
      fourthGraph = CSVToArray(CB1Y);
    }
    if (this.props.ticker === 'CHD') {
      firstGraph = CSVToArray(CHD1M);
      secondGraph = CSVToArray(CHD3M);
      thirdGraph = CSVToArray(CHD6M);
      fourthGraph = CSVToArray(CHD1Y);
    }
    if (this.props.ticker === 'CI') {
      firstGraph = CSVToArray(CI1M);
      secondGraph = CSVToArray(CI3M);
      thirdGraph = CSVToArray(CI6M);
      fourthGraph = CSVToArray(CI1Y);
    }
    if (this.props.ticker === 'CINF') {
      firstGraph = CSVToArray(CINF1M);
      secondGraph = CSVToArray(CINF3M);
      thirdGraph = CSVToArray(CINF6M);
      fourthGraph = CSVToArray(CINF1Y);
    }
    if (this.props.ticker === 'CTAS') {
      firstGraph = CSVToArray(CTAS1M);
      secondGraph = CSVToArray(CTAS3M);
      thirdGraph = CSVToArray(CTAS6M);
      fourthGraph = CSVToArray(CTAS1Y);
    }
    if (this.props.ticker === 'CSCO') {
      firstGraph = CSVToArray(CSCO1M);
      secondGraph = CSVToArray(CSCO3M);
      thirdGraph = CSVToArray(CSCO6M);
      fourthGraph = CSVToArray(CSCO1Y);
    }
    if (this.props.ticker === 'C') {
      firstGraph = CSVToArray(C1M);
      secondGraph = CSVToArray(C3M);
      thirdGraph = CSVToArray(C6M);
      fourthGraph = CSVToArray(C1Y);
    }
    if (this.props.ticker === 'CFG') {
      firstGraph = CSVToArray(CFG1M);
      secondGraph = CSVToArray(CFG3M);
      thirdGraph = CSVToArray(CFG6M);
      fourthGraph = CSVToArray(CFG1Y);
    }
    if (this.props.ticker === 'CTXS') {
      firstGraph = CSVToArray(CTXS1M);
      secondGraph = CSVToArray(CTXS3M);
      thirdGraph = CSVToArray(CTXS6M);
      fourthGraph = CSVToArray(CTXS1Y);
    }
    if (this.props.ticker === 'CLX') {
      firstGraph = CSVToArray(CLX1M);
      secondGraph = CSVToArray(CLX3M);
      thirdGraph = CSVToArray(CLX6M);
      fourthGraph = CSVToArray(CLX1Y);
    }
    if (this.props.ticker === 'CME') {
      firstGraph = CSVToArray(CME1M);
      secondGraph = CSVToArray(CME3M);
      thirdGraph = CSVToArray(CME6M);
      fourthGraph = CSVToArray(CME1Y);
    }
    if (this.props.ticker === 'CMS') {
      firstGraph = CSVToArray(CMS1M);
      secondGraph = CSVToArray(CMS3M);
      thirdGraph = CSVToArray(CMS6M);
      fourthGraph = CSVToArray(CMS1Y);
    }
    if (this.props.ticker === 'KO') {
      firstGraph = CSVToArray(KO1M);
      secondGraph = CSVToArray(KO3M);
      thirdGraph = CSVToArray(KO6M);
      fourthGraph = CSVToArray(KO1Y);
    }
    if (this.props.ticker === 'CTSH') {
      firstGraph = CSVToArray(CTSH1M);
      secondGraph = CSVToArray(CTSH3M);
      thirdGraph = CSVToArray(CTSH6M);
      fourthGraph = CSVToArray(CTSH1Y);
    }
    if (this.props.ticker === 'CL') {
      firstGraph = CSVToArray(CL1M);
      secondGraph = CSVToArray(CL3M);
      thirdGraph = CSVToArray(CL6M);
      fourthGraph = CSVToArray(CL1Y);
    }
    if (this.props.ticker === 'CMCSA') {
      firstGraph = CSVToArray(CMCSA1M);
      secondGraph = CSVToArray(CMCSA3M);
      thirdGraph = CSVToArray(CMCSA6M);
      fourthGraph = CSVToArray(CMCSA1Y);
    }
    if (this.props.ticker === 'CMA') {
      firstGraph = CSVToArray(CMA1M);
      secondGraph = CSVToArray(CMA3M);
      thirdGraph = CSVToArray(CMA6M);
      fourthGraph = CSVToArray(CMA1Y);
    }
    if (this.props.ticker === 'CAG') {
      firstGraph = CSVToArray(CAG1M);
      secondGraph = CSVToArray(CAG3M);
      thirdGraph = CSVToArray(CAG6M);
      fourthGraph = CSVToArray(CAG1Y);
    }
    if (this.props.ticker === 'COP') {
      firstGraph = CSVToArray(COP1M);
      secondGraph = CSVToArray(COP3M);
      thirdGraph = CSVToArray(COP6M);
      fourthGraph = CSVToArray(COP1Y);
    }
    if (this.props.ticker === 'ED') {
      firstGraph = CSVToArray(ED1M);
      secondGraph = CSVToArray(ED3M);
      thirdGraph = CSVToArray(ED6M);
      fourthGraph = CSVToArray(ED1Y);
    }
    if (this.props.ticker === 'STZ') {
      firstGraph = CSVToArray(STZ1M);
      secondGraph = CSVToArray(STZ3M);
      thirdGraph = CSVToArray(STZ6M);
      fourthGraph = CSVToArray(STZ1Y);
    }
    if (this.props.ticker === 'COO') {
      firstGraph = CSVToArray(COO1M);
      secondGraph = CSVToArray(COO3M);
      thirdGraph = CSVToArray(COO6M);
      fourthGraph = CSVToArray(COO1Y);
    }
    if (this.props.ticker === 'CPRT') {
      firstGraph = CSVToArray(CPRT1M);
      secondGraph = CSVToArray(CPRT3M);
      thirdGraph = CSVToArray(CPRT6M);
      fourthGraph = CSVToArray(CPRT1Y);
    }
    if (this.props.ticker === 'GLW') {
      firstGraph = CSVToArray(GLW1M);
      secondGraph = CSVToArray(GLW3M);
      thirdGraph = CSVToArray(GLW6M);
      fourthGraph = CSVToArray(GLW1Y);
    }
    if (this.props.ticker === 'CTVA') {
      firstGraph = CSVToArray(CTVA1M);
      secondGraph = CSVToArray(CTVA3M);
      thirdGraph = CSVToArray(CTVA6M);
      fourthGraph = CSVToArray(CTVA1Y);
    }
    if (this.props.ticker === 'COST') {
      firstGraph = CSVToArray(COST1M);
      secondGraph = CSVToArray(COST3M);
      thirdGraph = CSVToArray(COST6M);
      fourthGraph = CSVToArray(COST1Y);
    }
    if (this.props.ticker === 'CCI') {
      firstGraph = CSVToArray(CCI1M);
      secondGraph = CSVToArray(CCI3M);
      thirdGraph = CSVToArray(CCI6M);
      fourthGraph = CSVToArray(CCI1Y);
    }
    if (this.props.ticker === 'CSX') {
      firstGraph = CSVToArray(CSX1M);
      secondGraph = CSVToArray(CSX3M);
      thirdGraph = CSVToArray(CSX6M);
      fourthGraph = CSVToArray(CSX1Y);
    }
    if (this.props.ticker === 'CMI') {
      firstGraph = CSVToArray(CMI1M);
      secondGraph = CSVToArray(CMI3M);
      thirdGraph = CSVToArray(CMI6M);
      fourthGraph = CSVToArray(CMI1Y);
    }
    if (this.props.ticker === 'CVS') {
      firstGraph = CSVToArray(CVS1M);
      secondGraph = CSVToArray(CVS3M);
      thirdGraph = CSVToArray(CVS6M);
      fourthGraph = CSVToArray(CVS1Y);
    }
    if (this.props.ticker === 'DHI') {
      firstGraph = CSVToArray(DHI1M);
      secondGraph = CSVToArray(DHI3M);
      thirdGraph = CSVToArray(DHI6M);
      fourthGraph = CSVToArray(DHI1Y);
    }
    if (this.props.ticker === 'DHR') {
      firstGraph = CSVToArray(DHR1M);
      secondGraph = CSVToArray(DHR3M);
      thirdGraph = CSVToArray(DHR6M);
      fourthGraph = CSVToArray(DHR1Y);
    }
    if (this.props.ticker === 'DRI') {
      firstGraph = CSVToArray(DRI1M);
      secondGraph = CSVToArray(DRI3M);
      thirdGraph = CSVToArray(DRI6M);
      fourthGraph = CSVToArray(DRI1Y);
    }
    if (this.props.ticker === 'DVA') {
      firstGraph = CSVToArray(DVA1M);
      secondGraph = CSVToArray(DVA3M);
      thirdGraph = CSVToArray(DVA6M);
      fourthGraph = CSVToArray(DVA1Y);
    }
    if (this.props.ticker === 'DE') {
      firstGraph = CSVToArray(DE1M);
      secondGraph = CSVToArray(DE3M);
      thirdGraph = CSVToArray(DE6M);
      fourthGraph = CSVToArray(DE1Y);
    }
    if (this.props.ticker === 'DAL') {
      firstGraph = CSVToArray(DAL1M);
      secondGraph = CSVToArray(DAL3M);
      thirdGraph = CSVToArray(DAL6M);
      fourthGraph = CSVToArray(DAL1Y);
    }
    if (this.props.ticker === 'XRAY') {
      firstGraph = CSVToArray(XRAY1M);
      secondGraph = CSVToArray(XRAY3M);
      thirdGraph = CSVToArray(XRAY6M);
      fourthGraph = CSVToArray(XRAY1Y);
    }
    if (this.props.ticker === 'DVN') {
      firstGraph = CSVToArray(DVN1M);
      secondGraph = CSVToArray(DVN3M);
      thirdGraph = CSVToArray(DVN6M);
      fourthGraph = CSVToArray(DVN1Y);
    }
    if (this.props.ticker === 'DXCM') {
      firstGraph = CSVToArray(DXCM1M);
      secondGraph = CSVToArray(DXCM3M);
      thirdGraph = CSVToArray(DXCM6M);
      fourthGraph = CSVToArray(DXCM1Y);
    }
    if (this.props.ticker === 'FANG') {
      firstGraph = CSVToArray(FANG1M);
      secondGraph = CSVToArray(FANG3M);
      thirdGraph = CSVToArray(FANG6M);
      fourthGraph = CSVToArray(FANG1Y);
    }
    if (this.props.ticker === 'DLR') {
      firstGraph = CSVToArray(DLR1M);
      secondGraph = CSVToArray(DLR3M);
      thirdGraph = CSVToArray(DLR6M);
      fourthGraph = CSVToArray(DLR1Y);
    }
    if (this.props.ticker === 'DFS') {
      firstGraph = CSVToArray(DFS1M);
      secondGraph = CSVToArray(DFS3M);
      thirdGraph = CSVToArray(DFS6M);
      fourthGraph = CSVToArray(DFS1Y);
    }
    if (this.props.ticker === 'DISCA') {
      firstGraph = CSVToArray(DISCA1M);
      secondGraph = CSVToArray(DISCA3M);
      thirdGraph = CSVToArray(DISCA6M);
      fourthGraph = CSVToArray(DISCA1Y);
    }
    if (this.props.ticker === 'DISCK') {
      firstGraph = CSVToArray(DISCK1M);
      secondGraph = CSVToArray(DISCK3M);
      thirdGraph = CSVToArray(DISCK6M);
      fourthGraph = CSVToArray(DISCK1Y);
    }
    if (this.props.ticker === 'DISH') {
      firstGraph = CSVToArray(DISH1M);
      secondGraph = CSVToArray(DISH3M);
      thirdGraph = CSVToArray(DISH6M);
      fourthGraph = CSVToArray(DISH1Y);
    }
    if (this.props.ticker === 'DG') {
      firstGraph = CSVToArray(DG1M);
      secondGraph = CSVToArray(DG3M);
      thirdGraph = CSVToArray(DG6M);
      fourthGraph = CSVToArray(DG1Y);
    }
    if (this.props.ticker === 'DLTR') {
      firstGraph = CSVToArray(DLTR1M);
      secondGraph = CSVToArray(DLTR3M);
      thirdGraph = CSVToArray(DLTR6M);
      fourthGraph = CSVToArray(DLTR1Y);
    }
    if (this.props.ticker === 'D') {
      firstGraph = CSVToArray(D1M);
      secondGraph = CSVToArray(D3M);
      thirdGraph = CSVToArray(D6M);
      fourthGraph = CSVToArray(D1Y);
    }
    if (this.props.ticker === 'DPZ') {
      firstGraph = CSVToArray(DPZ1M);
      secondGraph = CSVToArray(DPZ3M);
      thirdGraph = CSVToArray(DPZ6M);
      fourthGraph = CSVToArray(DPZ1Y);
    }
    if (this.props.ticker === 'DOV') {
      firstGraph = CSVToArray(DOV1M);
      secondGraph = CSVToArray(DOV3M);
      thirdGraph = CSVToArray(DOV6M);
      fourthGraph = CSVToArray(DOV1Y);
    }
    if (this.props.ticker === 'DOW') {
      firstGraph = CSVToArray(DOW1M);
      secondGraph = CSVToArray(DOW3M);
      thirdGraph = CSVToArray(DOW6M);
      fourthGraph = CSVToArray(DOW1Y);
    }
    if (this.props.ticker === 'DTE') {
      firstGraph = CSVToArray(DTE1M);
      secondGraph = CSVToArray(DTE3M);
      thirdGraph = CSVToArray(DTE6M);
      fourthGraph = CSVToArray(DTE1Y);
    }
    if (this.props.ticker === 'DUK') {
      firstGraph = CSVToArray(DUK1M);
      secondGraph = CSVToArray(DUK3M);
      thirdGraph = CSVToArray(DUK6M);
      fourthGraph = CSVToArray(DUK1Y);
    }
    if (this.props.ticker === 'DRE') {
      firstGraph = CSVToArray(DRE1M);
      secondGraph = CSVToArray(DRE3M);
      thirdGraph = CSVToArray(DRE6M);
      fourthGraph = CSVToArray(DRE1Y);
    }
    if (this.props.ticker === 'DD') {
      firstGraph = CSVToArray(DD1M);
      secondGraph = CSVToArray(DD3M);
      thirdGraph = CSVToArray(DD6M);
      fourthGraph = CSVToArray(DD1Y);
    }
    if (this.props.ticker === 'DXC') {
      firstGraph = CSVToArray(DXC1M);
      secondGraph = CSVToArray(DXC3M);
      thirdGraph = CSVToArray(DXC6M);
      fourthGraph = CSVToArray(DXC1Y);
    }
    if (this.props.ticker === 'EMN') {
      firstGraph = CSVToArray(EMN1M);
      secondGraph = CSVToArray(EMN3M);
      thirdGraph = CSVToArray(EMN6M);
      fourthGraph = CSVToArray(EMN1Y);
    }
    if (this.props.ticker === 'ETN') {
      firstGraph = CSVToArray(ETN1M);
      secondGraph = CSVToArray(ETN3M);
      thirdGraph = CSVToArray(ETN6M);
      fourthGraph = CSVToArray(ETN1Y);
    }
    if (this.props.ticker === 'EBAY') {
      firstGraph = CSVToArray(EBAY1M);
      secondGraph = CSVToArray(EBAY3M);
      thirdGraph = CSVToArray(EBAY6M);
      fourthGraph = CSVToArray(EBAY1Y);
    }
    if (this.props.ticker === 'ECL') {
      firstGraph = CSVToArray(ECL1M);
      secondGraph = CSVToArray(ECL3M);
      thirdGraph = CSVToArray(ECL6M);
      fourthGraph = CSVToArray(ECL1Y);
    }
    if (this.props.ticker === 'EIX') {
      firstGraph = CSVToArray(EIX1M);
      secondGraph = CSVToArray(EIX3M);
      thirdGraph = CSVToArray(EIX6M);
      fourthGraph = CSVToArray(EIX1Y);
    }
    if (this.props.ticker === 'EW') {
      firstGraph = CSVToArray(EW1M);
      secondGraph = CSVToArray(EW3M);
      thirdGraph = CSVToArray(EW6M);
      fourthGraph = CSVToArray(EW1Y);
    }
    if (this.props.ticker === 'EA') {
      firstGraph = CSVToArray(EA1M);
      secondGraph = CSVToArray(EA3M);
      thirdGraph = CSVToArray(EA6M);
      fourthGraph = CSVToArray(EA1Y);
    }
    if (this.props.ticker === 'EMR') {
      firstGraph = CSVToArray(EMR1M);
      secondGraph = CSVToArray(EMR3M);
      thirdGraph = CSVToArray(EMR6M);
      fourthGraph = CSVToArray(EMR1Y);
    }
    if (this.props.ticker === 'ENPH') {
      firstGraph = CSVToArray(ENPH1M);
      secondGraph = CSVToArray(ENPH3M);
      thirdGraph = CSVToArray(ENPH6M);
      fourthGraph = CSVToArray(ENPH1Y);
    }
    if (this.props.ticker === 'ETR') {
      firstGraph = CSVToArray(ETR1M);
      secondGraph = CSVToArray(ETR3M);
      thirdGraph = CSVToArray(ETR6M);
      fourthGraph = CSVToArray(ETR1Y);
    }
    if (this.props.ticker === 'EOG') {
      firstGraph = CSVToArray(EOG1M);
      secondGraph = CSVToArray(EOG3M);
      thirdGraph = CSVToArray(EOG6M);
      fourthGraph = CSVToArray(EOG1Y);
    }
    if (this.props.ticker === 'EFX') {
      firstGraph = CSVToArray(EFX1M);
      secondGraph = CSVToArray(EFX3M);
      thirdGraph = CSVToArray(EFX6M);
      fourthGraph = CSVToArray(EFX1Y);
    }
    if (this.props.ticker === 'EQIX') {
      firstGraph = CSVToArray(EQIX1M);
      secondGraph = CSVToArray(EQIX3M);
      thirdGraph = CSVToArray(EQIX6M);
      fourthGraph = CSVToArray(EQIX1Y);
    }
    if (this.props.ticker === 'EQR') {
      firstGraph = CSVToArray(EQR1M);
      secondGraph = CSVToArray(EQR3M);
      thirdGraph = CSVToArray(EQR6M);
      fourthGraph = CSVToArray(EQR1Y);
    }
    if (this.props.ticker === 'ESS') {
      firstGraph = CSVToArray(ESS1M);
      secondGraph = CSVToArray(ESS3M);
      thirdGraph = CSVToArray(ESS6M);
      fourthGraph = CSVToArray(ESS1Y);
    }
    if (this.props.ticker === 'EL') {
      firstGraph = CSVToArray(EL1M);
      secondGraph = CSVToArray(EL3M);
      thirdGraph = CSVToArray(EL6M);
      fourthGraph = CSVToArray(EL1Y);
    }
    if (this.props.ticker === 'ETSY') {
      firstGraph = CSVToArray(ETSY1M);
      secondGraph = CSVToArray(ETSY3M);
      thirdGraph = CSVToArray(ETSY6M);
      fourthGraph = CSVToArray(ETSY1Y);
    }
    if (this.props.ticker === 'EVRG') {
      firstGraph = CSVToArray(EVRG1M);
      secondGraph = CSVToArray(EVRG3M);
      thirdGraph = CSVToArray(EVRG6M);
      fourthGraph = CSVToArray(EVRG1Y);
    }
    if (this.props.ticker === 'ES') {
      firstGraph = CSVToArray(ES1M);
      secondGraph = CSVToArray(ES3M);
      thirdGraph = CSVToArray(ES6M);
      fourthGraph = CSVToArray(ES1Y);
    }
    if (this.props.ticker === 'RE') {
      firstGraph = CSVToArray(RE1M);
      secondGraph = CSVToArray(RE3M);
      thirdGraph = CSVToArray(RE6M);
      fourthGraph = CSVToArray(RE1Y);
    }
    if (this.props.ticker === 'EXC') {
      firstGraph = CSVToArray(EXC1M);
      secondGraph = CSVToArray(EXC3M);
      thirdGraph = CSVToArray(EXC6M);
      fourthGraph = CSVToArray(EXC1Y);
    }
    if (this.props.ticker === 'EXPE') {
      firstGraph = CSVToArray(EXPE1M);
      secondGraph = CSVToArray(EXPE3M);
      thirdGraph = CSVToArray(EXPE6M);
      fourthGraph = CSVToArray(EXPE1Y);
    }
    if (this.props.ticker === 'EXPD') {
      firstGraph = CSVToArray(EXPD1M);
      secondGraph = CSVToArray(EXPD3M);
      thirdGraph = CSVToArray(EXPD6M);
      fourthGraph = CSVToArray(EXPD1Y);
    }
    if (this.props.ticker === 'EXR') {
      firstGraph = CSVToArray(EXR1M);
      secondGraph = CSVToArray(EXR3M);
      thirdGraph = CSVToArray(EXR6M);
      fourthGraph = CSVToArray(EXR1Y);
    }
    if (this.props.ticker === 'XOM') {
      firstGraph = CSVToArray(XOM1M);
      secondGraph = CSVToArray(XOM3M);
      thirdGraph = CSVToArray(XOM6M);
      fourthGraph = CSVToArray(XOM1Y);
    }
    if (this.props.ticker === 'FFIV') {
      firstGraph = CSVToArray(FFIV1M);
      secondGraph = CSVToArray(FFIV3M);
      thirdGraph = CSVToArray(FFIV6M);
      fourthGraph = CSVToArray(FFIV1Y);
    }
    if (this.props.ticker === 'FB') {
      firstGraph = CSVToArray(FB1M);
      secondGraph = CSVToArray(FB3M);
      thirdGraph = CSVToArray(FB6M);
      fourthGraph = CSVToArray(FB1Y);
    }
    if (this.props.ticker === 'FAST') {
      firstGraph = CSVToArray(FAST1M);
      secondGraph = CSVToArray(FAST3M);
      thirdGraph = CSVToArray(FAST6M);
      fourthGraph = CSVToArray(FAST1Y);
    }
    if (this.props.ticker === 'FRT') {
      firstGraph = CSVToArray(FRT1M);
      secondGraph = CSVToArray(FRT3M);
      thirdGraph = CSVToArray(FRT6M);
      fourthGraph = CSVToArray(FRT1Y);
    }
    if (this.props.ticker === 'FDX') {
      firstGraph = CSVToArray(FDX1M);
      secondGraph = CSVToArray(FDX3M);
      thirdGraph = CSVToArray(FDX6M);
      fourthGraph = CSVToArray(FDX1Y);
    }
    if (this.props.ticker === 'FIS') {
      firstGraph = CSVToArray(FIS1M);
      secondGraph = CSVToArray(FIS3M);
      thirdGraph = CSVToArray(FIS6M);
      fourthGraph = CSVToArray(FIS1Y);
    }
    if (this.props.ticker === 'FITB') {
      firstGraph = CSVToArray(FITB1M);
      secondGraph = CSVToArray(FITB3M);
      thirdGraph = CSVToArray(FITB6M);
      fourthGraph = CSVToArray(FITB1Y);
    }
    if (this.props.ticker === 'FE') {
      firstGraph = CSVToArray(FE1M);
      secondGraph = CSVToArray(FE3M);
      thirdGraph = CSVToArray(FE6M);
      fourthGraph = CSVToArray(FE1Y);
    }
    if (this.props.ticker === 'FRC') {
      firstGraph = CSVToArray(FRC1M);
      secondGraph = CSVToArray(FRC3M);
      thirdGraph = CSVToArray(FRC6M);
      fourthGraph = CSVToArray(FRC1Y);
    }
    if (this.props.ticker === 'FISV') {
      firstGraph = CSVToArray(FISV1M);
      secondGraph = CSVToArray(FISV3M);
      thirdGraph = CSVToArray(FISV6M);
      fourthGraph = CSVToArray(FISV1Y);
    }
    if (this.props.ticker === 'FLT') {
      firstGraph = CSVToArray(FLT1M);
      secondGraph = CSVToArray(FLT3M);
      thirdGraph = CSVToArray(FLT6M);
      fourthGraph = CSVToArray(FLT1Y);
    }
    if (this.props.ticker === 'FLIR') {
      firstGraph = CSVToArray(FLIR1M);
      secondGraph = CSVToArray(FLIR3M);
      thirdGraph = CSVToArray(FLIR6M);
      fourthGraph = CSVToArray(FLIR1Y);
    }
    if (this.props.ticker === 'FLS') {
      firstGraph = CSVToArray(FLS1M);
      secondGraph = CSVToArray(FLS3M);
      thirdGraph = CSVToArray(FLS6M);
      fourthGraph = CSVToArray(FLS1Y);
    }
    if (this.props.ticker === 'FMC') {
      firstGraph = CSVToArray(FMC1M);
      secondGraph = CSVToArray(FMC3M);
      thirdGraph = CSVToArray(FMC6M);
      fourthGraph = CSVToArray(FMC1Y);
    }
    if (this.props.ticker === 'F') {
      firstGraph = CSVToArray(F1M);
      secondGraph = CSVToArray(F3M);
      thirdGraph = CSVToArray(F6M);
      fourthGraph = CSVToArray(F1Y);
    }
    if (this.props.ticker === 'FTNT') {
      firstGraph = CSVToArray(FTNT1M);
      secondGraph = CSVToArray(FTNT3M);
      thirdGraph = CSVToArray(FTNT6M);
      fourthGraph = CSVToArray(FTNT1Y);
    }
    if (this.props.ticker === 'FTV') {
      firstGraph = CSVToArray(FTV1M);
      secondGraph = CSVToArray(FTV3M);
      thirdGraph = CSVToArray(FTV6M);
      fourthGraph = CSVToArray(FTV1Y);
    }
    if (this.props.ticker === 'FBHS') {
      firstGraph = CSVToArray(FBHS1M);
      secondGraph = CSVToArray(FBHS3M);
      thirdGraph = CSVToArray(FBHS6M);
      fourthGraph = CSVToArray(FBHS1Y);
    }
    if (this.props.ticker === 'FOXA') {
      firstGraph = CSVToArray(FOXA1M);
      secondGraph = CSVToArray(FOXA3M);
      thirdGraph = CSVToArray(FOXA6M);
      fourthGraph = CSVToArray(FOXA1Y);
    }
    if (this.props.ticker === 'FOX') {
      firstGraph = CSVToArray(FOX1M);
      secondGraph = CSVToArray(FOX3M);
      thirdGraph = CSVToArray(FOX6M);
      fourthGraph = CSVToArray(FOX1Y);
    }
    if (this.props.ticker === 'BEN') {
      firstGraph = CSVToArray(BEN1M);
      secondGraph = CSVToArray(BEN3M);
      thirdGraph = CSVToArray(BEN6M);
      fourthGraph = CSVToArray(BEN1Y);
    }
    if (this.props.ticker === 'FCX') {
      firstGraph = CSVToArray(FCX1M);
      secondGraph = CSVToArray(FCX3M);
      thirdGraph = CSVToArray(FCX6M);
      fourthGraph = CSVToArray(FCX1Y);
    }
    if (this.props.ticker === 'GPS') {
      firstGraph = CSVToArray(GPS1M);
      secondGraph = CSVToArray(GPS3M);
      thirdGraph = CSVToArray(GPS6M);
      fourthGraph = CSVToArray(GPS1Y);
    }
    if (this.props.ticker === 'GRMN') {
      firstGraph = CSVToArray(GRMN1M);
      secondGraph = CSVToArray(GRMN3M);
      thirdGraph = CSVToArray(GRMN6M);
      fourthGraph = CSVToArray(GRMN1Y);
    }
    if (this.props.ticker === 'IT') {
      firstGraph = CSVToArray(IT1M);
      secondGraph = CSVToArray(IT3M);
      thirdGraph = CSVToArray(IT6M);
      fourthGraph = CSVToArray(IT1Y);
    }
    if (this.props.ticker === 'GD') {
      firstGraph = CSVToArray(GD1M);
      secondGraph = CSVToArray(GD3M);
      thirdGraph = CSVToArray(GD6M);
      fourthGraph = CSVToArray(GD1Y);
    }
    if (this.props.ticker === 'GE') {
      firstGraph = CSVToArray(GE1M);
      secondGraph = CSVToArray(GE3M);
      thirdGraph = CSVToArray(GE6M);
      fourthGraph = CSVToArray(GE1Y);
    }
    if (this.props.ticker === 'GIS') {
      firstGraph = CSVToArray(GIS1M);
      secondGraph = CSVToArray(GIS3M);
      thirdGraph = CSVToArray(GIS6M);
      fourthGraph = CSVToArray(GIS1Y);
    }
    if (this.props.ticker === 'GM') {
      firstGraph = CSVToArray(GM1M);
      secondGraph = CSVToArray(GM3M);
      thirdGraph = CSVToArray(GM6M);
      fourthGraph = CSVToArray(GM1Y);
    }
    if (this.props.ticker === 'GPC') {
      firstGraph = CSVToArray(GPC1M);
      secondGraph = CSVToArray(GPC3M);
      thirdGraph = CSVToArray(GPC6M);
      fourthGraph = CSVToArray(GPC1Y);
    }
    if (this.props.ticker === 'GILD') {
      firstGraph = CSVToArray(GILD1M);
      secondGraph = CSVToArray(GILD3M);
      thirdGraph = CSVToArray(GILD6M);
      fourthGraph = CSVToArray(GILD1Y);
    }
    if (this.props.ticker === 'GL') {
      firstGraph = CSVToArray(GL1M);
      secondGraph = CSVToArray(GL3M);
      thirdGraph = CSVToArray(GL6M);
      fourthGraph = CSVToArray(GL1Y);
    }
    if (this.props.ticker === 'GPN') {
      firstGraph = CSVToArray(GPN1M);
      secondGraph = CSVToArray(GPN3M);
      thirdGraph = CSVToArray(GPN6M);
      fourthGraph = CSVToArray(GPN1Y);
    }
    if (this.props.ticker === 'GS') {
      firstGraph = CSVToArray(GS1M);
      secondGraph = CSVToArray(GS3M);
      thirdGraph = CSVToArray(GS6M);
      fourthGraph = CSVToArray(GS1Y);
    }
    if (this.props.ticker === 'GWW') {
      firstGraph = CSVToArray(GWW1M);
      secondGraph = CSVToArray(GWW3M);
      thirdGraph = CSVToArray(GWW6M);
      fourthGraph = CSVToArray(GWW1Y);
    }
    if (this.props.ticker === 'HAL') {
      firstGraph = CSVToArray(HAL1M);
      secondGraph = CSVToArray(HAL3M);
      thirdGraph = CSVToArray(HAL6M);
      fourthGraph = CSVToArray(HAL1Y);
    }
    if (this.props.ticker === 'HBI') {
      firstGraph = CSVToArray(HBI1M);
      secondGraph = CSVToArray(HBI3M);
      thirdGraph = CSVToArray(HBI6M);
      fourthGraph = CSVToArray(HBI1Y);
    }
    if (this.props.ticker === 'HIG') {
      firstGraph = CSVToArray(HIG1M);
      secondGraph = CSVToArray(HIG3M);
      thirdGraph = CSVToArray(HIG6M);
      fourthGraph = CSVToArray(HIG1Y);
    }
    if (this.props.ticker === 'HAS') {
      firstGraph = CSVToArray(HAS1M);
      secondGraph = CSVToArray(HAS3M);
      thirdGraph = CSVToArray(HAS6M);
      fourthGraph = CSVToArray(HAS1Y);
    }
    if (this.props.ticker === 'HCA') {
      firstGraph = CSVToArray(HCA1M);
      secondGraph = CSVToArray(HCA3M);
      thirdGraph = CSVToArray(HCA6M);
      fourthGraph = CSVToArray(HCA1Y);
    }
    if (this.props.ticker === 'PEAK') {
      firstGraph = CSVToArray(PEAK1M);
      secondGraph = CSVToArray(PEAK3M);
      thirdGraph = CSVToArray(PEAK6M);
      fourthGraph = CSVToArray(PEAK1Y);
    }
    if (this.props.ticker === 'HSIC') {
      firstGraph = CSVToArray(HSIC1M);
      secondGraph = CSVToArray(HSIC3M);
      thirdGraph = CSVToArray(HSIC6M);
      fourthGraph = CSVToArray(HSIC1Y);
    }
    if (this.props.ticker === 'HSY') {
      firstGraph = CSVToArray(HSY1M);
      secondGraph = CSVToArray(HSY3M);
      thirdGraph = CSVToArray(HSY6M);
      fourthGraph = CSVToArray(HSY1Y);
    }
    if (this.props.ticker === 'HES') {
      firstGraph = CSVToArray(HES1M);
      secondGraph = CSVToArray(HES3M);
      thirdGraph = CSVToArray(HES6M);
      fourthGraph = CSVToArray(HES1Y);
    }
    if (this.props.ticker === 'HPE') {
      firstGraph = CSVToArray(HPE1M);
      secondGraph = CSVToArray(HPE3M);
      thirdGraph = CSVToArray(HPE6M);
      fourthGraph = CSVToArray(HPE1Y);
    }
    if (this.props.ticker === 'HLT') {
      firstGraph = CSVToArray(HLT1M);
      secondGraph = CSVToArray(HLT3M);
      thirdGraph = CSVToArray(HLT6M);
      fourthGraph = CSVToArray(HLT1Y);
    }
    if (this.props.ticker === 'HFC') {
      firstGraph = CSVToArray(HFC1M);
      secondGraph = CSVToArray(HFC3M);
      thirdGraph = CSVToArray(HFC6M);
      fourthGraph = CSVToArray(HFC1Y);
    }
    if (this.props.ticker === 'HOLX') {
      firstGraph = CSVToArray(HOLX1M);
      secondGraph = CSVToArray(HOLX3M);
      thirdGraph = CSVToArray(HOLX6M);
      fourthGraph = CSVToArray(HOLX1Y);
    }
    if (this.props.ticker === 'HD') {
      firstGraph = CSVToArray(HD1M);
      secondGraph = CSVToArray(HD3M);
      thirdGraph = CSVToArray(HD6M);
      fourthGraph = CSVToArray(HD1Y);
    }
    if (this.props.ticker === 'HON') {
      firstGraph = CSVToArray(HON1M);
      secondGraph = CSVToArray(HON3M);
      thirdGraph = CSVToArray(HON6M);
      fourthGraph = CSVToArray(HON1Y);
    }
    if (this.props.ticker === 'HRL') {
      firstGraph = CSVToArray(HRL1M);
      secondGraph = CSVToArray(HRL3M);
      thirdGraph = CSVToArray(HRL6M);
      fourthGraph = CSVToArray(HRL1Y);
    }
    if (this.props.ticker === 'HST') {
      firstGraph = CSVToArray(HST1M);
      secondGraph = CSVToArray(HST3M);
      thirdGraph = CSVToArray(HST6M);
      fourthGraph = CSVToArray(HST1Y);
    }
    if (this.props.ticker === 'HWM') {
      firstGraph = CSVToArray(HWM1M);
      secondGraph = CSVToArray(HWM3M);
      thirdGraph = CSVToArray(HWM6M);
      fourthGraph = CSVToArray(HWM1Y);
    }
    if (this.props.ticker === 'HPQ') {
      firstGraph = CSVToArray(HPQ1M);
      secondGraph = CSVToArray(HPQ3M);
      thirdGraph = CSVToArray(HPQ6M);
      fourthGraph = CSVToArray(HPQ1Y);
    }
    if (this.props.ticker === 'HUM') {
      firstGraph = CSVToArray(HUM1M);
      secondGraph = CSVToArray(HUM3M);
      thirdGraph = CSVToArray(HUM6M);
      fourthGraph = CSVToArray(HUM1Y);
    }
    if (this.props.ticker === 'HBAN') {
      firstGraph = CSVToArray(HBAN1M);
      secondGraph = CSVToArray(HBAN3M);
      thirdGraph = CSVToArray(HBAN6M);
      fourthGraph = CSVToArray(HBAN1Y);
    }
    if (this.props.ticker === 'HII') {
      firstGraph = CSVToArray(HII1M);
      secondGraph = CSVToArray(HII3M);
      thirdGraph = CSVToArray(HII6M);
      fourthGraph = CSVToArray(HII1Y);
    }
    if (this.props.ticker === 'IEX') {
      firstGraph = CSVToArray(IEX1M);
      secondGraph = CSVToArray(IEX3M);
      thirdGraph = CSVToArray(IEX6M);
      fourthGraph = CSVToArray(IEX1Y);
    }
    if (this.props.ticker === 'IDXX') {
      firstGraph = CSVToArray(IDXX1M);
      secondGraph = CSVToArray(IDXX3M);
      thirdGraph = CSVToArray(IDXX6M);
      fourthGraph = CSVToArray(IDXX1Y);
    }
    if (this.props.ticker === 'INFO') {
      firstGraph = CSVToArray(INFO1M);
      secondGraph = CSVToArray(INFO3M);
      thirdGraph = CSVToArray(INFO6M);
      fourthGraph = CSVToArray(INFO1Y);
    }
    if (this.props.ticker === 'ITW') {
      firstGraph = CSVToArray(ITW1M);
      secondGraph = CSVToArray(ITW3M);
      thirdGraph = CSVToArray(ITW6M);
      fourthGraph = CSVToArray(ITW1Y);
    }
    if (this.props.ticker === 'ILMN') {
      firstGraph = CSVToArray(ILMN1M);
      secondGraph = CSVToArray(ILMN3M);
      thirdGraph = CSVToArray(ILMN6M);
      fourthGraph = CSVToArray(ILMN1Y);
    }
    if (this.props.ticker === 'INCY') {
      firstGraph = CSVToArray(INCY1M);
      secondGraph = CSVToArray(INCY3M);
      thirdGraph = CSVToArray(INCY6M);
      fourthGraph = CSVToArray(INCY1Y);
    }
    if (this.props.ticker === 'IR') {
      firstGraph = CSVToArray(IR1M);
      secondGraph = CSVToArray(IR3M);
      thirdGraph = CSVToArray(IR6M);
      fourthGraph = CSVToArray(IR1Y);
    }
    if (this.props.ticker === 'INTC') {
      firstGraph = CSVToArray(INTC1M);
      secondGraph = CSVToArray(INTC3M);
      thirdGraph = CSVToArray(INTC6M);
      fourthGraph = CSVToArray(INTC1Y);
    }
    if (this.props.ticker === 'ICE') {
      firstGraph = CSVToArray(ICE1M);
      secondGraph = CSVToArray(ICE3M);
      thirdGraph = CSVToArray(ICE6M);
      fourthGraph = CSVToArray(ICE1Y);
    }
    if (this.props.ticker === 'IBM') {
      firstGraph = CSVToArray(IBM1M);
      secondGraph = CSVToArray(IBM3M);
      thirdGraph = CSVToArray(IBM6M);
      fourthGraph = CSVToArray(IBM1Y);
    }
    if (this.props.ticker === 'IP') {
      firstGraph = CSVToArray(IP1M);
      secondGraph = CSVToArray(IP3M);
      thirdGraph = CSVToArray(IP6M);
      fourthGraph = CSVToArray(IP1Y);
    }
    if (this.props.ticker === 'IPG') {
      firstGraph = CSVToArray(IPG1M);
      secondGraph = CSVToArray(IPG3M);
      thirdGraph = CSVToArray(IPG6M);
      fourthGraph = CSVToArray(IPG1Y);
    }
    if (this.props.ticker === 'IFF') {
      firstGraph = CSVToArray(IFF1M);
      secondGraph = CSVToArray(IFF3M);
      thirdGraph = CSVToArray(IFF6M);
      fourthGraph = CSVToArray(IFF1Y);
    }
    if (this.props.ticker === 'INTU') {
      firstGraph = CSVToArray(INTU1M);
      secondGraph = CSVToArray(INTU3M);
      thirdGraph = CSVToArray(INTU6M);
      fourthGraph = CSVToArray(INTU1Y);
    }
    if (this.props.ticker === 'ISRG') {
      firstGraph = CSVToArray(ISRG1M);
      secondGraph = CSVToArray(ISRG3M);
      thirdGraph = CSVToArray(ISRG6M);
      fourthGraph = CSVToArray(ISRG1Y);
    }
    if (this.props.ticker === 'IVZ') {
      firstGraph = CSVToArray(IVZ1M);
      secondGraph = CSVToArray(IVZ3M);
      thirdGraph = CSVToArray(IVZ6M);
      fourthGraph = CSVToArray(IVZ1Y);
    }
    if (this.props.ticker === 'IPGP') {
      firstGraph = CSVToArray(IPGP1M);
      secondGraph = CSVToArray(IPGP3M);
      thirdGraph = CSVToArray(IPGP6M);
      fourthGraph = CSVToArray(IPGP1Y);
    }
    if (this.props.ticker === 'IQV') {
      firstGraph = CSVToArray(IQV1M);
      secondGraph = CSVToArray(IQV3M);
      thirdGraph = CSVToArray(IQV6M);
      fourthGraph = CSVToArray(IQV1Y);
    }
    if (this.props.ticker === 'IRM') {
      firstGraph = CSVToArray(IRM1M);
      secondGraph = CSVToArray(IRM3M);
      thirdGraph = CSVToArray(IRM6M);
      fourthGraph = CSVToArray(IRM1Y);
    }
    if (this.props.ticker === 'JKHY') {
      firstGraph = CSVToArray(JKHY1M);
      secondGraph = CSVToArray(JKHY3M);
      thirdGraph = CSVToArray(JKHY6M);
      fourthGraph = CSVToArray(JKHY1Y);
    }
    if (this.props.ticker === 'J') {
      firstGraph = CSVToArray(J1M);
      secondGraph = CSVToArray(J3M);
      thirdGraph = CSVToArray(J6M);
      fourthGraph = CSVToArray(J1Y);
    }
    if (this.props.ticker === 'JBHT') {
      firstGraph = CSVToArray(JBHT1M);
      secondGraph = CSVToArray(JBHT3M);
      thirdGraph = CSVToArray(JBHT6M);
      fourthGraph = CSVToArray(JBHT1Y);
    }
    if (this.props.ticker === 'SJM') {
      firstGraph = CSVToArray(SJM1M);
      secondGraph = CSVToArray(SJM3M);
      thirdGraph = CSVToArray(SJM6M);
      fourthGraph = CSVToArray(SJM1Y);
    }
    if (this.props.ticker === 'JNJ') {
      firstGraph = CSVToArray(JNJ1M);
      secondGraph = CSVToArray(JNJ3M);
      thirdGraph = CSVToArray(JNJ6M);
      fourthGraph = CSVToArray(JNJ1Y);
    }
    if (this.props.ticker === 'JCI') {
      firstGraph = CSVToArray(JCI1M);
      secondGraph = CSVToArray(JCI3M);
      thirdGraph = CSVToArray(JCI6M);
      fourthGraph = CSVToArray(JCI1Y);
    }
    if (this.props.ticker === 'JPM') {
      firstGraph = CSVToArray(JPM1M);
      secondGraph = CSVToArray(JPM3M);
      thirdGraph = CSVToArray(JPM6M);
      fourthGraph = CSVToArray(JPM1Y);
    }
    if (this.props.ticker === 'JNPR') {
      firstGraph = CSVToArray(JNPR1M);
      secondGraph = CSVToArray(JNPR3M);
      thirdGraph = CSVToArray(JNPR6M);
      fourthGraph = CSVToArray(JNPR1Y);
    }
    if (this.props.ticker === 'KSU') {
      firstGraph = CSVToArray(KSU1M);
      secondGraph = CSVToArray(KSU3M);
      thirdGraph = CSVToArray(KSU6M);
      fourthGraph = CSVToArray(KSU1Y);
    }
    if (this.props.ticker === 'K') {
      firstGraph = CSVToArray(K1M);
      secondGraph = CSVToArray(K3M);
      thirdGraph = CSVToArray(K6M);
      fourthGraph = CSVToArray(K1Y);
    }
    if (this.props.ticker === 'KEY') {
      firstGraph = CSVToArray(KEY1M);
      secondGraph = CSVToArray(KEY3M);
      thirdGraph = CSVToArray(KEY6M);
      fourthGraph = CSVToArray(KEY1Y);
    }
    if (this.props.ticker === 'KEYS') {
      firstGraph = CSVToArray(KEYS1M);
      secondGraph = CSVToArray(KEYS3M);
      thirdGraph = CSVToArray(KEYS6M);
      fourthGraph = CSVToArray(KEYS1Y);
    }
    if (this.props.ticker === 'KMB') {
      firstGraph = CSVToArray(KMB1M);
      secondGraph = CSVToArray(KMB3M);
      thirdGraph = CSVToArray(KMB6M);
      fourthGraph = CSVToArray(KMB1Y);
    }
    if (this.props.ticker === 'KIM') {
      firstGraph = CSVToArray(KIM1M);
      secondGraph = CSVToArray(KIM3M);
      thirdGraph = CSVToArray(KIM6M);
      fourthGraph = CSVToArray(KIM1Y);
    }
    if (this.props.ticker === 'KMI') {
      firstGraph = CSVToArray(KMI1M);
      secondGraph = CSVToArray(KMI3M);
      thirdGraph = CSVToArray(KMI6M);
      fourthGraph = CSVToArray(KMI1Y);
    }
    if (this.props.ticker === 'KLAC') {
      firstGraph = CSVToArray(KLAC1M);
      secondGraph = CSVToArray(KLAC3M);
      thirdGraph = CSVToArray(KLAC6M);
      fourthGraph = CSVToArray(KLAC1Y);
    }
    if (this.props.ticker === 'KHC') {
      firstGraph = CSVToArray(KHC1M);
      secondGraph = CSVToArray(KHC3M);
      thirdGraph = CSVToArray(KHC6M);
      fourthGraph = CSVToArray(KHC1Y);
    }
    if (this.props.ticker === 'KR') {
      firstGraph = CSVToArray(KR1M);
      secondGraph = CSVToArray(KR3M);
      thirdGraph = CSVToArray(KR6M);
      fourthGraph = CSVToArray(KR1Y);
    }
    if (this.props.ticker === 'LB') {
      firstGraph = CSVToArray(LB1M);
      secondGraph = CSVToArray(LB3M);
      thirdGraph = CSVToArray(LB6M);
      fourthGraph = CSVToArray(LB1Y);
    }
    if (this.props.ticker === 'LHX') {
      firstGraph = CSVToArray(LHX1M);
      secondGraph = CSVToArray(LHX3M);
      thirdGraph = CSVToArray(LHX6M);
      fourthGraph = CSVToArray(LHX1Y);
    }
    if (this.props.ticker === 'LH') {
      firstGraph = CSVToArray(LH1M);
      secondGraph = CSVToArray(LH3M);
      thirdGraph = CSVToArray(LH6M);
      fourthGraph = CSVToArray(LH1Y);
    }
    if (this.props.ticker === 'LRCX') {
      firstGraph = CSVToArray(LRCX1M);
      secondGraph = CSVToArray(LRCX3M);
      thirdGraph = CSVToArray(LRCX6M);
      fourthGraph = CSVToArray(LRCX1Y);
    }
    if (this.props.ticker === 'LW') {
      firstGraph = CSVToArray(LW1M);
      secondGraph = CSVToArray(LW3M);
      thirdGraph = CSVToArray(LW6M);
      fourthGraph = CSVToArray(LW1Y);
    }
    if (this.props.ticker === 'LVS') {
      firstGraph = CSVToArray(LVS1M);
      secondGraph = CSVToArray(LVS3M);
      thirdGraph = CSVToArray(LVS6M);
      fourthGraph = CSVToArray(LVS1Y);
    }
    if (this.props.ticker === 'LEG') {
      firstGraph = CSVToArray(LEG1M);
      secondGraph = CSVToArray(LEG3M);
      thirdGraph = CSVToArray(LEG6M);
      fourthGraph = CSVToArray(LEG1Y);
    }
    if (this.props.ticker === 'LDOS') {
      firstGraph = CSVToArray(LDOS1M);
      secondGraph = CSVToArray(LDOS3M);
      thirdGraph = CSVToArray(LDOS6M);
      fourthGraph = CSVToArray(LDOS1Y);
    }
    if (this.props.ticker === 'LEN') {
      firstGraph = CSVToArray(LEN1M);
      secondGraph = CSVToArray(LEN3M);
      thirdGraph = CSVToArray(LEN6M);
      fourthGraph = CSVToArray(LEN1Y);
    }
    if (this.props.ticker === 'LLY') {
      firstGraph = CSVToArray(LLY1M);
      secondGraph = CSVToArray(LLY3M);
      thirdGraph = CSVToArray(LLY6M);
      fourthGraph = CSVToArray(LLY1Y);
    }
    if (this.props.ticker === 'LNC') {
      firstGraph = CSVToArray(LNC1M);
      secondGraph = CSVToArray(LNC3M);
      thirdGraph = CSVToArray(LNC6M);
      fourthGraph = CSVToArray(LNC1Y);
    }
    if (this.props.ticker === 'LIN') {
      firstGraph = CSVToArray(LIN1M);
      secondGraph = CSVToArray(LIN3M);
      thirdGraph = CSVToArray(LIN6M);
      fourthGraph = CSVToArray(LIN1Y);
    }
    if (this.props.ticker === 'LYV') {
      firstGraph = CSVToArray(LYV1M);
      secondGraph = CSVToArray(LYV3M);
      thirdGraph = CSVToArray(LYV6M);
      fourthGraph = CSVToArray(LYV1Y);
    }
    if (this.props.ticker === 'LKQ') {
      firstGraph = CSVToArray(LKQ1M);
      secondGraph = CSVToArray(LKQ3M);
      thirdGraph = CSVToArray(LKQ6M);
      fourthGraph = CSVToArray(LKQ1Y);
    }
    if (this.props.ticker === 'LMT') {
      firstGraph = CSVToArray(LMT1M);
      secondGraph = CSVToArray(LMT3M);
      thirdGraph = CSVToArray(LMT6M);
      fourthGraph = CSVToArray(LMT1Y);
    }
    if (this.props.ticker === 'L') {
      firstGraph = CSVToArray(L1M);
      secondGraph = CSVToArray(L3M);
      thirdGraph = CSVToArray(L6M);
      fourthGraph = CSVToArray(L1Y);
    }
    if (this.props.ticker === 'LOW') {
      firstGraph = CSVToArray(LOW1M);
      secondGraph = CSVToArray(LOW3M);
      thirdGraph = CSVToArray(LOW6M);
      fourthGraph = CSVToArray(LOW1Y);
    }
    if (this.props.ticker === 'LUMN') {
      firstGraph = CSVToArray(LUMN1M);
      secondGraph = CSVToArray(LUMN3M);
      thirdGraph = CSVToArray(LUMN6M);
      fourthGraph = CSVToArray(LUMN1Y);
    }
    if (this.props.ticker === 'LYB') {
      firstGraph = CSVToArray(LYB1M);
      secondGraph = CSVToArray(LYB3M);
      thirdGraph = CSVToArray(LYB6M);
      fourthGraph = CSVToArray(LYB1Y);
    }
    if (this.props.ticker === 'MTB') {
      firstGraph = CSVToArray(MTB1M);
      secondGraph = CSVToArray(MTB3M);
      thirdGraph = CSVToArray(MTB6M);
      fourthGraph = CSVToArray(MTB1Y);
    }
    if (this.props.ticker === 'MRO') {
      firstGraph = CSVToArray(MRO1M);
      secondGraph = CSVToArray(MRO3M);
      thirdGraph = CSVToArray(MRO6M);
      fourthGraph = CSVToArray(MRO1Y);
    }
    if (this.props.ticker === 'MPC') {
      firstGraph = CSVToArray(MPC1M);
      secondGraph = CSVToArray(MPC3M);
      thirdGraph = CSVToArray(MPC6M);
      fourthGraph = CSVToArray(MPC1Y);
    }
    if (this.props.ticker === 'MKTX') {
      firstGraph = CSVToArray(MKTX1M);
      secondGraph = CSVToArray(MKTX3M);
      thirdGraph = CSVToArray(MKTX6M);
      fourthGraph = CSVToArray(MKTX1Y);
    }
    if (this.props.ticker === 'MAR') {
      firstGraph = CSVToArray(MAR1M);
      secondGraph = CSVToArray(MAR3M);
      thirdGraph = CSVToArray(MAR6M);
      fourthGraph = CSVToArray(MAR1Y);
    }
    if (this.props.ticker === 'MMC') {
      firstGraph = CSVToArray(MMC1M);
      secondGraph = CSVToArray(MMC3M);
      thirdGraph = CSVToArray(MMC6M);
      fourthGraph = CSVToArray(MMC1Y);
    }
    if (this.props.ticker === 'MLM') {
      firstGraph = CSVToArray(MLM1M);
      secondGraph = CSVToArray(MLM3M);
      thirdGraph = CSVToArray(MLM6M);
      fourthGraph = CSVToArray(MLM1Y);
    }
    if (this.props.ticker === 'MAS') {
      firstGraph = CSVToArray(MAS1M);
      secondGraph = CSVToArray(MAS3M);
      thirdGraph = CSVToArray(MAS6M);
      fourthGraph = CSVToArray(MAS1Y);
    }
    if (this.props.ticker === 'MA') {
      firstGraph = CSVToArray(MA1M);
      secondGraph = CSVToArray(MA3M);
      thirdGraph = CSVToArray(MA6M);
      fourthGraph = CSVToArray(MA1Y);
    }
    if (this.props.ticker === 'MKC') {
      firstGraph = CSVToArray(MKC1M);
      secondGraph = CSVToArray(MKC3M);
      thirdGraph = CSVToArray(MKC6M);
      fourthGraph = CSVToArray(MKC1Y);
    }
    if (this.props.ticker === 'MXIM') {
      firstGraph = CSVToArray(MXIM1M);
      secondGraph = CSVToArray(MXIM3M);
      thirdGraph = CSVToArray(MXIM6M);
      fourthGraph = CSVToArray(MXIM1Y);
    }
    if (this.props.ticker === 'MCD') {
      firstGraph = CSVToArray(MCD1M);
      secondGraph = CSVToArray(MCD3M);
      thirdGraph = CSVToArray(MCD6M);
      fourthGraph = CSVToArray(MCD1Y);
    }
    if (this.props.ticker === 'MCK') {
      firstGraph = CSVToArray(MCK1M);
      secondGraph = CSVToArray(MCK3M);
      thirdGraph = CSVToArray(MCK6M);
      fourthGraph = CSVToArray(MCK1Y);
    }
    if (this.props.ticker === 'MDT') {
      firstGraph = CSVToArray(MDT1M);
      secondGraph = CSVToArray(MDT3M);
      thirdGraph = CSVToArray(MDT6M);
      fourthGraph = CSVToArray(MDT1Y);
    }
    if (this.props.ticker === 'MRK') {
      firstGraph = CSVToArray(MRK1M);
      secondGraph = CSVToArray(MRK3M);
      thirdGraph = CSVToArray(MRK6M);
      fourthGraph = CSVToArray(MRK1Y);
    }
    if (this.props.ticker === 'MET') {
      firstGraph = CSVToArray(MET1M);
      secondGraph = CSVToArray(MET3M);
      thirdGraph = CSVToArray(MET6M);
      fourthGraph = CSVToArray(MET1Y);
    }
    if (this.props.ticker === 'MTD') {
      firstGraph = CSVToArray(MTD1M);
      secondGraph = CSVToArray(MTD3M);
      thirdGraph = CSVToArray(MTD6M);
      fourthGraph = CSVToArray(MTD1Y);
    }
    if (this.props.ticker === 'MGM') {
      firstGraph = CSVToArray(MGM1M);
      secondGraph = CSVToArray(MGM3M);
      thirdGraph = CSVToArray(MGM6M);
      fourthGraph = CSVToArray(MGM1Y);
    }
    if (this.props.ticker === 'MCHP') {
      firstGraph = CSVToArray(MCHP1M);
      secondGraph = CSVToArray(MCHP3M);
      thirdGraph = CSVToArray(MCHP6M);
      fourthGraph = CSVToArray(MCHP1Y);
    }
    if (this.props.ticker === 'MU') {
      firstGraph = CSVToArray(MU1M);
      secondGraph = CSVToArray(MU3M);
      thirdGraph = CSVToArray(MU6M);
      fourthGraph = CSVToArray(MU1Y);
    }
    if (this.props.ticker === 'MSFT') {
      firstGraph = CSVToArray(MSFT1M);
      secondGraph = CSVToArray(MSFT3M);
      thirdGraph = CSVToArray(MSFT6M);
      fourthGraph = CSVToArray(MSFT1Y);
    }
    if (this.props.ticker === 'MAA') {
      firstGraph = CSVToArray(MAA1M);
      secondGraph = CSVToArray(MAA3M);
      thirdGraph = CSVToArray(MAA6M);
      fourthGraph = CSVToArray(MAA1Y);
    }
    if (this.props.ticker === 'MHK') {
      firstGraph = CSVToArray(MHK1M);
      secondGraph = CSVToArray(MHK3M);
      thirdGraph = CSVToArray(MHK6M);
      fourthGraph = CSVToArray(MHK1Y);
    }
    if (this.props.ticker === 'TAP') {
      firstGraph = CSVToArray(TAP1M);
      secondGraph = CSVToArray(TAP3M);
      thirdGraph = CSVToArray(TAP6M);
      fourthGraph = CSVToArray(TAP1Y);
    }
    if (this.props.ticker === 'MDLZ') {
      firstGraph = CSVToArray(MDLZ1M);
      secondGraph = CSVToArray(MDLZ3M);
      thirdGraph = CSVToArray(MDLZ6M);
      fourthGraph = CSVToArray(MDLZ1Y);
    }
    if (this.props.ticker === 'MPWR') {
      firstGraph = CSVToArray(MPWR1M);
      secondGraph = CSVToArray(MPWR3M);
      thirdGraph = CSVToArray(MPWR6M);
      fourthGraph = CSVToArray(MPWR1Y);
    }
    if (this.props.ticker === 'MNST') {
      firstGraph = CSVToArray(MNST1M);
      secondGraph = CSVToArray(MNST3M);
      thirdGraph = CSVToArray(MNST6M);
      fourthGraph = CSVToArray(MNST1Y);
    }
    if (this.props.ticker === 'MCO') {
      firstGraph = CSVToArray(MCO1M);
      secondGraph = CSVToArray(MCO3M);
      thirdGraph = CSVToArray(MCO6M);
      fourthGraph = CSVToArray(MCO1Y);
    }
    if (this.props.ticker === 'MS') {
      firstGraph = CSVToArray(MS1M);
      secondGraph = CSVToArray(MS3M);
      thirdGraph = CSVToArray(MS6M);
      fourthGraph = CSVToArray(MS1Y);
    }
    if (this.props.ticker === 'MOS') {
      firstGraph = CSVToArray(MOS1M);
      secondGraph = CSVToArray(MOS3M);
      thirdGraph = CSVToArray(MOS6M);
      fourthGraph = CSVToArray(MOS1Y);
    }
    if (this.props.ticker === 'MSI') {
      firstGraph = CSVToArray(MSI1M);
      secondGraph = CSVToArray(MSI3M);
      thirdGraph = CSVToArray(MSI6M);
      fourthGraph = CSVToArray(MSI1Y);
    }
    if (this.props.ticker === 'MSCI') {
      firstGraph = CSVToArray(MSCI1M);
      secondGraph = CSVToArray(MSCI3M);
      thirdGraph = CSVToArray(MSCI6M);
      fourthGraph = CSVToArray(MSCI1Y);
    }
    if (this.props.ticker === 'NDAQ') {
      firstGraph = CSVToArray(NDAQ1M);
      secondGraph = CSVToArray(NDAQ3M);
      thirdGraph = CSVToArray(NDAQ6M);
      fourthGraph = CSVToArray(NDAQ1Y);
    }
    if (this.props.ticker === 'NTAP') {
      firstGraph = CSVToArray(NTAP1M);
      secondGraph = CSVToArray(NTAP3M);
      thirdGraph = CSVToArray(NTAP6M);
      fourthGraph = CSVToArray(NTAP1Y);
    }
    if (this.props.ticker === 'NFLX') {
      firstGraph = CSVToArray(NFLX1M);
      secondGraph = CSVToArray(NFLX3M);
      thirdGraph = CSVToArray(NFLX6M);
      fourthGraph = CSVToArray(NFLX1Y);
    }
    if (this.props.ticker === 'NWL') {
      firstGraph = CSVToArray(NWL1M);
      secondGraph = CSVToArray(NWL3M);
      thirdGraph = CSVToArray(NWL6M);
      fourthGraph = CSVToArray(NWL1Y);
    }
    if (this.props.ticker === 'NEM') {
      firstGraph = CSVToArray(NEM1M);
      secondGraph = CSVToArray(NEM3M);
      thirdGraph = CSVToArray(NEM6M);
      fourthGraph = CSVToArray(NEM1Y);
    }
    if (this.props.ticker === 'NWSA') {
      firstGraph = CSVToArray(NWSA1M);
      secondGraph = CSVToArray(NWSA3M);
      thirdGraph = CSVToArray(NWSA6M);
      fourthGraph = CSVToArray(NWSA1Y);
    }
    if (this.props.ticker === 'NWS') {
      firstGraph = CSVToArray(NWS1M);
      secondGraph = CSVToArray(NWS3M);
      thirdGraph = CSVToArray(NWS6M);
      fourthGraph = CSVToArray(NWS1Y);
    }
    if (this.props.ticker === 'NEE') {
      firstGraph = CSVToArray(NEE1M);
      secondGraph = CSVToArray(NEE3M);
      thirdGraph = CSVToArray(NEE6M);
      fourthGraph = CSVToArray(NEE1Y);
    }
    if (this.props.ticker === 'NLSN') {
      firstGraph = CSVToArray(NLSN1M);
      secondGraph = CSVToArray(NLSN3M);
      thirdGraph = CSVToArray(NLSN6M);
      fourthGraph = CSVToArray(NLSN1Y);
    }
    if (this.props.ticker === 'NKE') {
      firstGraph = CSVToArray(NKE1M);
      secondGraph = CSVToArray(NKE3M);
      thirdGraph = CSVToArray(NKE6M);
      fourthGraph = CSVToArray(NKE1Y);
    }
    if (this.props.ticker === 'NI') {
      firstGraph = CSVToArray(NI1M);
      secondGraph = CSVToArray(NI3M);
      thirdGraph = CSVToArray(NI6M);
      fourthGraph = CSVToArray(NI1Y);
    }
    if (this.props.ticker === 'NSC') {
      firstGraph = CSVToArray(NSC1M);
      secondGraph = CSVToArray(NSC3M);
      thirdGraph = CSVToArray(NSC6M);
      fourthGraph = CSVToArray(NSC1Y);
    }
    if (this.props.ticker === 'NTRS') {
      firstGraph = CSVToArray(NTRS1M);
      secondGraph = CSVToArray(NTRS3M);
      thirdGraph = CSVToArray(NTRS6M);
      fourthGraph = CSVToArray(NTRS1Y);
    }
    if (this.props.ticker === 'NOC') {
      firstGraph = CSVToArray(NOC1M);
      secondGraph = CSVToArray(NOC3M);
      thirdGraph = CSVToArray(NOC6M);
      fourthGraph = CSVToArray(NOC1Y);
    }
    if (this.props.ticker === 'NLOK') {
      firstGraph = CSVToArray(NLOK1M);
      secondGraph = CSVToArray(NLOK3M);
      thirdGraph = CSVToArray(NLOK6M);
      fourthGraph = CSVToArray(NLOK1Y);
    }
    if (this.props.ticker === 'NCLH') {
      firstGraph = CSVToArray(NCLH1M);
      secondGraph = CSVToArray(NCLH3M);
      thirdGraph = CSVToArray(NCLH6M);
      fourthGraph = CSVToArray(NCLH1Y);
    }
    if (this.props.ticker === 'NOV') {
      firstGraph = CSVToArray(NOV1M);
      secondGraph = CSVToArray(NOV3M);
      thirdGraph = CSVToArray(NOV6M);
      fourthGraph = CSVToArray(NOV1Y);
    }
    if (this.props.ticker === 'NRG') {
      firstGraph = CSVToArray(NRG1M);
      secondGraph = CSVToArray(NRG3M);
      thirdGraph = CSVToArray(NRG6M);
      fourthGraph = CSVToArray(NRG1Y);
    }
    if (this.props.ticker === 'NUE') {
      firstGraph = CSVToArray(NUE1M);
      secondGraph = CSVToArray(NUE3M);
      thirdGraph = CSVToArray(NUE6M);
      fourthGraph = CSVToArray(NUE1Y);
    }
    if (this.props.ticker === 'NVDA') {
      firstGraph = CSVToArray(NVDA1M);
      secondGraph = CSVToArray(NVDA3M);
      thirdGraph = CSVToArray(NVDA6M);
      fourthGraph = CSVToArray(NVDA1Y);
    }
    if (this.props.ticker === 'NVR') {
      firstGraph = CSVToArray(NVR1M);
      secondGraph = CSVToArray(NVR3M);
      thirdGraph = CSVToArray(NVR6M);
      fourthGraph = CSVToArray(NVR1Y);
    }
    if (this.props.ticker === 'ORLY') {
      firstGraph = CSVToArray(ORLY1M);
      secondGraph = CSVToArray(ORLY3M);
      thirdGraph = CSVToArray(ORLY6M);
      fourthGraph = CSVToArray(ORLY1Y);
    }
    if (this.props.ticker === 'OXY') {
      firstGraph = CSVToArray(OXY1M);
      secondGraph = CSVToArray(OXY3M);
      thirdGraph = CSVToArray(OXY6M);
      fourthGraph = CSVToArray(OXY1Y);
    }
    if (this.props.ticker === 'ODFL') {
      firstGraph = CSVToArray(ODFL1M);
      secondGraph = CSVToArray(ODFL3M);
      thirdGraph = CSVToArray(ODFL6M);
      fourthGraph = CSVToArray(ODFL1Y);
    }
    if (this.props.ticker === 'OMC') {
      firstGraph = CSVToArray(OMC1M);
      secondGraph = CSVToArray(OMC3M);
      thirdGraph = CSVToArray(OMC6M);
      fourthGraph = CSVToArray(OMC1Y);
    }
    if (this.props.ticker === 'OKE') {
      firstGraph = CSVToArray(OKE1M);
      secondGraph = CSVToArray(OKE3M);
      thirdGraph = CSVToArray(OKE6M);
      fourthGraph = CSVToArray(OKE1Y);
    }
    if (this.props.ticker === 'ORCL') {
      firstGraph = CSVToArray(ORCL1M);
      secondGraph = CSVToArray(ORCL3M);
      thirdGraph = CSVToArray(ORCL6M);
      fourthGraph = CSVToArray(ORCL1Y);
    }
    if (this.props.ticker === 'OTIS') {
      firstGraph = CSVToArray(OTIS1M);
      secondGraph = CSVToArray(OTIS3M);
      thirdGraph = CSVToArray(OTIS6M);
      fourthGraph = CSVToArray(OTIS1Y);
    }
    if (this.props.ticker === 'PCAR') {
      firstGraph = CSVToArray(PCAR1M);
      secondGraph = CSVToArray(PCAR3M);
      thirdGraph = CSVToArray(PCAR6M);
      fourthGraph = CSVToArray(PCAR1Y);
    }
    if (this.props.ticker === 'PKG') {
      firstGraph = CSVToArray(PKG1M);
      secondGraph = CSVToArray(PKG3M);
      thirdGraph = CSVToArray(PKG6M);
      fourthGraph = CSVToArray(PKG1Y);
    }
    if (this.props.ticker === 'PH') {
      firstGraph = CSVToArray(PH1M);
      secondGraph = CSVToArray(PH3M);
      thirdGraph = CSVToArray(PH6M);
      fourthGraph = CSVToArray(PH1Y);
    }
    if (this.props.ticker === 'PAYX') {
      firstGraph = CSVToArray(PAYX1M);
      secondGraph = CSVToArray(PAYX3M);
      thirdGraph = CSVToArray(PAYX6M);
      fourthGraph = CSVToArray(PAYX1Y);
    }
    if (this.props.ticker === 'PAYC') {
      firstGraph = CSVToArray(PAYC1M);
      secondGraph = CSVToArray(PAYC3M);
      thirdGraph = CSVToArray(PAYC6M);
      fourthGraph = CSVToArray(PAYC1Y);
    }
    if (this.props.ticker === 'PYPL') {
      firstGraph = CSVToArray(PYPL1M);
      secondGraph = CSVToArray(PYPL3M);
      thirdGraph = CSVToArray(PYPL6M);
      fourthGraph = CSVToArray(PYPL1Y);
    }
    if (this.props.ticker === 'PNR') {
      firstGraph = CSVToArray(PNR1M);
      secondGraph = CSVToArray(PNR3M);
      thirdGraph = CSVToArray(PNR6M);
      fourthGraph = CSVToArray(PNR1Y);
    }
    if (this.props.ticker === 'PBCT') {
      firstGraph = CSVToArray(PBCT1M);
      secondGraph = CSVToArray(PBCT3M);
      thirdGraph = CSVToArray(PBCT6M);
      fourthGraph = CSVToArray(PBCT1Y);
    }
    if (this.props.ticker === 'PEP') {
      firstGraph = CSVToArray(PEP1M);
      secondGraph = CSVToArray(PEP3M);
      thirdGraph = CSVToArray(PEP6M);
      fourthGraph = CSVToArray(PEP1Y);
    }
    if (this.props.ticker === 'PKI') {
      firstGraph = CSVToArray(PKI1M);
      secondGraph = CSVToArray(PKI3M);
      thirdGraph = CSVToArray(PKI6M);
      fourthGraph = CSVToArray(PKI1Y);
    }
    if (this.props.ticker === 'PRGO') {
      firstGraph = CSVToArray(PRGO1M);
      secondGraph = CSVToArray(PRGO3M);
      thirdGraph = CSVToArray(PRGO6M);
      fourthGraph = CSVToArray(PRGO1Y);
    }
    if (this.props.ticker === 'PFE') {
      firstGraph = CSVToArray(PFE1M);
      secondGraph = CSVToArray(PFE3M);
      thirdGraph = CSVToArray(PFE6M);
      fourthGraph = CSVToArray(PFE1Y);
    }
    if (this.props.ticker === 'PM') {
      firstGraph = CSVToArray(PM1M);
      secondGraph = CSVToArray(PM3M);
      thirdGraph = CSVToArray(PM6M);
      fourthGraph = CSVToArray(PM1Y);
    }
    if (this.props.ticker === 'PSX') {
      firstGraph = CSVToArray(PSX1M);
      secondGraph = CSVToArray(PSX3M);
      thirdGraph = CSVToArray(PSX6M);
      fourthGraph = CSVToArray(PSX1Y);
    }
    if (this.props.ticker === 'PNW') {
      firstGraph = CSVToArray(PNW1M);
      secondGraph = CSVToArray(PNW3M);
      thirdGraph = CSVToArray(PNW6M);
      fourthGraph = CSVToArray(PNW1Y);
    }
    if (this.props.ticker === 'PXD') {
      firstGraph = CSVToArray(PXD1M);
      secondGraph = CSVToArray(PXD3M);
      thirdGraph = CSVToArray(PXD6M);
      fourthGraph = CSVToArray(PXD1Y);
    }
    if (this.props.ticker === 'PNC') {
      firstGraph = CSVToArray(PNC1M);
      secondGraph = CSVToArray(PNC3M);
      thirdGraph = CSVToArray(PNC6M);
      fourthGraph = CSVToArray(PNC1Y);
    }
    if (this.props.ticker === 'POOL') {
      firstGraph = CSVToArray(POOL1M);
      secondGraph = CSVToArray(POOL3M);
      thirdGraph = CSVToArray(POOL6M);
      fourthGraph = CSVToArray(POOL1Y);
    }
    if (this.props.ticker === 'PPG') {
      firstGraph = CSVToArray(PPG1M);
      secondGraph = CSVToArray(PPG3M);
      thirdGraph = CSVToArray(PPG6M);
      fourthGraph = CSVToArray(PPG1Y);
    }
    if (this.props.ticker === 'PPL') {
      firstGraph = CSVToArray(PPL1M);
      secondGraph = CSVToArray(PPL3M);
      thirdGraph = CSVToArray(PPL6M);
      fourthGraph = CSVToArray(PPL1Y);
    }
    if (this.props.ticker === 'PFG') {
      firstGraph = CSVToArray(PFG1M);
      secondGraph = CSVToArray(PFG3M);
      thirdGraph = CSVToArray(PFG6M);
      fourthGraph = CSVToArray(PFG1Y);
    }
    if (this.props.ticker === 'PG') {
      firstGraph = CSVToArray(PG1M);
      secondGraph = CSVToArray(PG3M);
      thirdGraph = CSVToArray(PG6M);
      fourthGraph = CSVToArray(PG1Y);
    }
    if (this.props.ticker === 'PGR') {
      firstGraph = CSVToArray(PGR1M);
      secondGraph = CSVToArray(PGR3M);
      thirdGraph = CSVToArray(PGR6M);
      fourthGraph = CSVToArray(PGR1Y);
    }
    if (this.props.ticker === 'PLD') {
      firstGraph = CSVToArray(PLD1M);
      secondGraph = CSVToArray(PLD3M);
      thirdGraph = CSVToArray(PLD6M);
      fourthGraph = CSVToArray(PLD1Y);
    }
    if (this.props.ticker === 'PRU') {
      firstGraph = CSVToArray(PRU1M);
      secondGraph = CSVToArray(PRU3M);
      thirdGraph = CSVToArray(PRU6M);
      fourthGraph = CSVToArray(PRU1Y);
    }
    if (this.props.ticker === 'PEG') {
      firstGraph = CSVToArray(PEG1M);
      secondGraph = CSVToArray(PEG3M);
      thirdGraph = CSVToArray(PEG6M);
      fourthGraph = CSVToArray(PEG1Y);
    }
    if (this.props.ticker === 'PSA') {
      firstGraph = CSVToArray(PSA1M);
      secondGraph = CSVToArray(PSA3M);
      thirdGraph = CSVToArray(PSA6M);
      fourthGraph = CSVToArray(PSA1Y);
    }
    if (this.props.ticker === 'PHM') {
      firstGraph = CSVToArray(PHM1M);
      secondGraph = CSVToArray(PHM3M);
      thirdGraph = CSVToArray(PHM6M);
      fourthGraph = CSVToArray(PHM1Y);
    }
    if (this.props.ticker === 'PVH') {
      firstGraph = CSVToArray(PVH1M);
      secondGraph = CSVToArray(PVH3M);
      thirdGraph = CSVToArray(PVH6M);
      fourthGraph = CSVToArray(PVH1Y);
    }
    if (this.props.ticker === 'QRVO') {
      firstGraph = CSVToArray(QRVO1M);
      secondGraph = CSVToArray(QRVO3M);
      thirdGraph = CSVToArray(QRVO6M);
      fourthGraph = CSVToArray(QRVO1Y);
    }
    if (this.props.ticker === 'PWR') {
      firstGraph = CSVToArray(PWR1M);
      secondGraph = CSVToArray(PWR3M);
      thirdGraph = CSVToArray(PWR6M);
      fourthGraph = CSVToArray(PWR1Y);
    }
    if (this.props.ticker === 'QCOM') {
      firstGraph = CSVToArray(QCOM1M);
      secondGraph = CSVToArray(QCOM3M);
      thirdGraph = CSVToArray(QCOM6M);
      fourthGraph = CSVToArray(QCOM1Y);
    }
    if (this.props.ticker === 'DGX') {
      firstGraph = CSVToArray(DGX1M);
      secondGraph = CSVToArray(DGX3M);
      thirdGraph = CSVToArray(DGX6M);
      fourthGraph = CSVToArray(DGX1Y);
    }
    if (this.props.ticker === 'RL') {
      firstGraph = CSVToArray(RL1M);
      secondGraph = CSVToArray(RL3M);
      thirdGraph = CSVToArray(RL6M);
      fourthGraph = CSVToArray(RL1Y);
    }
    if (this.props.ticker === 'RJF') {
      firstGraph = CSVToArray(RJF1M);
      secondGraph = CSVToArray(RJF3M);
      thirdGraph = CSVToArray(RJF6M);
      fourthGraph = CSVToArray(RJF1Y);
    }
    if (this.props.ticker === 'RTX') {
      firstGraph = CSVToArray(RTX1M);
      secondGraph = CSVToArray(RTX3M);
      thirdGraph = CSVToArray(RTX6M);
      fourthGraph = CSVToArray(RTX1Y);
    }
    if (this.props.ticker === 'O') {
      firstGraph = CSVToArray(O1M);
      secondGraph = CSVToArray(O3M);
      thirdGraph = CSVToArray(O6M);
      fourthGraph = CSVToArray(O1Y);
    }
    if (this.props.ticker === 'REG') {
      firstGraph = CSVToArray(REG1M);
      secondGraph = CSVToArray(REG3M);
      thirdGraph = CSVToArray(REG6M);
      fourthGraph = CSVToArray(REG1Y);
    }
    if (this.props.ticker === 'REGN') {
      firstGraph = CSVToArray(REGN1M);
      secondGraph = CSVToArray(REGN3M);
      thirdGraph = CSVToArray(REGN6M);
      fourthGraph = CSVToArray(REGN1Y);
    }
    if (this.props.ticker === 'RF') {
      firstGraph = CSVToArray(RF1M);
      secondGraph = CSVToArray(RF3M);
      thirdGraph = CSVToArray(RF6M);
      fourthGraph = CSVToArray(RF1Y);
    }
    if (this.props.ticker === 'RSG') {
      firstGraph = CSVToArray(RSG1M);
      secondGraph = CSVToArray(RSG3M);
      thirdGraph = CSVToArray(RSG6M);
      fourthGraph = CSVToArray(RSG1Y);
    }
    if (this.props.ticker === 'RMD') {
      firstGraph = CSVToArray(RMD1M);
      secondGraph = CSVToArray(RMD3M);
      thirdGraph = CSVToArray(RMD6M);
      fourthGraph = CSVToArray(RMD1Y);
    }
    if (this.props.ticker === 'RHI') {
      firstGraph = CSVToArray(RHI1M);
      secondGraph = CSVToArray(RHI3M);
      thirdGraph = CSVToArray(RHI6M);
      fourthGraph = CSVToArray(RHI1Y);
    }
    if (this.props.ticker === 'ROK') {
      firstGraph = CSVToArray(ROK1M);
      secondGraph = CSVToArray(ROK3M);
      thirdGraph = CSVToArray(ROK6M);
      fourthGraph = CSVToArray(ROK1Y);
    }
    if (this.props.ticker === 'ROL') {
      firstGraph = CSVToArray(ROL1M);
      secondGraph = CSVToArray(ROL3M);
      thirdGraph = CSVToArray(ROL6M);
      fourthGraph = CSVToArray(ROL1Y);
    }
    if (this.props.ticker === 'ROP') {
      firstGraph = CSVToArray(ROP1M);
      secondGraph = CSVToArray(ROP3M);
      thirdGraph = CSVToArray(ROP6M);
      fourthGraph = CSVToArray(ROP1Y);
    }
    if (this.props.ticker === 'ROST') {
      firstGraph = CSVToArray(ROST1M);
      secondGraph = CSVToArray(ROST3M);
      thirdGraph = CSVToArray(ROST6M);
      fourthGraph = CSVToArray(ROST1Y);
    }
    if (this.props.ticker === 'RCL') {
      firstGraph = CSVToArray(RCL1M);
      secondGraph = CSVToArray(RCL3M);
      thirdGraph = CSVToArray(RCL6M);
      fourthGraph = CSVToArray(RCL1Y);
    }
    if (this.props.ticker === 'SPGI') {
      firstGraph = CSVToArray(SPGI1M);
      secondGraph = CSVToArray(SPGI3M);
      thirdGraph = CSVToArray(SPGI6M);
      fourthGraph = CSVToArray(SPGI1Y);
    }
    if (this.props.ticker === 'CRM') {
      firstGraph = CSVToArray(CRM1M);
      secondGraph = CSVToArray(CRM3M);
      thirdGraph = CSVToArray(CRM6M);
      fourthGraph = CSVToArray(CRM1Y);
    }
    if (this.props.ticker === 'SBAC') {
      firstGraph = CSVToArray(SBAC1M);
      secondGraph = CSVToArray(SBAC3M);
      thirdGraph = CSVToArray(SBAC6M);
      fourthGraph = CSVToArray(SBAC1Y);
    }
    if (this.props.ticker === 'SLB') {
      firstGraph = CSVToArray(SLB1M);
      secondGraph = CSVToArray(SLB3M);
      thirdGraph = CSVToArray(SLB6M);
      fourthGraph = CSVToArray(SLB1Y);
    }
    if (this.props.ticker === 'STX') {
      firstGraph = CSVToArray(STX1M);
      secondGraph = CSVToArray(STX3M);
      thirdGraph = CSVToArray(STX6M);
      fourthGraph = CSVToArray(STX1Y);
    }
    if (this.props.ticker === 'SEE') {
      firstGraph = CSVToArray(SEE1M);
      secondGraph = CSVToArray(SEE3M);
      thirdGraph = CSVToArray(SEE6M);
      fourthGraph = CSVToArray(SEE1Y);
    }
    if (this.props.ticker === 'SRE') {
      firstGraph = CSVToArray(SRE1M);
      secondGraph = CSVToArray(SRE3M);
      thirdGraph = CSVToArray(SRE6M);
      fourthGraph = CSVToArray(SRE1Y);
    }
    if (this.props.ticker === 'NOW') {
      firstGraph = CSVToArray(NOW1M);
      secondGraph = CSVToArray(NOW3M);
      thirdGraph = CSVToArray(NOW6M);
      fourthGraph = CSVToArray(NOW1Y);
    }
    if (this.props.ticker === 'SHW') {
      firstGraph = CSVToArray(SHW1M);
      secondGraph = CSVToArray(SHW3M);
      thirdGraph = CSVToArray(SHW6M);
      fourthGraph = CSVToArray(SHW1Y);
    }
    if (this.props.ticker === 'SPG') {
      firstGraph = CSVToArray(SPG1M);
      secondGraph = CSVToArray(SPG3M);
      thirdGraph = CSVToArray(SPG6M);
      fourthGraph = CSVToArray(SPG1Y);
    }
    if (this.props.ticker === 'SWKS') {
      firstGraph = CSVToArray(SWKS1M);
      secondGraph = CSVToArray(SWKS3M);
      thirdGraph = CSVToArray(SWKS6M);
      fourthGraph = CSVToArray(SWKS1Y);
    }
    if (this.props.ticker === 'SLG') {
      firstGraph = CSVToArray(SLG1M);
      secondGraph = CSVToArray(SLG3M);
      thirdGraph = CSVToArray(SLG6M);
      fourthGraph = CSVToArray(SLG1Y);
    }
    if (this.props.ticker === 'SNA') {
      firstGraph = CSVToArray(SNA1M);
      secondGraph = CSVToArray(SNA3M);
      thirdGraph = CSVToArray(SNA6M);
      fourthGraph = CSVToArray(SNA1Y);
    }
    if (this.props.ticker === 'SO') {
      firstGraph = CSVToArray(SO1M);
      secondGraph = CSVToArray(SO3M);
      thirdGraph = CSVToArray(SO6M);
      fourthGraph = CSVToArray(SO1Y);
    }
    if (this.props.ticker === 'LUV') {
      firstGraph = CSVToArray(LUV1M);
      secondGraph = CSVToArray(LUV3M);
      thirdGraph = CSVToArray(LUV6M);
      fourthGraph = CSVToArray(LUV1Y);
    }
    if (this.props.ticker === 'SWK') {
      firstGraph = CSVToArray(SWK1M);
      secondGraph = CSVToArray(SWK3M);
      thirdGraph = CSVToArray(SWK6M);
      fourthGraph = CSVToArray(SWK1Y);
    }
    if (this.props.ticker === 'SBUX') {
      firstGraph = CSVToArray(SBUX1M);
      secondGraph = CSVToArray(SBUX3M);
      thirdGraph = CSVToArray(SBUX6M);
      fourthGraph = CSVToArray(SBUX1Y);
    }
    if (this.props.ticker === 'STT') {
      firstGraph = CSVToArray(STT1M);
      secondGraph = CSVToArray(STT3M);
      thirdGraph = CSVToArray(STT6M);
      fourthGraph = CSVToArray(STT1Y);
    }
    if (this.props.ticker === 'STE') {
      firstGraph = CSVToArray(STE1M);
      secondGraph = CSVToArray(STE3M);
      thirdGraph = CSVToArray(STE6M);
      fourthGraph = CSVToArray(STE1Y);
    }
    if (this.props.ticker === 'SYK') {
      firstGraph = CSVToArray(SYK1M);
      secondGraph = CSVToArray(SYK3M);
      thirdGraph = CSVToArray(SYK6M);
      fourthGraph = CSVToArray(SYK1Y);
    }
    if (this.props.ticker === 'SIVB') {
      firstGraph = CSVToArray(SIVB1M);
      secondGraph = CSVToArray(SIVB3M);
      thirdGraph = CSVToArray(SIVB6M);
      fourthGraph = CSVToArray(SIVB1Y);
    }
    if (this.props.ticker === 'SYF') {
      firstGraph = CSVToArray(SYF1M);
      secondGraph = CSVToArray(SYF3M);
      thirdGraph = CSVToArray(SYF6M);
      fourthGraph = CSVToArray(SYF1Y);
    }
    if (this.props.ticker === 'SNPS') {
      firstGraph = CSVToArray(SNPS1M);
      secondGraph = CSVToArray(SNPS3M);
      thirdGraph = CSVToArray(SNPS6M);
      fourthGraph = CSVToArray(SNPS1Y);
    }
    if (this.props.ticker === 'SYY') {
      firstGraph = CSVToArray(SYY1M);
      secondGraph = CSVToArray(SYY3M);
      thirdGraph = CSVToArray(SYY6M);
      fourthGraph = CSVToArray(SYY1Y);
    }
    if (this.props.ticker === 'TMUS') {
      firstGraph = CSVToArray(TMUS1M);
      secondGraph = CSVToArray(TMUS3M);
      thirdGraph = CSVToArray(TMUS6M);
      fourthGraph = CSVToArray(TMUS1Y);
    }
    if (this.props.ticker === 'TROW') {
      firstGraph = CSVToArray(TROW1M);
      secondGraph = CSVToArray(TROW3M);
      thirdGraph = CSVToArray(TROW6M);
      fourthGraph = CSVToArray(TROW1Y);
    }
    if (this.props.ticker === 'TTWO') {
      firstGraph = CSVToArray(TTWO1M);
      secondGraph = CSVToArray(TTWO3M);
      thirdGraph = CSVToArray(TTWO6M);
      fourthGraph = CSVToArray(TTWO1Y);
    }
    if (this.props.ticker === 'TPR') {
      firstGraph = CSVToArray(TPR1M);
      secondGraph = CSVToArray(TPR3M);
      thirdGraph = CSVToArray(TPR6M);
      fourthGraph = CSVToArray(TPR1Y);
    }
    if (this.props.ticker === 'TGT') {
      firstGraph = CSVToArray(TGT1M);
      secondGraph = CSVToArray(TGT3M);
      thirdGraph = CSVToArray(TGT6M);
      fourthGraph = CSVToArray(TGT1Y);
    }
    if (this.props.ticker === 'TEL') {
      firstGraph = CSVToArray(TEL1M);
      secondGraph = CSVToArray(TEL3M);
      thirdGraph = CSVToArray(TEL6M);
      fourthGraph = CSVToArray(TEL1Y);
    }
    if (this.props.ticker === 'TDY') {
      firstGraph = CSVToArray(TDY1M);
      secondGraph = CSVToArray(TDY3M);
      thirdGraph = CSVToArray(TDY6M);
      fourthGraph = CSVToArray(TDY1Y);
    }
    if (this.props.ticker === 'TFX') {
      firstGraph = CSVToArray(TFX1M);
      secondGraph = CSVToArray(TFX3M);
      thirdGraph = CSVToArray(TFX6M);
      fourthGraph = CSVToArray(TFX1Y);
    }
    if (this.props.ticker === 'TER') {
      firstGraph = CSVToArray(TER1M);
      secondGraph = CSVToArray(TER3M);
      thirdGraph = CSVToArray(TER6M);
      fourthGraph = CSVToArray(TER1Y);
    }
    if (this.props.ticker === 'TSLA') {
      firstGraph = CSVToArray(TSLA1M);
      secondGraph = CSVToArray(TSLA3M);
      thirdGraph = CSVToArray(TSLA6M);
      fourthGraph = CSVToArray(TSLA1Y);
    }
    if (this.props.ticker === 'TXN') {
      firstGraph = CSVToArray(TXN1M);
      secondGraph = CSVToArray(TXN3M);
      thirdGraph = CSVToArray(TXN6M);
      fourthGraph = CSVToArray(TXN1Y);
    }
    if (this.props.ticker === 'TXT') {
      firstGraph = CSVToArray(TXT1M);
      secondGraph = CSVToArray(TXT3M);
      thirdGraph = CSVToArray(TXT6M);
      fourthGraph = CSVToArray(TXT1Y);
    }
    if (this.props.ticker === 'TMO') {
      firstGraph = CSVToArray(TMO1M);
      secondGraph = CSVToArray(TMO3M);
      thirdGraph = CSVToArray(TMO6M);
      fourthGraph = CSVToArray(TMO1Y);
    }
    if (this.props.ticker === 'TJX') {
      firstGraph = CSVToArray(TJX1M);
      secondGraph = CSVToArray(TJX3M);
      thirdGraph = CSVToArray(TJX6M);
      fourthGraph = CSVToArray(TJX1Y);
    }
    if (this.props.ticker === 'TSCO') {
      firstGraph = CSVToArray(TSCO1M);
      secondGraph = CSVToArray(TSCO3M);
      thirdGraph = CSVToArray(TSCO6M);
      fourthGraph = CSVToArray(TSCO1Y);
    }
    if (this.props.ticker === 'TT') {
      firstGraph = CSVToArray(TT1M);
      secondGraph = CSVToArray(TT3M);
      thirdGraph = CSVToArray(TT6M);
      fourthGraph = CSVToArray(TT1Y);
    }
    if (this.props.ticker === 'TDG') {
      firstGraph = CSVToArray(TDG1M);
      secondGraph = CSVToArray(TDG3M);
      thirdGraph = CSVToArray(TDG6M);
      fourthGraph = CSVToArray(TDG1Y);
    }
    if (this.props.ticker === 'TRV') {
      firstGraph = CSVToArray(TRV1M);
      secondGraph = CSVToArray(TRV3M);
      thirdGraph = CSVToArray(TRV6M);
      fourthGraph = CSVToArray(TRV1Y);
    }
    if (this.props.ticker === 'TRMB') {
      firstGraph = CSVToArray(TRMB1M);
      secondGraph = CSVToArray(TRMB3M);
      thirdGraph = CSVToArray(TRMB6M);
      fourthGraph = CSVToArray(TRMB1Y);
    }
    if (this.props.ticker === 'TFC') {
      firstGraph = CSVToArray(TFC1M);
      secondGraph = CSVToArray(TFC3M);
      thirdGraph = CSVToArray(TFC6M);
      fourthGraph = CSVToArray(TFC1Y);
    }
    if (this.props.ticker === 'TWTR') {
      firstGraph = CSVToArray(TWTR1M);
      secondGraph = CSVToArray(TWTR3M);
      thirdGraph = CSVToArray(TWTR6M);
      fourthGraph = CSVToArray(TWTR1Y);
    }
    if (this.props.ticker === 'TYL') {
      firstGraph = CSVToArray(TYL1M);
      secondGraph = CSVToArray(TYL3M);
      thirdGraph = CSVToArray(TYL6M);
      fourthGraph = CSVToArray(TYL1Y);
    }
    if (this.props.ticker === 'TSN') {
      firstGraph = CSVToArray(TSN1M);
      secondGraph = CSVToArray(TSN3M);
      thirdGraph = CSVToArray(TSN6M);
      fourthGraph = CSVToArray(TSN1Y);
    }
    if (this.props.ticker === 'UDR') {
      firstGraph = CSVToArray(UDR1M);
      secondGraph = CSVToArray(UDR3M);
      thirdGraph = CSVToArray(UDR6M);
      fourthGraph = CSVToArray(UDR1Y);
    }
    if (this.props.ticker === 'ULTA') {
      firstGraph = CSVToArray(ULTA1M);
      secondGraph = CSVToArray(ULTA3M);
      thirdGraph = CSVToArray(ULTA6M);
      fourthGraph = CSVToArray(ULTA1Y);
    }
    if (this.props.ticker === 'USB') {
      firstGraph = CSVToArray(USB1M);
      secondGraph = CSVToArray(USB3M);
      thirdGraph = CSVToArray(USB6M);
      fourthGraph = CSVToArray(USB1Y);
    }
    if (this.props.ticker === 'UAA') {
      firstGraph = CSVToArray(UAA1M);
      secondGraph = CSVToArray(UAA3M);
      thirdGraph = CSVToArray(UAA6M);
      fourthGraph = CSVToArray(UAA1Y);
    }
    if (this.props.ticker === 'UA') {
      firstGraph = CSVToArray(UA1M);
      secondGraph = CSVToArray(UA3M);
      thirdGraph = CSVToArray(UA6M);
      fourthGraph = CSVToArray(UA1Y);
    }
    if (this.props.ticker === 'UNP') {
      firstGraph = CSVToArray(UNP1M);
      secondGraph = CSVToArray(UNP3M);
      thirdGraph = CSVToArray(UNP6M);
      fourthGraph = CSVToArray(UNP1Y);
    }
    if (this.props.ticker === 'UAL') {
      firstGraph = CSVToArray(UAL1M);
      secondGraph = CSVToArray(UAL3M);
      thirdGraph = CSVToArray(UAL6M);
      fourthGraph = CSVToArray(UAL1Y);
    }
    if (this.props.ticker === 'UNH') {
      firstGraph = CSVToArray(UNH1M);
      secondGraph = CSVToArray(UNH3M);
      thirdGraph = CSVToArray(UNH6M);
      fourthGraph = CSVToArray(UNH1Y);
    }
    if (this.props.ticker === 'UPS') {
      firstGraph = CSVToArray(UPS1M);
      secondGraph = CSVToArray(UPS3M);
      thirdGraph = CSVToArray(UPS6M);
      fourthGraph = CSVToArray(UPS1Y);
    }
    if (this.props.ticker === 'URI') {
      firstGraph = CSVToArray(URI1M);
      secondGraph = CSVToArray(URI3M);
      thirdGraph = CSVToArray(URI6M);
      fourthGraph = CSVToArray(URI1Y);
    }
    if (this.props.ticker === 'UHS') {
      firstGraph = CSVToArray(UHS1M);
      secondGraph = CSVToArray(UHS3M);
      thirdGraph = CSVToArray(UHS6M);
      fourthGraph = CSVToArray(UHS1Y);
    }
    if (this.props.ticker === 'UNM') {
      firstGraph = CSVToArray(UNM1M);
      secondGraph = CSVToArray(UNM3M);
      thirdGraph = CSVToArray(UNM6M);
      fourthGraph = CSVToArray(UNM1Y);
    }
    if (this.props.ticker === 'VLO') {
      firstGraph = CSVToArray(VLO1M);
      secondGraph = CSVToArray(VLO3M);
      thirdGraph = CSVToArray(VLO6M);
      fourthGraph = CSVToArray(VLO1Y);
    }
    if (this.props.ticker === 'VAR') {
      firstGraph = CSVToArray(VAR1M);
      secondGraph = CSVToArray(VAR3M);
      thirdGraph = CSVToArray(VAR6M);
      fourthGraph = CSVToArray(VAR1Y);
    }
    if (this.props.ticker === 'VTR') {
      firstGraph = CSVToArray(VTR1M);
      secondGraph = CSVToArray(VTR3M);
      thirdGraph = CSVToArray(VTR6M);
      fourthGraph = CSVToArray(VTR1Y);
    }
    if (this.props.ticker === 'VRSN') {
      firstGraph = CSVToArray(VRSN1M);
      secondGraph = CSVToArray(VRSN3M);
      thirdGraph = CSVToArray(VRSN6M);
      fourthGraph = CSVToArray(VRSN1Y);
    }
    if (this.props.ticker === 'VRSK') {
      firstGraph = CSVToArray(VRSK1M);
      secondGraph = CSVToArray(VRSK3M);
      thirdGraph = CSVToArray(VRSK6M);
      fourthGraph = CSVToArray(VRSK1Y);
    }
    if (this.props.ticker === 'VZ') {
      firstGraph = CSVToArray(VZ1M);
      secondGraph = CSVToArray(VZ3M);
      thirdGraph = CSVToArray(VZ6M);
      fourthGraph = CSVToArray(VZ1Y);
    }
    if (this.props.ticker === 'VRTX') {
      firstGraph = CSVToArray(VRTX1M);
      secondGraph = CSVToArray(VRTX3M);
      thirdGraph = CSVToArray(VRTX6M);
      fourthGraph = CSVToArray(VRTX1Y);
    }
    if (this.props.ticker === 'VFC') {
      firstGraph = CSVToArray(VFC1M);
      secondGraph = CSVToArray(VFC3M);
      thirdGraph = CSVToArray(VFC6M);
      fourthGraph = CSVToArray(VFC1Y);
    }
    if (this.props.ticker === 'VIAC') {
      firstGraph = CSVToArray(VIAC1M);
      secondGraph = CSVToArray(VIAC3M);
      thirdGraph = CSVToArray(VIAC6M);
      fourthGraph = CSVToArray(VIAC1Y);
    }
    if (this.props.ticker === 'VTRS') {
      firstGraph = CSVToArray(VTRS1M);
      secondGraph = CSVToArray(VTRS3M);
      thirdGraph = CSVToArray(VTRS6M);
      fourthGraph = CSVToArray(VTRS1Y);
    }
    if (this.props.ticker === 'V') {
      firstGraph = CSVToArray(V1M);
      secondGraph = CSVToArray(V3M);
      thirdGraph = CSVToArray(V6M);
      fourthGraph = CSVToArray(V1Y);
    }
    if (this.props.ticker === 'VNT') {
      firstGraph = CSVToArray(VNT1M);
      secondGraph = CSVToArray(VNT3M);
      thirdGraph = CSVToArray(VNT6M);
      fourthGraph = CSVToArray(VNT1Y);
    }
    if (this.props.ticker === 'VNO') {
      firstGraph = CSVToArray(VNO1M);
      secondGraph = CSVToArray(VNO3M);
      thirdGraph = CSVToArray(VNO6M);
      fourthGraph = CSVToArray(VNO1Y);
    }
    if (this.props.ticker === 'VMC') {
      firstGraph = CSVToArray(VMC1M);
      secondGraph = CSVToArray(VMC3M);
      thirdGraph = CSVToArray(VMC6M);
      fourthGraph = CSVToArray(VMC1Y);
    }
    if (this.props.ticker === 'WRB') {
      firstGraph = CSVToArray(WRB1M);
      secondGraph = CSVToArray(WRB3M);
      thirdGraph = CSVToArray(WRB6M);
      fourthGraph = CSVToArray(WRB1Y);
    }
    if (this.props.ticker === 'WAB') {
      firstGraph = CSVToArray(WAB1M);
      secondGraph = CSVToArray(WAB3M);
      thirdGraph = CSVToArray(WAB6M);
      fourthGraph = CSVToArray(WAB1Y);
    }
    if (this.props.ticker === 'WMT') {
      firstGraph = CSVToArray(WMT1M);
      secondGraph = CSVToArray(WMT3M);
      thirdGraph = CSVToArray(WMT6M);
      fourthGraph = CSVToArray(WMT1Y);
    }
    if (this.props.ticker === 'WBA') {
      firstGraph = CSVToArray(WBA1M);
      secondGraph = CSVToArray(WBA3M);
      thirdGraph = CSVToArray(WBA6M);
      fourthGraph = CSVToArray(WBA1Y);
    }
    if (this.props.ticker === 'DIS') {
      firstGraph = CSVToArray(DIS1M);
      secondGraph = CSVToArray(DIS3M);
      thirdGraph = CSVToArray(DIS6M);
      fourthGraph = CSVToArray(DIS1Y);
    }
    if (this.props.ticker === 'WM') {
      firstGraph = CSVToArray(WM1M);
      secondGraph = CSVToArray(WM3M);
      thirdGraph = CSVToArray(WM6M);
      fourthGraph = CSVToArray(WM1Y);
    }
    if (this.props.ticker === 'WAT') {
      firstGraph = CSVToArray(WAT1M);
      secondGraph = CSVToArray(WAT3M);
      thirdGraph = CSVToArray(WAT6M);
      fourthGraph = CSVToArray(WAT1Y);
    }
    if (this.props.ticker === 'WEC') {
      firstGraph = CSVToArray(WEC1M);
      secondGraph = CSVToArray(WEC3M);
      thirdGraph = CSVToArray(WEC6M);
      fourthGraph = CSVToArray(WEC1Y);
    }
    if (this.props.ticker === 'WFC') {
      firstGraph = CSVToArray(WFC1M);
      secondGraph = CSVToArray(WFC3M);
      thirdGraph = CSVToArray(WFC6M);
      fourthGraph = CSVToArray(WFC1Y);
    }
    if (this.props.ticker === 'WELL') {
      firstGraph = CSVToArray(WELL1M);
      secondGraph = CSVToArray(WELL3M);
      thirdGraph = CSVToArray(WELL6M);
      fourthGraph = CSVToArray(WELL1Y);
    }
    if (this.props.ticker === 'WST') {
      firstGraph = CSVToArray(WST1M);
      secondGraph = CSVToArray(WST3M);
      thirdGraph = CSVToArray(WST6M);
      fourthGraph = CSVToArray(WST1Y);
    }
    if (this.props.ticker === 'WDC') {
      firstGraph = CSVToArray(WDC1M);
      secondGraph = CSVToArray(WDC3M);
      thirdGraph = CSVToArray(WDC6M);
      fourthGraph = CSVToArray(WDC1Y);
    }
    if (this.props.ticker === 'WU') {
      firstGraph = CSVToArray(WU1M);
      secondGraph = CSVToArray(WU3M);
      thirdGraph = CSVToArray(WU6M);
      fourthGraph = CSVToArray(WU1Y);
    }
    if (this.props.ticker === 'WRK') {
      firstGraph = CSVToArray(WRK1M);
      secondGraph = CSVToArray(WRK3M);
      thirdGraph = CSVToArray(WRK6M);
      fourthGraph = CSVToArray(WRK1Y);
    }
    if (this.props.ticker === 'WY') {
      firstGraph = CSVToArray(WY1M);
      secondGraph = CSVToArray(WY3M);
      thirdGraph = CSVToArray(WY6M);
      fourthGraph = CSVToArray(WY1Y);
    }
    if (this.props.ticker === 'WHR') {
      firstGraph = CSVToArray(WHR1M);
      secondGraph = CSVToArray(WHR3M);
      thirdGraph = CSVToArray(WHR6M);
      fourthGraph = CSVToArray(WHR1Y);
    }
    if (this.props.ticker === 'WMB') {
      firstGraph = CSVToArray(WMB1M);
      secondGraph = CSVToArray(WMB3M);
      thirdGraph = CSVToArray(WMB6M);
      fourthGraph = CSVToArray(WMB1Y);
    }
    if (this.props.ticker === 'WLTW') {
      firstGraph = CSVToArray(WLTW1M);
      secondGraph = CSVToArray(WLTW3M);
      thirdGraph = CSVToArray(WLTW6M);
      fourthGraph = CSVToArray(WLTW1Y);
    }
    if (this.props.ticker === 'WYNN') {
      firstGraph = CSVToArray(WYNN1M);
      secondGraph = CSVToArray(WYNN3M);
      thirdGraph = CSVToArray(WYNN6M);
      fourthGraph = CSVToArray(WYNN1Y);
    }
    if (this.props.ticker === 'XEL') {
      firstGraph = CSVToArray(XEL1M);
      secondGraph = CSVToArray(XEL3M);
      thirdGraph = CSVToArray(XEL6M);
      fourthGraph = CSVToArray(XEL1Y);
    }
    if (this.props.ticker === 'XRX') {
      firstGraph = CSVToArray(XRX1M);
      secondGraph = CSVToArray(XRX3M);
      thirdGraph = CSVToArray(XRX6M);
      fourthGraph = CSVToArray(XRX1Y);
    }
    if (this.props.ticker === 'XLNX') {
      firstGraph = CSVToArray(XLNX1M);
      secondGraph = CSVToArray(XLNX3M);
      thirdGraph = CSVToArray(XLNX6M);
      fourthGraph = CSVToArray(XLNX1Y);
    }
    if (this.props.ticker === 'XYL') {
      firstGraph = CSVToArray(XYL1M);
      secondGraph = CSVToArray(XYL3M);
      thirdGraph = CSVToArray(XYL6M);
      fourthGraph = CSVToArray(XYL1Y);
    }
    if (this.props.ticker === 'YUM') {
      firstGraph = CSVToArray(YUM1M);
      secondGraph = CSVToArray(YUM3M);
      thirdGraph = CSVToArray(YUM6M);
      fourthGraph = CSVToArray(YUM1Y);
    }
    if (this.props.ticker === 'ZBRA') {
      firstGraph = CSVToArray(ZBRA1M);
      secondGraph = CSVToArray(ZBRA3M);
      thirdGraph = CSVToArray(ZBRA6M);
      fourthGraph = CSVToArray(ZBRA1Y);
    }
    if (this.props.ticker === 'ZBH') {
      firstGraph = CSVToArray(ZBH1M);
      secondGraph = CSVToArray(ZBH3M);
      thirdGraph = CSVToArray(ZBH6M);
      fourthGraph = CSVToArray(ZBH1Y);
    }
    if (this.props.ticker === 'ZION') {
      firstGraph = CSVToArray(ZION1M);
      secondGraph = CSVToArray(ZION3M);
      thirdGraph = CSVToArray(ZION6M);
      fourthGraph = CSVToArray(ZION1Y);
    }
    if (this.props.ticker === 'ZTS') {
      firstGraph = CSVToArray(ZTS1M);
      secondGraph = CSVToArray(ZTS3M);
      thirdGraph = CSVToArray(ZTS6M);
      fourthGraph = CSVToArray(ZTS1Y);
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
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style4 = {
      color: "white",
      backgroundColor: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style5 = {
      color: "white",
      backgroundColor: "grey",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style6 = {
      color: "white",
      backgroundColor: "green",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style7 = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
    const style8 = {
      color: "green",
      padding: "10px",
      fontFamily: "Arial"
    };
    var difference;
    var price;
    var percentChange;
    var style;
    if ((this.state.graph[this.state.graph.length - 1] - this.state.graph[this.state.graph.length - 2]) > 0) {
      difference = "+" + (this.state.graph[this.state.graph.length - 1] - this.state.graph[this.state.graph.length - 2]).toFixed(2).toString();
      percentChange = "+" + ((this.state.graph[this.state.graph.length - 1] - this.state.graph[this.state.graph.length - 2]) * 100 / this.state.graph[this.state.graph.length - 2]).toFixed(2).toString();
      style = style8;
    }
    else {
      difference = "" + (this.state.graph[this.state.graph.length - 1] - this.state.graph[this.state.graph.length - 2]).toFixed(2).toString();
      percentChange = "" + ((this.state.graph[this.state.graph.length - 1] - this.state.graph[this.state.graph.length - 2]) * 100 / this.state.graph[this.state.graph.length - 2]).toFixed(2).toString();
      style = style7;
    }
    price = (parseFloat(this.state.graph[this.state.graph.length - 1])).toFixed(2);
    return (
      <div style={{border: "solid black"}} className="row">
        <h1 style={style1}>{this.props.ticker}</h1>
        <h1 style={style2}>{price}</h1>
        <h1 style={style}>{difference} ({percentChange}%)</h1>
        <h2>
        <Button style={style3} variant="contained" color="secondary">Follow</Button>
        <Button style={style4} variant="contained" color="secondary">Bearish</Button>
        <Button style={style5} variant="contained" color="secondary">Neutral</Button>
        <Button style={style6} variant="contained" color="secondary">Bullish</Button>
        </h2>
        <Button color="primary" onClick={() => {this.onClick1()}} >1 month</Button>   
        <Button color="primary" onClick={() => {this.onClick2()}} >3 months</Button> 
        <Button color="primary" onClick={() => {this.onClick3()}} >6 months</Button>   
        <Button color="primary" onClick={() => {this.onClick4()}} >1 year</Button>
    <VictoryChart width='1000' height='500'>
    <VictoryLine data={this.state.graph} x='Date' y='Price' />
    </VictoryChart>       
    <VictoryPie data={[
    { x: "bullish", y: stockSentiment.bullish },
    { x: "neutral", y: stockSentiment.neutral },
    { x: "bearish", y: stockSentiment.bearish }
    ]} />
    </div>
    )
  }
}
