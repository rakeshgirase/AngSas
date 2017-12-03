import {Injectable} from "@angular/core";
import {IQuestion} from "./questions.model";

/**
 * Created by rakesh on 15-Nov-2017.
 */
@Injectable()
export class QuestionService {

    private numbers: Array<number>;

    getNextQuestion(): IQuestion {
        return QUESTIONS[this.getRandomNumber()];
    }

    private getRandomNumber(): number {
        const randomNumber = Math.floor(Math.random() * (QUESTIONS.length - 1));
        return randomNumber;
    }
}
const QUESTIONS: Array<IQuestion> = [
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been assigned a\npermanent label of \"Asking Price\". Which SAS program temporarily replaces the label \"Asking\nPrice\" with the label \"Sale Price\" in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data =sasuser.houses; label price = \"Sale Price\"; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data =sasuser.houses label; label price \"Sale Price\"; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data =sasuser.houses label; label price = \"Sale Price\"; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data =sasuser.houses; price = \"Sale Price\"; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following GAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money(in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORKPEOPLE has 5 observations, and the data set WORKMONEY has 7\nobservations. How many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\njobcode= 'FA1';\nlength jobcode $ 8;\nrun;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and\nWORK.DEPT2 SAS data sets. The variable JOBCODE has a length of 5 in the WORK.DEPT1\ndata set and a length of 7 in the WORK.DEPT2 data set. What is the length of the variable\nJOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 8",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set SASDATA.TWO:\nSASDATA.TWO\nX Y\n--\n5 2\n3 1\n5 6\nThe following SAS program is submitted:\ndata sasuser.one two sasdata.three;\nset sasdata two;\nif x = 5 then output sasuser.one;\nelse output sasdata two;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data set SASUSER.ONE has 5 observations\ndata set SASUSER.TWO has 5 observations\ndata set WORK.OTHER has 3 observations",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 1 observations",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 5 observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No data sets are output.\nThe DATA step fails execution due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nfootnote 1 'Sales Report for Last Month';\nfootnote2 'Selected Products Only';\nfootnote3 'All Regions';\nfootnote4 'All Figures in Thousands of Dollars';\nproc print data = sasuser.shoes;\nfootnote2 'All Products';\nrun;\nWhich footnote(s) is/are displayed in the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. All Products",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Sales Report for Last Month All Products",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. All Products All Regions All Figures in Thousands of Dollars",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Sales Report for Last Month All Products All Regions All Figures in Thousands of Dollars",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record DEPT:\n----|----10---|----20---|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile'dept';\ninputdept$ 1-11 number 13- 15;\n&ltrinsert statement here>\nrun;\nWhich SAS statement completes the program and results in a value of 'Printing750' for the\nDEPARTMENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = dept II number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = left(dept) II number;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. department = trim(dept) number;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. department = trim(dept) put(number,3.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata one;\naddressl= '214 London Way';\nrun;\ndata one;\nset one;\naddress = tranwrd(address1, 'Way', 'Drive'); run;\nWhat are the length and value of the variable ADDRESS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Length is 14; value is '214London Dri'.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Length is 14; value is'214 London Way'.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Length is 16; value is'214 London Drive'.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Length is 200; value is'214 London Drive'.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhat is the value of the variable PROD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORK.SALARY are shown below:\nWORK.EMPLOYEE WORK.SALARY\nfnameage tag salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nby fname;\ntotsal+ salary;\nrun;\nWhich one of the following statements completes the merge of the two data sets by the FNAME\nvariable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. mergework.employee\nwork.salary(fname = tag);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. mergework.employee\nwork.salary(tag = fname);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. mergework.employee\nwork.salary(rename = (fname = tag));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. mergework.employee\nwork.salary(rename = (tag = fname));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which program displays a listing of all data sets in the SASUSER library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib =sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents data =sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents lib =sasuser._alI_; run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc contents data =sasuser._all_; run;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = work.employee;\nby descending fname;\nproc sort data = work.salary;\nby descending fname;\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\nrun;\nWhy does the program rail to execute?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SORT procedures contain invalid syntax.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The merged data sets are not permanent SAS data sets.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The RUN statement was omitted alter each or the SORT procedures.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets were not merged in the order by which they were sorted.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program Is submittad:\ndata work.sales;\ndo year = 1 to 5;\ndo month=1 to 12;\nx+1;\noutput\nend;\nend;\nrun;\nHow many observations are written the WORK SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data record:\n----I----10---I----20---I----30\nson Travis,\nThe following output is desired:\nObsrelation firstname\n1 son Travis\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data family (dIm = ','); infile 'tile specification'; input relation $ firstname $; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. optionsdIm = ','; data family; infile 'file specification'; input relation $ firstname $; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data family;infile 'file specification' dIm = ','; input relation $ firstname $; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data family;infile 'file specification'; input relation $ firstname $ / dim = ','; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set AGES:\nAGES\nAGE\n---------\nThe variable AGE contains character values. The following SAS program is submitted:\ndata subset;\nset ages;\nwhere age> 12;\nrun;\nHow many observations are written out to the data set SUBSET?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nprodid price\nK12S 5.10 producttype\nNETWORK sales\n15 returns\nB132S 2.34 HARDWARE 300 10\nR18KY21.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\ndata hware inter soft;\nset prices (keep = producttype price);\nif price le 5.00;\nif producttype = 'HARDWARE' then output HWARE;\nelse if producttype = 'NETWORK' then output INTER;\nelse if producttype = 'SOFTWARE' then output SOFT;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.department;\nlength jobcode $ 12;\njobcode='FAl';\nrun;\nThe WORK.DEPARTMENT data set contains a character variable named JOBCODE with a length\nof 5.\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The length of the variable JOBCODE is 3.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The length of the variable JOBCODE is 5.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The length of the variable JOSBODE is 12.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which ODS statement option terminates output being written to an HTML rile?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set PETS is sorted by the variables TYPE and BREED.\nThe following SAS program is submitted:\nproc print data = pets;\nvartype breed;\nsum number;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SUM statement produces only a grand total of NUMBER.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The SUM statement produces only subtotals of NUMBER for each value of TYPE.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The SUM statement produces both a grand total of NUMBER and subtotals of NUMBER for\neach value of TYPE.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Nothing is produced by the SUM statement; the program fails to execute.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.passengers;\nif OrigPassengers = then\nOrigPassengers= 100;\nTransPassengers= 100;\nOrigPassengers=\nTotalPassengers= sum (OrigPassengers, TransPassengers) +0;\nrun;\nWhat is the value of the TOTALPASSENGERS variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 100",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nProdid price producttype sales returns\nK125 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY2 1.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\ndata hware inter cheap;\nset prices(keep = productype price);\nif producttype = 'HARDWARE' then output hware; else if producttype = 'NETWORK' then output\ninter; if price le 5.00;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sales;\ndo year = 1 to 5;\ndo month = 1 to 12;\nx+ 1;\nend;\nend;\nrun;\nHow many observations are written to the WORK.SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales (keep = monthsales{12});\nset work.monthlysales (keep = year product sales);\narray monthsales{12);\ndo i = 1 to 12; monthsales{i) = sales;\nend;\nrun;\nThe program fails execution due to syntax errors. What is the cause of the syntax error?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable MONTHSALES does not exist.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. An array cannot be referenced on a KEEP data set option.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The KEEP= data set option should be (KEEP = MONTHSALES).",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The KEEP= data set option should be the statement KEEP MONTHSALES{12}.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set EMPLOYEES:\nEMPLOYEES\nNAME SALARY\n-------- ------------\nInnis 60000\nJolli 50000\nEllis 55000\nLiu 45000\nThe following SAS program is submitted:\nproc print data = employees; where tag like '_i%';\nrun;\nWhat is contained in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Liu only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Innis and Ellis only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Innis, Ellis, and Liu only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Innis, Jolli, Ellis, and Liu",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set ONE:\nONE\nObs Dte\n----- --------\n1 09JAN2005\n2 12JAN2005\nThe following SAS program is submitted:\ndata two;\nset one;\nday = &ltrinsert expression here>;\nformat dte date9.;\nrun;\nThe data set TWO is created:\nTWO\nObs Dte Day\n1 09JAN2005 1\n12 JAN2005 4\nWhich expression successfully completed the program and created the variable DAY?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. day(dte)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. weekday(dte)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. dayofweek(dte)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. datdif(dte,'01jan2005'd,'act/act')",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Read the table:\nGiven the SAS data set SASUSER.HOUSES:\nObs style bedrooms baths price sqteet street\n1 CONDO 2 1.5 80050 1200 MAIN\n2 CONDO 3 2.5 79350 1300 ELM\n3 CONDO 4 2.5 127150 1400 OAK\n4 CONDO 2 2.0 110700 1100 FIFTH\n5 TWOSTORY 4 3.0 107250 2100 SECOND\n6 TWOSTORY 2 1.0 55650 1600 WEST\n7 TWOSTORY 2 1.0 69250 1450 NORTH\n6 TWOSTORY 4 2.5 102950 2000 SOUTH\nThe following SAS program is submitted:\nproc report data = sasuser.houses nowd headline;\ncolumn style price;\nwhere price It 100000;\n&ltrinsert DEFINE statement here>\ndefine price / mean width = 9 format = dollar12.;\ntitle;\nrun;\nThe following output is desired:\nstyle price\n------- ------\nCONDO $79,700\nTWOSTORY $62550\nWhich DEFINE statement completes the program and produces the desired output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / width = 9,",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style /orderwidth = 9;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / group width = 9;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. define style / display width = 9;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORKAWARDS:\nWORK.AWARDS\nFNAME POINTS MONTH\n----------- ------------ -----------\nAmy 2 4\nAmy 1 7\nGerard 3 3\nWang 3 3\nWang 1 12\nWang 1 8\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nHow are the observations sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ENAME POINTS MONTH\nWang 3 3\nWang 1 12\nWang 1 8\nGerard 3 3\nAmy 2 4\nAmy 1 7",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ENAME POINTS MONTH\nAmy 2 4\nAmy 1 7\nGerard 3 3\nWang 3 3\nWang 1 8\nWang 1 12",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ENAME POINTS MONTH Wang 3 3\nWang 1 8\nWang 1 12\nGerard 3 3\nAmy 2 4\nAmy 1 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ENAME POINTS MONTH\nWang 1 12\nWang 1 8\nWang 3 3\nGerard 3 3\nAmy 1 7\nAmy 2 4",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibnametemp 'SAS data library';\ndata work.new;\nset temp.jobs;\nformat newdate mmddw10.;\nmdate= month(newdate);\nddate= weekday(newdate);\nrun;\nproc print data = work.new; run;\nThe variable NEWDATE contains the SAS date value for April 15. 2005. What output is produced\nif April 15, 2005 falls on a Friday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obsnewdate mdate ddate\n104/15/2005 APR 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate mdate ddate\n104/15/2005 4 6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Obs newdate mdate ddate\n104/15/2005 APR 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate mdate ddate\n104/15/2005 4 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file PRODUCT are listed below:\n--------10-------20-------30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile'product';\ninput idnum 5. @10 price;\nrun;\nWhich one of the following is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 25.31",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. $25.31",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No value is stored as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc contents data = sashelp.class varnum; quit;\nWhat does the VARNUM option print?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a list of variable names",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the total number of variables",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a list of the variables in alphabetic order",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. a list of the variables in the order they were created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset chemists;\nitjobcode= 'Chem2'\nthen description = 'Senior Chemist';\nelse description = 'Unknown';\nrun;\nThe value for the variable JOBCODE is:\nJOBCODE\n-------------\nchem2\nWhat is the value of the variable DESCRIPTION?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. chem2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the AIRPLANES data set\nAlRPLANES\nTYPE MPG\n-------- ------\nF-18 105\nC-130 25\nHarrier 75\nA-6 110\nThe following SAS program is submitted:\ndata gt100;\nset airplanes(keep = type mpg load);\nload = mpg * 150;\nrun;\nThe program fails to execute due to syntax errors.\nWhat is the cause of the syntax error?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. MPG is not a numeric variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LOAD is not a variable in the data set GT100.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LOAD is not variable in the data set AIRPLANES.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. LOAD must be defined prior to the SET statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file EMPLOYEE:\n----I----1 0---I----20---I----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile'employee';\ninput employee_name $ 1-4;\nif employee_name = 'Ruth' then input idnum 10-11;\nelse input age 7-8;\nrun;\nWhat value does the variable IDNUM contain when the tag of the employee is \"Ruth\"?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 22",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 33",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata temp.x;\nset sasuser.y;\nrun;\nWhat must be submitted prior to this SAS program for the program to execute successfully?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A LIBNAME statement for thelibref TEMP only must be submitted.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. A LIBNAME statement for thelibref SASUSER only must be submitted.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LIBNAME statements for thelibrefs TEMP and SASUSER must be submitted.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No LIBNAME statement needs to be submitted.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The data set RALESTATE has the variable LOCALFEE with a format or 9. and a variable\nCOUNTRYFEE with a format or 7.;\nThe following SAS program is submitted:\ndata history;\nformat local fee country fee percent6.;\nset realestate;\nlocal fee = local fee / 100;\ncountry fee = country fee / 100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LOCALFEE has format of 9. and COUNTRYFEE has a format of 7.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LOCALFEE has format of 9. and COUNTRYFEE has a format of percent6.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LOCALFEE has format of percent6. and COUNTRYFEE has a format of percent6.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data step fails execution; there is no format for LOCALFEE",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc freq data = class;\ntables gender * age / &ltrinsert option here>;\nrun;\nThe following report is created:\nThe FREQ Procedure\nTable of gender by age\nRow Column\nGender age Frequency Percent Percent Percent\nF 11 1 10.00 20.00 50.00\n12 2 20.00 40.00 40.00\n13 2 20.00 40.00 66.67\nTotal 5 50.00 100.00\nM 11 1 10.00 20.00 50.00\n12 3 30.00 60.00 60,00\n13 1 10.00 20.00 33.33\nTotal 5 50.00 100.00\nTotal 11 2 20.00 100.00\n12 5 50.00 100.00\n13 3 30.00 100.00\nTotal 10 100.00\nWhich option correctly completes the program and creates the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LIST",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NOCOLS",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CROSSLIST",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. NOCROSSTAB",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The value 110700 is stored in a numeric variable named SALARY.\nWhich FORMAT statement displays the value as $110,700.00 in a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. format salary comma11.2;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. format salary dollar8.2;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. format salary dollar11.2;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. format salary comma8.2 dollar8.2;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file YEARAMT:\n----|---10---|---20---|----30\n1901 2\n1905 1\n1910 6\n1925 .\n1941 1\nThe following SAS program is submitted:\ndata coins;\ninfile 'yearamt';\ninput year quantity;\n&ltrinsert statement(s) here>\nrun;\nWhich statement(s) completed the program and produced a non-missing value for the variable\nTOTQUANTITY in the final observation of the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. totquantity + quantity;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. totquantity = sum(totquantity + quantity);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. retaintotquantity; totquantity = totquantity + quantity;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. retain totquantity0;totquantity = totquantity + quantity;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set EMPLOYEE INFO:\nEMPLOYEE_INFO\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich BY statement completes the program and sorts the data sequentially by ascending\nexpense values within each ascending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by ExpensesIDNumber;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. byIDNumber Expenses;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. by ascending ExpensesIDNumber;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by ascendingIDNumber ascending Expenses;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format\nvalue score 1 - 50 = 'Fail'\n51 - 100 = 'Pass';\nrun;\nproc report data = work.courses nowd;\ncolumn exam;\ndefine exam / display format = score.;\nrun;\nThe variable EXAM has a value of 50.5.\nHow will the EXAM variable value be displayed in the REPORT procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "What is the purpose or the MISSOVER option on the INFILE statement?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It prevents SAS from loading a new record when the end of the current record is reached.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. It enables SAS to scan the input data records until the character string that is specified in the\n@'character-string' expression is round.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It enables SAS to continue to read the next input data record if it does not find values in the\ncurrent input tine for all the variables in the statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It causes the DATA step to stop processing if an INPUT statement reaches the end of the\ncurrent record without finding values for all variables in the statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nset work.staff (keep = jansales febsales marsales);\narray diff_sales{3} difsales1 - difsales3;\narray monthly{3} jansales febsales marsales;\nrun;\nWhat new variables are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. JANSALES, FEBSALES and MARSALES",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. MONTHLY1, MONTHLY2 and MONTHLY3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. DIFSALES1, DIFSALES2 and DIFSALES3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. DIFF_SALES1, DIFF_SALES2 and DIFF_SALES3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "What describes the SAS automatic _ERRDR_ variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable contains the values 'TRUE' or 'FALSE.'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR variable maintains a count of the number of data errors.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable can be used in expressions or calculations in the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. TheERROR_variable contains the number or the observation that caused the error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data record:\n07Jan20 05\nWhich INFOFRMAT reads this raw data and stores it as a SAS date value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. dmy9.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. date9.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ddMMMyy9.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ddmmmyyyy9.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement correctly computes the average of four numerical values?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. average = mean(num1, num4);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. average = mean(num1 - num4);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. average = mean(ofnum1 - num4)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. average = mean(num1 num2 num3 num4);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp 'SAS data library';\ndata temp.sales;\nmerge temp sales\nwork.receipt;\nby names;\nrun;\nThe input data files are sorted by the NAMES variable:\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program executes successfully and a temporary SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program executes successfully and a permanent SAS data set is created.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program fails execution because the same SAS data set is referenced for both read and\nwrite operations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails execution because the SAS data sets on the MERGE statement are in two\ndifferent libraries.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file TYPECOLOR:\n----I----10---I----20---I----30\nDaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile 'typecolor';\ninput type$ 1-5+1 color$;\nrun;\nWhat are the values of the variables TYPE and COLOR?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. type color\ndaisyyellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. type color\ndaisyyellow",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. type color\ndaisyyellow\" \"(missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No values are stored for the TYPE and COLOR variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A user-defined format has been created using the FORMAT procedure. Where is it stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. in a SAS catalog",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. in an external binary file",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. in a SAS dataset in the WORK library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. in a SAS dataset in a permanent SAS data library",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = 'cph';\nselect(destination);\nwhen('LHR') city = 'London';\nwhen('CPH') city = 'Copenhagen';\notherwise city = 'Other';\nend;\nrun;\nWhat is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Other",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ''(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 4;\nit amount = 4 then word = 'FOUR';\nelse if amount = 7\nthen word = 'SEVEN';\nelse word = 'NONE!!!';\namount = 7;\nrun;\nWhat are the values of the AMOUNT and WORD variables in SAS dataset work.new?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n4 FOUR",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. amount word\n4 NONE!!!",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n7 FOUR",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. amount word\n7 SEVEN",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted, creating the SAS data set ONE:\ndata one;\ninfile 'file specification';\ninput num chars$;\nrun;\nONE\nNUM CHAR\n------- ---------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data = one;\nwhere char = 23;\nrun;\nWhat is output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NUM CHAR\n1 77",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NUM CHAR\n1 23\n3 23",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. NUM CHAR\n1 23\n3 23\n1 77",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No output is generated.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.retail;\ncost = '20000';\ntotal= .10* cost\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the variable TOTAL in the output data set is 2000. No messages are written to the\nSAS log.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the variable TOTAL in the output data set is2000. A note that conversion has\ntaken place is written to the SAS log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The value of the variable TOTAL in the output data set is missing. An error message is written\nto the SAS log.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The variable TOTAL in the output data set has no value. The program fails to execute due to a\nsyntax error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nData_null_;\nset old;\nput sales 1 sales2;\nrun;\nWhere is the output written?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. to the SAS log",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. to the SAS data set _NULL_",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. to the SAS output window or to an output file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. to the raw data file that was most recently opened",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\narray items{3} _temporary_;\nrun;\nWhat are the names of the variable(s) in the WORKTEST data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ITEMS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ITEMS1, ITEMS2, ITEMS3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. No variables are created because it is a temporary array.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute because there are no variables listed on the ARRAY statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Read the table\nThe following SAS program is submitted:\nproc freq data = sales;\n&ltrinsert TABLES statement here>\nrun;\nThe following output is created by the FREQUENCY procedure:\nThe FREQ Procedure\nTable of region by product\nregion product\nFrequency\nPercent\nRow Pct\nCol Pct corn cotton oranges Total\nEAST 2 1 1 4\n22.22 11.11 11.11 44.44\n50.00 25.00 25.00\n50.00 33.33 50.00\nSOUTH 2 2 1 5\n22.22 22.22 11.11 55.56\n40.00 40.00 20.00\n50.00 66.67 50.00\nTotal 4 3 2 9\n4444 33.33 22.22 100.00\nWhich TABLES statement(s) completed the program and produced the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region * product;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. tables product * region;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables product; tables region;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata one;\ndate = '04juI2005'd;\nformat date weekdate.; run;\nproc print data = one; run;\nWhat output is generated?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs date\n1 Monday, July 4, 2005",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Obs date\n1 July4, 2005",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs date\n1 04Jul2005",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs date\n1 Monday, 07/04/2005",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset sasuser.employees;\nif 2 le years_service le 10 then\namount = 1000;\nelse amount = 0;\namount_per_year = years_service / amount\nrun;\nWhat is the value of the variable AMOUNT_PER_YEAR if an employee has been with the\ncompany for one year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 0.001",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PERM.STUDENTS:\nPERM.STUDENTS NAME AGE\n--------- ------- Alfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted:\nlibname perm 'SAS data library';\ndata students;\nset perm.students;\nfile 'file specification';\nput tag $ age;\n&ltrinsert statement here>\nrun;\nThe following double-spaced file is desired as output\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nWhich statement completes the program and creates the desired file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. put",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. put/;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. double;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. put _null_;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department\nthen payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set named WORKSALARY contains 10 observations for each department, and is\ncurrently ordered by DEPARTMENT.\nWhich statement is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The BY statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The statement payroll +wagerate; in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable PAYROLL represent the total for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable PAYROLL represent a total for all values of WAGERATE in the\nWORKSALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file EMPLOYEE:\n----|----10----|----20----|----30\nThe following SAS program is submitted:\ndata emps;\ninfile'employee';\ninput@1 tag$\n@15 date &ltrinsert INFORMAT here>\n@25 department$;\nrun;\nWhich INFORMAT correctly completes the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. date9.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ddmmyyyy9.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ddmmyy10.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. ddmmyyyy10.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\ninfile 'file specification';\ninput tag $ amount@@;\nrun;\nWhich of the following is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Two @@ together are the same as one c.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Two @@ hold the data records until the bottom of the DATA step.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Two @@ hold the raw data record across iterations of the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Two @@ are invalid syntax and will cause the program to fail to execute.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set QTR 1_REVENUE:\ndestination revenue\nYYZ 53634\nFRA 62129\nFRA 75962\nRDU 76254\nYYZ 82174\nThe following SAS program is submitted:\nproc sort data = qtr1_revenue;\nby destination descending revenue; run;\nWhat is the first observation in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. destination revenue\nFRA 62129",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. destination revenue\nFRA 75962",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. destination revenue\nYYZ 53634",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. destination revenue\nYYZ 82174",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata numrecords;\ninfile 'file specification';\ninput@1 patient $15.\nrelative$ 16-26@;\nif relative = 'children' then\ninput @54 diagnosis $15. @;\nelse if relative = 'parents' then\ninput @28 doctor $15.\nclinic $ 44-53\n@54 diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set ONE:\nONE\nThe following SAS program is submitted:\ndata two;\nset one;\nby x y;\nif first.y;\nrun;\nproc print data = two noobs;\nrun;\nWhich report is produced?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X Y Z\n1 A 27\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X Y Z\n1 A 33\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X Y Z\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The PRINT procedure tails because the data set TWO is not created in the DATA step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data january;\n106 set allmonths(keep = product month num_sold cost);\n107 if month = 'Jan' then output january;\n108 sales = cost * num_sold;\n109 keep = product sales;\n------\nERROR 22-322: Syntax error, expecting one of the following:!,\n!!, &, *,**, +, -,/, <,< =, <>, =, >, ><, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR,^=,|,II,\n110 run;\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. keep product sales;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. keep product, sales;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. keep = product, sales;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. keep = (product sales);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata combine;\nprefix='505';\nmiddle='6465 ';\nend='09090';\n&ltrinsert statement here>;\nrun;\nWhich statement successfully completes the program so that TOTAL has a value of 505-6465-\n09090?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. total = cat('-', prefix, middle, end);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. total =catx('-', prefix, middle, end);",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. total = prefix !!'-'!! middle ''!!'-'!! end;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. total = prefix!!'-'!! left(middle)!!'-'!! end;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\n&ltrinsert ODS statement here>\nWhich ODS statements complete the program and send the report to an HTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html = 'sales.html'; ods html close;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file = 'sales.html'; ods file close;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file html = 'sales.html'; ods file close;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ods html file = 'sales.html'; ods html close;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file AMOUNT:\n----I---- 10---I----20---I----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile'amount';\ninput@1 salary 6.;\nif_error_thendescription = 'Problems';\nelse description = 'No Problems';\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the DESCRIPTION variable is NoProbl.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the DESCRIPTION variable is Problems.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The value of the DESCRIPTION variable is No Problems.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value of the DESCRIPTION variable can not be determined.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PEPM.STUDENTS:\nPERM.STUDENTS NAME AGE\n--------- ------ Alfred 14\nAlice 13\nBarbara13\nCarol 14\nThe following SAS program is submitted:\nlibname perm 'SAS data library';\ndata students;\nset perm.students;\nfile 'file specification';\nput tag $15. @5 age 2.;\nrun;\nWhat is written to the output raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ----I----10---I----20---I----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ----I----10---I----20---I----30\nAlfr14\nAlic13\nBarb13a\nCarol 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ----I----10---I----20---I----30\nAlfr14ed\nAlic130\nBarb13ara\nCaro141",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ----I----10---I----20---I----30\nAlfred14\nAlice13\nBarbara13\nCarol14",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department\nthen payroll = 0;\npayroll + wagerate;\nif last.department\nrun;\nThe SAS data set WORK.SALARY, currently ordered by DEPARTMENT, contains 100\nobservations for each of 5 departments.\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The WORK.TOTAL data set contains 5 observations.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The WORKTDTAL data set contains 100 observations.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The WORKTOTAL data set contains 500 observations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted;\ndata combine;\ncountry = 'Italy, Russia, ireland';\nfound = find(country, 'i');\nrun;\nWhat is the value of the variable FOUND in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 12",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Italy",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Russia",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following code:\nproc print data=SASHELP.CLASS(firstobs=5 obs=15);\nwhere Sex='M';\nrun;\nHow many observations will be displayed?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 10 or fewer",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 11 or fewer",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.SALARY contains 10 observations for each department, and is\ncurrently ordered by Department. The following SAS program is submitted:\ndata WORK.TOTAL;\nset WORK.SALARY(keep=Department MonthlyWageRate);\nby Department;\nif First.Department=1 then Payroll=0;\nPayroll+(MonthlyWageRate*12);\nif Last.Department=1;\nrun;\nWhich statement is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The by statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The statement Payroll+(MonthlyWageRate*12); in the data step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable Payroll represent the monthly total for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable Payroll represent a monthly total for all values of WAGERATE in the\nWORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file TYPECOLOR.DAT:\n----+----10---+----20---+----30 daisyyellow The following SAS program is submitted:\ndata FLOWERS;\ninfile'TYPECOLOR.DAT' truncover;\nlength\nType $ 5\nColor $ 11;\ninput\nType $\nColor $;\nrun;\nWhat are the values of the variables Type and Color?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Type=daisy, Color=yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Type=daisy, Color=w",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Type=daisy, Color=daisyyellow",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Type=daisy, Color=",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TEST;\nset WORK.MEASLES(keep=Janpt Febpt Marpt);\narray Diff{3} Difcount1-Difcount3;\narray Patients{3} Janpt Febpt Marpt;\nrun;\nWhat new variables are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Difcount1, Difcount2 and Difcount3",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Diff1, Diff2 and Diff3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Janpt, Febpt, and Marpt",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Patients1, Patients2 and Patients3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record in the file phone.txt:\n----|----10---|----20---|----30---|\nStevens James SALES 304-923-3721 14\nThe following SAS program is submitted:\ndata WORK.PHONES;\ninfilephone.txt;\ninput EmpLName $ EmpFName $ Dept $ Phone $ Extension;\n<_insert_code_>\nrun;\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the\nvariableFullName?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FullName=CATX(' ',EmpFName,EmpLName);",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FullName=CAT(' ',EmpFName,EmpLName);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FullName=EmpFName!!EmpLName;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. FullName=EmpFName + EmpLName;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement specifies that records 1 through 10 are to be read from the raw data file\ncustomer.txt?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. infile 'customer.txt' 1-10;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. input 'customer.txt' stop@10;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. infile 'customer.txt' obs=10;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. input 'customer.txt' stop=10;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ONE;\nText='Australia, US, Denmark';\nPos=find(Text,'US','i',5);\nrun;\nWhat value will SAS assign to Pos?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in DATAFILE.TXT:\n----|----10---|----20---|----30\nKim,Basketball,Golf,Tennis\nBill,Football\nTracy,Soccer,Track\nThe following program is submitted:\ndata WORK.SPORTS_INFO;\nlength Fname Sport1-Sport3 $ 10;\ninfile'DATAFILE.TXT' dlm=',';\ninput Fname $ Sport1 $ Sport2 $ Sport3 $;\nrun;\nproc print data=WORK.SPORTS_INFO;\nrun;\nWhich output is correct based on the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football\n3 Tracy Soccer Track",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football Football Football\n3 Tracy Soccer Track Track",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football Tracy Soccer",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.ONE contains a numeric variable named Num ana character variable\nnamed Char:\nWORK.ONE\nNum Char\n------ ------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data=WORK.ONE;\nwhere Num='1';\nrun;\nWhat is output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Num Char\n--- ----\n1 23",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Num Char\n--- ----\n1 23\n1 77",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Num Char\n--- ----\n1 23\n3 23\n1 77",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No output is generated.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES statement was used to completed the following program that produced the\noutput?\nproc freq data=sales;\n<_insert_code_>\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tablesregion,product",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. tables region/product;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables region*product;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n<_insert_ods_code_>\nproc means data=SASUSER.SHOES;\nwhere Product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\n<_insert_ods_code_>\nWhich ODS statements inserted, respectively, in the two location above creates a report stored in\nan html file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html open='sales.html';\nods html close;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file='sales.html' / html;\nods file close;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods html file='sales.html';\nods html close;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. ods file html='sales.html';\nods file close;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following data step:\ndata WORK.GEO;\ninfile datalines;\ninput City $20.;\nif City='Tulsa' then\nState='OK';\nRegion='Central';\nif City='Los Angeles' then\nState='CA'\nRegion='Western';\ndatalines;\nTulsa\nLos Angeles\nBangor\n;\nrun;\nAfter data step execution, what will data set WORK.GEO contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. City State Region\n----------- ----- -------\nTulsa OK Western\nLos Angeles CA Western\nBangor Western",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. City State Region\n----------- ----- -------\nTulsa OK Western\nLos Angeles CA Western\nBangor",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. City State Region\n----------- ----- -------\nTulsa OK Central\nLos Angeles CA Western\nBangor Western",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. City State Region\n----------- ----- -------\nTulsa OK Central\nLos CA Western\nBangor",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following choices is an unacceptable ODS destination for producing output that can\nbe viewed in Microsoft Excel?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. MSOFFICE2K",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. EXCELXP",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CSVALL",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. WINXP",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement describes a characteristic of the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable maintains a count of the number of data errors in a DATA step.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR_ variable is added to the program data vector and becomes part of the data set\nbeing created.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable can be used in expressions in the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The _ERROR_ variable contains the number of the observation that caused the data error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook REGIONS.XLS contains the following four worksheets:\nEAST\nWEST\nNORTH\nSOUTH\nThe following program is submitted:\nlibname MYXLS 'regions.xls';\nWhich PROC PRINT step correctly displays the NORTH worksheet?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=MYXLS.NORTH;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=MYXLS.NORTH$;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data=MYXLS.'NORTH'e;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data=MYXLS.'NORTH$'n;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the data set WORK.EMPDATA:\nEmployee_ Manager_\nID Job_Title Department ID\n------- ---------------------- --------------------- ----------------\n120101 Director Sales Management 120261\n120102 Sales Manager Sales Management 120101\n120103 Sales Manager II Sales Management 120101\n120104 Administration Manager Administration 120101\n120105 Secretary I Administration 120101\nWhich one of the following where statements would display observations with job titles containing\nthe word 'Manager'?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. wheresubstr(Job_Title,(length(Job_Title)-6))='Manager';",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. whereupcase(scan(Job_Title,-1,' '))='MANAGER';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. whereJob_Title='% Manager ';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. whereJob_Title like '%Manager%';",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nX=\"01Jan1960\" D ;\nrun;\nWhat variable X contains what value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the character value \"01Jan1960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the date value 01011960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the code contains a syntax error and does not execute.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.EMP_NAME:\nName EmpID\n------- --------\nJill 1864\nJack 2121\nJoan 4698\nJohn 5463\nGiven the SAS data set WORK.EMP_DEPT:\nEmpIDDepartment\n-------- --------------\n2121 Accounting\n3567 Finance\n4698 Marketing\n5463 Accounting\nThe following program is submitted:\ndata WORK.ALL;\nmerge WORK.EMP_NAME(in=Emp_N)\nWORK.EMP_DEPT(in=Emp_D);\nby Empid;\nif (Emp_N and not Emp_D) or (Emp_D and not Emp_N);\nrun;\nHow many observations are in data set WORK.ALL after submitting the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 5",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc contents data=_all_;\nrun;\nWhich statement best describes the output from the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The output contains only a list of the SAS data sets that are contained in the WORK library.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The output displays only the contents of the SAS data sets that are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The output displays only the variables in the SAS data sets that are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The output contains a list of the SAS data sets that are contained in the WORK library and\ndisplays the contents of those data sets.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format;\nvalue score\n1 - 50 = 'Fail'\n51 - 100 = 'Pass';\nrun;\nproc freq data=WORK.COURSES ;\ntable Exam;\nformat Exam score.;\nrun;\nThe variable Exam has a value of 50.5.\nHow will the Exam variable value be displayed in the FREQ procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc sort data=SASUSER.PROJECTS out=PSORT;\nby Code descending Date Cost;\nrun;\nWhich of the following is true concerning the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The descending option applies to the variable Code.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable Code is sorted by ascending order.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The PSORT data set is stored in the SASUSER library.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The descending option applies to the Date and Cost variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following code was modified to generate the results further below:\nproc format;\nvalue agegrp\nlow-12 ='Pre-Teen'\n13-high = 'Teen';\nrun;\nproc means data=SASHELP.CLASS;\nvar Height;\nclass Sex Age;\nformat Age agegrp.;\nrun;\nThe following results were generated to display only specific statistics and limit the decimals with\nthe modification: Which statement below was modified or added to generate the results above:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. var Height / nobs min max mean maxdec=1;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc means data=SASHELP.CLASSmaxdec=1 ;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc means data=SASHELP.CLASS min max meanmaxdec=1;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. outputnobs min max mean maxdec=1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nX='04jul2005'd;\nDayOfMonth=day(x);\nMonthOfYear=month(x);\nYear=year(x);\nrun;\nWhat types of variables are DayOfMonth, MonthOfYear, and Year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. DayOfMonth, Year, and MonthOfYear are character.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DayOfMonth, Year, and MonthOfYear are numeric.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. DayOfMonth and Year are numeric. MonthOfYear is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DayOfMonth, Year, and MonthOfYear are date values.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata ONE TWO SASUSER.TWO\nset SASUSER.ONE;\nrun;\nAssuming that SASUSER.ONE exists, how many temporary and permanent SAS data sets are\ncreated?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2 temporary and 1 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. there is an error and no new data sets are created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement is true concerning the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It cannot be used in an if/then condition.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It cannot be used in an assignment statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It can be put into a keep statement or keep= option.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It is automatically dropped.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.TEMPS:\nDay Month Temp\n--- --------- -------\n1 May 75\n15 May 70\n15 June 80\n3 June 76\n2 July 85\n14 July 89\nThe following program is submitted:\nproc sort data=WORK.TEMPS;\nby descending Month Day;\nrun;\nproc print data=WORK.TEMPS;\nrun;\nWhich output is correct?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs Day Month Temp\n--- --- ----- ----\n1 2 July 85\n2 14 July 89\n3 3 June 76\n4 15 June 80\n5 1 May 75\n6 15 May 7",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs Day Month Temp\n--- --- ----- ----\n1 1 May 75\n2 2 July 85\n3 3 June 76\n4 14 July 89\n5 15 May 70\n6 15 June 80",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs Day Month Temp\n--- --- ----- ----\n1 1 May 75\n2 15 May 70\n3 3 June 76\n4 15 June 80\n5 2 July 85\n6 14 July 89",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Obs Day Month Temp\n--- --- ----- ----\n1 15 May 70\n2 1 May 75\n3 15 June 80\n4 3 June 76\n5 14 July 89\n6 2 July 85",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlabel Jobcode='Job Description';\nrun;\nWhich statement is true about the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The label of the variableJobcode is Job (only the first word).",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The label of the variableJobcode is Job Desc (only the first 8 characters).",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The label of the variableJobcode is Job Description.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors. Labels must be defined in a PROC step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which is a valid LIBNAME statement?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. sasdata libname \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata \"_SAS_data_library_location_\";",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. libname sasdata sas \"_SAS_data_library_location_\";",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES option(s) would be used to eliminate the row and column counts and just see the\nfrequencies and percents?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. norowcount nocolcount",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. freq percent",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. norow nocol",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. nocounts",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook QTR1.XLS contains the following three worksheets:\nJAN\nFEB\nMAR\nWhich statement correctly assigns a library reference to the Excel workbook?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname qtrdata 'qtr1.xls';",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. libname 'qtr1.xls' sheets=3;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname jan feb mar 'qtr1.xls';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname mydata 'qtr1.xls' WORK.heets=(jan,feb,mar);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nods csvall file='c:\\test.cvs';\nproc print data=WORK.ONE;\nvar Name Score Grade;\nby IdNumber;\nrun;\nods csvall close;\nWhat is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A file named test.cvs that can only be opened in Excel.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A text file named test.cvs that can be opened in Excel or in any text editor.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A text file named test.cvs that can only be opened in a text editor.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A file named test.cvs that can only be opened by SAS.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "You're attempting to read a raw data file and you see the following messages\ndisplayed in the SAS Log:\nNOTE: Invalid data for Salary in line 4 15-23.\nRULE: ----+----1----+----2----+----3----+----4----+----5--\n4 120104 F 46#30 11MAY1954 33\nEmployee_Id=120104 employee_gender=F Salary=. birth_date=-2061 _ERROR_=1 _N_=4\nNOTE: 20 records were read from the infile 'c:\\employees.dat'.\nThe minimum record length was 33.\nThe maximum record length was 33.\nNOTE: The data set WORK.EMPLOYEES has 20 observations and 4 variables.\nWhat does it mean?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A compiler error, triggered by an invalid character for the variable Salary.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. An execution error, triggered by an invalid character for the variable Salary.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The 1st of potentially many errors, this one occurring on the 4th observation.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An error on the INPUT statement specification for reading the variable Salary.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TEST;\ndrop City;\ninfile datalines;\ninput\nName $ 1-14 /\nAddress $ 1-14 /\nCity $ 1-12 ;\nif City='New York ' then input @1 State $2.;\nelse input;\ndatalines;\nJoe Conley\n123 Main St.\nJanesville\nWI\nJane Ngyuen\n555 Alpha Ave.\nNew York\nNY Jennifer Jason\n666 Mt. Diablo\nEureka\nCA ;\nWhat will the data set WORK.TEST contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Name Address State\n-------------- ---------------- ------\nJoe Conley 123 Main St.\nJane Ngyuen 555 Alpha Ave. NY\nJennifer Jason 666 Mt. Diablo",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Name Address City State\n-------------- ---------------- ----------- ------\nJoe Conley 123 Main St. Janesville\nJane Ngyuen 555 Alpha Ave. New York NY\nJennifer Jason 666 Mt. Diablo Eureka",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Name Address State\n-------------- ---------------- ------\nJane Ngyuen 555 Alpha Ave. NY",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. O observations,\nthere is a syntax error in the data step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nId Char1\n--- -----\n111 A\n158 B\n329 C\n644 D\nand the SAS data set WORK.TWO:\nId Char2\n--- -----\n111 E\n538 F\n644 G\nThe following program is submitted:\ndata WORK.BOTH;\nset WORK.ONE WORK.TWO;\nby Id;\nrun;\nWhat is the first observation in SAS data set WORK.BOTH?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Id Char1 Char2\n--- ----- -----\n111 A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Id Char1 Char2\n--- ----- -----\n111 E",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Id Char1 Char2\n--- ----- -----\n111 A E",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Id Char1 Char2\n--- ----- -----\n644 D G",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nDay=\"01\" ;\nYr=1960 ;\nX=mdy(Day,01,Yr) ;\nrun;\nWhat is the value of the variable X?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the character value \"01011960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a missing value due to syntax errors",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the step will not compile because of the character argument in themdy function.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.AUTHORS;\narray Favorites{3} $ 8 ('Shakespeare','Hemingway','McCaffrey');\nrun;\nWhat is the value of the second variable in the dataset WORK.AUTHORS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Hemingway",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Hemingwa",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. '' (a missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program contains errors. No variables are created.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set Fed.Banks contains a variable Open_Date which has been assigned a\npermanent label of \"Open Date\". Which SAS program temporarily replaces the label \"Open Date\"\nwith the label \"Starting Date\" in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=SASUSER.HOUSES label;\nlabel Open_Date \"Starting Date\";\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=SASUSER.HOUSES label;\nlabel Open_Date=\"Starting Date\";\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc print data=SASUSER.HOUSES;\nlabel Open_Date=\"Starting Date\";\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data=SASUSER.HOUSES;\nOpen_Date=\"Starting Date\";\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.NEW;\nset WORK.OLD(keep=X);\nif X < 10 then X=1;\nelse if X >= 10 AND X LT 20 then X=2;\nelse X=3;\nrun;\nIn filtering the values of the varibale X in data set WORK.OLD, what value new value would be\nassigned to X if its original value was a missing value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X would get a value of 1.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X would get a value of 3.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X would retain its original value of missing.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. This step does not run because of syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc format;\nvalue salfmt.\n0 -< 50000 = 'Less than 50K'\n50000 - high = '50K or Greater';\noptions fmterr nodate pageno=1;\ntitle 'Employee Report';\nproc print data=work.employees noobs;\nvar fullname salary hiredate;\nformat\nsalary salfmt.\nhiredate date9.;\nlabel\nfullname='Name of Employee'\nsalary='Annual Salary'\nhiredate='Date of Hire';\nrun;\nWhy does the program fail?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PAGENO option is invalid in the OPTIONS statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The RUN statement is missing after the FORMAT procedure.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The format tag contains a period in the VALUE statement.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The LABEL option is missing from the PROC PRINT statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nProdId Price ProductType Sales Returns\n--------- ------- ------ -------- ----- ----------\nK12S 95.50 OUTDOOR 15 2\nB132S 2.99 CLOTHING 300 10\nR18KY2 51.99 EQUIPMENT 25 5\n3KL8BY 6.39 OUTDOOR 125 15\nDY65DW 5.60 OUTDOOR 45 5\nDGTY23 34.55 EQUIPMENT 67 2\nThe following SAS program is submitted:\ndata WORK.OUTDOOR WORK.CLOTH WORK.EQUIP;\nset WORK.PRODUCTS;\nif Sales GT 30;\nif ProductType EQ 'OUTDOOR' then output WORK.OUTDOOR;\nelse if ProductType EQ 'CLOTHING' then output WORK.CLOTH;\nelse if ProductType EQ 'EQUIPMENT' then output WORK.EQUIP;\nrun;\nHow many observations does the WORK.OUTDOOR data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in TEXTFILE.TXT:\n----|----10---|----20---|----30\nJohn,FEB,13,25,14,27,Final\nJohn,MAR,26,17,29,11,23,Current\nTina,FEB,15,18,12,13,Final\nTina,MAR,29,14,19,27,20,Current\nThe following output is desired:\nObs Name Month Status Week1 Week2 Week3 Week4 Week5\n1 John FEB Final $13 $25 $14 $27 .\n2 John MAR Current $26 $17 $29 $11 $23\n3 Tina FEB Final $15 $18 $12 $13 .\n4 Tina MAR Current $29 $14 $19 $27 $20\nWhich SAS program correctly produces the desired output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile'TEXTFILE.TXT' dsd;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile'TEXTFILE.TXT' dlm=',' missover;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile'TEXTFILE.TXT' dlm=',';\ninput Name $ Month $ @;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile'TEXTFILE.TXT' dsd @;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nProdId Price ProductType Sales Returns\n------ ---------- --------------- ------- ----------\nK12S 95.50 OUTDOOR 15 2\nB132S 2.99 CLOTHING 300 10\nR18KY2 51.99 EQUIPMENT 25 5\n3KL8BY 6.39 OUTDOOR 125 15\nDY65DW 5.60 OUTDOOR 45 5\nDGTY23 34.55 EQUIPMENT 67 2\nThe following SAS program is submitted:\ndata WORK.REVENUE(drop=Sales Returns Price);\nset WORK.PRODUCTS(keep=ProdId Price Sales Returns);\nRevenue=Price*(Sales-Returns);\nrun;\nHow many variables does the WORK.REVENUE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TOTAL_SALARY;\nretain Total;\nset WORK.SALARY;\nby Department;\nif First.Department\nthen Total=0;\nTotal=sum(Total, Wagerate);\nif Last.Total;\nrun;\nWhat is the initial value of the variable Total in the following program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Missing",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The value of the first observationsWagerate",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Cannot be determined from the information given",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.NEW;\nset WORK.OLD;\nCount+1;\nrun;\nThe varaible Count is created using a sum statement. Which statement regarding this variable is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is assigned a value 0 when the data step begins execution.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is assigned a value of missing when the data step begins execution.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It is assigned a value 0 at compile time.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It is assigned a value of missing at compile time.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The data set WORK.REALESTATE has the variable LocalFee with a format of 9. and a variable\nCountryFee with a format of 7.;\nThe following SAS program is submitted:\ndata WORK.FEE_STRUCTURE;\nformat LocalFee CountryFee percent7.2;\nset WORK.REALESTAT;\nLocalFee=LocalFee/100;\nCountryFee=CountryFee/100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LocalFee has format of 9. and CountryFee has a format of 7.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LocalFee has format of 9. and CountryFee has a format of percent7.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. BothLocalFee and CountryFee have a format of percent7.2",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data step fails execution; there is no format forLocalFee.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records:\n----|----10---|----20---|----30\nSusan*12/29/1970*10\nMichael**6\nThe following output is desired:\nObs employee bdate years\n1 Susan 4015 10\n2 Michael . 6\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data employees;\ninfile 'file specification' dlm='*';\ninput employee $ bdate : mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data employees;\ninfile 'file specification' dsd='*';\ninput employee $ bdate mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data employees;\ninfile 'file specification' dlm dsd;\ninput employee $ bdate mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data employees;\ninfile 'file specification' dlm='*' dsd;\ninput employee $ bdate : mmddyy10. years;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following programs correctly invokes the DATA Step Debugger:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data WORK.TEST debug;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data WORK.TEST debugger;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data WORK.TEST / debug;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data WORK.TEST / debugger;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step sorts the observations of a permanent SAS data set by two variables and stores the\nsorted observations in a temporary SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc sort out=EMPLOYEES data=EMPSORT;\nby Lname and Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc sort data=SASUSER.EMPLOYEES out=EMPSORT;\nby Lname Fname;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc sort out=SASUSER.EMPLOYEES data=WORK.EMPSORT;\nby Lname Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc sort data=SASUSER.EMPLOYEES out=SASUSER.EMPSORT;\nby Lname and Fname;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the data step:\ndata WORK.TEST;\ninfile'c:\\class1.csv' dsd;\ninput Name $ Sex $ Age Height Weight;\nif Age NE 16 and Age NE 15 then Group=1;\nelse Group=2;\nWhich of the following assignment statements for variable group are functionally equivalent to the\noriginal statement used in the above data step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if Age not in(15,16) then Group=1; else Group=2;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. if (Age NE 16) or (Age NE 15) then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where Age not between 15 and 16 then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. both A or C will work.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlength EmpId $6;\nCharEmpid=EmpId;\nrun;\nIf data set WORK.DEPARTMENT has a numeric variable EmpId. Which statement is true about\nthe output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The type of the variableCharEmpid is numeric.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The type of the variableCharEmpid is unknown.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The type of the variableCharEmpid is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.OUTDS;\ndo until(Prod GT 6);\nProd + 1;\nend;\nrun;\nWhat is the value of the variable Prod in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. . (missing)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Undetermined, infinite loop.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TOTAL;\nset WORK.SALARY;\nby Department Gender;\nif First.<_insert_code_> then Payroll=0;\nPayroll+Wagerate;\nif Last.<_insert_code_>;\nrun;\nThe SAS data set WORK.SALARY is currently ordered by Gender within Department. Which\ninserted code will accumulate subtotals for each Gender within Department?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Gender",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Department",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Gender Department",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Department Gender",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step displays a listing of all the data sets in the WORK library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib=WORK\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents lib=WORK.all;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents data=WORK._all_;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc contents data=WORK _ALL_;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ORDERS:\nWORK.ORDERS\norder_id customer shipped\n---------- ------------ -----------\n9341 Josh Martin 02FEB2009\n9874 Rachel Lords 14MAR2009\n10233 Takashi Sato 07JUL2009\nThe variable order_id is numeric; customer is character; and shipped is numeric, contains a SAS\ndate value, and is shown with the DATE9. format. A programmer would like to create a new\nvariable, ship_note, that shows a character value with the order_id, shipped date, and customer\ntag. For example, given the first observation ship_note would have the value \"Order 9341\nshipped on 02FEB2009 to Josh Martin\".\nWhich of the following statement will correctly create the value and assign it to ship_note?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ship_note=catx(' ','Order',order_id,'shipped on',input(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ship_note=catx(' ','Order',order_id,'shipped on',char(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ship_note=catx(' ','Order',order_id,'shipped on',transwrd(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ship_note=catx(' ','Order',order_id,'shipped on',put(shipped,date9.),'to',customer);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data WORK.JANUARY;\n106 set WORK.ALLYEAR(keep=Product Month Quantity Cost);\n107 if Month='JAN' then output WORK.JANUARY;\n108 Sales=Cost * Quantity;\n109 drop=Month Quantity Cost;\n-----\nERROR 22-322: Syntax error, expecting one of the following: !,\n!!, , *, **, +, -,\n, <=, <>, =, >, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR, ^=, |, ||, ~=.\n110 run;\nWhat data set option could be attached to WORK.JANUARY to replace the DROP statement that\ngenerated the error in the log?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. (drop Month Quantity Cost)",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. (drop Month, Quantity, Cost)",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (drop=Month, Quantity, Cost)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (drop=Month Quantity Cost)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.TEST;\nset SASHELP.CLASS(obs=5);\nretain City 'Beverly Hills';\nState='California';\nrun;\nThe computed variables City and State have their values assigned using two different methods, a\nRETAIN statement and an Assignment statement. Which statement regarding this program is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The RETAIN statement is fine, but the value of City will be truncated to 8 bytes as the\nLENGTH statement has been omitted.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Both the RETAIN and assignment statement are being used to initialize new variables and are\nequally efficient. Method used is a matter of programmer preference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The assignment statement is fine, but the value of City will be truncated to 8 bytes as the\nLENGTH statement has been omitted.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. City's value will be assigned one time, State's value 5 times.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nObsRevenue2008 Revenue2009 Revenue2010\n--- ---------------- ---------------- ----------------\n1 1.2 1.6 2.0\nThe following SAS program is submitted:\ndata WORK.TWO;\nset WORK.ONE;\nTotal=mean(of Rev:);\nrun;\nWhat value will SAS assign to Total?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1.6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4.8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS program is submitted and the following SAS log is produced:\n2 data gt100;\n3 set ia.airplanes\n4 if mpg gt 100 then output;\n22 202\nERROR: File WORK.IF.DATA does not exist.\nERROR: File WORK.MPG.DATA does not exist.\nERROR: File WORK.GT.DATA does not exist.\nERROR: File WORK.THEN.DATA does not exist.\nERROR: File WORK.OUTPUT.DATA does not exist.\nERROR 22-322: Syntax error, expecting one of the following: a tag,\na quoted string, (, ;, END, KEY, KEYS, NOBS, OPEN, POINT, _DATA_, _LAST_, _NULL_.\nERROR 202-322: The option or parameter is not recognized and will be ignored.\n5 run;\nThe IA libref was previously assigned in this SAS session.\nWhich one of the following corrects the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Delete the word THEN on the IF statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Add a semicolon at the end of the SET statement.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Place quotes around the value on the IF statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add an END statement to conclude the IF statement",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file SIZE are listed below:\n--------10-------20-------30\n72 95\nThe following SAS program is submitted:\ndata test;\ninfile 'size';\ninput @1 height 2. @4 weight 2;\nrun;\nWhich one of the following is the value of the variable WEIGHT in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 72",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 95",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS PRINT procedure output of the WORK.LEVELS data set is listed below:\nObs tag level\n1 Frank 1\n2 Joan 2\n3 Sui 2\n4 Jose 3\n5 Burt 4\n6 Kelly .\n7 Juan 1\nThe following SAS program is submitted:\ndata work.expertise;\nset work.levels;\nif level = . then\nexpertise = 'Unknown';\nelse if level = 1 then\nexpertise = 'Low';\nelse if level = 2 or 3 then\nexpertise = 'Medium';\nelse\nexpertise = 'High';\nrun;\nWhich of the following values does the variable EXPERTISE contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Low, Medium, and High only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Low, Medium, and Unknown only",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Low, Medium, High, and Unknown only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Low, Medium, High, Unknown, and '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file EMPLOYEE are listed below:\n--------10-------20-------30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile 'employee';\ninput employee_name $ 1-4;\nif employee_name = 'Sue' then input age 7-8;\nelse input idnum 10-11;\nrun;\nWhich one of the following values does the variable AGE contain when the tag of the employee\nis \"Sue\"?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 30",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 33",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 40",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists;\nif jobcode = 'chem3'\nthen description = 'Senior Chemist';\nelse description = 'Unknown';\nrun;\nA value for the variable JOBCODE is listed below:\nJOBCODE\nCHEM3\nWhich one of the following values does the variable DESCRIPTION contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. chem3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\noptions pageno = 1;\nproc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nThe report created by the PRINT procedure step generates 5 pages of output.\nWhat is the page number on the first page of the report generated by the MEANS procedure step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS system options displays the time on a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. TIME",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DATE",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. TODAY",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATETIME",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS system options prevents the page number from appearing on a\nreport?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NONUM",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NOPAGE",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. NONUMBER",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. NOPAGENUM",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 7;\nif amount = 5 then word = 'CAT';\nelse if amount = 7 then word = 'DOG';\nelse word = 'NONE!!!';\namount = 5;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n5 DOG",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. amount word\n5 CAT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n7 DOG",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. amount word\n7 ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc means data = sasuser.houses std mean max;\nvar sqfeet;\nrun;\nWhich one of the following is needed to display the standard deviation with only two decimal\nplaces?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Add the option MAXDEC = 2 to the MEANS procedure statement.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Add the statement MAXDEC = 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Add the statement FORMAT STD 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add the option FORMAT = 7.2 option to the MEANS procedure statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Unless specified, which variables and data values are used to calculate statistics in the MEANS\nprocedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. non-missing numeric variable values only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. missing numeric variable values and non-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. non-missing character variables and non-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. missing character variables, non-missing character variables, missing numeric variable values,\nand non-missing numeric variable values",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = sasuser.houses out = houses;\nby style;\nrun;\nproc print data = houses;\nrun;\nClick on the Exhibit button to view the report produced.\nstyle bedrooms baths price\nCONDO 2 1.5 80050\n3 2.5 79350\n4 2.5 127150\n2 2.0 110700\nRANCH 2 1.0 64000\n3 3.0 86650\n3 1.0 89100\n1 1.0 34550\nSPLIT 1 1.0 65850\n4 3.0 94450\n3 1.5 73650\nTWOSTORY 4 3.0 107250\n2 1.0 55850\n2 1.0 69250\n4 2.5 102950\nWhich of the following SAS statement(s) create(s) the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. id style;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. id style;\nvar style bedrooms baths price;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. id style;\nby style;\nvar bedrooms baths price;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. id style;\nby style;\nvar style bedrooms baths price;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A realtor has two customers. One customer wants to view a list of homes selling for less than\n$60,000. The other customer wants to view a list of homes selling for greater than $100,000.\nAssuming the PRICE variable is numeric, which one of the following PRINT procedure steps will\nselect all desired observations?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data =sasuser.houses;\nwhere price lt 60000;\nwhere price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data =sasuser.houses;\nwhere price lt 60000 or price gt 100000;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc print data =sasuser.houses;\nwhere price lt 60000 and price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data =sasuser.houses;\nwhere price lt 60000 or where price gt 100000;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set BANKS is listed below:\nBANKS\ntag rate\nFirstCapital 0.0718\nDirectBank 0.0721\nVirtualDirect 0.0728\nThe following SAS program is submitted:\ndata newbank;\ndo year = 1 to 3;\nset banks;\ncapital + 5000;\nend;\nrun;\nWhich one of the following represents how many observations and variables will exist in the SAS\ndata set NEWBANK?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0 observations and 0 variables",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1 observations and 4 variables",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3 observations and 3 variables",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 9 observations and 2 variables",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.clients;\ncalls = 6;\ndo while (calls le 6);\ncalls + 1;\nend;\nrun;\nWhich one of the following is the value of the variable CALLS in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.pieces;\ndo while (n lt 6);\nn + 1;\nend;\nrun;\nWhich one of the following is the value of the variable N in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n--------10-------20-------30\n1999/10/25\nThe following SAS program is submitted:\ndata projectduration;\ninfile 'file-specification';\ninput date $ 1 - 10;\nrun;\nWhich one of the following statements completes the program above and computes the duration of\nthe project in days as of today's date?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. duration = today( ) - put(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. duration = today( ) - put(date,yymmdd10.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. duration = today( ) - input(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. duration = today( ) - input(date,yymmdd10.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.month;\ndate = put('13mar2000'd,ddmmyy10.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. numeric, 10 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 10 bytes",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.month;\ndate = input('13mar2000',date9.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. numeric, 9 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 9 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.products;\nProduct_Number = 5461;\nItem = '1001';\nItem_Reference = Item'/'Product_Number;\nrun;\nWhich one of the following is the value of the variable ITEM_REFERENCE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1001/5461",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1001/ 5461",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.retail;\ncost = '20000';\ntotal = .10 * cost;\nrun;\nWhich one of the following is the value of the variable TOTAL in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2000",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. '2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = 'Agatha Christie';\nFirst = substr(scan(author,1,' ,'),1,1);\nrun;\nWhich one of the following is the length of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 15",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 200",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = 'Christie, Agatha';\nFirst = substr(scan(author,2,' ,'),1,1);\nrun;\nWhich one of the following is the value of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. C",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Agatha",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nTitle = 'A Tale of Two Cities, Charles J. Dickens';\nWord = scan(title,3,' ,');\nrun;\nWhich one of the following is the value of the variable WORD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. T",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. of",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Dickens",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nFirst = 'Ipswich, England';\nCity_Country = substr(First,1,7)!!', '!!'England';\nrun;\nWhich one of the following is the length of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 17",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nFirst = 'Ipswich, England';\nCity = substr(First,1,7);\nCity_Country = City!!', '!!'England';\nrun;\nWhich one of the following is the value of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Ipswich!!",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Ipswich, England",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Ipswich, 'England'",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Ipswich , England",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the RETAIN statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It can be used to assign an initial value to _N_ .",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is only valid in conjunction with a SUM function.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It has no effect on variables read with the SET, MERGE and UPDATE statements.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n--------10-------20-------30\nsquash 1.10\napples 2.25\njuice 1.69\nThe following SAS program is submitted using the raw data file above:\ndata groceries;\ninfile 'file-specification';\ninput item $ cost;\nrun;\nWhich one of the following completes the program and produces a grand total for all COST\nvalues?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. grandtot = sum cost;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. grandtot = sum(grandtot,cost);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. retaingrandtot 0;\ngrandtot = sum(grandtot,cost);",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. grandtot = sum(grandtot,cost);\noutput grandtot",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists (keep = job_code);\nif job_code = 'chem3'\nthen description = 'Senior Chemist';\nrun;\nThe variable JOB_CODE is a character variable with a length of 6 bytes.\nWhich one of the following is the length of the variable DESCRIPTION in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 8 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 14 bytes",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 200 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata work.accounting;\nset work.department;\nlength jobcode $ 12;\nrun;\nThe WORK.DEPARTMENT SAS data set contains a character variable named JOBCODE with a\nlength of 5.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 8",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 12",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The length can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS statements renames two variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. set work.dept1\nwork.dept2(rename = (jcode = jobcode)\n(sal = salary));",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. set work.dept1\nwork.dept2(rename = (jcode = jobcode\nsal = salary));",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. set work.dept1\nwork.dept2(rename = jcode = jobcode\nsal = salary);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. set work.dept1\nwork.dept2(rename = (jcode jobcode)\n(sal salary));",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.company;\nset work.dept1(keep = jobcode)\nwork.dept2(rename = (jcode = jobcode));\nrun;\nWhich one of the following is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable JCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable JOBCODE is written to the output data set.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Neither variable JCODE nor JOBCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.staff;\nJobCategory = 'FA';\nJobLevel = '1';\nJobCategory = JobCategory || JobLevel;\nrun;\nWhich one of the following is the value of the variable JOBCATEGORY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FA",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FA1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FA 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.one;\nx = 3;\ny = 2;\nz = x ** y;\nrun;\nWhich one of the following is the value of the variable Z in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 9",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.TEST is listed below:\ncapacity airplanetype staff\n150 Large 10\nWhich one of the following SAS programs created this data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. datawork.test;\ncapacity = 150;\nif 100 le capacity le 200 then\nairplanetype = 'Large' and staff = 10;\nelse airplanetype = 'Small' and staff = 5;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. datawork.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = 'Large';\nstaff = 10;\nend;\nelse\ndo;\nairplanetype = 'Small';\nstaff = 5;\nend;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. datawork.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = 'Large';\nstaff = 10;\nelse\ndo;\nairplanetype = 'Small';\nstaff = 5;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. datawork.test;\ncapacity = 150;\nif 100 le capacity le 200 then;\nairplanetype = 'Small';\nstaff = 5;\nelse;\nairplanetype = 'Large';\nstaff = 10;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set EMPLOYEE_INFO is listed below:\nIDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially\nby descending expense values within\neach descending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by descendingIDNumber Expenses;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by (IDNumber Expenses) descending;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. byIDNumber descending Expenses descending;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by descendingIDNumber descending Expenses;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname company 'SAS-data-library';\nproc sort data = company.payroll;\nby EmployeeIDNumber;\nrun;\nWrite access has been granted to the COMPANY library.\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. COMPANY.PAYROLL is recreated in sorted order byEmployeeIDNumber.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. COMPANY.PAYROLL is stored in original order, and a new data set PAYROLL is created in\nsorted order byEmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. COMPANY.PAYROLL is stored in original order, and a new data set\nCOMPANY.PAYROLLSORTED is created in sorted order byEmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. COMPANY.PAYROLL is recreated in sorted order byEmployeeIDNumber, and a new data set\nPAYROLL is created in sorted order by EmployeeIDNumber",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.AWARDS is listed below:\nfname points\nAmy 2\nAmy 1\nGerard 3\nWang 3\nWang 1\nWang 2\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Wang 3\nGerard 3\nWang 2\nAmy 2\nWang 1\nAmy 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Wang 3\nWang 2\nWang 1\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Wang 3\nWang 1\nWang 2\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Wang 1\nWang 2\nWang 3\nGerard 3\nAmy 1\nAmy 2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The observations in the SAS data set WORK.TEST are ordered by the values of the variable\nSALARY.\nThe following SAS program is submitted:\nproc sort data = work.test out = work.testsorted;\nby tag;\nrun;\nWhich one of the following is the result of the SAS program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The data set WORK.TEST is stored in ascending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data set WORK.TEST is stored in descending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data set WORK.TESTSORTED is stored in ascending order by values of the NAME\nvariable.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data set WORK.TESTSORTED is stored in descending order by values of the NAME\nvariable.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following statements is true regarding the tag of a SAS array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is saved with the data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It can be used in procedures.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It exists only for the duration of the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It can be the same as the tag of a variable in the data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata stats;\nset revenue;\narray weekly{5} mon tue wed thu fri;\ntotal = weekly{i} * .25;\noutput;\nend;\nrun;\nWhich one of the following DO statements completes the program and processes the elements of\nthe WEEKLY array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. doi = 1 to 5;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. do weekly{i} = 1 to 5;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. doi = mon tue wed thu fri;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A DO loop cannot be used because the variables referenced do not end in a digit.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\narray agents{4} $ 12 sales1 - sales4;\nrun;\nWhich one of the following represents the variables that are contained in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. SALES1, SALES2, SALES3, SALES4",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. AGENTS1, AGENTS2, AGENTS3, AGENTS4",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. None, the DATA step fails because the ARRAY statement can reference only numeric data.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None, the DATA step fails because the ARRAY statement can reference only pre-existing\nvariables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "On which portion(s) of a SAS data set does the PRINT procedure report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the descriptor portion only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion and the data portion",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. neither the data portion nor the descriptor portion",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS procedures displays the data portion of a SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRINT",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FSLIST",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CONTENTS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATASETS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc contents data = sasuser.airplanes;\nrun;\nWhich one of the following is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the data portion of the data set SASUSER.AIRPLANES only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the descriptor portion of the data set SASUSER.AIRPLANES only",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n--------10-------20-------30\nJohn McCloskey 35 71\nJune Rosesette 10 43\nTineke Jones 9 37\nThe following SAS program is submitted using the raw data file as input:\ndata work.homework;\ninfile 'file-specification';\ninput tag $ age height;\nif age LE 10;\nrun;\nHow many observations will the WORK.HOMEWORK data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No data set is created as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SASDATA.BANKS data set has five observations when the following SAS program is\nsubmitted:\nlibname sasdata 'SAS-data-library';\ndata allobs;\nset sasdata.banks;\ncapital=0;\ndo year = 2000 to 2020 by 5;\ncapital + ((capital+2000) * rate);\noutput;\nend;\nrun;\nHow many observations will the ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 20",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata allobs;\nset sasdata.origin (firstobs = 75 obs = 499);\nrun;\nThe SAS data set SASDATA.ORIGIN contains 1000 observations.\nHow many observations does the ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 424",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 425",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 499",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 1000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata _null_;\nset old (keep = prod sales1 sales2);\nfile 'file-specification';\nput sales1 sales2;\nrun;\nWhich one of the following default delimiters separates the fields in the raw data file created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. : (colon)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. (space)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. , (comma)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ; (semicolon)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TEAM are listed below:\n--------10-------20-------30\nJanice 10\nHenri 11\nMichael 11\nSusan 12\nThe following SAS program is submitted:\ndata group;\ninfile 'team';\ninput tag $15. age 2.;\nfile 'file-specification';\nput tag $15. +5 age 2.;\nrun;\nWhich one of the following describes the output created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a raw data file only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a SAS data set named GROUP only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a SAS data set named GROUP and a raw data file",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No output is generated as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the SAS data set PERM.JAN_SALES are listed below:\nVARIABLE NAME TYPE\nidnum character variable\nsales_date numeric date value\nA comma delimited raw data file needs to be created from the PERM.JAN_SALES data set. The\nSALES_DATE values need to be in a MMDDYY10 form.\nWhich one of the following SAS DATA steps correctly creates this raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification' dsd = ',';\nput idnum sales_date : mmddyy10.;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification' dlm = ',';\nput idnum sales_date : mmddyy10.;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification';\nput idnum sales_date : mmddyy10. dlm = ',';\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification';\nput idnum sales_date : mmddyy10. dsd = ',';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp 'SAS-data-library';\ndata work.new;\nset temp.jobs;\nformat newdate mmddyy10.;\nqdate = qtr(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new;\nrun;\nThe variable NEWDATE contains the SAS date value for April 15, 2000.\nWhat output is produced if April 15, 2000 falls on a Saturday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs newdate qdate ddate\n1 APR152000 2 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate qdate ddate\n1 04/15/2000 2 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs newdate qdate ddate\n1 APR152000 2 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate qdate ddate\n1 04/15/2000 2 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.report;\nset work.sales_info;\nif qtr(sales_date) ge 3;\nrun;\nThe SAS data set WORK.SALES_INFO has one observation for each month in the year 2000 and\nthe variable SALES_DATE which\ncontains a SAS date value for each of the twelve months.\nHow many of the original twelve observations in WORK.SALES_INFO are written to the\nWORK.REPORT data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 9",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata revenue;\nset year_1;\nvar1 = mdy(1,15,1960);\nrun;\nWhich one of the following values does the variable named VAR1 contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 14",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1151960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '1/15/1960'",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nmon = 3;\nday = 23;\nyear = 2000;\ndate = mdy(mon,day,year);\nrun;\nWhich one of the following is the value of the DATE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value '23mar2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value '03/23/2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a numeric value of 14692, which represents the SAS date value forMarch 23, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. a numeric value of 3232000, which represents the SAS date value forMarch 23, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step executes on Monday, April 25, 2000:\ndata newstaff;\nset staff;\nstart_date = today();\nrun;\nWhich one of the following is the value of the variable START_DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value '04/25/2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value 'Monday, April 25, 2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the numeric value 14725, representing the SAS date forApril 25, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. the numeric value 04252000, representing the SAS date forApril 25, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata sasdata.atlanta\nsasdata.boston\nwork.portland\nwork.phoenix;\nset company.prdsales;\nif region = 'NE' then output boston;\nif region = 'SE' then output atlanta;\nif region = 'SW' then output phoenix;\nif region = 'NW' then output portland;\nrun;\nWhich one of the following is true regarding the output data sets?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. No library references are required.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data sets listed on all the IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data sets listed in the last two IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets listed in the first two IF statements require a library reference.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS DATA steps saves the temporary data set named MYDATA as a\npermanent data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\ncopy mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nkeep mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nsave mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nset mydata;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\nlibname temp 'SAS-data-library';\ndata temp.report;\nset sasuser.houses;\nnewvar = price * 1.04;\nrun;\nWhich one of the following statements is true regarding the program above?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program is reading from a temporary data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program is reading from a temporary data set and writing to a permanent data set.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The program is reading from a permanent data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program is reading from a permanent data set and writing to a permanent data set.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS SORT procedure step generates an output data set:\nproc sort data = sasuser.houses out = report;\nby style;\nrun;\nIn which library is the output data set stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. WORK",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. REPORT.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. HOUSES",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SASUSER",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORK.SALARY are listed below:\nWORK.EMPLOYEE WORK.SALARY\nfname age fname salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\ntotsal + salary;\nrun;\nHow many variables are output to the WORK.EMPDATA data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No variables are output to the data set as the program fails to execute due to errors",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of two SAS data sets named EMPLOYEE and SALARY are listed below:\nEMPLOYEE SALARY\ntag age tag salary\nBruce 30 Bruce 40000\nDan 35 Bruce 35000\nDan 37000\nDan .\nThe following SAS program is submitted:\ndata work.empsalary;\nmerge work.employee (in = inemp)\nwork.salary (in = insal);\nby tag;\nif inemp and insal;\nrun;\nHow many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH';\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations will the output data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH' then\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations does the WORK.CONDO_RANCH data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file FURNITURE are listed below:\n--------10-------20-------30\nchair,,table\nchair,couch,table\nThe following SAS program is submitted:\ndata stock;\ninfile 'furniture' dsd;\ninput item1 $ item2 $ item3 $;\nrun;\nWhich one of the following is the value of the variable named ITEM2 in the first observation of the\noutput data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. table",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ,table",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '' (missing character value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted and reads 100 records from a raw data file:\ndata work.total;\ninfile 'file-specification' end = eof;\ninput tag $ salary;\ntotsal + salary;\nrun;\nWhich one of the following IF statements writes the last observation to the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if end = 0;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ifeof = 0;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. if end = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ifeof = 1;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname rawdata1 'location of SAS data library';\nfilename rawdata2 'location of raw data file';\ndata work.testdata;\ninfile\ninput sales1 sales2;\nrun;\nWhich one of the following is needed to complete the program correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. rawdata1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. rawdata2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 'rawdata1'",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 'rawdata2'",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nWhich one of the following OPTIONS statements resets the page number to 1 for the second\nreport?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. optionspageno = 1;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. optionspagenum = 1;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. options resetpageno = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. options resetpagenum = 1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the SUM statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is only valid in conjunction with a SUM function.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is not valid with the SET, MERGE and UPDATE statements.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It does not retain the accumulator variable value from one iteration of the SAS DATA step to the\nnext.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "When the following SAS program is submitted, the data set SASDATA.PRDSALES contains 5000\nobservations:\nlibname sasdata 'SAS-data-library';\noptions obs = 500;\nproc print data = sasdata.prdsales (firstobs = 100);\nrun;\noptions obs = max;\nproc means data = sasdata.prdsales (firstobs = 500);\nrun;\nHow many observations are processed by each procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 400 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 401 for PROC PRINT\n4501 for PROC MEANS",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 401 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500 for PROC PRINT\n5000 for PROC MEANS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file AMOUNT are listed below:\n--------10-------20-------30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile 'amount';\ninput @1 salary 6.;\nif _error_ then description = 'Problems';\nelse description = 'No Problems';\nrun;\nWhich one of the following is the value of the DESCRIPTION variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Problems",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. No Problems",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. '' (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The valuecan not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file NAMENUM are listed below:\n--------10-------20-------30\nJoe xx\nThe following SAS program is submitted:\ndata test;\ninfile 'namenum';\ninput tag $ number;\nrun;\nWhich one of the following is the value of the NUMBER variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. xx",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Joe",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The valuecan not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true when SAS encounters a data error in a DATA step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The DATA step stops executing at the point of the error, and no SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A note is written to the SAS log explaining the error, and the DATA step continues to execute.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A note appears in the SAS log that the incorrect data record was saved to a separate SAS file\nfor further examination.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The DATA step stops executing at the point of the error, and the resulting DATA set contains\nobservations up to that point.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales (keep = monthsales{12} );\nset work.monthlysales (keep = year product sales);\narray monthsales {12} ;\ndo i=1 to 12;\nmonthsales{i} = sales;\nend;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five\nyears for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program executes with warnings and creates the WORK.TOTALSALES data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program executes without errors or warnings and creates the WORK.TOTALSALES data\nset",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales;\nset work.monthlysales(keep = year product sales);\nretain monthsales {12} ;\narray monthsales {12} ;\ndo i = 1 to 12;\nmonthsales{i} = sales;\nend;\ncnt + 1;\nmonthsales{cnt} = sales;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five\nyears for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program runs with warnings and creates the WORK.TOTALSALES data set with 60 observations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program runs without errors or warnings and creates the WORK.TOTALSALES data set\nwith 60 observations",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.january;\nset work.allmonths (keep = product month num_sold cost);\nif month = 'Jan' then output work.january;\nsales = cost * num_sold;\nkeep = product sales;\nrun;\nWhich variables does the WORK.JANUARY data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRODUCT and SALES only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. PRODUCT, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. PRODUCT, SALES, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An incomplete output data set is created due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file CALENDAR are listed below:\n--------10-------20-------30\n01012000\nThe following SAS program is submitted:\ndata test;\ninfile 'calendar';\ninput @1 date mmddyy10.;\nif date = '01012000'd then event = 'January 1st';\nrun;\nWhich one of the following is the value of the EVENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 01012000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. January 1st",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The valuecan not be determined as the program fails to execute due to errors",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "In the following SAS program, the input data files are sorted by the NAMES variable:\nlibname temp 'SAS-data-library';\ndata temp.sales;\nmerge temp.sales\nwork.receipt;\nby names;\nrun;\nWhich one of the following results occurs when this program is submitted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program executes successfully and a temporary SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program executes successfully and a permanent SAS data set is created.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program fails execution because the same SAS data set is referenced for both read and write operations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails execution because the SAS data sets on the MERGE statement are in two different libraries.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "When the following SAS program is submitted, the data set SASDATA.PRDSALES contains 5000 observations:\nlibname sasdata 'SAS-data-library';\noptions obs = 500;\nproc print data = sasdata.prdsales (firstobs = 100);\nrun;\noptions obs = max;\nproc means data = sasdata.prdsales (firstobs = 500);\nrun;\nHow many observations are processed by each procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 400 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 401 for PROC PRINT\n4501 for PROC MEANS",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 401 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500 for PROC PRINT\n5000 for PROC MEANS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 7;\nif amount = 5 then word = 'CAT';\nelse if amount = 7 then word = 'DOG';\nelse word = 'NONE!!!';\namount = 5;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n5 DOG",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. amount word\n5 CAT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n7 DOG",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. amount word\n7 ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the SUM statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is only valid in conjunction with a SUM function.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is not valid with the SET, MERGE and UPDATE statements.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It does not retain the accumulator variable value from one iteration of the SAS DATA step to the next.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhich one of the following is the value of the variable PROD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 8",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc print data = sasuser.houses;\nrun;\n&ltrinsert OPTIONS statement here>\nproc means data = sasuser.shoes;\nrun;\nWhich one of the following OPTIONS statements resets the page number to 1 for the second report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. options pageno = 1;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. options pagenum = 1;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. options reset pageno = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. options reset pagenum = 1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file PRODUCT are listed below:\n----|----10---|----20---|----30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile 'product';\ninput idnum 5. @10 price;\nrun;\nWhich one of the following is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 25.31",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. $25.31",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No value is stored as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TYPECOLOR are listed below:\n----|----10---|----20---|----30\ndaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile 'typecolor';\ninput type $ 1-5 +1 color $;\nrun;\nWhich one of the following represents the values of the variables TYPE and COLOR?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. type color\ndaisy yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. type color\ndaisy ellow",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. type color\ndaisyyellow (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No values are stored as the program fails to execute due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----|----10---|----20---|----30\nson,Travis,\nThe following output is desired:\nrelation firstname\nson Travis\nWhich one of the following SAS programs reads the data correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data family / dlm = ',';\ninfile 'file-specification';\ninput relation $ firstname $;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. options dlm = ',';\ndata family;\ninfile 'file-specification';\ninput relation $ firstname $;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data family;\ninfile 'file-specification' dlm = ',';\ninput relation $ firstname $;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data family;\ninfile 'file-specification';\ninput relation $ firstname $ / dlm = ',';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname rawdata1 'location of SAS data library';\nfilename rawdata2 'location of raw data file';\ndata work.testdata;\ninfile &ltrinsert item here>\ninput sales1 sales2;\nrun;\nWhich one of the following is needed to complete the program correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. rawdata1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. rawdata2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 'rawdata1'",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 'rawdata2'",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted and reads 100 records from a raw data file:\ndata work.total;\ninfile 'file-specification' end = eof;\ninput name $ salary;\ntotsal + salary;\n&ltrinsert IF statement here>\nrun;\nWhich one of the following IF statements writes the last observation to the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if end = 0;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. if eof = 0;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. if end = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. if eof = 1;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file FURNITURE are listed below:\n----|----10---|----20---|----30\nchair,,table\nchair,couch,table\nThe following SAS program is submitted:\ndata stock;\ninfile 'furniture' dsd;\ninput item1 $ item2 $ item3 $;\nrun;\nWhich one of the following is the value of the variable named ITEM2 in the first observation of the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. table",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ,table",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH' then\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations does the WORK.CONDO_RANCH data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH';\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations will the output data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata numrecords;\ninfile 'file-specification';\ninput @1 patient $15.\nrelative $ 16-26 @;\nif relative = 'children' then\ninput @54 diagnosis $15. @;\nelse if relative = 'parents' then\ninput @28 doctor $15.\nclinic $ 44-53\n@54 diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step during execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORK.PEOPLE has 5 observations, and the data set WORK.MONEY has 7 observations.\nHow many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of two SAS data sets named EMPLOYEE and SALARY are listed below:\nEMPLOYEE SALARY\nname age name salary\nBruce 30 Bruce 40000\nDan 35 Bruce 35000\nDan 37000\nDan .\nThe following SAS program is submitted:\ndata work.empsalary;\nmerge work.employee (in = inemp)\nwork.salary (in = insal);\nby name;\nif inemp and insal;\nrun;\nHow many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORK.SALARY are listed below:\nWORK.EMPLOYEE WORK.SALARY\nfname age fname salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\ntotsal + salary;\nrun;\nHow many variables are output to the WORK.EMPDATA data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No variables are output to the data set as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORK.SALARY are shown below:\nWORK.EMPLOYEE WORK.SALARY\nfname age name salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\n&ltrinsert MERGE statement here>\nby fname;\ntotsal + salary;\nrun;\nWhich one of the following statements completes the merge of the two data sets by the FNAME variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. merge work.employee\nwork.salary (fname = name);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. merge work.employee\nwork.salary (name = fname);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. merge work.employee\nwork.salary (rename = (fname = name));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. merge work.employee\nwork.salary (rename = (name = fname));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data=work.employee;\nby descending fname;\nproc sort data=work.salary;\nby descending fname;\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\nrun;\nWhich one of the following statements explains why the program failed execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SORT procedures contain invalid syntax.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The merged data sets are not permanent SAS data sets.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data sets were not merged in the order by which they were sorted.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The RUN statements were omitted after each of the SORT procedures.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS SORT procedure step generates an output data set:\nproc sort data = sasuser.houses out = report;\nby style;\nrun;\nIn which library is the output data set stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. WORK",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. REPORT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. HOUSES",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SASUSER",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\nlibname temp 'SAS-data-library';\ndata temp.report;\nset sasuser.houses;\nnewvar = price * 1.04;\nrun;\nWhich one of the following statements is true regarding the program above?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program is reading from a temporary data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program is reading from a temporary data set and writing to a permanent data set.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The program is reading from a permanent data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program is reading from a permanent data set and writing to a permanent data set.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS DATA steps saves the temporary data set named MYDATA as a permanent data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\ncopy mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nkeep mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nsave mydata;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname sasdata 'SAS-data-library';\ndata sasdata.mydata;\nset mydata;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata sasdata.atlanta\nsasdata.boston\nwork.portland\nwork.phoenix;\nset company.prdsales;\nif region = 'NE' then output boston;\nif region = 'SE' then output atlanta;\nif region = 'SW' then output phoenix;\nif region = 'NW' then output portland;\nrun;\nWhich one of the following is true regarding the output data sets?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. No library references are required.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data sets listed on all the IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data sets listed in the last two IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets listed in the first two IF statements require a library reference.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step executes on Monday, April 25, 2000:\ndata newstaff;\nset staff;\nstart_date = today();\nrun;\nWhich one of the following is the value of the variable START_DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value '04/25/2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value 'Monday, April 25, 2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the numeric value 14725, representing the SAS date for April 25, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. the numeric value 04252000, representing the SAS date for April 25, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nmon = 3;\nday = 23;\nyear = 2000;\ndate = mdy(mon,day,year);\nrun;\nWhich one of the following is the value of the DATE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value '23mar2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value '03/23/2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a numeric value of 14692, which represents the SAS date value for March 23, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. a numeric value of 3232000, which represents the SAS date value for March 23, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata revenue;\nset year_1;\nvar1 = mdy(1,15,1960);\nrun;\nWhich one of the following values does the variable named VAR1 contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 14",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1151960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. '1/15/1960'",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.report;\nset work.sales_info;\nif qtr(sales_date) ge 3;\nrun;\nThe SAS data set WORK.SALES_INFO has one observation for each month in the year 2000 and the variable SALES_DATE which\ncontains a SAS date value for each of the twelve months.\nHow many of the original twelve observations in WORK.SALES_INFO are written to the WORK.REPORT data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 9",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp 'SAS-data-library';\ndata work.new;\nset temp.jobs;\nformat newdate mmddyy10.;\nqdate = qtr(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new;\nrun;\nThe variable NEWDATE contains the SAS date value for April 15, 2000.\nWhat output is produced if April 15, 2000 falls on a Saturday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs newdate qdate ddate\n1 APR152000 2 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate qdate ddate\n1 04/15/2000 2 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs newdate qdate ddate\n1 APR152000 2 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate qdate ddate\n1 04/15/2000 2 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is shown below:\n07Jan2002\nWhich one of the following informats would read this value and store it as a SAS date value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. date9.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. ddmonyy9.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ddMMMyy9.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ddmmmyyyy9.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the SAS data set PERM.JAN_SALES are listed below:\nVARIABLE NAME TYPE\nidnum character variable\nsales_date numeric date value\nA comma delimited raw data file needs to be created from the PERM.JAN_SALES data set. The SALES_DATE values need to be in\na MMDDYY10 form.\nWhich one of the following SAS DATA steps correctly creates this raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification' dsd = ',';\nput idnum sales_date : mmddyy10.;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification' dlm = ',';\nput idnum sales_date : mmddyy10.;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification';\nput idnum sales_date : mmddyy10. dlm = ',';\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname perm 'SAS-data-library';\ndata _null_;\nset perm.jan_sales;\nfile 'file-specification';\nput idnum sales_date : mmddyy10. dsd = ',';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the SAS data set named PERM.STUDENTS are listed below:\nname age\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted using the PERM.STUDENTS data set as input:\nlibname perm 'SAS-data-library';\ndata students;\nset perm.students;\nfile 'file-specification';\nput name $15. @5 age 2.;\nrun;\nWhich one of the following represents the values written to the output raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ----|----10---|----20---|----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ----|----10---|----20---|----30\nAlfr14\nAlic13\nBarb13a\nCaro14",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ----|----10---|----20---|----30\nAlfr14ed\nAlic13e\nBarb13ara\nCaro14l",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ----|----10---|----20---|----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TEAM are listed below:\n----|----10---|----20---|----30\nJanice 10\nHenri 11\nMichael 11\nSusan 12\nThe following SAS program is submitted:\ndata group;\ninfile 'team';\ninput name $15. age 2.;\nfile 'file-specification';\nput name $15. +5 age 2.;\nrun;\nWhich one of the following describes the output created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a raw data file only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a SAS data set named GROUP only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a SAS data set named GROUP and a raw data file",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No output is generated as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata _null_;\nset old;\nput sales1 sales2;\nrun;\nWhere is the output written?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the SAS log",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the raw data file that was opened last",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the SAS output window or an output file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the data set mentioned in the DATA statement",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata _null_;\nset old (keep = prod sales1 sales2);\nfile 'file-specification';\nput sales1 sales2;\nrun;\nWhich one of the following default delimiters separates the fields in the raw data file created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. : (colon)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. (space)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. , (comma)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ; (semicolon)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata allobs;\nset sasdata.origin (firstobs = 75 obs = 499);\nrun;\nThe SAS data set SASDATA.ORIGIN contains 1000 observations.\nHow many observations does the ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 424",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 425",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 499",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 1000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named COMPANY.PRICES is listed below:\nCOMPANY.PRICES\nprodid price producttype sales returns\nK12S 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY2 1.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\nlibname company 'SAS-data-library';\ndata hware inter soft;\nset company.prices (keep = producttype price);\nif price le 5.00;\nif producttype = 'HARDWARE' then output HWARE;\nelse if producttype = 'NETWORK' then output INTER;\nelse if producttype = 'SOFTWARE' then output SOFT;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SASDATA.BANKS data set has five observations when the following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata allobs;\nset sasdata.banks;\ncapital=0;\ndo year = 2000 to 2020 by 5;\ncapital + ((capital+2000) * rate);\noutput;\nend;\nrun;\nHow many observations will the ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 20",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n----|----10---|----20---|----30\nJohn McCloskey 35 71\nJune Rosesette 10 43\nTineke Jones 9 37\nThe following SAS program is submitted using the raw data file as input:\ndata work.homework;\ninfile 'file-specification';\ninput name $ age height;\nif age LE 10;\nrun;\nHow many observations will the WORK.HOMEWORK data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No data set is created as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc contents data = sasuser.airplanes;\nrun;\nWhich one of the following is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the data portion of the data set SASUSER.AIRPLANES only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the descriptor portion of the data set SASUSER.AIRPLANES only",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc datasets lib = sasuser;\ncontents data = class varnum;\nquit;\nWhich one of the following is the purpose of the VARNUM option?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. to print a list of variable names",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. to print the total number of variables",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. to print a list of the variables in alphabetic order",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. to print a list of the variables in the order they were created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS procedures displays the data portion of a SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRINT",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FSLIST",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CONTENTS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATASETS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "On which portion(s) of a SAS data set does the PRINT procedure report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the descriptor portion only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion and the data portion",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. neither the data portion nor the descriptor portion",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nset work.staff (keep = jansales febsales marsales);\narray diff_sales{3} difsales1 - difsales3;\narray monthly{3} jansales febsales marsales;\nrun;\nWhich one of the following represents the new variables that are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. JANSALES, FEBSALES and MARSALES",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. MONTHLY1, MONTHLY2 and MONTHLY3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. DIFSALES1, DIFSALES2 and DIFSALES3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. DIFF_SALES1, DIFF_SALES2 and DIFF_SALES3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\narray agents{4} $ 12 sales1 - sales4;\nrun;\nWhich one of the following represents the variables that are contained in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. SALES1, SALES2, SALES3, SALES4",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. AGENTS1, AGENTS2, AGENTS3, AGENTS4",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. None, the DATA step fails because the ARRAY statement can reference only numeric data.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None, the DATA step fails because the ARRAY statement can reference only pre-existing variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata stats;\nset revenue;\narray weekly{5} mon tue wed thu fri;\n&ltrinsert DO statement here>\ntotal = weekly{i} * .25;\noutput;\nend;\nrun;\nWhich one of the following DO statements completes the program and processes the elements of the WEEKLY array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. do i = 1 to 5;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. do weekly{i} = 1 to 5;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. do i = mon tue wed thu fri;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A DO loop cannot be used because the variables referenced do not end in a digit.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following statements is true regarding the name of a SAS array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is saved with the data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It can be used in procedures.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It exists only for the duration of the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It can be the same as the name of a variable in the data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The observations in the SAS data set WORK.TEST are ordered by the values of the variable SALARY.\nThe following SAS program is submitted:\nproc sort data = work.test out = work.testsorted;\nby name;\nrun;\nWhich one of the following is the result of the SAS program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The data set WORK.TEST is stored in ascending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data set WORK.TEST is stored in descending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data set WORK.TESTSORTED is stored in ascending order by values of the NAME variable.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data set WORK.TESTSORTED is stored in descending order by values of the NAME variable.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.AWARDS is listed below:\nfname points\nAmy 2\nAmy 1\nGerard 3\nWang 3\nWang 1\nWang 2\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Wang 3\nGerard 3\nWang 2\nAmy 2\nWang 1\nAmy 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Wang 3\nWang 2\nWang 1\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Wang 3\nWang 1\nWang 2\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Wang 1\nWang 2\nWang 3\nGerard 3\nAmy 1\nAmy 2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set EMPLOYEE_INFO is listed below:\nIDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially by ascending expense values within\neach ascending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by Expenses IDNumber;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by IDNumber Expenses;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. by ascending (IDNumber Expenses);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by ascending IDNumber ascending Expenses;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname company 'SAS-data-library';\nproc sort data = company.payroll;\nby EmployeeIDNumber;\nrun;\nWrite access has been granted to the COMPANY library.\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. COMPANY.PAYROLL is recreated in sorted order by EmployeeIDNumber.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. COMPANY.PAYROLL is stored in original order, and a new data set PAYROLL is created in sorted order by\nEmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. COMPANY.PAYROLL is stored in original order, and a new data set COMPANY.PAYROLLSORTED is created in sorted order\nby EmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. COMPANY.PAYROLL is recreated in sorted order by EmployeeIDNumber, and a new data set PAYROLL is created in sorted\norder by EmployeeIDNumber.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set QTR1_REVENUE is listed below:\ndestination revenue\nYYZ 53634\nFRA 62129\nFRA 75962\nRDU 76254\nYYZ 82174\nThe following SAS program is submitted:\nproc sort data = qtr1_revenue;\nby destination descending revenue;\nrun;\nWhich one of the following represents the first observation in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. destination revenue\nYYZ 82174",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. destination revenue\nYYZ 53634",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. destination revenue\nFRA 62129",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. destination revenue\nFRA 75962",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set EMPLOYEE_INFO is listed below:\nIDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially by descending expense values within\neach descending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by descending IDNumber Expenses;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by (IDNumber Expenses) descending;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. by IDNumber descending Expenses descending;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by descending IDNumber descending Expenses;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 4;\nif amount = 4 then word = 'FOUR';\nelse if amount = 7 then word = 'SEVEN';\nelse word = 'NONE!!!';\namount = 7;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n7 FOUR",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. amount word\n7 SEVEN",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n4 FOUR",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. amount word\n4 ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = 'CPH';\nselect(destination);\nwhen('LHR') city = 'London';\nwhen('CPH') city = 'Copenhagen';\notherwise;\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. London",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = 'cph';\nselect(destination);\nwhen('LHR') city = 'London';\nwhen('CPH') city = 'Copenhagen';\notherwise city = 'Other';\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Other",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.TEST is listed below:\ncapacity airplanetype staff\n150 Large 10\nWhich one of the following SAS programs created this data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then\nairplanetype = 'Large' and staff = 10;\nelse airplanetype = 'Small' and staff = 5;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = 'Large';\nstaff = 10;\nend;\nelse\ndo;\nairplanetype = 'Small';\nstaff = 5;\nend;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = 'Large';\nstaff = 10;\nelse\ndo;\nairplanetype = 'Small';\nstaff = 5;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then;\nairplanetype = 'Small';\nstaff = 5;\nelse;\nairplanetype = 'Large';\nstaff = 10;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.one;\nx = 3;\ny = 2;\nz = x ** y;\nrun;\nWhich one of the following is the value of the variable Z in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 9",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.staff;\nJobCategory = 'FA';\nJobLevel = '1';\nJobCategory = JobCategory || JobLevel;\nrun;\nWhich one of the following is the value of the variable JOBCATEGORY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FA",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FA1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FA 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:data work.passengers;\ndata work.passengers;\nif OrigPassengers = . then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = OrigPassengers + TransPassengers;\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 100",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 110",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.passengers;\nif OrigPassengers = . then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = sum (OrigPassengers, TransPassengers);\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 100",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 110",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.company;\nset work.dept1(keep = jobcode)\nwork.dept2(rename = (jcode = jobcode));\nrun;\nWhich one of the following is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable JCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable JOBCODE is written to the output data set.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Neither variable JCODE nor JOBCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS statements renames two variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. set work.dept1\nwork.dept2(rename = (jcode = jobcode)\n(sal = salary));",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. set work.dept1\nwork.dept2(rename = (jcode = jobcode\nsal = salary));",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. set work.dept1\nwork.dept2(rename = jcode = jobcode\nsal = salary);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. set work.dept1\nwork.dept2(rename = (jcode jobcode)\n(sal salary));",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata work.accounting;\nset work.department;\nlength jobcode $ 12;\nrun;\nThe WORK.DEPARTMENT SAS data set contains a character variable named JOBCODE with a length of 5.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 8",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 12",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The length can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\nrun;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and WORK.DEPT2 SAS data sets. The variable\nJOBCODE has a length of 5 in the WORK.DEPT1 data set and a length of 7 in the WORK.DEPT2 data set.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists (keep = job_code);\nif job_code = 'chem3'\nthen description = 'Senior Chemist';\nrun;\nThe variable JOB_CODE is a character variable with a length of 6 bytes.\nWhich one of the following is the length of the variable DESCRIPTION in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 8 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 14 bytes",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 200 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set named WORK.SALARY contains 10 observations for each department, currently ordered by DEPARTMENT.\nWhich one of the following is true regarding the program above?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The BY statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. FIRST.DEPARTMENT and LAST.DEPARTMENT are variables in the WORK.TOTAL data set.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable PAYROLL represent the total for each department in the WORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable PAYROLL represent a total for all values of WAGERATE in the WORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set WORK.SALARY, currently ordered by DEPARTMENT, contains 100 observations for each of 5 departments.\nWhich one of the following represents how many observations the WORK.TOTAL data set contains?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 20",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 100",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n----|----10---|----20---|----30\nsquash 1.10\napples 2.25\njuice 1.69\nThe following SAS program is submitted using the raw data file above:\ndata groceries;\ninfile 'file-specification';\ninput item $ cost;\n&ltrinsert statement(s) here>\nrun;\nWhich one of the following completes the program and produces a grand total for all COST values?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. grandtot = sum cost;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. grandtot = sum(grandtot,cost);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. retain grandtot 0;\ngrandtot = sum(grandtot,cost);",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. grandtot = sum(grandtot,cost);\noutput grandtot;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n----|----10---|----20---|----30\n1901 2\n1905 1\n1910 6\n1925 .\n1941 1\nThe following SAS program is submitted and references the raw data file above:\ndata coins;\ninfile 'file-specification';\ninput year quantity;\n&ltrinsert statement(s) here>\nrun;\nWhich one of the following completes the program and produces a non-missing value for the variable TOTQUANTITY in the last\nobservation of the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. totquantity + quantity;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. totquantity = sum(totquantity + quantity);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. totquantity 0;\nsum totquantity;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. retain totquantity 0;\ntotquantity = totquantity + quantity;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the RETAIN statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It can be used to assign an initial value to _N_ .",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is only valid in conjunction with a SUM function.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It has no effect on variables read with the SET, MERGE and UPDATE statements.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nFirst = 'Ipswich, England';\nCity = substr(First,1,7);\nCity_Country = City!!', '!!'England';\nrun;\nWhich one of the following is the value of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Ipswich!!",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Ipswich, England",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Ipswich, 'England'",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Ipswich , England",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nFirst = 'Ipswich, England';\nCity_Country = substr(First,1,7)!!', '!!'England';\nrun;\nWhich one of the following is the length of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 17",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nTitle = 'A Tale of Two Cities, Charles J. Dickens';\nWord = scan(title,3,' ,');\nrun;\nWhich one of the following is the value of the variable WORD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. T",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. of",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Dickens",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = 'Christie, Agatha';\nFirst = substr(scan(author,2,' ,'),1,1);\nrun;\nWhich one of the following is the value of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. C",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Agatha",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = 'Agatha Christie';\nFirst = substr(scan(author,1,' ,'),1,1);\nrun;\nWhich one of the following is the length of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 15",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 200",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS statements correctly computes the average of four numerical values?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. average = mean(num1 - num4);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. average = mean(of num1 - num4);",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. average = mean(of num1 to num4);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. average = mean(num1 num2 num3 num4);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.retail;\ncost = '20000';\ntotal = .10 * cost;\nrun;\nWhich one of the following is the value of the variable TOTAL in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2000",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. '2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.products;\nProduct_Number = 5461;\nItem = '1001';\nItem_Reference = Item||'/'||Product_Number;\nrun;\nWhich one of the following is the value of the variable ITEM_REFERENCE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1001/5461",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1001/ 5461",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.month;\ndate = input('13mar2000',date9.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. numeric, 9 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 9 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.month;\ndate = put('13mar2000'd,ddmmyy10.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. numeric, 10 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 10 bytes",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----|----10---|----20---|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile 'file-specification';\ninput dept $ 1 - 11 number 13 - 15;\n&ltrinsert code here>\nrun;\nWhich one of the following SAS statements completes the program and results in a value of 'Printing750' for the DEPARTMENT\nvariable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = trim(dept) || number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = dept || input(number,3.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. department = trim(dept) || put(number,3.);",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. department = input(dept,11.) || input(number,3.);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----|----10---|----20---|----30\n1999/10/25\nThe following SAS program is submitted:\ndata projectduration;\ninfile 'file-specification';\ninput date $ 1 - 10;\n&ltrinsert statement here>\nrun;\nWhich one of the following statements completes the program above and computes the duration of the project in days as of today's\ndate?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. duration = today( ) - put(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. duration = today( ) - put(date,yymmdd10.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. duration = today( ) - input(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. duration = today( ) - input(date,yymmdd10.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sales;\ndo year = 1 to 5;\ndo month = 1 to 12;\nx + 1;\nend;\nend;\nrun;\nWhich one of the following represents how many observations are written to the WORK.SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.pieces;\ndo while (n lt 6);\nn + 1;\nend;\nrun;\nWhich one of the following is the value of the variable N in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.clients;\ncalls = 6;\ndo while (calls le 6);\ncalls + 1;\nend;\nrun;\nWhich one of the following is the value of the variable CALLS in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set BANKS is listed below:\nBANKS\nname rate\nFirstCapital 0.0718\nDirectBank 0.0721\nVirtualDirect 0.0728\nThe following SAS program is submitted:\ndata newbank;\ndo year = 1 to 3;\nset banks;\ncapital + 5000;\nend;\nrun;\nWhich one of the following represents how many observations and variables will exist in the SAS data set NEWBANK?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0 observations and 0 variables",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1 observations and 4 variables",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3 observations and 3 variables",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 9 observations and 2 variables",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been assigned a permanent label of \"Asking Price\".\nWhich one of the following SAS programs temporarily replaces the label \"Asking Price\" with the label \"Sale Price\" in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses;\nlabel price = \"Sale Price\";\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses label;\nlabel price \"Sale Price\";\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses label;\nlabel price = \"Sale Price\";\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses label = \"Sale Price\";\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The value 110700 is stored in a numeric variable.\nWhich one of the following SAS formats is used to display the value as $110,700.00 in a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. comma8.2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. comma11.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. dollar8.2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. dollar11.2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A realtor has two customers. One customer wants to view a list of homes selling for less than $60,000. The other customer wants\nto view a list of homes selling for greater than $100,000.\nAssuming the PRICE variable is numeric, which one of the following PRINT procedure steps will select all desired observations?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses;\nwhere price lt 60000;\nwhere price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses;\nwhere price lt 60000 or price gt 100000;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses;\nwhere price lt 60000 and price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses;\nwhere price lt 60000 or where price gt 100000;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc report data = work.houses nowd;\ncolumn style price;\nwhere price < 100000;\n&ltrinsert DEFINE statements here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure. Assume permanent variable labels have been assigned.\nWhich one of the following completes the program and produces the output displayed in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / display width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / group width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. define style / order width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc report data = sasuser.houses nowd headline headskip;\ncolumn style price;\nwhere price < 100000;\n&ltrinsert code here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure.\nAssuming that the PRICE variable is numeric, which one of the following completes the program and produces the output displayed in\nthe exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / group 'Style';\ndefine price / mean 'Price' format = dollar9.;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / display 'Style';\ndefine price / across 'Price' format = dollar9.;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / display 'Style';\ndefine price / sum 'Price' format = dollar9.;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. define style / order 'Style';\ndefine price / mean 'Price' format = dollar9.;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = sasuser.houses out = houses;\nby style;\nrun;\nproc print data = houses;\n&ltrinsert statement(s) here>\nrun;\nClick on the Exhibit button to view the report produced.\nstyle bedrooms baths price\nCONDO 2 1.5 80050\n3 2.5 79350\n4 2.5 127150\n2 2.0 110700\nRANCH 2 1.0 64000\n3 3.0 86650\n3 1.0 89100\n1 1.0 34550\nSPLIT 1 1.0 65850\n4 3.0 94450\n3 1.5 73650\nTWOSTORY 4 3.0 107250\n2 1.0 55850\n2 1.0 69250\n4 2.5 102950\nWhich of the following SAS statement(s) create(s) the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. id style;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. id style;\nvar style bedrooms baths price;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. id style;\nby style;\nvar bedrooms baths price;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. id style;\nby style;\nvar style bedrooms baths price;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Unless specified, which variables and data values are used to calculate statistics in the MEANS procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. non-missing numeric variable values only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. missing numeric variable values and non-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. non-missing character variables and non-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. missing character variables, non-missing character variables, missing numeric variable values, and non-missing numeric variable\nvalues",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view the output of a FREQ procedure.\nThe variable STYLE has a permanent label of \"Style of homes\" and the variable BEDROOMS has a permanent label of \"Number of\nbedrooms\".\nWhich one of the following SAS programs produced the output shown in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc freq data = sasuser.houses;\ntables style and bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc freq data = sasuser.houses;\ntables style * bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc freq data = sasuser.houses;\ntables style , bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc freq data = sasuser.houses;\ntables style;\ntables bedrooms;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view a listing of the SASUSER.HOUSES data set.\nThe following SAS program is submitted:\nproc report data = sasuser.houses nowd headline;\ncolumn style price;\nwhere price lt 100000;\n&ltrinsert DEFINE statement here>\ndefine price / mean width = 9;\ntitle;\nrun;\nThe following ouput is created by the REPORT procedure:\nstyle price\nCONDO $79,700\nRANCH $68,575\nSPLIT $77,983\nTWOSTORY $62,550\nWhich one of the following DEFINE statements completes the above program and produces the above output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / order width = 9;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / group width = 9;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. define style / across width = 9;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. define style / display width = 9;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc means data = sasuser.houses std mean max;\nvar sqfeet;\nrun;\nWhich one of the following is needed to display the standard deviation with only two decimal places?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Add the option MAXDEC = 2 to the MEANS procedure statement.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Add the statement MAXDEC = 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Add the statement FORMAT STD 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add the option FORMAT = 7.2 option to the MEANS procedure statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nfootnote1 'Sales Report for Last Month';\nfootnote2 'Selected Products Only';\nfootnote3 'All Regions';\nfootnote4 'All Figures in Thousands of Dollars';\nproc print data = sasuser.shoes;\nfootnote2 'All Products';\nrun;\nWhich one of the following contains the footnote text that is displayed in the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. All Products",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Sales Report for Last Month\nAll Products",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. All Products\nAll Regions\nAll Figures in Thousands of Dollars",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Sales Report for Last Month\nAll Products\nAll Regions\nAll Figures in Thousands of Dollars",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view two reports. Assume permanent variable labels have been assigned.\nThe following SAS program is submitted and produces the first report:\nproc report data = sasuser.shoes nowd;\ncolumn region subsidiary sales;\ndefine subsidiary / display;\ndefine region / group;\ndefine sales / sum;\nrun;\nWhich one of the following corrects the program above to produce the second report shown in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Define the variable SUBSIDIARY with a SUM usage.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Define the variable SUBSIDIARY with a GROUP usage.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Define the variable SUBSIDIARY with an ORDER usage.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Define the variable SUBSIDIARY with an ACROSS usage.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS system options prevents the page number from appearing on a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NONUM",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NOPAGE",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. NONUMBER",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. NOPAGENUM",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc freq data = sales;\n&ltrinsert TABLES statement here>\nrun;\nClick the Exhibit button to view the output from the FREQ procedure.\nWhich one of the following statements completes the program and produces the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region * product;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. tables product region;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables product * region;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS system options displays the time on a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. TIME",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DATE",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. TODAY",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATETIME",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\noptions pageno = 1;\nproc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nThe report created by the PRINT procedure step generates 5 pages of output.\nWhat is the page number on the first page of the report generated by the MEANS procedure step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format;\nvalue score 1 - 50 = 'Fail'\n51 - 100 = 'Pass';\nrun;\nproc report data = work.courses nowd;\ncolumn exam;\ndefine exam / display format = score.;\nrun;\nThe variable EXAM has a value of 50.5.\nHow will the EXAM variable value be displayed in the REPORT procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\nWhich one of the following ODS statements completes the program and sends the report to an HTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html = 'sales.html';",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file = 'sales.html';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file html = 'sales.html';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ods html file = 'sales.html';",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following ODS statement options terminates output being written to an HTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists;\nif jobcode = 'chem3'\nthen description = 'Senior Chemist';\nelse description = 'Unknown';\nrun;\nA value for the variable JOBCODE is listed below:\nJOBCODE\nCHEM3\nWhich one of the following values does the variable DESCRIPTION contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. chem3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists;\nif jobcode = 'Chem2'\nthen description = 'Senior Chemist';\nelse description = 'Unknown';\nrun;\nA value for the variable JOBCODE is listed below:\nJOBCODE\nchem2\nWhich one of the following values does the variable DESCRIPTION contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Chem2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file EMPLOYEE are listed below:\n----|----10---|----20---|----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile 'employee';\ninput employee_name $ 1-4;\nif employee_name = 'Sue' then input age 7-8;\nelse input idnum 10-11;\nrun;\nWhich one of the following values does the variable AGE contain when the name of the employee is \"Sue\"?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 30",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 33",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 40",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file EMPLOYEE are listed below:\n----|----10---|----20---|----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile 'employee';\ninput employee_name $ 1-4;\nif employee_name = 'Ruth' then input idnum 10-11;\nelse input age 7-8;\nrun;\nWhich one of the following values does the variable IDNUM contain when the name of the employee is \"Ruth\"?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 22",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 32",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS PRINT procedure output of the WORK.LEVELS data set is listed below:\nObs name level\n1 Frank 1\n2 Joan 2\n3 Sui 2\n4 Jose 3\n5 Burt 4\n6 Kelly .\n7 Juan 1\nThe following SAS program is submitted:\ndata work.expertise;\nset work.levels;\nif level = . then\nexpertise = 'Unknown';\nelse if level = 1 then\nexpertise = 'Low';\nelse if level = 2 or 3 then\nexpertise = 'Medium';\nelse\nexpertise = 'High';\nrun;\nWhich of the following values does the variable EXPERTISE contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Low, Medium, and High only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Low, Medium, and Unknown only",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Low, Medium, High, and Unknown only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Low, Medium, High, Unknown, and ' ' (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file SIZE are listed below:\n----|----10---|----20---|----30\n72 95\nThe following SAS program is submitted:\ndata test;\ninfile 'size';\ninput @1 height 2. @4 weight 2;\nrun;\nWhich one of the following is the value of the variable WEIGHT in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 72",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 95",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS program is submitted and the following SAS log is produced:\n2 data gt100;\n3 set ia.airplanes\n4 if mpg gt 100 then output;\n22 202\nERROR: File WORK.IF.DATA does not exist.\nERROR: File WORK.MPG.DATA does not exist.\nERROR: File WORK.GT.DATA does not exist.\nERROR: File WORK.THEN.DATA does not exist.\nERROR: File WORK.OUTPUT.DATA does not exist.\nERROR 22-322: Syntax error, expecting one of the following: a name,\na quoted string, (, ;, END, KEY, KEYS, NOBS, OPEN, POINT, _DATA_, _LAST_, _NULL_.\nERROR 202-322: The option or parameter is not recognized and will be ignored.\n5 run;\nThe IA libref was previously assigned in this SAS session.\nWhich one of the following corrects the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Delete the word THEN on the IF statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Add a semicolon at the end of the SET statement.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Place quotes around the value on the IF statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add an END statement to conclude the IF statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file CALENDAR are listed below:\n----|----10---|----20---|----30\n01012000\nThe following SAS program is submitted:\ndata test;\ninfile 'calendar';\ninput @1 date mmddyy10.;\nif date = '01012000'd then event = 'January 1st';\nrun;\nWhich one of the following is the value of the EVENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 01012000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. January 1st",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.january;\nset work.allmonths (keep = product month num_sold cost);\nif month = 'Jan' then output work.january;\nsales = cost * num_sold;\nkeep = product sales;\nrun;\nWhich variables does the WORK.JANUARY data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRODUCT and SALES only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. PRODUCT, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. PRODUCT, SALES, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An incomplete output data set is created due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales;\nset work.monthlysales(keep = year product sales);\nretain monthsales {12} ;\narray monthsales {12} ;\ndo i = 1 to 12;\nmonthsales{i} = sales;\nend;\ncnt + 1;\nmonthsales{cnt} = sales;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five years for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program runs with warnings and creates the WORK.TOTALSALES data set with 60 observations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program runs without errors or warnings and creates the WORK.TOTALSALES data set with 60 observations.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales (keep = monthsales{12} );\nset work.monthlysales (keep = year product sales);\narray monthsales {12} ;\ndo i=1 to 12;\nmonthsales{i} = sales;\nend;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five years for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program executes with warnings and creates the WORK.TOTALSALES data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program executes without errors or warnings and creates the WORK.TOTALSALES data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true when SAS encounters a data error in a DATA step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The DATA step stops executing at the point of the error, and no SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A note is written to the SAS log explaining the error, and the DATA step continues to execute.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A note appears in the SAS log that the incorrect data record was saved to a separate SAS file for further examination.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The DATA step stops executing at the point of the error, and the resulting DATA set contains observations up to that point.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following statements is true regarding the SAS automatic _ERROR_ variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable contains the values 'ON' or 'OFF'.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR_ variable contains the values 'TRUE' or 'FALSE'.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable is automatically stored in the resulting SAS data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The _ERROR_ variable can be used in expressions or calculations in the DATA step.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file AMOUNT are listed below:\n----|----10---|----20---|----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile 'amount';\ninput @1 salary 6.;\nrun;\nWhich one of the following is the value of the SALARY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1234",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1,234",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. $1,234",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file NAMENUM are listed below:\n----|----10---|----20---|----30\nJoe xx\nThe following SAS program is submitted:\ndata test;\ninfile 'namenum';\ninput name $ number;\nrun;\nWhich one of the following is the value of the NUMBER variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. xx",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Joe",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file AMOUNT are listed below:\n----|----10---|----20---|----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile 'amount';\ninput @1 salary 6.;\nif _error_ then description = 'Problems';\nelse description = 'No Problems';\nrun;\nWhich one of the following is the value of the DESCRIPTION variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Problems",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. No Problems",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ' ' (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset sasuser.employees;\nif 2 le years_service le 10 then\namount = 1000;\nelse if years_service gt 10 then\namount = 2000;\nelse\namount = 0;\namount_per_year = years_service / amount;\nrun;\nWhich one of the following values does the variable AMOUNT_PER_YEAR contain if an employee has been with the company for\none year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1000",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2000",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc means data = sasuser.houses std mean max;\nvar sqfeet run;\nWhich one of the following is needed to display the standard deviation with only two decimal\nplaces?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Add the option MAXDEC = 2 to the MEANS procedure statement.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Add the statement MAXDEC = 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Add the statement FORMAT STD 7.2; in the MEANS procedure step.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add the option FORMAT = 7.2 option to the MEANS procedure statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true when SAS encounters a data error in a DATA step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The DATA step stops executing at the point of the error, and no SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A note is written to the SAS log explaining the error, and the DATA step continues to execute.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A note appears in the SAS log that the incorrect data record was saved to a separate SAS\nfile for further examination.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The DATA step stops executing at the point of the error, and the resulting DATA set contains\nobservations up to that point.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set WORK.SALARY, currently ordered by DEPARTMENT, contains 100\nobservations for each of 5 departments.\nWhich one of the following represents how many observations the WORK.TOTAL data set\ncontains?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 20",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 100",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.retail;\ncost = ‘20000’;\ntotal = .10*cost;\nrun;\nWhich one of the following is the value of the variable TOTAL in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2000",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. ‘2000’",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘ ‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata ‘SAS-data-library’;\ndata test;\nset sasdata.chemists;\nif jobcode = ‘chem3’\nthen description = ‘Senior Chemist’;\nelse description = ‘Unknown’;\nrun;\nA value for the variable JOBCODE is listed below:\nJOBCODE\nCHEM3\nWhich one of the following values does the variable DESCRIPTION contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. chem3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘ ‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted;\ndata work.month;\ndate = put(’13mar2000’d,ddmmw10.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. numeric, 10bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 10 bytes",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set QTR 1_REVENUE is listed below:\nThe following SAS program is submitted:\nproc sort data = qtrl_revenue;\nby destination descending revenue;\nrun;\nWhich one of the following represents the first observation in the output data set?\ndestination revenue\nYYZ 53634\nFRA 62129\nFRA 75962\nRDU 76254\nYYZ 82174\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. destination revenue\nYYZ 82174",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. destination revenue\nYYZ 53634",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. destination revenue\nFRA 62129",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. destination revenue\nFRA 75962",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = ‘CPH’;\nselect(destination);\nwhen(’LHR’) city = ‘London’;\nwhen(’CPH’) city = ‘Copenhagen’;\notherwise;\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. London",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘ ‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted and reads 100 records from a raw data file:\ndata work.total;\ninfile ‘file-specification’ end = eof;\ninput name $ salary;\ntotsal + salary;\n&ltrinsert IF statement here>\nrun;\nWhich one of the following IF statements writes the last observation to the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if end = 0;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. if eof = 0;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. if end = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. if eof = 1;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 4;\nif amount = 4 then word = ‘FOUR’;\nelse if amount = 7 then word = ‘SEVEN’;\nelse word = ‘NONE!!!’;\namount = 7;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n7 FOUR",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. amount word\n7 FOUR",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n4 FOUR",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. amount word\n4 “ “",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view a listing of the SASUSER.HOUSES data set.\nstyle price\nCONDO $79,700\nRANCH $68,575\nSPLIT $77,983\nTWOSTORY $62,550\nThe following SAS program is submitted:\nproc report data = sasuser.houses nowd headline;\ncolumn style price;\nwhere price It 100000;\n&ltrinsert DEFINE statement here>\ndefine price / mean width = 9;\ntitle;\nrun;\nThe following output is created by the REPORT procedure:\nWhich one of the following DEFINE statements completes the above program and produces the\nabove output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / order width = 9;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / group width = 9;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. define style / across width = 9;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. define style / display width = 9;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.staff;\nJobCategory = ‘FA’;\nJobLevel = ‘1’;\nJobcategory = Jobcategory || JobLevel;\nrun;\nWhich one of the following is the value of the variable JOBCATEGORY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FA",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FA1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FA 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.TEST is listed below:\ncapacity airplanetype staff\n150 Large 10\nWhich one of the following SAS programs created this data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data work.test\ncapacity = 150;\n1100 le capacity le 200 then\nairplanetype = ‘Large’ and staff = 10;\nelse airplanetype = ‘Small’ and staff = 5;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = ‘Large’;\nstaff= 10;\nend;\nelse\ndo; airplanetype = ‘Small’;\nstaff = 5; end;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. data work.test;\ncapacity = 150;\nif 100 le capacity le 200\nthen\ndo;\nairplanetype = ‘Large’;\nstaff = 10;\nelse\ndo;\nairplanetype = ‘Small’; airplanetype = ‘Small’;\nstaff = 5;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data work.test;D.data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then;\nairplanetype = ‘Small’; airplanetype = ‘Small’;\nstaff = 5;\nelse;\nairplanetype = ‘Large’; airplanetype = ‘Large’;\nstaff = 10;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname rawdata1 ‘location of SAS data library’;\nfilename rawdata2 ‘location of raw data file’;\ndata work.testdata;\ninfile &ltrinsert item here>;\ninput sales1 sales2;\nrun;\nWhich one of the following is needed to complete the program correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. rawdata1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. rawdata2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ‘rawdata1’",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘rawdata2’",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS SORT procedure step generates an output data set:\nproc sort data = sasuser.houses out = report;\nby style;\nrun;\nIn which library is the output data set stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. WORK",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. REPORT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. HOUSES",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SASUSER",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is shown below:\n07Jan2002\nWhich one of the following in formats would read this value and store it as a SAS date value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. date9.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. dmonyy9.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ddMMMyy9.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ddmmmyyyy9.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\nlibname temp ‘SAS-data-library’;\ndata temp.report;\nset sasuser.houses;\nnewvar = price * 1.04;\nrun;\nWhich one of the following statements is true regarding the program above?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program is reading from a temporary data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program is reading from a temporary data set and writing to a permanent data set.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The program is reading from a permanent data set and writing to a temporary data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program is reading from a permanent data set and writing to a permanent data set.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----|----10----|----20----|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile ‘file-specification’;\ninput dept $ 1-11 number 13-15;\n&ltrinsert code here>\nrun;\nWhich one of the following SAS statements completes the program and results in a value of\n‘Printing 750’ for the DEPARTMENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = trim(dept) II number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = dept II input(number,3.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. department = trim(dept) II put(number,3.);",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. department = input(dept,11.) II input(number,3.);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of two SAS data sets named EMPLOYEE and SALARY are listed below.\nEMPLOYEE SALARY\nname age name salary\nBruce 30 Bruce 40000\nDan 35 Bruce 35000\nDan 37000\nDan -\nThe following SAS program is submitted:\ndata work.empsalary\nmerge work.employee (in = inemp)\nwork.salary (in = insal);\nby name;\nif inemp and insal;\nrun;\nHow many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following statements is true regarding the name of a SAS array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is saved with the data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It can be used in procedures.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It exists only for the duration of the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It can be the same as the name of a variable in the data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file FURNITURE are listed below:\n----|----10----|----20----|----30\nchair,,table\nchair,couch,table\nThe following SAS program is submitted:\ndata stock;\ninfile ‘furniture’ dsd;\ninput item 1 $ item2 $ item3 $;\nrun;\nWhich one of the following is the value of the variable named ITEM2 in the first observation of the\noutput data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. table",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. table",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file CALENDAR are listed below:\n----|----10----|----20----|----30\n01012000\nThe following SAS program is submitted:\ndata test;\ninfile ‘calendar’;\ninput@1 date mmddyy10.;\nif date = ‘01012000’d then event = ‘January 1st;\nrun;\nWhich one of the following is the value of the EVENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 01012000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. January 1st",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. .(missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.report;\nset work.sales_info;\nif qtr(sales_date) ge 3;\nrun;\nThe SAS data set WORK.SALES_INFO has one observation for each month in the year 2000\nand the variable SALES_DATE which contains a SAS date value for each of the twelve months.\nHow many of the original twelve observations in WORKSALES_INFO are written to the\nWORKREPORT data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 9",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.one;\nx = 3;\ny = 2;\nz = x **y;\nrun;\nWhich one of the following is the value of the variable Z in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 9",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. .(missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format\nvalue score 1 - 50 = ‘Fail’\n51 - 100 = ‘Pass’;\nrun;\nproc report data = work.courses nowd;\ncolumn exam;\ndefine exam / display format = score.;\nrun;\nThe variable EXAM has a value of 50.5.\nHow will the EXAM variable value be displayed in the REPORT procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. .(missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\narray agents{4}$ 12 sales1 - sales4\nrun;\nWhich one of the following represents the variables that are contained in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. SALES1, SALES2, SALES3, SALES4",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. AGENTS1, AGENTS2, AGENTS3, AGENTS4",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. None, the DATA step fails because the ARRAY statement can reference only numeric data.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None, the DATA step fails because the ARRAY statement can reference only pre-existing\nvariables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file PRODUCT are listed below:\n----I----10---I----20---I----30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile ‘product;\ninput idnum 5. @10 price;\nrun;\nWhich one of the following is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 25.31",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. $25.31",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No value is stored as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted;\ndata work.test;\nFirst = ‘lpswich, England’;\nCity = substr(First,1,7);\nCity_Country = City!!’ , ‘!!‘England’;\nrun;\nWhich one of the following is the value of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. lpswich!!",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. lpswich, England",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. lpswich, ‘England’",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. lpswich , England",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata numrecords;\ninfile ‘file-specification’;\ninput@1 patient $15.\nrelative$ 16-26@;\nif relative = ‘children’ then\ninput diagnosis $15. @;\nelse if relative = ‘parents’ then\ninput @28 doctor $15.\nclinic $ 44-53\n@54diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step during execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal):\nif insal and inemp;\nrun;\nThe SAS data set WORK.PEOPLE has 5 observations, and the data set WORK.MONEY has 7\nobservations.\nHow many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file SIZE are listed below:\n----I----10---I----20---I----30\n72 95\nThe following SAS program is submitted:\ndata test;\ninfile ‘size’;\ninput@1 height 2. @4 weight 2;\nrun;\nWhich one of the following is the value of the variable WEIGHT in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 72",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 95",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The observations in the SAS data set WORK.TEST are ordered by the values of the variable\nSALARY.\nThe following SAS program is submitted:\nproc sort data = work.test out = work.testsorted;\nby name;\nrun;\nWhich one of the following is the result of the SAS program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The data set WORKTEST is stored in ascending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data set WORKTEST is stored in descending order by values of the NAME variable.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data set WORKTESTSORTED is stored in ascending order by values of the NAME\nvariable.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data set WORKTESTSORTED is stored in descending order by values of the NAME\nvariable.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata allobs;\nset sasdata.origin (firstobs = 75 obs = 499);\nrun;\nThe SAS data set SASDATADRIGIN contains 1000 observations. How many observations does\nthe ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 424",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 425",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 499",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 1000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n----I----1 0---I----20---I----30\nJohn McCloskey 35 71\nJune Rosesette 1043\nTineke Jones 9 37\nThe following SAS program is submitted using the raw data file as input:\ndata work.homework;\ninfile ‘file-specification’;\ninput name $ age height\nif age LE 10;\nrun;\nHow many observations will the WORK.HOMEWORK data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No data set is created as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in (‘Sandal’ , ‘Slipper’ , ‘Boot’);\nrun;\nWhich one of the following ODS statements completes the program and sends the report to an\nHTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file html = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ods html file = ‘sales.html’;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nData_null;\nset old (keep = prod sales 1 sales2);\nfile ‘file-specification’;\nput sales1 sales2; run;\nWhich one of the following default delimiters separates the fields in the raw data file created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. : (colon)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. (space)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. , (comma)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ; (semicolon)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata_null;\nset old;\nput sales 1 sales2;\nrun;\nWhere is the output written?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the SAS log",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the raw data We that was opened last",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the SAS output window or an output file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the data set mentioned in the DATA statement",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "When the following SAS program is submitted, the data set SASDATA.PRDSALES contains 5000\nobservations:\nIibname sasdata ‘SAS-data-Iibrary’;\noptions obs = 500;\nproc print data = sasdata.prdsales (firstobs = 100);\nrun;\noptions obs = max;\nproc means data = sasdata.prdsales (firstobs = 500);\nrun;\nHow many observations are processed by each procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 400 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 401 for PROC PRINT\n4501 for PROC MEANS",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 401 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500 for PROC PRINT\n5000 for PROC MEANS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following ODS statement options terminates output being written to an HTML\nfile?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH, 1250,2,1 Sheppard Avenue,”$64,000”\nSPLIT,1 190,1,1 Rand Street”$65,850”\nCONDO,1400,2,1.5,Market Street,”80,050”\nTWOSTORY,1810,4,3,Garris Street,”$107,250”\nRANCH,1 500 ,3,3,Kemble Avenue “$86,650”\nSPLIT, 1615,4,3 ,West Drive,”94,450”\nSPLIT, 1305,3,1.5,Graham Avenue “$73,650”\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch\ninfile ‘file-specification’ dsd\ninput style $ @;\nif style = ‘CONDO’ or style = ‘RANCH’ then\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations does the WORK.CONDO_RANCH data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales;\nset work.monthlysales(keep = year product sales);\nretain monthsales {12};\narray monthsales {12};\ndo i = 1 to 12;\nmonthsales{i} = sales;\nend;\ncnt + 1;\nmonthsales{cnt} = sales;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five\nyears for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program runs with warnings and creates the WORK.TOTALSALES data set with 60\nobservations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program runs without errors or warnings and creates the WORK.TOTALSALES data set\nwith 60 observations.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one to the following SAS procedures displays the data portion of a SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRINT",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FSLIST",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CONTENTS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATASETS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata work.accounting;\nset work.department;\nlength jobcode $ 12;\nrun;\nThe WORK.DEPARTMENT SAS data set contains a character variable named JOSCODE with a\nlength of 5.\nWhich one of the following is the length of the variable JOSCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 8",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 12",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The length can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work january;\nset work.allmonths (keep = product month num_sold cost);\nif month = ‘Jan’ then output work.january;\nsales = cost * num_sold; keep product sales;\nrun;\nWhich variables does the WORK.JANUARY data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRODUCT and SALES only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. PRODUCT, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. PRODUCT, SALES, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An incomplete output data set is created due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one or the following SAS system options displays the time on a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. TIME",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DATE",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. TODAY",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DATETIME",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the SUM statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is only valid in conjunction with a SUM function.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is not valid with the SET, MERGE and UPDATE statements.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It does not retain the accumulator variable value from one iteration of the SAS DATA step to\nthe next.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = sasuser.houses out = houses;\nby style;\nrun;\nproc print data = houses;\n&ltrinsert statement(s) here>\nrun;\nClick on the Exhibit button to view the report produced.\nWhich of the following SAS statement(s) create(s) the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. id style;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. id style;\nvar style bedrooms baths price;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. id style; by style;\nvar bedrooms baths price;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. id style; by style;\nvar style bedrooms baths price;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS statements correctly computes the average of four numerical\nvalues?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. average = mean(num1 - num4);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. average = mean(of num1 - num4)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. average = mean(of num1 to num4);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. average = mean(num1 num2 num3 num4);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORKEMPLOYEE and WORKSALARY are shown below:\nWORK.EMPLOYEE WORK.SALARY\nfname age fname salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\n&ltrinsert MERGE statement here>\nby fname;\ntotsal + salary;\nrun;\nWhich one of the following statements completes the merge of the two data sets by the ENAME\nvariable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. merge work.employee\nwork.salary (fname = name);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. merge work.employee\nwork.salary (name = fname);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. merge work.employee\nwork.salary (rename = (fname = name));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. merge work.employee\nwork.salary (rename = (name = fname));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.pieces;\ndo while (n It 6);\nn + 1; end;\nrun;\nWhich one of the following is the value of the variable N in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the SAS data set PERM.JAN_SALES are listed below:\nA comma delimited raw data tile needs to be created from the PERM.JAN_SALES data set.\nVARIABLE NAME TYPE\nidnum character variable\nsales_date numeric date value\nThe SALES_DATE values need to be in a MMDDYY10 form.\nWhich one of the following SAS DATA steps correctly creates this raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname perm ‘SAS-data-library’;\ndata_null;\nset perm.jan_sales;\nfile ‘file-specification’ dsd = ‘,’;\nput idnum sales_date: mmddyy10.;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname perm ‘SAS-data-library’;\ndata_null_;\nset perm.jan_sales;\nfile ‘file-specification’ dIm = ‘,’;\nput idnum sales_date : mmddyy10.;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. libname perm ‘SAS-data-library’;\ndata_null_;\nset perm.jan_sales;\nfile ‘file-specification’;\nput idnum sales_date : mmddyq10.dIm = ‘,’;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname perm ‘SAS-data-library”;\ndata_null_;\nset perm jan_sales;\nfile ‘file-specification’;\nput idnum sales_date: mmddyy10. dsd = ‘,’; put idnum sales_date: mmddw10. dsd = ‘,’;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents or the raw data rile AMOUNT are listed below:\n----|----10----|----20----|----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile ‘amount’;\ninput@1 salary 6.;\nrun;\nWhich one of the following is the value or the SALARY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1234",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1,234",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. $1,234",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been assigned a\npermanent label of “Asking Price”.\nWhich one of the following SAS programs temporarily replaces the label “Asking Price” with the\nlabel “Sale Price” in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses;\nlabel price = “Sale Price”;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses label;\nlabel price “Sale Price”;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses label;\nlabel price = “Sale Price”;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses label = “Sale Price”;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\nrun;\nA character variable named JOSCODE is contained in both the WORK.DEPT1 and\nWORK.DEPT2 SAS data sets. The variable JOSCODE has a length of 5 in the WORK.DEPT1\ndata set and a length of 7 in the WORPK.DEPT2 data set.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following statements is true regarding the SAS automatic _ERROR_ variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable contains the values ‘ON’ or ‘OFF’.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR_ variable contains the values ‘TRUE’ or ‘FALSE’.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable is automatically stored in the resulting SAS data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The _ERROR_ variable can be used in expressions or calculations in the DATA step.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SASS program is submitted:\ndata work.sales;\ndo year = 1 to 5;\ndo month = 1 to 12;\nx+ 1;\nend;\nrun;\nWhich one of the following represents how many observations are written to the WORK SALES\ndata set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.AWARDS is listed below:\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Wang 3\nGerard 3\nWang 2\nAmy 2\nWang 1\nAmy 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Wang 3\nWang 2\nWang 1\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Wang 3\nWang 1\nWang 2\nGerard 3\nAmy 2\nAmy 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Wang 1D.Wang 1\nWang 2\nWang 3\nGerard 3\nAmy 1\nAmy 2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc contents data = sasuser.airplanes;\nrun;\nWhich one of the following is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the data portion of the data set SASUSER.AIRPLANES only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion of every data set in the SASUSER library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the descriptor portion of the data set SASUSER AIRPLANES only",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.company;\nset work.dept1(keep = jobcode)\nwork.dept2(rename (jcode = jobcode));\nrun;\nWhich one of the following is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable JCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable JOBCODE is written to the output data set.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Neither variable JOODE nor JOBCODE is written to the output data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = ‘Christie, Agatha’;\nFirst = substr(scan(author,2,’ ,‘),1, 1);\nrun;\nWhich one of the following is the value of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. C",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Agatha",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS DATA steps saves the temporary data set named MYDATA as a\npermanent data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname sasdata ‘SAS-data-Iibrary’;\ndata sasdata.mydata; copy mydata; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname sasdata ‘SAS-data-Iibrary’; data sasdata.mydata;\nkeep mydata; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata ‘SAS-data-Iibrary’; data sasdata.mydata;\nsave mydata; run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname sasdata ‘SAS-data-Iibrary’; data sasdata.mydata;\nset mydata; run;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nmon = 3;\nday = 23;\nyear = 2000;\ndate = mdy(mon,day,year); run;\nWhich one of the following is the value of the DATE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value ‘23mar2000’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value ‘03/23/2000’",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a numeric value of 14692, which represents the SAS date value for March 23, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. a numeric value of 3232000, which represents the SAS date value for March 23, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc report data = sasuser.houses nowd headline headskip;\ncolumn style price;\nwhere price < 100000;\n&ltrinsert code here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure.\nAssuming that the PRICE variable is numeric, which one of the following completes the program\nand produces the output displayed in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / group ‘Style’;\ndefine price / mean ‘Price’ format = dollar9.;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / display ‘Style’;\ndefine price / across ‘Price’ format = dollar9.;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / display ‘Style’;\ndefine price / sum ‘Price’ format = dollar9.;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. define style / order ‘Style’;\ndefine price / mean ‘Price’ format = dollar9.;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n----I---- 10---I----20---I----30\nsquash 1.10\napples 2.25\njuice 1.69\nThe following SAS program is submitted using the raw data file above:\ndata groceries;\ninfile ‘file-specification’;\ninput item $ cost;\n&ltrinsert statement(s) here>\nrun;\nWhich one of the following completes the program and produces a grand total for all COST\nvalues?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. grandtot = sum cost;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. grandtot = sum(grandtot,cost);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. retain grandtot 0;\ngrandtot = sum(grandtot,cost);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. grandtot = sum(grandtot,cost);\noutput grandtot;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Unless specified, which variables and data values are used to calculate statistics in the MEANS\nprocedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. non-missing numeric variable values only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. missing numeric variable values and non-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. nun-missing character variables and nun-missing numeric variable values only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. missing character variables, nun-missing character variables, missing numeric variable\nvalues, and nun-missing numeric variable values",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc print data = sasuser.houses;\nrun;\n&ltrinsert OPTIONS statement here>\nproc means data = sasuser.shoes;\nrun;\nWhich one of the following OPTIONS statements resets the page number to 1 for the second\nreport?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. options pageno = 1;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. options pagenum = 1;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. options reset pageno = 1;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. options reset pagenum = 1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file EMPLOYEE are listed below:\n----|----10----|----20----|----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 4044\nThe following SAS program is submitted:\ndata test;\ninfile ‘employee’;\ninput employee_name $ 1-4;\nif employee_name = ‘Sue’ then input age 7-8;\nelse input idnum 10-11;\nrun;\nWhich one of the following values does the variable AGE contain when the name of the employee\nis “Sue”?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 30",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 33",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 40",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set BANKS is listed below:\nThe following SAS program is submitted:\ndata newbank;\ndo year = 1 to 3;\nset banks;\ncapital + 5000;\nend;\nrun;\nWhich one of the following represents how many observations and variables will exist in the SAS\ndata set NEWBANK?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0 observations and 0 variables",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1 observations and 4 variables",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3 observations and 3 variables",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 9 observations and 2 variables",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.passengers;\nif OrigPassengers = then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = sum (OrigPassengers, TransPassengers);\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 100",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 110",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TYPECOLOR are listed below:\n----|----10----|----20----|----30\nDaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile typecolor’;\ninput type $ 1-5 +1 color$;\nrun;\nWhich one of the following represents the values of the variables TYPE and COLOR?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. type color\ndaisy yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. type color\ndaisy ellow",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. type color\ndaisyyellow (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No values are stored as the program fails to execute fails to execute due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set EMPLOYEE_INFO is listed below:\nIDNUMBER Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially\nby descending expense values within each descending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by descending IDNumber Expenses;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by (IDNumber Expenses) descending;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. by IDNumber descending Expenses descending;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by descending IDNumber descending Expenses;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset sasuser.employees;\nif 2 le years_service le 10 then\namount = 1000;\nelse if years service gt 10 then\namount = 2000;\nelse\namount = 0;\namount_per_year = years_service / amount;\nrun;\nWhich one of the following values does the variable AMOUNT_PER_YEAR contain if an\nemployee has been with the company for one year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1000",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following is true of the RETAIN statement in a SAS DATA step program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It can be used to assign an initial value to _N_.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is only valid in conjunction with a SUM function.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. It has no effect on variables read with the SET, MERGE and UPDATE statements.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It adds the value of an expression to an accumulator variable and ignores missing values.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname rawdata1 ‘location of SAS data library’;\nfilename rawdata2 ‘location of raw data file’;\ndata work.testdata;\ninfile &ltrinsert item here>;\ninput sales 1 sales2;\nrun;\nWhich one of the following is needed to complete the program correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. rawdata1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. rawdata2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ‘rawdata1’",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘rawdata2’",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:data work.passengers;\ndata work.passengers;\nif OrigPassengers = then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = OrigPassengers + TransPassengers;\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 100",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 110",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named COMPANY.PRICES is listed below:\nThe following SAS program is submitted:\nlibname company ‘SAS-data-library’;\ndata hware inter soft;\nset company.prices (keep = producttype price);\nif price le 5.00;\nif producttype = ‘HARDWARE’ then output HWARE;\nelse if producttype = ‘NETWORK’ then output INTER;\nelse if producttype = ‘SOFTWARE’ then output SOFT;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TYPECOLOR are listed below:\n----I----10---I----20---I----30\nDaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile ‘typecolor;\ninput type$ 1-5+1 color$;\nrun;\nWhich one of the following represents the values of the variables TYPE and COLOR?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. type color\ndaisy yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. type color\ndaisy ellow",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. type color\ndaisyyellow (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No values are stored as the program fails to execute fails to execute due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view the output of a FREQ procedure.\nThe variable STYLE has a permanent label of ‘Style of homes” and the variable BEDROOMS has\na permanent label of “Number of bedrooms”.\nWhich one of the following SAS programs produced the output shown in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc freq data = sasuser.houses;\ntables style and bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc freq data = sasuser.houses;\ntables style * bedrooms;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc freq data = sasuser.houses;\ntables style bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc freq data = sasuser.houses;\ntables style; tables bedrooms;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file EMPLOYEE are listed below:\n----I----10---I----20---I----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile ‘employee’;\ninput employee_name $ 1-4;\nit employee_name = ‘Ruth’ then input idnum 10-11;\nelse input age 7-8;\nrun;\nWhich one of the following values does the variable IDNUM contain when the name of the\nemployee is “Ruth”?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 22",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 32",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted and reads 100 records from a raw data file:\ndata work.total;\ninfile ‘file-specification’ end = eof;\ninput name $ salary;\ntotsal + salary;\n&ltrinsert IF statement here>\nrun;\nWhich one of the following IF statements writes the last observation to the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if end = 0;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. if eof = 0;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. if end =1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. if eof = 1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS PRINT procedure output of the WORKLEVLLS data set is listed below:\nObs name level\n1 Frank 1\n2 Joan 2\n3 Sui 2\n4 Jose 3\n5 Burt 4\n6 Kelly .\n7 Juan 1\nThe following SAS program is submitted:\ndata work.expertise;\nset work.levels;\nif level = then\nexpertise ‘Unknown’;\nelse if level = 1 then\nexpertise = ‘Low’;\nelse if level = 2 or 3 then\nexpertise = ‘Medium’;\nelse\nexpertise = ‘High’;\nrun;\nWhich of the following values does the variable EXPERTISE contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Low, Medium, and High only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Low, Medium, and Unknown only",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Low, Medium, High, and Unknown only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Low, Medium, High, Unknown, and ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\n1901 2\n1905 1\n1910 6\n1925 .\n1941 1\nThe following SAS program is submitted and references the raw data file above:\ndata coins;\ninfile ‘file-specification’;\ninput year quantity;\n&ltrinsert statement(s) here>\nrun;\nWhich one of the following completes the program and produces a non-missing value for the\nvariable TOTQUANTITY in the last observation of the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. totquantity + quantity;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. totquantity = sum(totquantity + quantity);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. totquantity 0;\nsum totquantity;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. retain totquantity 0;\ntotquantity = totquantity + quantity;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set EMPLOYEE_INFO is listed below:\nIDNUMBER Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially\nby ascending expense values within each ascending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by Expenses IDNumber;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by IDNumber Expenses;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. by ascending (IDNumber Expenses);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by ascending IDNumber ascending Expenses;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file TEAM are listed below:\n----I----10---I----20---I----30\nJanice 10\nHenri 11\nMichael 11\nSusan 12\nThe following SAS program is submitted:\ndata group;\ninfile ‘team’;\ninput name $15. age 2.;\nfile ‘file-specification’;\nput name $15. +5 age 2.;\nrun;\nWhich one of the following describes the output created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a raw data file only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a SAS data set named GROUP only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a SAS data set named GROUP and a raw data file",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No output is generated as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.TEST is listed below:\nWhich one of the following SAS programs created this data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data work.test;\ncapacity= 150;\nif 100 le capacity le 200 then\nairplanetype = ‘Large’ and staff = 10;\nelse airplanetype = ‘Small’ and staff = 5;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data work.test capacity= 150; if 100 le capacity le 200 then do;\nairplanetype = ‘Large’; staff= 10; end;\nelse\ndo; airplanetype = ‘Small’; staff = 5; end; run;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. data work.test;\ncapacity = 150;\nif 100 le capacity le 200 then\ndo;\nairplanetype = ‘Large’;\nstaff = 10;\nelse\ndo;\nairplanetype = ‘Small’; airplanetype = ‘Small’;\nstaff = 5;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data work.test;D.data work.test\ncapacity = 150;\nif 100 le capacity le 200 then;\nairplanetype = ‘Small’; airplanetype = ‘Small’;\nstaff = 5;\nelse;\nairplanetype = ‘Large’; airplanetype = ‘Large’;\nstaff= 10;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file AMOUNT are listed below:\n----I----10---I----20---I----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile ‘amount;\ninput @1 salary 6\nif _error_ then description = ‘Problems’;\nelse description = ‘No Problems’;\nrun;\nWhich one of the following is the value of the DESCRIPTION variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Problems",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. No Problems",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ‘‘ (missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.month; d\nate = input(’13mar2000’,date9.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data\nset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. numeric, 8 bytes",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. numeric, 9 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. character, 8 bytes",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. character, 9 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 7;\nif amount = 5 then word = ‘CAT’;\nelse if amount = 7 then word = ‘DOG’;\nelse word = ‘NONE!!!’;\namount = 5;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n5 DOG",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. amount word\n5 CAT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n7 DOG",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. amount word\n7 “ “ (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.clients;\ncalls = 6;\ndo while (calls le 6);\ncalls + 1;\nend;\nrun;\nWhich one of the following is the value of the variable CALLS in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 6",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set named WORK.SALARY contains 10 observations for each department,\ncurrently ordered by DEPARTMENT.\nWhich one of the following is true regarding the program above?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The BY statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. FIRST.DEPARTMENT and LAST DEPARTMENT are variables in the WORK.TOTAL data\nset.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable PAYROLL represent the total for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable PAYROLL represent a total for all values of WAGERATE in the\nWORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS system options prevents the page number from appearing on a\nreport?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NONUM",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NOPAGE",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. NONUMBER",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. NOPAGENUM",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in (‘Sandal’ , ‘Slipper’ , ‘Boot’);\nrun;\nWhich one of the following ODS statements completes the program and sends the report to an\nHTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file html = ‘sales.html’;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ods html file = ‘sales.html’;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step executes on Monday, April 25, 2000:\ndata newstaff;\nset staff;\nstart_date = today();\nrun;\nWhich one of the following is the value of the variable START_DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a character string with the value ‘04/25/2000’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. a character string with the value ‘Monday, April 25, 2000’",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the numeric value 14725, representing the SAS date for April 25, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. the numeric value 04252000, representing the SAS date for April 25, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The value 110700 is stored in a numeric variable.\nWhich one of the following SAS formats is used to display the value as $110,700.00 in a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. comma8.2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. comma11.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. dollar8.2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. dollar11.2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----I----10---I----20---I----30 s\nOn, Travis,\nThe following output is desired:\nrelation fristname\nson Travis\nWhich one of the following SAS programs reads the data correctly?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data family/dIm = ‘ , ‘;\ninfile ‘file-specification’;\ninput relation $ firstname $;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. options dIm = ‘ , ‘;\ndata family;\ninfile ‘file-specification’;\ninput relation $ firstname $;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data family;\ninfile ‘file-specification’ dim = ‘ , ‘;\ninput relation $ firstname $;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data family,\ninfile ‘file-specification’;\ninput relation $ firstname $ / dIm = ‘ , ‘;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A realtor has two customers. One customer wants to view a list of homes selling for less than\n$60,000. The other customer wants to view a list of homes selling for greater than $100,000.\nAssuming the PRICE variable is numeric, which one of the following PRINT procedure steps will\nselect all desired observations?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses;\nwhere price It 60000;\nwhere price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses;\nwhere price It 60000 or price gt 100000;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses;\nwhere price It 60000 and price gt 100000;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses;\nwhere price It 60000 or where price gt 100000;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data=work.employee;\nby descending fname;\nproc sort data=work.salary;\nby descending fname;\ndata work.empdata;\nmerge work.employee\nwork salary;\nby fname;\nrun;\nWhich one of the following statements explains why the program failed execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SORT procedures contain invalid syntax.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The merged data sets are not permanent SAS data sets.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data sets were not merged in the order by which they were sorted.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The RUN statements were omitted after each of the SORT procedures.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata_null_;\nset old;\nput sales 1 sales2;\nrun;\nWhere is the output written?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the SAS log",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the raw data file that was opened last",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the SAS output window or an output file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the data set mentioned in the DATA statement",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc freq data = sales;\n&ltrinsert TABLES statement here>\nrun;\nClick the Exhibit button to view the output from the FREQ procedure.\nWhich one of the following statements completes the program and produces the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region * product",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. tables product region;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables product * region;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.products;\nProduct_Number = 5461;\nItem = ‘1001’;\nItem_Reference = ltem||’/’IlProduct_Number; run;\nWhich one of the following is the value of the variable ITEM_REFERENCE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1001/5461",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1001/ 5461",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nfootnote1 ‘Sales Report for Last Month’;\nfootnote2 ‘Selected Products Only’;\nfootnote3 ‘All Regions’;\nfootnote4 ‘All Figures in Thousands of Dollars’;\nproc print data = sasuser.shoes;\nfootnote2 ‘All Products’;\nrun;\nWhich one of the following contains the footnote text that is displayed in the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. All Products",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Sales Report for Last Month\nAll Products",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. All Products All Regions\nAll Figures in Thousands of Dollars",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Sales Report for Last Month\nAll Products\nAll Regions\nAll Figures in Thousands of Dollars",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS SORT procedure step generates an output data set\nproc sort data = sasuser.houses out = report;\nby style;\nrun;\nIn which library is the output data set stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. WORK",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. REPORT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. HOUSES",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SASUSER",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Click the Exhibit button to view two reports.\nAssume permanent variable labels have been assigned. The following SAS program is submitted\nand produces the first report:\nproc report data = sasuser.shoes nowd; column region subsidiary sales; define subsidiary /\ndisplay; define region / group; define sales / sum;\nWhich one of the following corrects the program above to produce the second report shown in the\nexhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Define the variable SUBSIDIARY with a SUM usage.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Define the variable SUBSIDIARY with a GROUP usage.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Define the variable SUBSIDIARY with an ORDER usage.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Define the variable SUBSIDIARY with an ACROSS usage.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhich one of the following is the value of the variable PROD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following ODS statement options terminates output being written to an HTML\nfile?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc datasets lib = sasuser;\ncontents data = class varnum;\nquit;\nWhich one of the following is the purpose of the VARNUM option?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. to print a list of variable names",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. to print the total number of variables",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. to print a list of the variables in alphabetic order",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. to print a list of the variables in the order they were created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the SAS data set named PEPM.STUDENTS are listed below:\nname age\nAlfred 14\nAlice 13\nBarbaba 13\nCarol 14\nThe following SAS program is submitted using the PERM STUDENTS data set as input\nlibname perm ‘SAS-data-library’;\ndata students;\nset perm.students;\nfile ‘file-specification’;\nput name $15. @5 age 2.; run;\nWhich one of the following represents the values written to the output raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ----I----10---I----20---I----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ----I----10---I----20---I----30\nAIfr14\nAlicl3\nBarb 13a\nCarol 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ----I----10---I----20---I----30\nAlfr14ed\nAlicl3e\nBarb l3ara\nCarol4l",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ----I----10---I----20---I----30----I----10---I----20---I----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nIibname sasdata ‘SAS-data-library’;\ndata test;\nset sasdata.chemists;\nif jobcode = ‘Chem2’\nthen description = ‘Senior Chemist’;\nelse description = ‘Unknown’;\nrun;\nA value for the variable JOBCODE is listed below:\nJOSCODE\nchem2\nWhich one of the following values does the variable DESCRIPTION contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Chem2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘ ‘ (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A SAS program is submitted and the following SAS log is produced:\n2 data gt100;\n3 set ia.airplanes\n4 if mpg gt 100 then output\n22 202\nERROR: File WORK.IF.DATA does not exist.\nERROR: File WORK.MPG.DATA does not exist.\nERROR: File WORK.GT.DATA does not exist.\nERROR: File WORK.THEN.DATA does not exist.\nERROR: File WORK.OUTPUT DATA does not exist.\nERROR 22-322: Syntax error, expecting one of the following: a name, a quoted string, (,;, END,\nKEY, KEYS, NOBS, OPEN, POINT,_DATA_,_LAST_, NULL_\nERROR 202-322: The option or parameter is not recognized and will be ignored.\n5 run;\nThe IA libref was previously assigned in this SAS session.\nWhich one of the following corrects the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Delete the word THEN on the IF statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Add a semicolon at the end of the SET statement.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Place quotes around the value on the IF statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Add an END statement to conclude the IF statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file PRODUCT are listed below:\n----I----10---I----20---I----30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile ‘product’;\ninput idnum 5. @10 price;\nrun;\nWhich one of the following is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 25.31",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. $25.31",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No value is stored as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata revenue;\nset year_1;\nvar1 = mdy(1,15,i960);\nrun;\nWhich one of the following values does the variable named VAR1 contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 14",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1151960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘1/15/1960’",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data file is listed below:\nRANCH,1250,2,1 ,Sheppard Avenue,”$64.000”\nSPLIT,1,190,1,1,Rand Street,”$65,850”\nCONDO,1400,2,1.5,Market Street,”80,050”\nTWOSTORY,18104,3,Garris Street,”$107,250”\nRANCH,1500,3,3,Kemble Avenue,”$86,650”\nSPLIT,1615A,3,West Drive,”94,A50”\nSPLIT,1305,3,1.5,Graham Avenue,”$73,650”\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile ‘file-specification’ dsd;\ninput style $ @;\nif style = ‘CONDO’ or style = ‘RANCH’;\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations will the output data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORK.PEOPLE has 5 observations, and the data set WORK.MONEY has 7\nobservations. How many observations will the data set WORKEMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A raw data record is listed below:\n----I----10---I----20---I----30\n1999/10/25\nThe following SAS program is submitted:\ndata projectduration;\ninfile ‘file-specification’;\ninput date$ 1- 10;\n&ltrinsert statement here>\nrun;\nWhich one of the following statements completes the program above and computes the duration\nof the project in days as of today’s date?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. duration = today( ) - put(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. duration = today( ) - put(date,yymmdd10.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. duration = today( ) - input(date,ddmmyy10.);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. duration = today( ) - input(date,yymmdd10.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "In the following SAS program, the input data files are sorted by the NAMES variable:\nlibname temp SAS-data-library’;\ndata temp.sales;\nmerge temp.sales\nwork.receipt;\nby names;\nrun;\nWhich one of the following results occurs when this program is submitted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program executes successfully and a temporary SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program executes successfully and a permanent SAS data set is created.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program fails execution because the same SAS data set is referenced for both read and\nwrite operations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails execution because the SAS data sets on the MERGE statement are in two\ndifferent libraries.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "When the following SAS program is submitted, the data set SASDATA.PRDSALES contains 5000\nobservations:\nlibname sasdata ‘SAS-data-library’;\noptions obs = 500;\nproc print data = sasdata.prdsales (firstobs = 100);\nrun;\noptions obs = max;\nproc means data = sasdata.prdsales (firstobs = 500);\nrun;\nHow many observations are processed by each procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 400 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 401 for PROC PRINT\n4501 for PROC MEANS",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 401 for PROC PRINT\n4500 for PROC MEANS",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 500 for PROC PRINT\n5000 for PROC MEANS",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nFirst = ‘lpswich, England’;\nCity_Country = substr(First,1,7)!!’, ‘!!‘England’;\nrun;\nWhich one of the following is the length of the variable CITY_COUNTRY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 17",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.january;\nset work.allmonths (keep = product month num_sold cost);\nif month = ‘Jan’ then output work.january\nsales = cost * num_sold;\nkeep = product sales;\nrun;\nWhich variables does the WORK.JANUARY data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PRODUCT and SALES only",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. PRODUCT, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. PRODUCT, SALES, MONTH, NUM_SOLD and COST only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An incomplete output data set is created due to syntax errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "On which portion(s) of a SAS data set does the PRINT procedure report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the data portion only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the descriptor portion only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the descriptor portion and the data portion",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. neither the data portion nor the descriptor portion",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata numrecords;\nmule ‘file-specification’;\nmnput@1 patient $15.\nrelative$ 16-26@;\nif relative = ‘children’ then\ninput @54 diagnosis $15. @;\nelse if relative = ‘parents’ then\ninput @28 doctor $15.\nclinic $ 44-53\n@54 diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step during execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata stats;\nset revenue;\narray weekly{5} mon tue wed thu fri;\n&ltrinsert DO statement here>\ntotal = weekly{i} * .25;\noutput;\nend;\nrun;\nWhich one of the following DO statements completes the program and processes the elements of\nthe WEEKLY array?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. do I = 1 to 5;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. do weekly{i) = 1 to 5;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. do i = mon tue wed thu fri;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A DO loop cannot be used because the variables referenced do not end in a digit.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = ‘cph’;\nselect(destination); when(’LHR’) city = ‘London’;\nwhen(’CPH’) city = ‘Copenhagen’;\notherwise city = ‘Other’;\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Other",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc report data = work.houses nowd;\ncolumn style price;\nwhere price < 100000;\n&ltrinsert DEFINE statements here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure.\nAssume permanent variable labels have been assigned. Which one of the following completes\nthe program and produces the output displayed in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / display width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / group width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. define style / order width = 9;\ndefine price / sum format = comma9. width = 10;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS DATA step is submitted:\ndata sasdata.atlanta\nsasdata.boston\nwork.portland work.phoenix;\nset company.prdsales;\nif region = ‘NE’ then output boston;\nif region = ‘SE’ then output atlanta;\nif region = ‘SW’ then output phoenix;\nif region = ‘NW’ then output portland;\nrun;\nWhich one of the following is true regarding the output data sets?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. No library references are required.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The data sets listed on all the IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The data sets listed in the last two IF statements require a library reference.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets listed in the first two IF statements require a library reference.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which one of the following SAS statements renames two variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. set work.dept1\nwork.dept2(rename = Ucode =jobcode)\n(sal salary));",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. set work.dept1\nworkdept2(rename = Ucode =jobcode\nsal = salary));",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. set work.dept1\nwork.dept2(rename =jcode =jobcode\nsal = salary);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. set work.dept1\nwork.dept2(rename = Ucode jobcode)\n(sal salary));",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales (keep = monthsales{12});\nset work.monthlysales (keep = year product sales);\narray monthsales {12} ;\ndo i=1 to 12;\nmonthsales{i} = sales;\nend;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five\nyears for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails execution due to data errors.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program fails execution due to syntax errors.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program executes with warnings and creates the WORK.TOTALSALES data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program executes without errors or warnings and creates the WORKTOTALSALES data\nset.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp ‘SAS-data-library’;\ndata work.new;\nset temp.jobs;\nformat newdate mmddyy10.;\nqdate = qtr(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new;\nrun;\nThe variable NEWDATE contains the SAS date value for April 15, 2000. What output is produced\nif April 15, 2000 falls on a Saturday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs newdate qdate ddate\n1 APR152000 2 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate qdate ddate\n1 04/15/2000 2 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs newdate qdate ddate\n1 APP152000 2 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate qdate ddate\n1 04/15/2000 2 7",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nTitle = ‘A Tale of Two Cities, Charles J. Dickens’;\nWord = scan(title,3,’ ,‘);\nrun;\nWhich one of the following is the value of the variable WORD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. T",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. of",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Dickens",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\noptions pageno = 1;\nproc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nThe report created by the PRINT procedure step generates 5 pages of output. What is the page\nnumber on the first page of the report generated by the MEANS procedure step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.one;\nx = 3;\ny = 2;\nz = x ** y;\nWhich one of the following is the value of the variable Z in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 9",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. (missing numeric value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program tails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORKSALARY are listed below:\nWORK.EMPLOYEE WORK. SALARY\nname age name salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\ntotsal + salary;\nrun;\nHow many variables are output to the WORK.EMPDATA data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No variables are output to the data set as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.staff;\nJobCategory’ = ‘FA’;\nJobLevel = ‘1’;\nJobCategory = JobCategory || JobLevel;\nrun;\nWhich one of the following is the value of the variable JOSCATEGORY in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FA",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FA1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FA1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set BANKS is listed below:\nBANKS\nname rate\nFirstCapital 0.0718\nDirectBank 0.0721\nVirtualDirect 0.0728\nThe following SAS program is submitted:\ndata newbank;\ndo year = 1 to 3;\nset banks;\ncapital + 5000;\nend;\nrun;\nWhich one of the following represents how many observations and variables will exist in the SAS\ndata set NEWBANK?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0 observations and 0 variables",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1 observations and 4 variables",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3 observations and 3 variables",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 9 observations and 2 variables",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The contents of the raw data file NAMENUM are listed below:\n----I----10---I----20---I----30\nJoe xx\nThe following SAS program is submitted:\ndata test;\ninfile ‘namenum’;\ninput name $ number;\nrun;\nWhich one of the following is the value of the NUMBER variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. xx",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Joe",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The value can not be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname sasdata ‘SAS-data-library’;\ndata test;\nset sasdata.chemists (keep = job_code);\nif job_code ‘chem3’\nthen description = ‘Senior Chemist’;\nrun;\nThe variable JOB_CODE is a character variable with a length of 6 bytes.\nWhich one of the following is the length of the variable DESCRIPTION in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6 bytes",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 8 bytes",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 14bytes",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 200 bytes",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nset work.staff (keep = jansales febsales marsales);\narray diff_sales{3} difsales1 - ditsales3;\narray monthly{3} jansales febsales marsales;\nrun;\nWhich one of the following represents the new variables that are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. JANSALES, FEBSALES and MARSALES",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. MONTHLY1, MONTHLY2 and MONTHLY3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. DIFSALES1, DIFSALES2 and DIFSALES3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. DIFF_SALES1, DIFF_SALES2 and DIFF_SALES3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\nrun;\nA character variable named JOBCOE is contained in both the WORK.DEPT1 and WORK.DEPT2\nSAS data sets. The variable JOBCODE has a length of 5 in the WORK.DEPT1 data set and a\nlength of 7 in the WORK.DEPT2 data set.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SASDATA.BANKS data set has five observations when the following SAS program is\nsubmitted; libname sasdata ‘SAS-data-library’;\ndata allobs;\nset sasdata.banks;\ncapitaI=0;\ndo year = 2000 to 2020 by 5;\ncapital + ((capital+2000) * rate);\noutput;\nend;\nrun;\nHow many observations will the ALLOBS data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 20",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 25",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nAuthor = ‘Agatha Christie’;\nFirst = substr(scan(author,1,’ ,‘)1 ,1);\nrun;\nWhich one of the following is the length of the variable FIRST in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 15",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 200",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted: I\nibname company ‘SAS-data-library’;\nproc sort data = company.payroll;\nby EmployeelDNumber;\nrun;\nWrite access has been granted to the COMPANY library.\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. COMPANY.PAYROLL is recreated in sorted order by EmployeelDNumber.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. COMPANY.PAYROLL is stored in original order, and a new data set PAYROLL is created in\nsorted order by EmployeelDNumber.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. COMPANYPAYROLL is stored in original order, and a new data set\nCOMPANY.PAYROLLSORTED is created in sorted order by EmployeelDNumber.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. COMPANY.PAYROLL is recreated in sorted order by EmployeelDNumber, and a new data\nset PAYROLL is created in sorted order by Emp loyeelDNumber.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been assigned a\npermanent label of “Asking Price”. Which SAS program temporarily replaces the label “Asking\nPrice” with the label “Sale Price” in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses; label price = “Sale Price”; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses label; label price “Sale Price”; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses label; label price = “Sale Price”; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses; price = “Sale Price”; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following GAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal);\nif insal and inemp;\nrun;\nThe SAG data set WORKPEOPLE has 5 observations, and the data set WORKMONEY has 7\nobservations. How many observations will the data set WORK.EMPSALARY contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\njobcode = ‘FA1’;\nlength jobcode $ 8;\nrun;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and\nWORK.DEPT2 SAS data sets. The variable JOBCODE has a length of 5 in the WORK.DEPT1\ndata set and a length of 7 in the WORK.DEPT2 data set. What is the length of the variable\nJOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 8",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set SASDATA.TWO:\nSASDATA.TWO\nX Y\n-- __\n5 2\n3 1\n5 6\nThe following SAS program is submitted:\ndata sasuser.one two sasdata.three;\nset sasdata two;\nif x = 5 then output sasuser.one;\nelse output sasdata two;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data set SASUSER.ONE has 5 observations\ndata set SASUSER.TWO has 5 observations\ndata set WORK.OTHER has 3 observations",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 1 observations",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 5 observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No data sets are output.\nThe DATA step fails execution due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nfootnote 1 ‘Sales Report for Last Month’;\nfootnote2 ‘Selected Products Only’;\nfootnote3 ‘All Regions’;\nfootnote4 ‘All Figures in Thousands of Dollars’;\nproc print data = sasuser.shoes;\nfootnote2 ‘All Products’;\nrun;\nWhich footnote(s) is/are displayed in the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. All Products",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Sales Report for Last Month All Products",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. All Products All Regions All Figures in Thousands of Dollars",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Sales Report for Last Month All Products All Regions All Figures in Thousands of Dollars",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record DEPT:\n----|----10---|----20---|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile ‘dept’;\ninputdept$ 1-11 number 13- 15;\n&ltrinsert statement here>\nrun;\nWhich SAS statement completes the program and results in a value of ‘Printing750’ for the\nDEPARTMENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = dept II number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = left(dept) II number;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. department = trim(dept) number;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. department = trim(dept) put(number,3.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata one;\naddressl = ‘214 London Way’;\nrun;\ndata one;\nset one;\naddress = tranwrd(address1, ‘Way’, ‘Drive’); run;\nWhat are the length and value of the variable ADDRESS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Length is 14; value is ‘214 London Dri’.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Length is 14; value is ‘214 London Way’.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Length is 16; value is ‘214 London Drive’.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Length is 200; value is ‘214 London Drive’.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhat is the value of the variable PROD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data sets EMPLOYEE and SALARY:\nEMPLOYEE SALARY\nFname age name salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\n&ltrinsert MERGE statement here>\nby fname;\ntotsal + salary;\nrun;\nWhich MERGE statement correctly completes the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. merge employee\nsalary rename = fname = name;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. merge employee\nsalary rename(name = fname);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. merge employee\nsalary (rename = (fname = name));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. merge employee\nsalary (rename = (name = fname));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which program displays a listing of all data sets in the SASUSER library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib = sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents data = sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents lib = sasuser._alI_; run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc contents data = sasuser._all_; run;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = work.employee;\nby descending fname;\nproc sort data = work.salary;\nby descending fname;\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\nrun;\nWhy does the program rail to execute?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SORT procedures contain invalid syntax.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The merged data sets are not permanent SAS data sets.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The RUN statement was omitted alter each or the SORT procedures.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets were not merged in the order by which they were sorted.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program Is submittad:\ndata work.sales;\ndo year = 1 to 5;\ndo month=1 to 12;\nx+1;\noutput\nend;\nend;\nrun;\nHow many observations are written the WORK SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data record:\n----I----10---I----20---I----30\nson Travis,\nThe following output is desired:\nObs relation firstname\n1 son Travis\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data family ( dIm = ‘,’); infile ‘tile specification’; input relation $ firstname $; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. options dIm = ‘,’; data family; infile ‘file specification’; input relation $ firstname $; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data family; infile ‘file specification’ dIm = ‘,’; input relation $ firstname $; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data family; infile ‘file specification’; input relation $ firstname $ / dim = ‘,’; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set AGES:\nAGES\nAGE\n---------\nThe variable AGE contains character values. The following SAS program is submitted:\ndata subset;\nset ages;\nwhere age> 12;\nrun;\nHow many observations are written out to the data set SUBSET?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nprodid price producttype sales returns\nK12S 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY21.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\ndata hware inter soft;\nset prices (keep = producttype price);\nif price le 5.00;\nif producttype = ‘HARDWARE’ then output HWARE;\nelse if producttype = ‘NETWORK’ then output INTER;\nelse if producttype = ‘SOFTWARE’ then output SOFT;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.department;\nlength jobcode $ 12;\njobcode=’FAl’;\nrun;\nThe WORK.DEPARTMENT data set contains a character variable named JOBCODE with a\nlength of 5.\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The length of the variable JOBCODE is 3.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The length of the variable JOBCODE is 5.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The length of the variable JOSBODE is 12.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which ODS statement option terminates output being written to an HTML rile?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set PETS is sorted by the variables TYPE and BREED.\nThe following SAS program is submitted:\nproc print data = pets;\nvar type breed;\nsum number;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SUM statement produces only a grand total of NUMBER.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The SUM statement produces only subtotals of NUMBER for each value of TYPE.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The SUM statement produces both a grand total of NUMBER and subtotals of NUMBER for\neach value of TYPE.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Nothing is produced by the SUM statement; the program fails to execute.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.passengers;\nif OrigPassengers = then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers =\nTotalPassengers = sum (OrigPassengers, TransPassengers) +0;\nrun;\nWhat is the value of the TOTALPASSENGERS variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 100",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nProdid price producttype sales returns\nK125 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY2 1.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\ndata hware inter cheap;\nset prices(keep = productype price);\nif producttype = ‘HARDWARE’ then output hware; else if producttype = ‘NETWORK’ then output\ninter; if price le 5.00;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sales;\ndo year = 1 to 5;\ndo month = 1 to 12;\nx+ 1;\nend;\nend;\nrun;\nHow many observations are written to the WORK.SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.totalsales (keep = monthsales{12});\nset work.monthlysales (keep = year product sales);\narray monthsales{12);\ndo i = 1 to 12; monthsales{i) = sales;\nend;\nrun;\nThe program fails execution due to syntax errors. What is the cause of the syntax error?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable MONTHSALES does not exist.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. An array cannot be referenced on a KEEP data set option.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The KEEP= data set option should be (KEEP = MONTHSALES).",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The KEEP= data set option should be the statement KEEP MONTHSALES{12}.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set EMPLOYEES:\nEMPLOYEES\nNAME SALARY\n-------- ------------\nInnis 60000\nJolli 50000\nEllis 55000\nLiu 45000\nThe following SAS program is submitted:\nproc print data = employees; where name like ‘_i%’;\nrun;\nWhat is contained in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Liu only",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Innis and Ellis only",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Innis, Ellis, and Liu only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Innis, Jolli, Ellis, and Liu",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set ONE:\nONE\nObs Dte\n----- --------\n1 09JAN2005\n2 12JAN2005\nThe following SAS program is submitted:\ndata two;\nset one;\nday = &ltrinsert expression here>;\nformat dte date9.;\nrun;\nThe data set TWO is created:\nTWO\nObs Dte Day\n1 09JAN2005 1\n12 JAN2005 4\nWhich expression successfully completed the program and created the variable DAY?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. day(dte)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. weekday(dte)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. dayofweek(dte)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. datdif(dte,’01jan2005’d,’act/act’)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Read the table:\nGiven the SAS data set SASUSER.HOUSES:\nObs style bedrooms baths price sqteet street\n1 CONDO 2 1.5 80050 1200 MAIN\n2 CONDO 3 2.5 79350 1300 ELM\n3 CONDO 4 2.5 127150 1400 OAK\n4 CONDO 2 2.0 110700 1100 FIFTH\n5 TWOSTORY 4 3.0 107250 2100 SECOND\n6 TWOSTORY 2 1.0 55650 1600 WEST\n7 TWOSTORY 2 1.0 69250 1450 NORTH\n6 TWOSTORY 4 2.5 102950 2000 SOUTH\nThe following SAS program is submitted:\nproc report data = sasuser.houses nowd headline;\ncolumn style price;\nwhere price It 100000;\n&ltrinsert DEFINE statement here>\ndefine price / mean width = 9 format = dollar12.;\ntitle;\nrun;\nThe following output is desired:\nstyle price\n------- ------\nCONDO $79,700\nTWOSTORY $62550\nWhich DEFINE statement completes the program and produces the desired output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. define style / width = 9,",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. define style / orderwidth = 9;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. define style / group width = 9;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. define style / display width = 9;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORKAWARDS:\nWORK.AWARDS\nFNAME POINTS MONTH\n----------- ------------ -----------\nAmy 2 4\nAmy 1 7\nGerard 3 3\nWang 3 3\nWang 1 12\nWang 1 8\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nHow are the observations sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ENAME POINTS MONTH\nWang 3 3\nWang 1 12\nWang 1 8\nGerard 3 3\nAmy 2 4\nAmy 1 7",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ENAME POINTS MONTH\nAmy 2 4\nAmy 1 7\nGerard 3 3\nWang 3 3\nWang 1 8\nWang 1 12",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ENAME POINTS MONTH\nWang 3 3\nWang 1 8\nWang 1 12\nGerard 3 3\nAmy 2 4\nAmy 1 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ENAME POINTS MONTH\nWang 1 12\nWang 1 8\nWang 3 3\nGerard 3 3\nAmy 1 7\nAmy 2 4",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp ‘SAS data library’;\ndata work.new;\nset temp.jobs;\nformat newdate mmddw10.;\nmdate = month(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new; run;\nThe variable NEWDATE contains the SAS date value for April 15. 2005. What output is produced\nif April 15, 2005 falls on a Friday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obsnewdate mdate ddate\n104/15/2005 APR 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate mdate ddate\n104/15/2005 4 6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Obs newdate mdate ddate\n104/15/2005 APR 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate mdate ddate\n104/15/2005 4 7",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file PRODUCT:\n----I----10---I----20---I----30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile ‘product’;\ninput idnum 5. @10 price;\nrun;\nWhat is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 25.31",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. $25.31",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing numeric value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. No value is stored.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc contents data = sashelp.class varnum; quit;\nWhat does the VARNUM option print?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a list of variable names",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the total number of variables",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a list of the variables in alphabetic order",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. a list of the variables in the order they were created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset chemists;\nitjobcode = ‘Chem2’\nthen description = ‘Senior Chemist’;\nelse description = ‘Unknown’;\nrun;\nThe value for the variable JOBCODE is:\nJOBCODE\n-------------\nchem2\nWhat is the value of the variable DESCRIPTION?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. chem2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Chemist",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘ ‘ (missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the AIRPLANES data set\nAlRPLANES\nTYPE MPG\n-------- ------\nF-18 105\nC-130 25\nHarrier 75\nA-6 110\nThe following SAS program is submitted:\ndata gt100;\nset airplanes(keep = type mpg load);\nload = mpg * 150;\nrun;\nThe program fails to execute due to syntax errors.\nWhat is the cause of the syntax error?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. MPG is not a numeric variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LOAD is not a variable in the data set GT100.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LOAD is not variable in the data set AIRPLANES.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. LOAD must be defined prior to the SET statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file EMPLOYEE:\n----I----1 0---I----20---I----30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile ‘employee’;\ninput employee_name $ 1-4;\nif employee_name = ‘Ruth’ then input idnum 10-11;\nelse input age 7-8;\nrun;\nWhat value does the variable IDNUM contain when the name of the employee is “Ruth”?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 22",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 33",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata temp.x;\nset sasuser.y;\nrun;\nWhat must be submitted prior to this SAS program for the program to execute successfully?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A LIBNAME statement for the libref TEMP only must be submitted.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. A LIBNAME statement for the libref SASUSER only must be submitted.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LIBNAME statements for the librefs TEMP and SASUSER must be submitted.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No LIBNAME statement needs to be submitted.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The data set RALESTATE has the variable LOCALFEE with a format or 9. and a variable\nCOUNTRYFEE with a format or 7.;\nThe following SAS program is submitted:\ndata history;\nformat local fee country fee percent6.;\nset realestate;\nlocal fee = local fee / 100;\ncountry fee = country fee / 100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LOCALFEE has format of 9. and COUNTRYFEE has a format of 7.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LOCALFEE has format of 9. and COUNTRYFEE has a format of percent6.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LOCALFEE has format of percent6. and COUNTRYFEE has a format of percent6.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data step fails execution; there is no format for LOCALFEE",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc freq data = class;\ntables gender * age / &ltrinsert option here>;\nrun;\nThe following report is created:\nThe FREQ Procedure\nTable of gender by age\nRow Column\nGender age Frequency Percent Percent Percent\nF 11 1 10.00 20.00 50.00\n12 2 20.00 40.00 40.00\n13 2 20.00 40.00 66.67\nTotal 5 50.00 100.00\nM 11 1 10.00 20.00 50.00\n12 3 30.00 60.00 60,00\n13 1 10.00 20.00 33.33\nTotal 5 50.00 100.00\n----------------------------------------------------------------------------------\nTotal 11 2 20.00 100.00\n12 5 50.00 100.00\n13 3 30.00 100.00\nTotal 10 100.00\nWhich option correctly completes the program and creates the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LIST",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NOCOLS",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CROSSLIST",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. NOCROSSTAB",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The value 110700 is stored in a numeric variable named SALARY.\nWhich FORMAT statement displays the value as $110,700.00 in a report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. format salary comma11.2;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. format salary dollar8.2;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. format salary dollar11.2;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. format salary comma8.2 dollar8.2;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file YEARAMT:\n----|---10---|---20---|----30\n1901 2\n1905 1\n1910 6\n1925 .\n1941 1\nThe following SAS program is submitted:\ndata coins;\ninfile ‘yearamt’;\ninput year quantity;\n&ltrinsert statement(s) here>\nrun;\nWhich statement(s) completed the program and produced a non-missing value for the variable\nTOTQUANTITY in the final observation of the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. totquantity + quantity;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. totquantity = sum(totquantity + quantity);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. retain totquantity; totquantity = totquantity + quantity;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. retain totquantity0; totquantity = totquantity + quantity;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set EMPLOYEE INFO:\nEMPLOYEE_INFO\nIDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\n&ltrinsert BY statement here>\nrun;\nWhich BY statement completes the program and sorts the data sequentially by ascending\nexpense values within each ascending IDNUMBER value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by Expenses IDNumber;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. by IDNumber Expenses;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. by ascending Expenses IDNumber;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. by ascending IDNumber ascending Expenses;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format\nvalue score 1 - 50 = ‘Fail’\n51 - 100 = ‘Pass’;\nrun;\nproc report data = work.courses nowd;\ncolumn exam;\ndefine exam / display format = score.;\nrun;\nThe variable EXAM has a value of 50.5.\nHow will the EXAM variable value be displayed in the REPORT procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "What is the purpose or the MISSOVER option on the INFILE statement?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It prevents SAS from loading a new record when the end of the current record is reached.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. It enables SAS to scan the input data records until the character string that is specified in the\n@‘character-string’ expression is round.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It enables SAS to continue to read the next input data record if it does not find values in the\ncurrent input tine for all the variables in the statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It causes the DATA step to stop processing if an INPUT statement reaches the end of the\ncurrent record without finding values for all variables in the statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\nset work.staff (keep = jansales febsales marsales);\narray diff_sales{3} difsales1 - difsales3;\narray monthly{3} jansales febsales marsales;\nrun;\nWhat new variables are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. JANSALES, FEBSALES and MARSALES",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. MONTHLY1, MONTHLY2 and MONTHLY3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. DIFSALES1, DIFSALES2 and DIFSALES3",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. DIFF_SALES1, DIFF_SALES2 and DIFF_SALES3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "What describes the SAS automatic _ERRDR_ variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable contains the values ‘TRUE’ or ‘FALSE.’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR variable maintains a count of the number of data errors.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable can be used in expressions or calculations in the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The ERROR_variable contains the number or the observation that caused the error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data record:\n07Jan20 05\nWhich INFOFRMAT reads this raw data and stores it as a SAS date value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. dmy9.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. date9.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ddMMMyy9.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ddmmmyyyy9.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement correctly computes the average of four numerical values?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. average = mean(num1, num4);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. average = mean(num1 - num4);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. average = mean(ofnum1 - num4)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. average = mean(num1 num2 num3 num4);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nlibname temp ‘SAS data library’;\ndata temp.sales;\nmerge temp sales\nwork.receipt;\nby names;\nrun;\nThe input data files are sorted by the NAMES variable:\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program executes successfully and a temporary SAS data set is created.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The program executes successfully and a permanent SAS data set is created.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The program fails execution because the same SAS data set is referenced for both read and\nwrite operations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails execution because the SAS data sets on the MERGE statement are in two\ndifferent libraries.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file TYPECOLOR:\n----I----10---I----20---I----30\nDaisyyellow\nThe following SAG program is submitted:\ndata flowers;\ninfile ‘typecolor’;\ninput type$ 1-5+1 color$;\nrun;\nWhat are the values of the variables TYPE and COLOR?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. type color\ndaisyyellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. type color\ndaisyyellow",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. type color\ndaisyyellow” “(missing character value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No values are stored for the TYPE and COLOR variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A user-defined format has been created using the FORMAT procedure. Where is it stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. in a SAS catalog",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. in an external binary file",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. in a SAS dataset in the WORK library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. in a SAS dataset in a permanent SAS data library",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.flights;\ndestination = ‘cph’;\nselect(destination);\nwhen(’LHR’) city = ‘London’;\nwhen(’CPH’) city = ‘Copenhagen’;\notherwise city = ‘Other’;\nend;\nrun;\nWhat is the value of the CITY variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Other",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Copenh",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Copenhagen",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘‘(missing character value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.new;\nlength word $7;\namount = 4;\nit amount = 4 then word = ‘FOUR’;\nelse if amount = 7\nthen word = ‘SEVEN’;\nelse word = ‘NONE!!!’;\namount = 7;\nrun;\nWhat are the values of the AMOUNT and WORD variables in SAS dataset work.new?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. amount word\n4 FOUR",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. amount word\n4 NONE!!!",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. amount word\n7 FOUR",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. amount word\n7 SEVEN",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted, creating the SAS data set ONE:\ndata one;\ninfile ‘file specification’;\ninput num chars$;\nrun;\nONE\nNUM CHAR\n------- ---------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data = one;\nwhere char = 23;\nrun;\nWhat is output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NUM CHAR\n1 77",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NUM CHAR\n1 23\n3 23",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. NUM CHAR\n1 23\n3 23\n1 77",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No output is generated.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.retail;\ncost = ‘20000’;\ntotal= .10* cost\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the variable TOTAL in the output data set is 2000. No messages are written to\nthe SAS log.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the variable TOTAL in the output data set is 2000. A note that conversion has\ntaken place is written to the SAS log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The value of the variable TOTAL in the output data set is missing. An error message is written\nto the SAS log.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The variable TOTAL in the output data set has no value. The program fails to execute due to\na syntax error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nData_null_;\nset old;\nput sales 1 sales2;\nrun;\nWhere is the output written?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. to the SAS log",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. to the SAS data set _NULL_",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. to the SAS output window or to an output file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. to the raw data file that was most recently opened",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.test;\narray items{3} _temporary_;\nrun;\nWhat are the names of the variable(s) in the WORKTEST data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ITEMS",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ITEMS1, ITEMS2, ITEMS3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. No variables are created because it is a temporary array.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute because there are no variables listed on the ARRAY statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Read the table\nThe following SAS program is submitted:\nproc freq data = sales;\n&ltrinsert TABLES statement here>\nrun;\nThe following output is created by the FREQUENCY procedure:\nThe FREQ Procedure\nTable of region by product\nregion product\nFrequency\nPercent\nRow Pct\nCol Pct corn cotton oranges Total\nEAST 2 1 1 4\n22.22 11.11 11.11 44.44\n50.00 25.00 25.00\n50.00 33.33 50.00\nSOUTH 2 2 1 5\n22.22 22.22 11.11 55.56\n40.00 40.00 20.00\n50.00 66.67 50.00\nTotal 4 3 2 9\n4444 33.33 22.22 100.00\nWhich TABLES statement(s) completed the program and produced the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region * product;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. tables product * region;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables product; tables region;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata one;\ndate = ‘04juI2005’d;\nformat date weekdate.; run;\nproc print data = one; run;\nWhat output is generated?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs date\n1 Monday, July 4, 2005",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Obs date\n1 July4, 2005",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs date\n1 04Jul2005",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs date\n1 Monday, 07/04/2005",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\nset sasuser.employees;\nif 2 le years_service le 10 then\namount = 1000;\nelse amount = 0;\namount_per_year = years_service / amount\nrun;\nWhat is the value of the variable AMOUNT_PER_YEAR if an employee has been with the\ncompany for one year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 0.001",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PERM.STUDENTS:\nPERM.STUDENTS\nNAME AGE\n--------- -------\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted:\nlibname perm ‘SAS data library’;\ndata students;\nset perm.students;\nfile ‘file specification’;\nput name $ age;\n&ltrinsert statement here>\nrun;\nThe following double-spaced file is desired as output\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nWhich statement completes the program and creates the desired file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. put",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. put/;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. double;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. put _null_;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department\nthen payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set named WORKSALARY contains 10 observations for each department, and is\ncurrently ordered by DEPARTMENT.\nWhich statement is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The BY statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The statement payroll + wagerate; in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable PAYROLL represent the total for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable PAYROLL represent a total for all values of WAGERATE in the\nWORKSALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file EMPLOYEE:\n----|----10----|----20----|----30\nAlan 19/2/2004 ACCT\nRob 22/5/2004 MKTG\nMaryJane 14/3/2004 EDUC\nThe following SAS program is submitted:\ndata emps;\ninfile ‘employee’;\ninput@1 name$\n@15 date &ltrinsert INFORMAT here>\n@25 department$;\nrun;\nWhich INFORMAT correctly completes the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. date9.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ddmmyyyy9.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ddmmyy10.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. ddmmyyyy10.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata test;\ninfile ‘file specification’;\ninput name $ amount@@;\nrun;\nWhich of the following is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Two @@ together are the same as one c.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Two @@ hold the data records until the bottom of the DATA step.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Two @@ hold the raw data record across iterations of the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Two @@ are invalid syntax and will cause the program to fail to execute.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set QTR 1_REVENUE:\ndestination revenue\nYYZ 53634\nFRA 62129\nFRA 75962\nRDU 76254\nYYZ 82174\nThe following SAS program is submitted:\nproc sort data = qtr1_revenue;\nby destination descending revenue; run;\nWhat is the first observation in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. destination revenue\nFRA 62129",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. destination revenue\nFRA 75962",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. destination revenue\nYYZ 53634",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. destination revenue\nYYZ 82174",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata numrecords;\ninfile ‘file specification’;\ninput@1 patient $15.\nrelative$ 16-26@;\nif relative = ‘children’ then\ninput @54 diagnosis $15. @;\nelse if relative = ‘parents’ then\ninput @28 doctor $15.\nclinic $ 44-53\n@54 diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step execution?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set ONE:\nONE\nX Y Z\n--- --- ---\n1 A 27\n1 A 33\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 62\n4 C 91\nThe following SAS program is submitted:\ndata two;\nset one;\nby x y;\nif first.y;\nrun;\nproc print data = two noobs;\nrun;\n4Which report is produced?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X Y Z\n1 A 27\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X Y Z\n1 A 33\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X Y Z\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n4 A 82\n4 C 91",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The PRINT procedure tails because the data set TWO is not created in the DATA step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data january;\n106 set allmonths(keep = product month num_sold cost);\n107 if month = ‘Jan’ then output january;\n108 sales = cost * num_sold;\n109 keep = product sales;\n------\nERROR 22-322: Syntax error, expecting one of the following:!,\n!!, &, *,**, +, -,/, <,< =, <>, =, >, ><, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR,^=,|,II,\n110 run;\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. keep product sales;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. keep product, sales;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. keep = product, sales;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. keep = (product sales);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata combine;\nprefix=’505’;\nmiddle=’6465 ‘;\nend=’09090’;\n&ltrinsert statement here>;\nrun;\nWhich statement successfully completes the program so that TOTAL has a value of 505-6465-\n09090?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. total = cat(’-’, prefix, middle, end);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. total = catx(’-’, prefix, middle, end);",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. total = prefix !!’-’!! middle ‘‘!!’-’!! end;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. total = prefix!!’-’!! left(middle)!!’-’!! end;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in (‘Sandal’ , ‘Slipper’ , ‘Boot’);\nrun;\n&ltrinsert ODS statement here>\nWhich ODS statements complete the program and send the report to an HTML file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html = ‘sales.html’; ods html close;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file = ‘sales.html’; ods file close;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file html = ‘sales.html’; ods file close;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ods html file = ‘sales.html’; ods html close;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data file AMOUNT:\n----I---- 10---I----20---I----30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile ‘amount’;\ninput@1 salary 6.;\nif_error_then description = ‘Problems’;\nelse description = ‘No Problems’;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the DESCRIPTION variable is No Probl.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the DESCRIPTION variable is Problems.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The value of the DESCRIPTION variable is No Problems.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The value of the DESCRIPTION variable can not be determined.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PEPM.STUDENTS:\nPERM.STUDENTS\nNAME AGE\n--------- ------\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted:\nlibname perm ‘SAS data library’;\ndata students;\nset perm.students;\nfile ‘file specification’;\nput name $15. @5 age 2.;\nrun;\nWhat is written to the output raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ----I----10---I----20---I----30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ----I----10---I----20---I----30\nAlfr14\nAlic13\nBarb13a\nCarol 4",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ----I----10---I----20---I----30\nAlfr14ed\nAlic130\nBarb13ara\nCaro141",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ----I----10---I----20---I----30\nAlfred14\nAlice13\nBarbara13\nCarol14",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department\nthen payroll = 0;\npayroll + wagerate;\nif last.department\nrun;\nThe SAS data set WORK.SALARY, currently ordered by DEPARTMENT, contains 100\nobservations for each of 5 departments.\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The WORK.TOTAL data set contains 5 observations.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The WORKTDTAL data set contains 100 observations.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The WORKTOTAL data set contains 500 observations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted;\ndata combine;\ncountry = ‘Italy, Russia, ireland’;\nfound = find(country, ‘i’);\nrun;\nWhat is the value of the variable FOUND in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 12",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Italy",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Russia",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following code:\nproc print data=SASHELP.CLASS(firstobs=5 obs=15);\nwhere Sex='M';\nrun;\nHow many observations will be displayed?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 10 or fewer",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 11 or fewer",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.SALARY contains 10 observations for each department, and is\ncurrently ordered by Department. The following SAS program is submitted:\ndata WORK.TOTAL;\nset WORK.SALARY(keep=Department MonthlyWageRate);\nby Department;\nif First.Department=1 then Payroll=0;\nPayroll+(MonthlyWageRate*12);\nif Last.Department=1;\nrun;\nWhich statement is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The by statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The statement Payroll+(MonthlyWageRate*12); in the data step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable Payroll represent the monthly total for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable Payroll represent a monthly total for all values of WAGERATE in the\nWORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file TYPECOLOR.DAT:\n----+----10---+----20---+----30 daisyyellow The following SAS program is submitted:\ndata FLOWERS;\ninfile 'TYPECOLOR.DAT' truncover;\nlength\nType $ 5\nColor $ 11;\ninput\nType $\nColor $;\nrun;\nWhat are the values of the variables Type and Color?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Type=daisy, Color=yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Type=daisy, Color=w",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Type=daisy, Color=daisyyellow",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Type=daisy, Color=",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TEST;\nset WORK.MEASLES(keep=Janpt Febpt Marpt);\narray Diff{3} Difcount1-Difcount3;\narray Patients{3} Janpt Febpt Marpt;\nrun;\nWhat new variables are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Difcount1, Difcount2 and Difcount3",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Diff1, Diff2 and Diff3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Janpt, Febpt, and Marpt",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Patients1, Patients2 and Patients3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record in the file phone.txt:\n----|----10---|----20---|----30---|\nStevens James SALES 304-923-3721 14\nThe following SAS program is submitted:\ndata WORK.PHONES;\ninfile phone.txt;\ninput EmpLName $ EmpFName $ Dept $ Phone $ Extension;\n<_insert_code_>\nrun;\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the\nvariableFullName?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FullName=CATX(' ',EmpFName,EmpLName);",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FullName=CAT(' ',EmpFName,EmpLName);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FullName=EmpFName!!EmpLName;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. FullName=EmpFName + EmpLName;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement specifies that records 1 through 10 are to be read from the raw data file\ncustomer.txt?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. infile 'customer.txt' 1-10;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. input 'customer.txt' stop@10;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. infile 'customer.txt' obs=10;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. input 'customer.txt' stop=10;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ONE;\nText='Australia, US, Denmark';\nPos=find(Text,'US','i',5);\nrun;\nWhat value will SAS assign to Pos?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in DATAFILE.TXT:\n----|----10---|----20---|----30\nKim,Basketball,Golf,Tennis\nBill,Football\nTracy,Soccer,Track\nThe following program is submitted:\ndata WORK.SPORTS_INFO;\nlength Fname Sport1-Sport3 $ 10;\ninfile 'DATAFILE.TXT' dlm=',';\ninput Fname $ Sport1 $ Sport2 $ Sport3 $;\nrun;\nproc print data=WORK.SPORTS_INFO;\nrun;\nWhich output is correct based on the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football\n3 Tracy Soccer Track",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football Football Football\n3 Tracy Soccer Track Track",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football Tracy Soccer",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Obs Fname Sport1 Sport2 Sport3\n1 Kim Basketball Golf Tennis\n2 Bill Football",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.ONE contains a numeric variable named Num ana character variable\nnamed Char:\nWORK.ONE\nNum Char\n------ ------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data=WORK.ONE;\nwhere Num='1';\nrun;\nWhat is output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Num Char\n--- ----\n1 23",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Num Char\n--- ----\n1 23\n1 77",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Num Char\n--- ----\n1 23\n3 23\n1 77",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No output is generated.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES statement was used to completed the following program that produced the\noutput?\nproc freq data=sales;\n<_insert_code_>\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region,product",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. tables region/product;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables region*product;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\n<_insert_ods_code_>\nproc means data=SASUSER.SHOES;\nwhere Product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\n<_insert_ods_code_>\nWhich ODS statements inserted, respectively, in the two location above creates a report stored in\nan html file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html open='sales.html';\nods html close;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file='sales.html' / html;\nods file close;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods html file='sales.html';\nods html close;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. ods file html='sales.html';\nods file close;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following data step:\ndata WORK.GEO;\ninfile datalines;\ninput City $20.;\nif City='Tulsa' then\nState='OK';\nRegion='Central';\nif City='Los Angeles' then\nState='CA'\nRegion='Western';\ndatalines;\nTulsa\nLos Angeles\nBangor\n;\nrun;\nAfter data step execution, what will data set WORK.GEO contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. City State Region\n----------- ----- -------\nTulsa OK Western\nLos Angeles CA Western\nBangor Western",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. City State Region\n----------- ----- -------\nTulsa OK Western\nLos Angeles CA Western\nBangor",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. City State Region\n----------- ----- -------\nTulsa OK Central\nLos Angeles CA Western\nBangor Western",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. City State Region\n----------- ----- -------\nTulsa OK Central\nLos CA Western\nBangor",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following choices is an unacceptable ODS destination for producing output that can\nbe viewed in Microsoft Excel?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. MSOFFICE2K",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. EXCELXP",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CSVALL",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. WINXP",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement describes a characteristic of the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable maintains a count of the number of data errors in a DATA step.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR_ variable is added to the program data vector and becomes part of the data set\nbeing created.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable can be used in expressions in the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The _ERROR_ variable contains the number of the observation that caused the data error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook REGIONS.XLS contains the following four worksheets:\nEAST\nWEST\nNORTH\nSOUTH\nThe following program is submitted:\nlibname MYXLS 'regions.xls';\nWhich PROC PRINT step correctly displays the NORTH worksheet?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=MYXLS.NORTH;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=MYXLS.NORTH$;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data=MYXLS.'NORTH'e;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data=MYXLS.'NORTH$'n;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the data set WORK.EMPDATA:\nEmployee_ Manager_\nID Job_Title Department ID\n------- ---------------------- --------------------- ----------------\n120101 Director Sales Management 120261\n120102 Sales Manager Sales Management 120101\n120103 Sales Manager II Sales Management 120101\n120104 Administration Manager Administration 120101\n120105 Secretary I Administration 120101\nWhich one of the following where statements would display observations with job titles containing\nthe word 'Manager'?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. where substr(Job_Title,(length(Job_Title)-6))='Manager';",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. where upcase(scan(Job_Title,-1,' '))='MANAGER';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where Job_Title='% Manager ';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. where Job_Title like '%Manager%';",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nX=\"01Jan1960\" D ;\nrun;\nWhat variable X contains what value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the character value \"01Jan1960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the date value 01011960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the code contains a syntax error and does not execute.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.EMP_NAME:\nName EmpID\n------- --------\nJill 1864\nJack 2121\nJoan 4698\nJohn 5463\nGiven the SAS data set WORK.EMP_DEPT:\nEmpID Department\n-------- --------------\n2121 Accounting\n3567 Finance\n4698 Marketing\n5463 Accounting\nThe following program is submitted:\ndata WORK.ALL;\nmerge WORK.EMP_NAME(in=Emp_N)\nWORK.EMP_DEPT(in=Emp_D);\nby Empid;\nif (Emp_N and not Emp_D) or (Emp_D and not Emp_N);\nrun;\nHow many observations are in data set WORK.ALL after submitting the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 5",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc contents data=_all_;\nrun;\nWhich statement best describes the output from the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The output contains only a list of the SAS data sets that are contained in the WORK library.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The output displays only the contents of the SAS data sets that are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The output displays only the variables in the SAS data sets that are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The output contains a list of the SAS data sets that are contained in the WORK library and\ndisplays the contents of those data sets.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc format;\nvalue score\n1 - 50 = 'Fail'\n51 - 100 = 'Pass';\nrun;\nproc freq data=WORK.COURSES ;\ntable Exam;\nformat Exam score.;\nrun;\nThe variable Exam has a value of 50.5.\nHow will the Exam variable value be displayed in the FREQ procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc sort data=SASUSER.PROJECTS out=PSORT;\nby Code descending Date Cost;\nrun;\nWhich of the following is true concerning the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The descending option applies to the variable Code.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable Code is sorted by ascending order.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The PSORT data set is stored in the SASUSER library.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The descending option applies to the Date and Cost variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following code was modified to generate the results further below:\nproc format;\nvalue agegrp\nlow-12 ='Pre-Teen'\n13-high = 'Teen';\nrun;\nproc means data=SASHELP.CLASS;\nvar Height;\nclass Sex Age;\nformat Age agegrp.;\nrun;\nThe following results were generated to display only specific statistics and limit the decimals with\nthe modification: Which statement below was modified or added to generate the results above:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. var Height / nobs min max mean maxdec=1;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc means data=SASHELP.CLASS maxdec=1 ;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc means data=SASHELP.CLASS min max mean maxdec=1;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. output nobs min max mean maxdec=1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nX='04jul2005'd;\nDayOfMonth=day(x);\nMonthOfYear=month(x);\nYear=year(x);\nrun;\nWhat types of variables are DayOfMonth, MonthOfYear, and Year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. DayOfMonth, Year, and MonthOfYear are character.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DayOfMonth, Year, and MonthOfYear are numeric.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. DayOfMonth and Year are numeric. MonthOfYear is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DayOfMonth, Year, and MonthOfYear are date values.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata ONE TWO SASUSER.TWO\nset SASUSER.ONE;\nrun;\nAssuming that SASUSER.ONE exists, how many temporary and permanent SAS data sets are\ncreated?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2 temporary and 1 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. there is an error and no new data sets are created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement is true concerning the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It cannot be used in an if/then condition.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It cannot be used in an assignment statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It can be put into a keep statement or keep= option.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It is automatically dropped.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.TEMPS:\nDay Month Temp\n--- --------- -------\n1 May 75\n15 May 70\n15 June 80\n3 June 76\n2 July 85\n14 July 89\nThe following program is submitted:\nproc sort data=WORK.TEMPS;\nby descending Month Day;\nrun;\nproc print data=WORK.TEMPS;\nrun;\nWhich output is correct?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs Day Month Temp\n--- --- ----- ----\n1 2 July 85\n2 14 July 89\n3 3 June 76\n4 15 June 80\n5 1 May 75\n6 15 May 7",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs Day Month Temp\n--- --- ----- ----\n1 1 May 75\n2 2 July 85\n3 3 June 76\n4 14 July 89\n5 15 May 70\n6 15 June 80",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Obs Day Month Temp\n--- --- ----- ----\n1 1 May 75\n2 15 May 70\n3 3 June 76\n4 15 June 80\n5 2 July 85\n6 14 July 89",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Obs Day Month Temp\n--- --- ----- ----\n1 15 May 70\n2 1 May 75\n3 15 June 80\n4 3 June 76\n5 14 July 89\n6 2 July 85",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlabel Jobcode='Job Description';\nrun;\nWhich statement is true about the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The label of the variable Jobcode is Job (only the first word).",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The label of the variable Jobcode is Job Desc (only the first 8 characters).",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The label of the variable Jobcode is Job Description.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors. Labels must be defined in a PROC step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which is a valid LIBNAME statement?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. sasdata libname \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata \"_SAS_data_library_location_\";",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. libname sasdata sas \"_SAS_data_library_location_\";",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES option(s) would be used to eliminate the row and column counts and just see the\nfrequencies and percents?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. norowcount nocolcount",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. freq percent",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. norow nocol",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. nocounts",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook QTR1.XLS contains the following three worksheets:\nJAN\nFEB\nMAR\nWhich statement correctly assigns a library reference to the Excel workbook?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname qtrdata 'qtr1.xls';",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. libname 'qtr1.xls' sheets=3;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname jan feb mar 'qtr1.xls';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname mydata 'qtr1.xls' WORK.heets=(jan,feb,mar);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nods csvall file='c:\\test.cvs';\nproc print data=WORK.ONE;\nvar Name Score Grade;\nby IdNumber;\nrun;\nods csvall close;\nWhat is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A file named test.cvs that can only be opened in Excel.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A text file named test.cvs that can be opened in Excel or in any text editor.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A text file named test.cvs that can only be opened in a text editor.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A file named test.cvs that can only be opened by SAS.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "You're attempting to read a raw data file and you see the following messages\ndisplayed in the SAS Log:\nNOTE: Invalid data for Salary in line 4 15-23.\nRULE: ----+----1----+----2----+----3----+----4----+----5--\n4 120104 F 46#30 11MAY1954 33\nEmployee_Id=120104 employee_gender=F Salary=. birth_date=-2061 _ERROR_=1 _N_=4\nNOTE: 20 records were read from the infile 'c:\\employees.dat'.\nThe minimum record length was 33.\nThe maximum record length was 33.\nNOTE: The data set WORK.EMPLOYEES has 20 observations and 4 variables.\nWhat does it mean?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A compiler error, triggered by an invalid character for the variable Salary.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. An execution error, triggered by an invalid character for the variable Salary.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The 1st of potentially many errors, this one occurring on the 4th observation.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An error on the INPUT statement specification for reading the variable Salary.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TEST;\ndrop City;\ninfile datalines;\ninput\nName $ 1-14 /\nAddress $ 1-14 /\nCity $ 1-12 ;\nif City='New York ' then input @1 State $2.;\nelse input;\ndatalines;\nJoe Conley\n123 Main St.\nJanesville\nWI\nJane Ngyuen\n555 Alpha Ave.\nNew York\nNY Jennifer Jason\n666 Mt. Diablo\nEureka\nCA ;\nWhat will the data set WORK.TEST contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Name Address State\n-------------- ---------------- ------\nJoe Conley 123 Main St.\nJane Ngyuen 555 Alpha Ave. NY\nJennifer Jason 666 Mt. Diablo",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Name Address City State\n-------------- ---------------- ----------- ------\nJoe Conley 123 Main St. Janesville\nJane Ngyuen 555 Alpha Ave. New York NY\nJennifer Jason 666 Mt. Diablo Eureka",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Name Address State\n-------------- ---------------- ------\nJane Ngyuen 555 Alpha Ave. NY",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. O observations,\nthere is a syntax error in the data step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nId Char1\n--- -----\n111 A\n158 B\n329 C\n644 D\nand the SAS data set WORK.TWO:\nId Char2\n--- -----\n111 E\n538 F\n644 G\nThe following program is submitted:\ndata WORK.BOTH;\nset WORK.ONE WORK.TWO;\nby Id;\nrun;\nWhat is the first observation in SAS data set WORK.BOTH?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Id Char1 Char2\n--- ----- -----\n111 A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Id Char1 Char2\n--- ----- -----\n111 E",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Id Char1 Char2\n--- ----- -----\n111 A E",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Id Char1 Char2\n--- ----- -----\n644 D G",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.DATE_INFO;\nDay=\"01\" ;\nYr=1960 ;\nX=mdy(Day,01,Yr) ;\nrun;\nWhat is the value of the variable X?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the character value \"01011960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a missing value due to syntax errors",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the step will not compile because of the character argument in the mdy function.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.AUTHORS;\narray Favorites{3} $ 8 ('Shakespeare','Hemingway','McCaffrey');\nrun;\nWhat is the value of the second variable in the dataset WORK.AUTHORS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Hemingway",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Hemingwa",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ' ' (a missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program contains errors. No variables are created.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set Fed.Banks contains a variable Open_Date which has been assigned a\npermanent label of \"Open Date\". Which SAS program temporarily replaces the label \"Open\nDate\" with the label \"Starting Date\" in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=SASUSER.HOUSES label;\nlabel Open_Date \"Starting Date\";\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=SASUSER.HOUSES label;\nlabel Open_Date=\"Starting Date\";\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc print data=SASUSER.HOUSES;\nlabel Open_Date=\"Starting Date\";\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data=SASUSER.HOUSES;\nOpen_Date=\"Starting Date\";\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.NEW;\nset WORK.OLD(keep=X);\nif X < 10 then X=1;\nelse if X >= 10 AND X LT 20 then X=2;\nelse X=3;\nrun;\nIn filtering the values of the varibale X in data set WORK.OLD, what value new value would be\nassigned to X if its original value was a missing value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X would get a value of 1.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X would get a value of 3.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X would retain its original value of missing.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. This step does not run because of syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nproc format;\nvalue salfmt.\n0 -< 50000 = 'Less than 50K'\n50000 - high = '50K or Greater';\noptions fmterr nodate pageno=1;\ntitle 'Employee Report';\nproc print data=work.employees noobs;\nvar fullname salary hiredate;\nformat\nsalary salfmt.\nhiredate date9.;\nlabel\nfullname='Name of Employee'\nsalary='Annual Salary'\nhiredate='Date of Hire';\nrun;\nWhy does the program fail?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PAGENO option is invalid in the OPTIONS statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The RUN statement is missing after the FORMAT procedure.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The format name contains a period in the VALUE statement.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The LABEL option is missing from the PROC PRINT statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nProdId Price ProductType Sales Returns\n--------- ------- ------ -------- ----- ----------\nK12S 95.50 OUTDOOR 15 2\nB132S 2.99 CLOTHING 300 10\nR18KY2 51.99 EQUIPMENT 25 5\n3KL8BY 6.39 OUTDOOR 125 15\nDY65DW 5.60 OUTDOOR 45 5\nDGTY23 34.55 EQUIPMENT 67 2\nThe following SAS program is submitted:\ndata WORK.OUTDOOR WORK.CLOTH WORK.EQUIP;\nset WORK.PRODUCTS;\nif Sales GT 30;\nif ProductType EQ 'OUTDOOR' then output WORK.OUTDOOR;\nelse if ProductType EQ 'CLOTHING' then output WORK.CLOTH;\nelse if ProductType EQ 'EQUIPMENT' then output WORK.EQUIP;\nrun;\nHow many observations does the WORK.OUTDOOR data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in TEXTFILE.TXT:\n----|----10---|----20---|----30\nJohn,FEB,13,25,14,27,Final\nJohn,MAR,26,17,29,11,23,Current\nTina,FEB,15,18,12,13,Final\nTina,MAR,29,14,19,27,20,Current\nThe following output is desired:\nObs Name Month Status Week1 Week2 Week3 Week4 Week5\n1 John FEB Final $13 $25 $14 $27 .\n2 John MAR Current $26 $17 $29 $11 $23\n3 Tina FEB Final $15 $18 $12 $13 .\n4 Tina MAR Current $29 $14 $19 $27 $20\nWhich SAS program correctly produces the desired output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile 'TEXTFILE.TXT' dsd;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile 'TEXTFILE.TXT' dlm=',' missover;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile 'TEXTFILE.TXT' dlm=',';\ninput Name $ Month $ @;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data WORK.NUMBERS;\nlength Name $ 4 Month $ 3 Status $ 7;\ninfile 'TEXTFILE.TXT' dsd @;\ninput Name $ Month $;\nif Month='FEB' then input Week1 Week2 Week3 Week4 Status $;\nelse if Month='MAR' then input Week1 Week2 Week3 Week4 Week5 Status $;\nformat Week1-Week5 dollar6.;\nrun;\nproc print data=WORK.NUMBERS;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nProdId Price ProductType Sales Returns\n------ ---------- --------------- ------- ----------\nK12S 95.50 OUTDOOR 15 2\nB132S 2.99 CLOTHING 300 10\nR18KY2 51.99 EQUIPMENT 25 5\n3KL8BY 6.39 OUTDOOR 125 15\nDY65DW 5.60 OUTDOOR 45 5\nDGTY23 34.55 EQUIPMENT 67 2\nThe following SAS program is submitted:\ndata WORK.REVENUE(drop=Sales Returns Price);\nset WORK.PRODUCTS(keep=ProdId Price Sales Returns);\nRevenue=Price*(Sales-Returns);\nrun;\nHow many variables does the WORK.REVENUE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TOTAL_SALARY;\nretain Total;\nset WORK.SALARY;\nby Department;\nif First.Department\nthen Total=0;\nTotal=sum(Total, Wagerate);\nif Last.Total;\nrun;\nWhat is the initial value of the variable Total in the following program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Missing",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The value of the first observations Wagerate",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Cannot be determined from the information given",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.NEW;\nset WORK.OLD;\nCount+1;\nrun;\nThe varaible Count is created using a sum statement. Which statement regarding this variable is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is assigned a value 0 when the data step begins execution.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is assigned a value of missing when the data step begins execution.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It is assigned a value 0 at compile time.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It is assigned a value of missing at compile time.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The data set WORK.REALESTATE has the variable LocalFee with a format of 9. and a variable\nCountryFee with a format of 7.;\nThe following SAS program is submitted:\ndata WORK.FEE_STRUCTURE;\nformat LocalFee CountryFee percent7.2;\nset WORK.REALESTAT;\nLocalFee=LocalFee/100;\nCountryFee=CountryFee/100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LocalFee has format of 9. and CountryFee has a format of 7.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LocalFee has format of 9. and CountryFee has a format of percent7.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Both LocalFee and CountryFee have a format of percent7.2",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data step fails execution; there is no format for LocalFee.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records:\n----|----10---|----20---|----30\nSusan*12/29/1970*10\nMichael**6\nThe following output is desired:\nObs employee bdate years\n1 Susan 4015 10\n2 Michael . 6\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data employees;\ninfile 'file specification' dlm='*';\ninput employee $ bdate : mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data employees;\ninfile 'file specification' dsd='*';\ninput employee $ bdate mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data employees;\ninfile 'file specification' dlm dsd;\ninput employee $ bdate mmddyy10. years;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data employees;\ninfile 'file specification' dlm='*' dsd;\ninput employee $ bdate : mmddyy10. years;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following programs correctly invokes the DATA Step Debugger:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data WORK.TEST debug;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data WORK.TEST debugger;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data WORK.TEST / debug;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data WORK.TEST / debugger;\nset WORK.PILOTS;\nState=scan(cityState,2,' ');\nif State='NE' then description='Central';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step sorts the observations of a permanent SAS data set by two variables and stores the\nsorted observations in a temporary SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc sort out=EMPLOYEES data=EMPSORT;\nby Lname and Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc sort data=SASUSER.EMPLOYEES out=EMPSORT;\nby Lname Fname;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc sort out=SASUSER.EMPLOYEES data=WORK.EMPSORT;\nby Lname Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc sort data=SASUSER.EMPLOYEES out=SASUSER.EMPSORT;\nby Lname and Fname;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the data step:\ndata WORK.TEST;\ninfile 'c:\\class1.csv' dsd;\ninput Name $ Sex $ Age Height Weight;\nif Age NE 16 and Age NE 15 then Group=1;\nelse Group=2;\nWhich of the following assignment statements for variable group are functionally equivalent to the\noriginal statement used in the above data step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if Age not in(15,16) then Group=1; else Group=2;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. if (Age NE 16) or (Age NE 15) then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where Age not between 15 and 16 then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. both A or C will work.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlength EmpId $6;\nCharEmpid=EmpId;\nrun;\nIf data set WORK.DEPARTMENT has a numeric variable EmpId. Which statement is true about\nthe output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The type of the variable CharEmpid is numeric.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The type of the variable CharEmpid is unknown.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The type of the variable CharEmpid is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.OUTDS;\ndo until(Prod GT 6);\nProd + 1;\nend;\nrun;\nWhat is the value of the variable Prod in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. . (missing)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Undetermined, infinite loop.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TOTAL;\nset WORK.SALARY;\nby Department Gender;\nif First.<_insert_code_> then Payroll=0;\nPayroll+Wagerate;\nif Last.<_insert_code_>;\nrun;\nThe SAS data set WORK.SALARY is currently ordered by Gender within Department. Which\ninserted code will accumulate subtotals for each Gender within Department?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Gender",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Department",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Gender Department",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Department Gender",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step displays a listing of all the data sets in the WORK library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib=WORK\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents lib=WORK.all;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents data=WORK._all_;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc contents data=WORK _ALL_;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ORDERS:\nWORK.ORDERS\norder_id customer shipped\n---------- ------------ -----------\n9341 Josh Martin 02FEB2009\n9874 Rachel Lords 14MAR2009\n10233 Takashi Sato 07JUL2009\nThe variable order_id is numeric; customer is character; and shipped is numeric, contains a SAS\ndate value, and is shown with the DATE9. format. A programmer would like to create a new\nvariable, ship_note, that shows a character value with the order_id, shipped date, and customer\nname. For example, given the first observation ship_note would have the value \"Order 9341\nshipped on 02FEB2009 to Josh Martin\".\nWhich of the following statement will correctly create the value and assign it to ship_note?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ship_note=catx(' ','Order',order_id,'shipped on',input(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ship_note=catx(' ','Order',order_id,'shipped on',char(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ship_note=catx(' ','Order',order_id,'shipped on',transwrd(shipped,date9.),'to',customer);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ship_note=catx(' ','Order',order_id,'shipped on',put(shipped,date9.),'to',customer);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data WORK.JANUARY;\n106 set WORK.ALLYEAR(keep=Product Month Quantity Cost);\n107 if Month='JAN' then output WORK.JANUARY;\n108 Sales=Cost * Quantity;\n109 drop=Month Quantity Cost;\n-----\nERROR 22-322: Syntax error, expecting one of the following: !,\n!!, , *, **, +, -,\n, <=, <>, =, >, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR, ^=, |, ||, ~=.\n110 run;\nWhat data set option could be attached to WORK.JANUARY to replace the DROP statement that\ngenerated the error in the log?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. (drop Month Quantity Cost)",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. (drop Month, Quantity, Cost)",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (drop=Month, Quantity, Cost)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (drop=Month Quantity Cost)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\ndata WORK.TEST;\nset SASHELP.CLASS(obs=5);\nretain City 'Beverly Hills';\nState='California';\nrun;\nThe computed variables City and State have their values assigned using two different methods, a\nRETAIN statement and an Assignment statement. Which statement regarding this program is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The RETAIN statement is fine, but the value of City will be truncated to 8 bytes as the\nLENGTH statement has been omitted.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Both the RETAIN and assignment statement are being used to initialize new variables and are\nequally efficient. Method used is a matter of programmer preference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The assignment statement is fine, but the value of City will be truncated to 8 bytes as the\nLENGTH statement has been omitted.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. City's value will be assigned one time, State's value 5 times.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nObs Revenue2008 Revenue2009 Revenue2010\n--- ---------------- ---------------- ----------------\n1 1.2 1.6 2.0\nThe following SAS program is submitted:\ndata WORK.TWO;\nset WORK.ONE;\nTotal=mean(of Rev:);\nrun;\nWhat value will SAS assign to Total?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1.6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4.8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set SASUSER.HOUSES contains a variable PRICE which has been\nassigned a permanent label of “Asking Price”. Which SAS program temporarily\nreplaces the label “Asking Price” with the label “Sale Price” in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses; label price = “Sale Price”; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses label; label price “Sale Price”; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses label; label price = “Sale Price”; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses; price = “Sale Price”; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following GAS program is submitted:\ndata work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORKPEOPLE has 5 observations, and the data set WORKMONEY\nhas 7 observations. How many observations will the data set WORK.EMPSALARY\ncontain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting;\nset work.dept1 work.dept2;\njobcode = ‘FA1’; length jobcode $ 8; run;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and\nWORK.DEPT2 SAS data sets. The variable JOBCODE has a length of 5 in the\nWORK.DEPT1 data set and a length of 7 in the WORK.DEPT2 data set. What is the\nlength of the variable JOBCODE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 5",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 8",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set SASDATA.TWO:\nSASDATA.TWO\nXY\n----\nThe following SAS program is submitted:\ndata sasuser.one two sasdata.three;\nset sasdata two;\nif x = 5 then output sasuser.one;\nelse output sasdata two;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data set SASUSER.ONE has 5 observations data set SASUSER.TWO has 5\nobservations data set WORK.OTHER has 3 observations",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data set SASUSER.ONE has 2 observations data set SASUSER.TWO has 2\nobservations data set WORK.OTHER has 1 observations",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data set SASUSER.ONE has 2 observations data set SASUSER.TWO has 2\nobservations data set WORK.OTHER has 5 observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No data sets are output.\nThe DATA step fails execution due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nfootnote 1 ‘Sales Report for Last Month’; footnote2 ‘Selected Products Only’; footnote3\n‘All Regions’;\nfootnote4 ‘All Figures in Thousands of Dollars’;\nproc print data = sasuser.shoes;\nfootnote2 ‘All Products’;\nrun;\nWhich footnote(s) is/are displayed in the report?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. All Products",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Sales Report for Last Month All Products",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. All Products All Regions All Figures in Thousands of Dollars",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Sales Report for Last Month All Products All Regions All Figures in Thousands of\nDollars",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record DEPT:\n----|----10---|----20---|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile ‘dept’;\ninputdept$ 1-11 number 13- 15;\n statement here>\nrun;\nWhich SAS statement completes the program and results in a value of ‘Printing750’ for\nthe DEPARTMENT variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = dept II number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = left(dept) II number;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. department = trim(dept) number;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. department = trim(dept) put(number,3.);",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata one;\naddressl = ‘214 London Way’;\nrun;\ndata one;\nset one;\naddress = tranwrd(address1, ‘Way’, ‘Drive’); run;\nWhat are the length and value of the variable ADDRESS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Length is 14; value is ‘214 London Dri’.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Length is 14; value is ‘214 London Way’.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Length is 16; value is ‘214 London Drive’.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Length is 200; value is ‘214 London Drive’.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhat is the value of the variable PROD in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data sets WORK.EMPLOYEE and WORK.SALARY are shown below:\nWORK.EMPLOYEE WORK.SALARY\nfname age name salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nby fname; totsal + salary; run;\nWhich one of the following statements completes the merge of the two data sets by the\nFNAME variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. merge work.employee work.salary (fname = name);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. merge work.employee work.salary (name = fname);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. merge work.employee\nwork.salary (rename = (fname = name));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. merge work.employee work.salary (rename = (name = fname));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which program displays a listing of all data sets in the SASUSER library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib = sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents data = sasuser.all; run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents lib = sasuser._alI_; run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc contents data = sasuser._all_; run;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = work.employee;\nby descending fname;\nproc sort data = work.salary;\nby descending fname; data work.empdata; merge work.employee work.salary;\nby fname;\nrun;\nWhy does the program rail to execute?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SORT procedures contain invalid syntax.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The merged data sets are not permanent SAS data sets.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The RUN statement was omitted alter each or the SORT procedures.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The data sets were not merged in the order by which they were sorted.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submittad:\ndata work.sales; do year = 1 to 5; do month=1 to 12; x+1;\noutput end; end; run;\nHow many observations are written the WORK SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data record:\n----I----10---I----20---I----30\nson Travis,\nThe following output is desired:\nObs relation firstname\n1 son Travis\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data family ( dIm = ‘,’); infile ‘tile specification’; input relation $ firstname $; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. options dIm = ‘,’; data family; infile ‘file specification’; input relation $ firstname $;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data family; infile ‘file specification’ dIm = ‘,’; input relation $ firstname $; run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data family; infile ‘file specification’; input relation $ firstname $ / dim = ‘,’; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set AGES:\nAGES\nAGE\n---------\nThe variable AGE contains character values. The following SAS program is submitted:\ndata subset;\nset ages;\nwhere age> 12;\nrun;\nHow many observations are written out to the data set SUBSET?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nprodid price K12S5.10producttype NETWORKsales\n15returns\nB132S 2.34HARDWARE30010\nR18KY21.29SOFTWARE255\n3KL8BY 6.37HARDWARE12515\nDY65DW 5.60HARDWARE455\nDGTY23 4.55HARDWARE672\nThe following SAS program is submitted:\ndata hware inter soft;\nset prices (keep = producttype price);\nif price le 5.00;\nif producttype = ‘HARDWARE’ then output HWARE; else if producttype =\n‘NETWORK’ then output INTER; else if producttype = ‘SOFTWARE’ then output\nSOFT; run;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.accounting; set work.department; length jobcode $ 12; jobcode=’FAl’;\nrun;\nThe WORK.DEPARTMENT data set contains a character variable named JOBCODE\nwith a length of 5. What is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The length of the variable JOBCODE is 3.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The length of the variable JOBCODE is 5.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The length of the variable JOSBODE is 12.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which ODS statement option terminates output being written to an HTML rile?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. END",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. QUIT",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. STOP",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. CLOSE",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set PETS is sorted by the variables TYPE and BREED.\nThe following SAS program is submitted:\nproc print data = pets;\nvar type breed; sum number; run;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The SUM statement produces only a grand total of NUMBER.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The SUM statement produces only subtotals of NUMBER for each value of TYPE.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The SUM statement produces both a grand total of NUMBER and subtotals of\nNUMBER for each value of TYPE.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Nothing is produced by the SUM statement; the program fails to execute.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata work.passengers;\nif OrigPassengers = then OrigPassengers = 100; TransPassengers = 100; OrigPassengers\n=\nTotalPassengers = sum (OrigPassengers, TransPassengers) +0;\nrun;\nWhat is the value of the TOTALPASSENGERS variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 100",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 200",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set PRICES:\nPRICES\nProdid priceproducttypesalesreturns\nK1255.10NETWORK152\nB132S 2.34HARDWARE30010\nR18KY2 1.29SOFTWARE255\n3KL8BY 6.37HARDWARE12515\nDY65DW 5.60HARDWARE455\nDGTY23 4.55HARDWARE672\nThe following SAS program is submitted:\ndata hware inter cheap;\nset prices(keep = productype price);\nif producttype = ‘HARDWARE’ then output hware; else if producttype = ‘NETWORK’\nthen output\ninter; if price le 5.00;\nrun;\nif producttype = ‘HARDWARE’ then output hware; else if producttype = ‘NETWORK’\nthen output\ninter; if price le 5.00;\nrun;\nHow many observations does the HWARE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted,thefollowing is written to the SAS log:\nWhat issue generated the error in the log?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The syntax of the drop statement does not use an equals sign.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. There should have been commas between the variable names.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The list of variables should have been enclosed in parentheses.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A drop statement and a keep= data set option cannotboth be used at the same time.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nHow many variables does the WORK.REVENUE data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.PRODUCTS:\nHow many observations does the WORK.OUTDOOR data set contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat will the data set WORK.TEST contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement is true concerning the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It cannot be used in an if/then condition.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It cannot be used in an assignment statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It can be put into a keep statement or keep= option.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. It is automatically dropped.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is produced as output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A file named test.csv that can only be opened in Excel.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A text file named test.csv that can be opened in Excel or in any text editor.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. A text file named test.csv that can only be opened in a text editor.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A file named test.csv that can only be opened by SAS.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the value of the variable X?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. the character value \"01011960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a missing value due to syntax errors",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the step will not compile because ofthe character argument in the mdy() function.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nIf the value for the variable Jobcode is: PILOT2, what is the value of the variable Description?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ' ' (missing character value)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Senior Pilot",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SENIOR PILOT",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nHow will the Exam variable value be displayed in the FREQ procedure output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Fail",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Pass",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 50.5",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. (missing numeric value)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the raw data record in the file phone.txt:\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the\nvariable FullName?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FullName=CATX(' ',EmpFName,EmpLName);",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. FullName=CAT(' ',EmpFName,EmpLName);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. FullName=EmpFName!!EmpLName;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. FullName=EmpFName + EmpLName;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following code was modified to generate the results further below:\nThe following results were generated to display only specific statistics and limit the decimals with\nthe modification:\nWhich statement below was modified or added to generate the results above:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. var Height / nobs min max mean maxdec=1;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc means data=SASHELP.CLASS maxdec=1 ;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc means data=SASHELP.CLASS min max mean maxdec=1;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. output nobs min max mean maxdec=1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file 'EMPLOYEE.TXT'\nWhich SAS informat correctly completes the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. date9",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. mmddyy10",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ddmmyy10",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. mondayyr10",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which is a valid LIBNAME statement?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. libname mysasdata \"_SAS_data_library_location_\";",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname sasdata \"_SAS_data_library_location_\";",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. libname work \"_SAS_data_library_location_\";",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nThe program fails execution due to syntax errors. What is the cause of the syntax error?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. An array cannot be referenced on a keep= data set option.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The keep= data set option should be (keep=MonthSales*).",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. An array can only be referenced in a KEEP statement\nnot within a keep= data set option.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The keep= data set option should be (keep=MonthSales).",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.P2000:\nAndthe SAS data set WORK.P2008:\nThe following output is desired:\nWhich SAS program correctly combines the data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the value of the second variable in the data set WORK.AUTHORS?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Hemingway",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Hemingwa",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ' ' (a missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program contains errors. No variables are created.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. keep=(Product Sales);",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. keep Product, Sales;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. keep=Product, Sales;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. keep Product Sales;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat value will SAS assign to Pos?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 12",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "!!!This question is under review!!!\nThe following SAS program is submitted:\nproc means data=SASUSER.SHOES;\n    where Product in ('Sandal', 'Slipper', 'Boot');\nrun;\nWhich ODS statements inserted, respectively, in the two location indicated above creates a report\nstored in an html file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ods html open='sales.html';\n   ods html close;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ods file open='sales.html' type=html;\n   ods file close;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ods file open='sales.html' type=html;\n   ods file close;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. ods file html='sales.html';\n   ods html close;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the initial value of the variable Total in the listed program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Missing",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The value of the first observations Wagerate",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Cannot be determined from the information given",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhich statement is true about the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The type of the variable CharEmpid is numeric.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The type of the variable CharEmpid is unknown.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The type of the variable CharEmpid is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.EMP_NAME:\nGiven the SAS data set WORK.EMP_DEPT:\nThe following program is submitted:\nHow many observations are in data set WORK.ALL after submitting the program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 5",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement specifies that records 1 through 10 are to be read from the raw data file\ncustomer.txt?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. infile 'customer.txt' obs=1-10;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. input 'customer.txt' end=10;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. infile 'customer.txt' obs=10;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. input 'customer.txt' stop=10;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES statement was used to completed the following program that produced the output?\nproc freq data=sales;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. tables region product;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. tables region,product;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. tables region by product;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. tables region*product;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following choices is an unacceptable ODS destination for producing output that can\nbe viewed in Microsoft Excel?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. MSOFFICE2K",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. EXCELXP",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. CSVALL",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. WINXP",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the value of the variable Prod in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. . (missing)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 6",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 7",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Undetermined, infinite loop.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.TEMPS:\nThe following program is submitted:\nWhich output is correct?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the value of the variable Prod in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 6",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 7",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing numeric)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the variable Discount in the output data set is 2000.No messages are written to\nthe SAS log.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the variable Discount in the output data set is 2000.A note that conversion has\ntaken place is written to the SAS log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The value of the variable Discount in the output data set is missing.A note in the SAS log refers\nto invalid numeric data.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The variable Discount in the output data set is set to zero.No messages are written to the SAS\nlog.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nWhat value will SAS assign to Total?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1.6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4.8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nWhy does the program fail?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PAGENO option is invalid in the OPTIONS statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The RUN statement is missing after the FORMAT procedure.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The format name contains a period in the VALUE statement.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The LABEL option is missing from the PROC PRINT statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\nThe variable Count is created using a sum statement. Which statement regarding this variable is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. It is assigned a value 0 after the data step begins execution.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. It is assigned a value of missing after the data step begins execution.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It is assigned a value 0 at compile time.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. It is assigned a value of missing at compile time.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES option(s) would be used to eliminate the row and column counts and just see the\nfrequencies and percents?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. norowcount nocolcount",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. freq percent",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. norow nocol",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. nocounts",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nThe SAS data set WORK.SALARY is currently ordered by Gender within Department. Which\ninserted code will accumulate subtotals for each Gender within Department?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Gender",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Department",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Gender Department",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Department Gender",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat new variables are created?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Difcount1, Difcount2 and Difcount3",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Diff1, Diff2 and Diff3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Janpt, Febpt, and Marpt",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Patients1, Patients2 and Patients3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set Fed.Banks contains a variable Open_Date which has been assigned a\npermanent label of \"Open Date\". Which SAS program temporarily replaces the label \"Open Date\"\nwith the label \"Starting Date\" in the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which statement describes a characteristic of the SAS automatic variable _ERROR_?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The _ERROR_ variable maintains a count of thenumber of data errors in a DATA step.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The _ERROR_ variable is added to the program datavector and becomes part of the data set\nbeing created.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The _ERROR_ variable can only be used in expressionsin the DATA step.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The _ERROR_ variable contains the number of theobservation that caused the data error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nThe following SAS program is submitted:\nWhich report is produced?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step displays a listing of all the data sets in the WORK library?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents lib=WORK\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc contents lib=WORK.all;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents data=WORK._all_;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc contents data=WORK _ALL_;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\nThe computed variables City and State have their values assigned using two different methods, a\nRETAIN statement and an Assignment statement. Which statement regarding this program is\ntrue?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The RETAIN statement is fine, but the valueof City will be truncated to 8 bytes as the\nLENGTHstatement has been omitted.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Both the RETAIN and assignment statement arebeing used to initialize new variables and are\nequallyefficient. The method used is only a matter ofprogrammer preference.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The assignment statement is fine, but thevalue of City will be truncated to 8 bytes as the\nLENGTHstatement has been omitted.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. City's value will be assigned one time, State'svalue 5 times.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nHow many observations are written to the WORK.SALES data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 5",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 60",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\ndata ONE TWO SASUSER.TWO\n    set SASUSER.ONE\nrun;\nAssuming that SASUSER.ONE exists, how many temporary and permanent SAS data sets are\ncreated?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2 temporary and 1 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 3 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2 temporary and 2 permanent SAS data sets are created",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. there is an error and no new data sets are created",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nWhich of the following is true concerning the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The descending option applies to the variable Code.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable Code is sorted by ascending order.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The PSORT data set is stored in the SASUSER library.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The descending option applies to the Date and Cost variables.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhich statement is true about the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The label of the variable Jobcode is Job (only the first word).",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The label of the variable Jobcode is Job Desc (only the first 8 characters).",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The label of the variable Jobcode is Job Description.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Labels can only be defined in PROC steps. The program fails to executedue to errors and the\ndata set is not created.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nAndthe SAS data set WORK.TWO:\nThe following program is submitted:\nWhat is the first observation in the SAS data set WORK.BOTH?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nHow many raw data records are read during each iteration of the DATA step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 3",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ONE:\nThe following SAS program is submitted:\nThe data set WORK.TWO is created, where Day would be 1 for Sunday, 2 for Monday, 3 for\nTuesday, ... :\nWhich expression successfully completed the program and creates the variable DAY?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. day(BeginDate)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. weekday(BeginDate)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. dayofweek(BeginDate)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. getday(BeginDate,today())",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook QTR1.XLS contains the followingthree worksheets:\nJAN\nFEB\nMAR.\nWhich statement correctly assigns a library reference to the Excel workbook?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. libname qtrdata 'qtr1.xls';",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. libname 'qtr1.xls' sheets=3;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. libname jan feb mar 'qtr1.xls';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. libname mydata 'qtr1.xls' WORK.sheets=(jan,feb,mar);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat variable X contains what value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the numeric value 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the character value \"01Jan1960\"",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the date value 01011960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the code contains a syntax error and does not execute.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following SAS program is submitted:\nWhat types of variables are DayOfMonth, MonthOfYear, and Year?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. DayOfMonth, Year, and MonthOfYear are character.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. DayOfMonth, Year, and MonthOfYear are numeric.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. DayOfMonth and Year are numeric. MonthOfYear is character.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. DayOfMonth, Year, and MonthOfYear are date values.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the data step:\nWhich of the following assignment statements for variable group are functionally equivalent to the\noriginal statement used in the above data step?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if Age not in(15,16) then Group=1; else Group=2;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. if (Age NE 16) or (Age NE 15) then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where Age not between 15 and 16 then Group=1; else Group=2;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. both A or C will work.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in TEXTFILE.TXT:\nThe following output is desired:\nWhich SAS program correctly produces the desired output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records in DATAFILE.TXT:\nWhich output is correct based on the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set WORK.ORDERS:\nThe variable Order_id is numeric; Customer is character; and Ship_date is a numeric containing a\nSAS date value.\nA programmer would like to create a new variable called Note, that shows a character value with\nthe Order_id and Ship_date shown with a date9. format. For the first observation, Note would look\nlike the following: \"Order 9341 shipped on 02FEB2009\".\nWhich of the following statement will correctly create the value and assign it to Note?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. note=catx(' ','Order',order_id,'shipped on',input(ship_date,date9.));",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. note=catx(' ','Order',order_id,'shipped on',char(ship_date,date9.));",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. note=catx(' ','Order',order_id,'shipped on',transwrd(ship_date,date9.));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. note=catx(' ','Order',order_id,'shipped on',put(ship_date,date9.));",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following data step:\nAfter data step execution, what will data set WORK.GEO contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set named WORK.SALARY contains 10 observations for each department, and is\ncurrently ordered by Department. The following SAS program is submitted:\nWhich statement is true?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The by statement in the DATA step causes a syntax error.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The statement Payroll+(MonthlyWageRate*12); in the datastep causes a syntax error.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The values of the variable Payroll represent the monthlytotal for each department in the\nWORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable Payroll represent a monthlytotal for all values of WAGERATE in the\nWORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the SAS data set SASDATA.TWO:\nThe following SAS program is submitted: data\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data set SASUSER.ONE has 5 observations\ndata set SASUSER.TWO has 5 observations\ndata set WORK.OTHER has 3 observations",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 1 observations",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data set SASUSER.ONE has 2 observations\ndata set SASUSER.TWO has 2 observations\ndata set WORK.OTHER has 5 observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No data sets are output.\nThe DATA step fails execution due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "A user-defined format has been created using the FORMAT procedure. How is it stored?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. in a SAS catalog",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. in a memory resident lookup table",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. in a SAS data set in the WORK library",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. in a SAS data set in a permanent SAS data library",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The following program is submitted:\nWhich statement best describes the output from the submitted program?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The output displays only a list of the SAS data setsthat are contained in the WORK library.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The output displays only the contents of the SAS data setsthat are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The output displays only the variables in the SAS data setsthat are contained in the WORK\nlibrary.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The output displays a list of the SAS data sets that arecontained in the WORK library and\ndisplays their contents.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "You're attempting to read a raw data file and you see the following messages displayed in the\nSAS Log:\nWhat does it mean?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A compiler error, triggered by an invalid characterfor the variable Salary.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. An execution error, triggered by an invalid characterfor the variable Salary.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The 1st of potentially many errors, this one occurringon the 4th observation.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. An error on the INPUT statement specification forreading the variable Salary.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following raw data records:\nThe following output is desired:\nWhich SAS program correctly reads in the raw data?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the contents of the raw data file TYPECOLOR.DAT:\nThe following SAS program is submitted:\nWhat are the values of the variables Type and Color?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Type=daisy, Color=yellow",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Type=daisy, Color=w",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Type=daisy, Color=daisyyellow",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Type=daisy, Color=",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The data set WORK.REALESTATE has the variable LocalFee with a format of 9. and a variable\nCountryFee with a format of 7.;\nThe following SAS program is submitted:\ndata WORK.FEE_STRUCTURE;\n    format LocalFee CountryFee percent7.2;\n    set WORK.REALESTATE;\n    LOCALFee=LocalFee/100;\n    CountryFee=CountryFee/100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LocalFee has format of 9. and CountryFee has a format of 7.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. LocalFee has format of 9. and CountryFee has a format of percent7.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Both LocalFee and CountryFee have a format of percent7.2",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The data step fails execution; there is no format for LocalFee.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the data set WORK.EMPDATA:\nWhich one of the following where statements would display observations with job titles containing\nthe word 'Manager'?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. where substr(Job_Title,(length(Job_Title)-6))='Manager';",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. where upcase(scan(Job_Title,-1,' '))='MANAGER';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where Job_Title='% Manager ';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. where Job_Title like '%Manager%';",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Given the following code:\nHow many observations will be displayed?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 11",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 15",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 10 or fewer",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 11 or fewer",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which of the following programs correctly invokes the DATA Step Debugger?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The SAS data set WORK.ONE contains a numeric variable named Num and a character variable\nnamed Char:\nThe following SAS program is submitted:\nWhat is output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Option A",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Option B",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Option C",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Option D",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Which step sorts the observations of a permanent SAS data set by two variables and stores the\nsorted observations in a temporary SAS data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc sort data=SASUSER.EMPLOYEES out=EMPSORT;\nby Lname, Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc sort data=SASUSER.EMPLOYEES out=EMPSORT;\nby Lname Fname;\nrun;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. proc sort data=SASUSER.EMPLOYEES out=TEMPORARY.EMPSORT;\nby Lname, Fname;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc sort data=SASUSER.EMPLOYEES out=TEMPORARY.EMPSORT;\nby Lname Fname;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "Consider the following data step:\nIn filtering the values of the variable X in data set WORK.OLD, what new value would be assigned\nto X if its original value was a missing value?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X would get a value of 1.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X would get a value of 3.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X would retain its original value of missing.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. This step does not run because of syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    },
    {
        question: "The Excel workbook REGIONS.XLS contains the following four worksheets:\nEAST\nWEST\nNORTH\nSOUTH\nThe following program is submitted:\nlibname MYXLS 'regions.xls';\nWhich PROC PRINT step correctly displays the NORTH worksheet?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=MYXLS.NORTH.XLS;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=MYXLS.NORTH$;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data=MYXLS.'NORTH'e;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data=MYXLS.'NORTH$'n;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        answeredCorrectly: false,
        complete: true
    }
]
