import {Injectable} from "@angular/core";
import {IQuestion} from "./questions.model";

/**
 * Created by rakesh on 15-Nov-2017.
 */
@Injectable()
export class QuestionService {

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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile 'amount';\ninput @1 salary 6.;\nif _error_ then description = 'Problems';\nelse description = 'No Problems';\nrun;\nWhich one of the following is the value of the DESCRIPTION variable?\n",
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
                    description: "D. The value cannot be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname temp 'SAS-data-library';\ndata temp.report;\nset sasuser.houses;\nnewvar = price * 1.04;\nrun;\nWhich one of the following statements is true regarding the program above?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Which one of the following SAS programs temporarily replaces the label \"Asking Price\" with the label \"Sale Price\" in the output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.empsalary;\nset work.people (in = inemp)\nwork.money (in = insal);\nif insal and inemp;\nrun;\nThe SAS data set WORK.PEOPLE has 5 observations, and the data set WORK.MONEY has 7 observations.\nHow many observations will the data set WORK.EMPSALARY contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10----15----\n(file ‘abc’)\nRAM,,20\nRAJU,SHARMA,24\nDATA temp;\nInfile ‘abc’ dsd;\nInput FNAME $ LNAME $ AGE;\n RUN;\n What will be the value of LNAME for 1st observation?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ‘,’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. blank character value",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. ‘SHARMA’",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. syntax error",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=work.employee;\nby descending fname;\nproc sort data=work.salary;\nby descending fname;\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\nrun;\nWhich one of the following statements explains why the program failed execution?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "COMPANY.PRICES\nprodid price producttype sales returns\nK12S 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY2 1.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\nlibname company 'SAS-data-library';\ndata hware inter soft;\nset company.prices (keep = producttype price);\nif price le 5.00;\nif producttype = 'HARDWARE' then output HWARE;\nelse if producttype = 'NETWORK' then output INTER;\nelse if producttype = 'SOFTWARE' then output SOFT;\nrun;\nHow many observations does the HWARE data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|--\n$1,120\ndata temp;\ninfile 'file';\ninput @1 price;\nrun;\nvalue of price?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1120",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. $1,120",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. .(missing)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\narray agents{4} $ 12 sales1 - sales4;\nrun;\nWhich one of the following represents the variables that are contained in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data play;\ndo i=0 to 9;\ndo j=0 to 9;\nk=i*10 + j +1;\noutput;\nend;\nend;\nrun;\ndata sand;\ndo i=1 to 100;\na=byte(i); / Returns a character /\noutput;\nend;\nrun;\nWhat is the code to merge the two data sets into a new data set named box preserving all of the original variables?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data box; merge play sand(i=sandi); run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data box; merge play sand(out=sandi); run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data box; merge play sand(rename=(i=sandi)); run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. data box; merge play sand(in=sandi); run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc report data = sasuser.houses nowd headline headskip;\n    column style price;\n    where price &ltr100000;\n    &ltrinsert code here>\n    title;\nrun;\nExhibit: output from the REPORT procedure.\nStyle     Price\nRANCH     $64,000\nSPLIT     $65,850\nCONDO     $80,050\nRANCH     $86,650\nSPLIT     $94,450\nSPLIT     $73,650\nCONDO     $79,350\nTWOSTORY  $55,850\nRANCH     $89,100\nTWOSTORY  $69,250\nRANCH     $34,500\nAssuming that the PRICE variable is numeric, which one of the following completes the program and produces the output displayed in the exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.month;\ndate = put('13mar2000'd,ddmmyy10.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nFirst = 'Ipswich, England';\nCity = substr(First,1,7);\nCity_Country = City!!', '!!'England';\nrun;\nWhich one of the following is the value of the variable CITY_COUNTRY in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data Sales;\ninput Month $ Jobcode $ Sales;\nretain Totalsales 200;\nTotalsales + Sales; datalines;\nJan EJK459 250 Feb EJK459 200 Mar EJK459 250 ;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 700",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 200",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 900",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 1000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "IDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially by ascending expense values within each ascending IDNUMBER value?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TEST;\ninput Name $ Age;\ndatalines;\nJohn +35;\nrun;\nWhich values are stored in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Name              Age\n---------------------\nJohn               35",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Name                        Age\n-------------------------------------\n(missing value)        (missing value)",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Name              Age\n---------------------\nJohn              (missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The DATA step fails execution due to data errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10\nvital reddy 45\nvijay 30\nsarma 40\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput x $ age;\nif age&ltr=40;\nrun;\nHow many observations will be there in the TEMP dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. zero observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. syntax error",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "dat = ‘13MAR2000’d;\nformat dat WEEKDATE.;\nrun;\nWhat will be the value of dat in output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 13MAR2000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Monday, March 13, 2000",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Mon, March 13, 2000",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 14682 (nmber of days from 1st jan 1960)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.flights;\ndestination = 'cph';\nselect(destination);\nwhen('LHR') city = 'London';\nwhen('CPH') city = 'Copenhagen';\notherwise city = 'Other';\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ONE\nThe following SAS program is submitted:\ndata two;\nset one;\nby x y;\nif first.y;\nrun;\nproc print data = two noobs;\nrun;\nWhich report is produced?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nJoe xx\nThe following SAS program is submitted:\ndata test;\ninfile 'namenum';\ninput name $ number;\nrun;\nWhich one of the following is the value of the NUMBER variable?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc print data=sasuser.cargo99\nvar origin dest cargorev;\nERROR 22-322: Syntax error, expecting one of the\nfollowing:\n;, (, DATA, DOUBLE, HEADING, LABEL,\nN, NOOBS, OBS, ROUND, ROWS, SPLIT, STYLE,\nUNIFORM, WIDTH.\nERROR 76-322: Syntax error, statement will be ignored.\n11 run;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. SAS identifies a syntax error at the position of the VAR statement.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. SAS is reading VAR as an option in the PROC PRINT statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. SAS has stopped processing the program because of errors.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. all of the above",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nlibname temp ‘SAS data library’;\ndata work.new;\nset temp.jobs;\nformat newdate mmdd10.;\nmdate = month(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new; run;\nThe variable NEWDATE contains the SAS date value for April 15. 2015. What output is produced if April 15, 2015 falls on a Friday?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Obs newdate       mdate ddate\n1     04/15/2015     4    7",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Obs newdate      mdate ddate\n1     04/15/2015    4    6",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Obs newdate       mdate ddate\n1     04/15/2015    APR   7",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Obs newdate       mdate ddate\n1     04/15/2015   APR    6",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data=allsales.totals label;\nlabel region8='Region 8 Yearly Totals';\nrun;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. proc print data=allsales.totals; label region8='Region\n8 Yearly Totals';\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data allsales.totals label noobs;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print allsales.totals label;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.new;\nmon = 3;\nday = 23;\nyear = 2000;\ndate = mdy(mon,day,year);\nrun;\nWhich one of the following is the value of the DATE variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30\nJohn,FEB,13,25,14,27,Final\nJohn,MAR,26,17,29,11,23,Current\nTina,FEB,15,18,12,13,Final\nTina,MAR,29,14,19,27,20,Current\nThe following output is desired:\nObs Name Month Status Week1 Week2 Week3 Week4 Week5\n1 John FEB Final $13 $25 $14 $27 .\n2 John MAR Current $26 $17 $29 $11 $23\n3 Tina FEB Final $15 $18 $12 $13 .\n4 Tina MAR Current $29 $14 $19 $27 $20\nWhich SAS program correctly produces the desired output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nWhich one of the following OPTIONS statements resets the page number to 1 for the second report?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following program is submitted:\nproc format;\nvalue salfmt.\n0 -&ltr 50000 = 'Less than 50K'\n50000 - high = '50K or Greater';\noptions fmterr nodate pageno=1;\ntitle 'Employee Report';\nproc print data=work.employees noobs;\nvar fullname salary hiredate;\nformat\nsalary salfmt.\nhiredate date9.;\nlabel\nfullname='Name of Employee'\nsalary='Annual Salary'\nhiredate='Date of Hire';\nrun;\nWhy does the program fail?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TEST;\nset SASHELP.CLASS(obs=5);\nretain City 'Beverly Hills';\nState='California';\nrun;\nThe computed variables City and State have their values assigned using two different methods, a\nRETAIN statement and an Assignment statement. Which statement regarding this program is\ntrue?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Products and specifies that the DATA step read only records 1–15?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. infile products obs 15;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. infile products obs=15;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. input products obs=15;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. input products 1-15;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data WORK.JANUARY;\n106 set WORK.ALLYEAR(keep=Product Month Quantity Cost);\n107 if Month='JAN' then output WORK.JANUARY;\n108 Sales=Cost * Quantity;\n109 drop=Month Quantity Cost;\n-----\nERROR 22-322: Syntax error, expecting one of the following: !,\n!!, , *, **, +, -,\n, &ltr=, &ltr>, =, >, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR, ^=, |, ||, ~=.\n110 run;\nWhat data set option could be attached to WORK.JANUARY to replace the DROP statement that\ngenerated the error in the log?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\ndo i=1 to 3;\ndo j=1 to 4;\nsalary=salary+300;\nend;\nend;\nrun;\nhow many observations will present in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 0",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "13:27 Monday, March 22, 1999\nPatient Arterial Heart Cardiac Urinary\n203 88 95 66 110\n54 83 183 95 0\n664 72 111 332 12\n210 74 97 369 0\n101 80 130 291 0\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. the DATE system option and the LABEL option in PROC PRINT",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the DATE and NONUMBER system options and the DOUBLE and NOOBS options in PROC PRINT",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. the DATE and NONUMBER system options and the DOUBLE option in PROC PRINT",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the DATE and NONUMBER system options and the NOOBS option in PROC\nPRINT",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Location\tPop2000\nAlaska\t626931\nDelaware\t783595\nVermont\t608826\nWyoming\t493782\nand the SAS data set WORK.P2008:\nState\tPop2008\nAlaska\t686293\nDelaware\t873092\nWyoming\t532668\nThe following output is desired:\nObs\tState\tPop2000\tPop2008\tDifference\n1\tAlaska\t626931\t686293\t59362\n2\tDelaware\t783595\t873092\t89497\n3\tWyoming\t493782\t532668\t38886\nWhich SAS program correctly combines the data?\nA.\ndata compare;\nmerge WORK.P2000(in=_a Location=State)\nWORK.P2008(in=_b);\nby State;\nif _a and _b;\nDifference=Pop2008-Pop2000;\nrun;\nB.\ndata compare;\nmerge WORK.P2000(rename=(Location=State))\nWORK.P2008;\nby State;\nif _a and _b;\nDifference=Pop2008-Pop2000;\nrun;\nC.\ndata compare;\nmerge WORK.P2000(in=_a rename=(Location=State))\nWORK.P2008(in=_b);\nby State;\nif _a and _b;\nDifference=Pop2008-Pop2000;\nrun;\nD.\ndata compare;\nmerge WORK.P2000(in=_a) (rename=(Location=State))\nWORK.P2008(in=_b);\nby State;\nif _a and _b;\nDifference=Pop2008-Pop2000;\nrun;\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.passengers;\nif OrigPassengers = . then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = sum (OrigPassengers, TransPassengers);\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data WORK.JANUARY;\nSet WORK.ALLYEAR(keep=Product Month Quantity Cost);\nIf month=’JAN’ then output WORK.JANUARY;\nSales=Cost*Quantity;\nDrop=Month Quantity Cost;\nERROR 22-322: Syntax error, expecting one of the following: !,!!, &, *, **, +, -, , &ltr=, &ltr>, =, >, >=, AND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,NOTIN, OR, ^=, |, ||, ~=.\nRun;\nWhat issue generated the error in the log?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The syntax of the drop statement does not use an equal sign.",
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
                    description: "D. A drop statement and a keep= data set option cannot both be used at the same time.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TEST;\ndrop City;\ninfile datalines;\ninput\nName $ 1-14 /\nAddress $ 1-14 /\nCity $ 1-12 ;\nif City='New York ' then input @1 State $2.;\nelse input;\ndatalines;\nJoe Conley\n123 Main St.\nJanesville\nWI\nJane Ngyuen\n555 Alpha Ave.\nNew York\nNY Jennifer Jason\n666 Mt. Diablo\nEureka\nCA ;\nWhat will the data set WORK.TEST contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=ecsql1.price_list;\n by Unit_Cost_Price;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A new dataset work.price_list is created with Unit_Cost_Price sorted in ascending order with missing values at the bottom of the dataset",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The dataset ecsql1.price_list is sorted with Unit_Cost_Price sorted in descending order with missing values at the bottom of the dataset",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. A new dataset work.price_list is created with Unit_Cost_Price sorted in descending order with missing values at the top of the dataset",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The dataset ecsql1.price_list is sorted with Unit_Cost_Price sorted in ascending order with missing values at the top of the dataset",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Date temp;\n      A=’I was Bond, A real Bond’;\n      LEN=SUBSTR(A,6,4);\nRun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 23",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 200",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data wally;\nif AmountDue=. then AmountDue=100;\nAdditionalFees=50;\nAmountDue=.;\nTotalDue=(AmountDue+AdditionalFees)+0;\nrun;\nWhat is the value of TotalDue variable in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 100",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 0",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. . (missing value)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 50",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.clients;\ncalls = 6;\ndo while (calls le 6);\ncalls + 1;\nend;\nrun;\nWhich one of the following is the value of the variable CALLS in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data _null_;\nset old (keep = prod sales1 sales2);\nfile 'file-specification';\nput sales1 sales2;\nrun;\nWhich one of the following default delimiters separates the fields in the raw data file created?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "what value must the YEARCUTOFF= option have?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. a value between 1947 and 1954, inclusive",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1955 or higher",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1946 or higher",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. any value",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc format;\nvalue agegrp\nlow-12 ='Pre-Teen'\n13-high = 'Teen';\nrun;\nproc means data=SASHELP.CLASS;\nvar Height;\nclass Sex Age;\nformat Age agegrp.;\nrun;\nThe following results were generated to display only specific statistics and limit the decimals with the modification:\nWhich statement below was modified or added to generate the results above:\nAnalysis variable Height\nSex        Age         N obs       Minimum           Maximum           Mean\nF         Pre-Teen      3             51.3                   59.8                  55.8\n               Teen         6             56.5                   66.5                  63.0\nM        Pre-Teen      4             57.3                   64.8                  59.7\n               Teen         6             62.5                   72.0                  66.8\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following program is submitted:\nproc format;\nvalue salfmt.\n0 -&ltr 50000 = 'Less than 50K'\n50000 - high = '50K or Greater';\noptions fmterr nodate pageno=1;\ntitle 'Employee Report';\nproc print data=work.employees noobs;\nvar fullname salary hiredate;\nformat\nsalary salfmt.\nhiredate date9.;\nlabel\nfullname='Name of Employee'\nsalary='Annual Salary'\nhiredate='Date of Hire';\nrun;\nWhy does the program fail?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "sorted observations in a temporary SAS data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Date On Changed Flight\n04MAR99 232 18 219\n05MAR99 160 4 219\n06MAR99 163 14 219\n07MAR99 241 9 219\n08MAR99 183 11 219\n09MAR99 211 18 219\n10MAR99 167 7 219\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. roc print data=flights.laguardia noobs;\nvar on changed flight;\nwhere on>=160;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data=flights.laguardia;\nvar date on changed flight;\nwhere changed>3;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data=flights.laguardia label;\nid date;\nvar boarded transferred flight;\nlabel boarded='On' transferred='Changed';\nwhere flight='219';\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc print flights.laguardia noobs;\nid date;\nvar date on changed flight;\nwhere flight='219';\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----+----10---+----20---+----30 daisyyellow The following SAS program is submitted:\ndata FLOWERS;\ninfile'TYPECOLOR.DAT' truncover;\nlength\nType $ 5\nColor $ 11;\ninput\nType $\nColor $;\nrun;\nWhat are the values of the variables Type and Color?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nlength y $5;\nx=4;\nif x=4 then y='four';\nelse if x=7 then y='seven';\nx=7;\nrun;\nWhat would be the value of X and Y in the dataset temp?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X=4 and Y= ‘seven’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. X=7 and Y=’seven’",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X=7 and Y=’four’",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. X=4 and Y=’four’",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n24613____$25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile 'product';\ninput idnum 5. @10 price;\nrun;\nWhich one of the following is the value of the PRICE variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10----|----20----|----30\nDaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile typecolor’;\ninput type $ 1-5 +1 color$;\nrun;\nWhich one of the following represents the values of the variables TYPE and COLOR?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "&ltrinsert ODS statement here>\nproc means data = sasuser.shoes;\nwhere product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\n&ltrinsert ODS statement here>\nWhich ODS statements complete the program and send the report to an HTML file?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.staff;\nJobCategory = 'FA';\nJobLevel = '1';\nJobCategory = JobCategory || JobLevel;\nrun;\nWhich one of the following is the value of the variable JOBCATEGORY in the output data set?\n",
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
                    description: "D. ' '",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ID Sex Age Height Weight Pulse\n2304 F 16 61 102 100\n1128 M 43 71 218 76\n4425 F 48 66 162 80\n1387 F 57 64 142 70\n9012 F 39 63 157 68\n6312 M 52 72 240 77\n5438 F 42 62 168 83\n3788 M 38 73 234 71\n9125 F 56 64 159 70\n3438 M 15 66 140 67\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data _null_;\nset work.patients;\ninfile 'c:\\clinic\\patients\\referrals.dat';\ninput id 1-4 sex 6 age 8-9 height 11-12\nweight 14-16 pulse 18-20;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data referrals.dat;\nset work.patients;\ninput id 1-4 sex 6 age 8-9 height 11-12\nweight 14-16 pulse 18-20;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data _null_;\nset work.patients;\nfile c:\\clinic\\patients\\referrals.dat;\nput id 1-4 sex 6 age 8-9 height 11-12\nweight 14-16 pulse 18-20;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data _null_;\nset work.patients;\nfile 'c:\\clinic\\patients\\referrals.dat';\nput id 1-4 sex 6 age 8-9 height 11-12\nweight 14-16 pulse 18-20;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "105 data january;\n106 set allmonths(keep = product month num_sold cost);\n107 if month = 'Jan' then output january;\n108 sales = cost * num_sold;\n109 keep = product sales;\n------\nERROR 22-322: Syntax error, expecting one of the following:!,\n!!, &, *,**, +, -,/, &ltr,&ltr =, &ltr>, =, >, >&ltr, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR,^=,|,II,\n110 run;\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "filename rawdata1 ‘u3x2888.reddy.lib(reddy)’;\nlibname rawdata2 ‘u3x2888.reddy.saslib’\ndata temp;\ninfile &ltrmissing code>;\ninput x y;\nrun;\nwhat should be inserted in place of missing code?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. rawdata2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. rawdata1",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. file",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. none",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Consider the following data step:\ndata WORK.NEW;\nset WORK.OLD(keep=X);\nif X &ltr 10 then X=1;\nelse if X >= 10 AND X LT 20 then X=2;\nelse X=3;\nrun;\nIn filtering the values of the varibale X in data set WORK.OLD, what value new value would be\nassigned to X if its original value was a missing value?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.passengers;\nif OrigPassengers = then\nOrigPassengers= 100;\nTransPassengers= 100;\nOrigPassengers=\nTotalPassengers= sum (OrigPassengers, TransPassengers) +0;\nrun;\nWhat is the value of the TOTALPASSENGERS variable in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "_ cannot end with a number\n_ cannot end with a period\n_ cannot be the name of a SAS format, and\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. cannot be the name of a data set variable.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. must be at least two characters long.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. must be at least eight characters long.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. must begin with a dollar sign ($) if used with a character variable.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "How many observation are in EMPLSAL dataset\ndata emplsal;\nmerge employee (in=ine) salary(in=ins);\nby name;\nif ine and ins;\nrun;\nChoices are\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 1\nEMPLOYEE\tSALARY\nNAME\tAGE\tNAME\tSALARY\nBruce\t30\tBruce\t40000\nDan\t35\tBruce\t35000\n\t\tDan\t37000\n\t\tDan\t.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.report;\nset work.sales_info;\nif qtr(sales_date) ge 3;\nrun;\nThe SAS data set WORK.SALES_INFO has one observation for each month in the year 2000 and the variable SALES_DATE which contains a SAS date value for each of the twelve months.\nHow many of the original twelve observations in WORK.SALES_INFO are written to the WORK.REPORT data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc contents data=_all_;\nrun;\nWhich statement best describes the output from the submitted program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.DATE_INFO;\nX=\"01Jan1960\" D ;\nrun;\nWhat variable X contains what value?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "RANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH';\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations will the output data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data combine;\ncountry = 'Italy, Russia, ireland';\nfound = find(country, 'i');\nrun;\nWhat is the value of the variable FOUND in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Given the raw data record in the file phone.txt:\n----|----10---|----20---|----30---|\nStevens James SALES 304-923-3721 14\nThe following SAS program is submitted:\ndata WORK.PHONES;\ninfilephone.txt;\ninput EmpLName $ EmpFName $ Dept $ Phone $ Extension;\n&ltr_insert_code_>\nrun;\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the\nvariableFullName?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "2 data gt100;\n3 set ia.airplanes\n4 if mpg gt 100 then output;\n22 202\nERROR: File WORK.IF.DATA does not exist.\nERROR: File WORK.MPG.DATA does not exist.\nERROR: File WORK.GT.DATA does not exist.\nERROR: File WORK.THEN.DATA does not exist.\nERROR: File WORK.OUTPUT.DATA does not exist.\nERROR 22-322: Syntax error, expecting one of the following: a name,\na quoted string, (, ;, END, KEY, KEYS, NOBS, OPEN, POINT, _DATA_, _LAST_, _NULL_.\nERROR 202-322: The option or parameter is not recognized and will be ignored.\n5 run;\nThe IA libref was previously assigned in this SAS session.\nWhich one of the following corrects the errors in the LOG?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Obs name level\n1 Frank 1\n2 Joan 2\n3 Sui 2\n4 Jose 3\n5 Burt 4\n6 Kelly .\n7 Juan 1\nThe following SAS program is submitted:\ndata work.expertise;\nset work.levels;\nif level = . then\nexpertise = 'Unknown';\nelse if level = 1 then\nexpertise = 'Low';\nelse if level = 2 or 3 then\nexpertise = 'Medium';\nelse\nexpertise = 'High';\nrun;\nWhich of the following values does the variable EXPERTISE contain?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "SALARY.\nThe following SAS program is submitted:\nproc sort data = work.test out = work.testsorted;\nby name;\nrun;\nWhich one of the following is the result of the SAS program?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data TEMP;\nSet test (firstobs=75);\nRun;\nWhat will be the number of observations in temp dataset?\n",
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
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 500",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 426",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "n=1;\ndo while(n lt 6);\nn+1;\nend;\nrun;\nWhat will be the value of n at the end of datastep?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 7",
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
                    description: "D. 8",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ProdId Price ProductType Sales Returns\n------ ---------- --------------- ------- ----------\nK12S 95.50 OUTDOOR 15 2\nB132S 2.99 CLOTHING 300 10\nR18KY2 51.99 EQUIPMENT 25 5\n3KL8BY 6.39 OUTDOOR 125 15\nDY65DW 5.60 OUTDOOR 45 5\nDGTY23 34.55 EQUIPMENT 67 2\nThe following SAS program is submitted:\ndata WORK.REVENUE(drop=Sales Returns Price);\nset WORK.PRODUCTS(keep=ProdId Price Sales Returns);\nRevenue=Price*(Sales-Returns);\nrun;\nHow many variables does the WORK.REVENUE data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10\n 23 44\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput @1 weight 2. @4 height 2.;\nrun;\nWhat is the value of HEIGHT variable in the TEMP dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. . (period)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Blank",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 44",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 23",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data _NULL_;\na=month(today());\nb=put(a,date9.);\nput b;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 13JAN1960;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. syntax error",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 31DEC2004",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "do X=1 to 3 ;\ninput ID NAME $ AGE;\nend;\ndatalines;\n01 vivek 22\n02 vital 25\n03 rajesh 20\n;\nWhat will be the number of observations and variables in output dataset??\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3 and 3",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1 and 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1 and 4",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 3 and 1",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlabel Jobcode='Job Description';\nrun;\nWhich statement is true about the output dataset?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc means data = sasuser.shoes;\nwhere product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\nWhich one of the following ODS statements completes the program and sends the report to an HTML file?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp.X1.\nset sasuser.X2;\nrun;\nWhich is the correct statement??\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. In datastep input is read from temporary location and output is written to temporary location.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. In datastep input is read from permanent location and output is written to temporary location.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. In datastep input is read from temporary location and output is written to permanent location.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. In datastep input is read from permanent location and output is written to permanent location.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "WORK.ORDERS\norder_id customer shipped\n---------- ------------ -----------\n9341 Josh Martin 02FEB2009\n9874 Rachel Lords 14MAR2009\n10233 Takashi Sato 07JUL2009\nThe variable order_id is numeric; customer is character; and shipped is numeric, contains a SAS\ndate value, and is shown with the DATE9. format. A programmer would like to create a new\nvariable, ship_note, that shows a character value with the order_id, shipped date, and customer name. For example, given the first observation ship_note would have the value \"Order 9341\nshipped on 02FEB2009 to Josh Martin\".\nWhich of the following statement will correctly create the value and assign it to ship_note?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " 1----5----10\nvital reddy 45\nvijay 30\nsarma 40\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput x $ age; if age&ltr=40;\nrun;\nHow many observations will be there in the TEMP dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 3",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 0 observations",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. syntax error",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " john McCloskey 35 71\nJune Rosesette 10 43\nTineke Jones 9 37\nThe following SAS program is submitted using the raw data file as input:\ndata work.homework;\ninfile 'file-specification';\ninput name $ age height;\nif age LE 10;\nrun;\nHow many observations will the WORK.HOMEWORK dataset contain?\n",
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
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. No dataset is created as the program fails to execute due to errors",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----+----1----+----2----+----\nRED    ORANGE  YELLOW  GREEN\nBLUE   INDIGO  PURPLE  VIOLET\nCYAN   WHITE   FUCSIA  BLACK\nGRAY   BROWN   PINK    MAGENTA\nThe following SAS program is submitted:\ndata WORK.COLORS;\n infile 'COLORS.TXT';\n input @1 Var1 $ @8 Var2 $ @;\n input @1 Var3 $ @8 Var4 $ @;\nrun;\nWhat will the data set WORK.COLORS contain?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A.    Var1            Var2            Var3                  Var4\n      ---------     ---------------      ----------           -------------\n       RED        ORANGE         BLUE             INDIGO\n       CYAN      WHITE            GRAY             BROWN",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B.  Var1            Var2                Var3                Var4\n      ---------     ---------------      ---------------     -------\n       RED        ORANGE        YELLOW         GREEN\n       BLUE      INDIGO           PURPLE          VIOLET",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C.    Var1            Var2               Var3                Var4\n      ---------     ---------------      --------------     --------       RED        ORANGE        YELLOW        GREEN\n       BLUE      INDIGO            PURPLE        VIOLET\n       CYAN      WHITE            FUSCIA          BLACK\n       GRAY      BROWN          PINK               MAGENTA",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D.    Var1            Var2               Var3                Var4\n      -----          --------           --------     --------\n       RED        ORANGE        RED               ORANGE\n       BLUE      INDIGO           BLUE              INDIGO\n       CYAN      WHITE            CYAN              WHITE\n       GRAY      BROWN          GRAY             BROWN",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.retail;\ncost = '20000';\ntotal= .10* cost\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the variable TOTAL in the output data set is 2000. No messages are written to the SAS log.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the variable TOTAL in the output data set is2000. A note that conversion has taken place is written to the SAS log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The value of the variable TOTAL in the output data set is missing. An error message is written to the SAS log.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The variable TOTAL in the output data set has no value. The program fails to execute due to a syntax error.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "10:03 Friday, March 17, 2000\nAct\nObs ID Height Weight Level Fee\n1 2458 72 168 HIGH 85.20\n2 2462 66 152 HIGH 124.80\n3 2501 61 123 LOW 149.75\n4 2523 63 137 MOD 149.75\n5 2539 71 158 LOW 124.80\n6 2544 76 193 HIGH 124.80\n7 2552 67 151 MOD 149.75\n8 2555 70 173 MOD 149.75\n9 2563 73 154 LOW 124.80\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. OBS=, DATE, and NONUMBER",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. PAGENO=1 and DATE",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. NUMBER and DATE only",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. none of the above",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nFirst = 'Ipswich, England';\nCity_Country = substr(First,1,7)!!', '!!'England';\nrun;\nWhich one of the following is the length of the variable CITY_COUNTRY in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname osiris spss 'c:\\myfiles\\sasdata\\data';\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. defines a library called Spss using the OSIRIS engine",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. defines a library called Osiris using the SPSS engine",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. defines two libraries called Osiris and Spss using the default engine",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. defines the default library using the OSIRIS and SPSS engines",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "By subjid;\nRun;\nIn which library temp2 is made?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. WORK",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. SASUSER",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LIB",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. SYNTAX ERROR",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data WORK.DATE_INFO;\nX=”01Jan1960” D;\nRun;\nWhat variable X contains what value?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "X= ‘13MAR2000’d;\nRUN;\nWhat is stored in x?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 13MAR2000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Corresponds to days from 01 Jan 1960: 14682",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 13/03/2000",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Corresponds to days from 01 Jan 1960: 135680",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data newstaff;\nset staff;\nstart_date = today();\nrun;\nWhich one of the following is the value of the variable START_DATE in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30---|\nStevens James SALES 304-923-3721 14\nThe following SAS program is submitted:\ndata WORK.PHONES;\ninfilephone.txt;\ninput EmpLName $ EmpFName $ Dept $ Phone $ Extension;\n&ltr_insert_code_>\nrun;\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the variable FullName?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data _null_;\narray i{2,3} (1 2 3 4 5 6);\narray j{6} (10 20 30 40 50 60);\ndo k=3,1;\ntotal + i{2,k} - j{2*k};\nend;\ngrandtotal = total + sum(of j{*});\nput grandtotal=;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. grandtotal=140",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. grandtotal=-70",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. grandtotal=210",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. -70",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "_ERROR_ is 0, and the values of the remaining variables are set to\n",
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
                    description: "C. undefined",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. missing",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data sandbox(drop=Name Age);\nset employees(keep=Name Age Weight Height Gender);\nby Gender;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Weight, Height, Gender",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. too little information to determine",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. None",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Name, Age, Weight, Height, Gender",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30\nSusan*12/29/1970*10\nMichael**6\nThe following output is desired:\nObs employee bdate years\n1 Susan 4015 10\n2 Michael . 6\nWhich SAS program correctly reads in the raw data?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "A.\nProc print data=SASUSER.HOUSES label;\nLabel Open_date “Starting Date”;\nRun;\nB.\nProc print data=SASUSER.HOUSES label;\nLabel Open_date= “Starting Date”;\nRun;\nC.\nProc print data=SASUSER.HOUSES ;\nLabel Open_date “Starting Date”;\nRun;\nD.\nProc print data=SASUSER.HOUSES ;\n Open_date= “Starting Date”;\nRun;\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "NOTE: Invalid data for IDnum in line 7 15-19.\nRULE: ----+----1----+----2----+----3----+----4\n7 Bird Feeder LG088 3 20\nItem=Bird Feeder IDnum=. InStock=3 BackOrd=20\nTotal=23 _ERROR_=1 _N_=1\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A keyword was misspelled in the DATA step.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. A semicolon was missing from the INFILE statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. A variable was misspelled in the INPUT statement.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A dollar sign was missing in the INPUT statement.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n72 95\nThe following SAS program is submitted:\ndata test;\ninfile 'size';\ninput @1 height 2. @4 weight 2;\nrun;\nWhich one of the following is the value of the variable WEIGHT in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data stores;\nset julSales;\nset augSales;\nrun;\nHow many observations will be in the stores data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 250",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 0. You can't use two SET statements",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 600",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 850",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data _null_;\nset old;\nput sales1 sales2;\nrun;\nWhere is the output written?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nproc report data = work.houses nowd;\ncolumn style price;\nwhere price &ltr 100000;\n&ltrinsert DEFINE statements here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure. Assume permanent variable labels have been assigned.\nWhich one of the following completes the program and produces the output displayed in the exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----\n01012000\ndata temp;\n infile 'file';\n input date mmddyy10.;\n if date='01012000'd then EVENT='January 1st'.\nrun;\nWhat is the value of EVENT in the dataset?\nas date constant uses ddmmmyyyy format i.e. date='01jan2000'd is the correct option here.\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. January 1st",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. '' (blank character value)",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. no value as there is a syntax error in the datastep",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 01012000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=clinic.diabetes;\nrun;\nproc print data=clinic.diabetes;\nvar age height weight pulse;\nwhere sex='F';\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PROC PRINT step runs successfully, printing observations in their sorted order.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The PROC SORT step permanently sorts the input data set.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The PROC SORT step generates errors and stops processing, but the PROC PRINT step runs successfully, printing observations in their original (unsorted) order.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The PROC SORT step runs successfully, but the PROC PRINT step\ngenerates errors and stops processing.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.DATE_INFO;\nDay=\"01\" ;\nYr=1960 ;\nX=mdy(Day,01,Yr) ;\nrun;\nWhat is the value of the variable X?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.RETAIL;\nCost=’$20.000′;\nDiscount=.10*Cost;\nrun;\nWhat is the result?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The value of the variable Discount in the output data set is 2000.No messages are written to the SAS log.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The value of the variable Discount in the output data set is 2000.A note that conversion has taken place is written to the SAS log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The value of the variable Discount in the output data set is missing. A note in the SAS log refers to invalid numeric data.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The variable Discount in the output data set is set to zero. No messages are written to the SAS log.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Libname out ‘sas-library’;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data MYDATA;\n     set MYDATA;\n     run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data MYDATA;\n     set out.MYDATA;\n       run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data out.MYDATA;\n    set MYDATA;\n    run;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. none",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Field Name   Start Column    End Column       Data Type\nStockNumber       1              3            character\nFinish            5              9            character\nStyle            11             18            character\nItem             20             24            character\nPrice            27             32            numeric\n1-----+-----10-----+----20-----+-----30-----+\n310 Oak    pedestal  table   329.99\n311 male   pedestal  table   369.99\n312 brass  floor     lamp    79.99\n313 glass  table     lamp    59.99\n313 oak    rocking   chair   153.99\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. input StockNumber $ 1-3 Finish $ 5-9 Style $ 11-18 Item $ 20-24 Price 27-32;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. input StockNumber $ 1-3 Price 27-32 Item $ 20-24 Finish $ 5-9 Style $ 11-18;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. input $ StockNumber 1-3 Price 27-32 $ Item 20-24 $ Finish 5-9 $ Style 11-18;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. input StockNumber $ 1-3 Price $ 27-32 Item $ 20-24 Finish $ 5-9 Style $ 11-18;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc contents data = sashelp.class varnum; quit;\nWhat does the VARNUM option print?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "AlRPLANES\nTYPE MPG\n-------- ------\nF-18 105\nC-130 25\nHarrier 75\nA-6 110\nThe following SAS program is submitted:\ndata gt100;\nset airplanes(keep = type mpg load);\nload = mpg * 150;\nrun;\nThe program fails to execute due to syntax errors.\nWhat is the cause of the syntax error?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data = sasuser.houses out = report;\nby style;\nrun;\nIn which library is the output data set stored?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.NEW;\nset WORK.OLD(keep=X);\nif X &ltr 10 then X=1;\nelse if X >= 10 AND X LT 20 then X=2;\nelse X=3;\nrun;\nIn filtering the values of the variable X in data set WORK.OLD, what value new value would be assigned to X if its original value was a missing value?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "When you use the BY statement with the SET statement,\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. FIRST. and LAST. identify the first and last observation in each BY group, in that order.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. the DATA step automatically creates two variables, FIRST. and LAST., for each variable in the BY statement.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. the data sets that are listed in the SET statement must be indexed or sorted by the values of the BY variable(s).",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. FIRST. and LAST. are stored in the data set.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "   dta work.il_corn;\n    set corn.state_data;\n    if state = 'Illinois';\n   run;\nThe keyword \"data\" is misspelled above. What happens to this program during the compilation phase assuming \"corn\" is a valid libref?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The program fails due to syntax errors",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The DATA step compiles but doesn't execute",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The DATA step compiles and executes",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. None of the above",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nJohn McCloskey 35 71\nJune Rosesette 10 43\nTineke Jones 9 37\nThe following SAS program is submitted using the raw data file as input:\ndata work.homework;\ninfile 'file-specification';\ninput name $ age height;\nif age LE 10;\nrun;\nHow many observations will the WORK.HOMEWORK data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data one;\ndate = '04juI2005'd;\nformat date weekdate.; run;\nproc print data = one; run;\nWhat output is generated?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "$60,000. The other customer wants to view a list of homes selling for greater than $100,000.\nAssuming the PRICE variable is numeric, which one of the following PRINT procedure steps will\nselect all desired observations?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc print data = sasuser.houses;\n            where price lt 60000 or where price gt 100000;\n    run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc print data = sasuser.houses;\n           where price lt 60000;\n           where price gt 100000;\n    run;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc print data = sasuser.houses;\n            where price lt 60000 and price gt 100000;\n    run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc print data = sasuser.houses;\n            where price lt 60000 or price gt 100000;\n     run;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\n&ltr_insert_ods_code_>\nproc means data=SASUSER.SHOES;\nwhere Product in ('Sandal' , 'Slipper' , 'Boot');\nrun;\n&ltr_insert_ods_code_>\nWhich ODS statements inserted, respectively, in the two location above creates a report stored in\nan html file?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc format;\nvalue score 1 - 50 = 'Fail'\n51 - 100 = 'Pass';\nrun;\nproc report data = work.courses nowd;\ncolumn exam;\ndefine exam / display format = score.;\nrun;\nThe variable EXAM has a value of 50.5.\nHow will the EXAM variable value be displayed in the REPORT procedure output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Id Char1\n--- -----\n111 A\n158 B\n329 C\n644 D\nand the SAS data set WORK.TWO:\nId Char2\n--- -----\n111 E\n538 F\n644 G\nThe following program is submitted:\ndata WORK.BOTH;\nset WORK.ONE WORK.TWO;\nby Id;\nrun;\nWhat is the first observation in SAS data set WORK.BOTH?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n01012000\nThe following SAS program is submitted:\ndata test;\ninfile 'calendar';\ninput @1 date mmddyy10.;\nif date = '01012000'd then event = 'January 1st';\nrun;\nWhich one of the following is the value of the EVENT variable?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Frequency\nPercent\nRow Pct\nCol Pct\n\tTable of Region by Product\nRegion\tProduct\n\tCorn\tCotton\tOranges\tTotal\nEast\t2\n22.22\n50.00\n50.00\n\t1\n11.11\n25.00\n33.33\n\t1\n11.11\n25.00\n50.00\n\t4\n44.44\nSouth\t2\n22.22\n40.00\n50.00\n\t2\n22.22\n40.00\n66.67\n\t1\n11.11\n20.00\n50.00\n\t5\n55.56\nTotal\t4\n44.44\n\t3\n33.33\n\t2\n22.22\n\t9\n100.00\nWhich TABLES statement was used to completed the following program\nthat produced the output?\nproc freq data=sales;\n&ltr_insert_code_>\nrun;\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nJanice 10\nHenri 11\nMichael 11\nSusan 12\nThe following SAS program is submitted:\ndata group;\ninfile 'team';\ninput name $15. age 2.;\nfile 'file-specification';\nput name $15. +5 age 2.;\nrun;\nWhich one of the following describes the output created?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.totalsales (keep = monthsales{12} );\nset work.monthlysales (keep = year product sales);\narray monthsales {12} ;\ndo i=1 to 12;\nmonthsales{i} = sales;\nend;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five years for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "JOBCODE\nChem3\ndata xyz;\nset temp;\nif jobcode='CHEM3' then description='senior chemist';\nelse description='unknown';\nrun;\nWhat is the value of DESCRIPTION variable in the TEMP dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. senior chemist",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. unknown",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. senior",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. blank characters",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nsalary='20000';\nbonus=0.1*salary;\nrun;\nWhat would be the value of  BONUS variable in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ’2000’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2000",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. .(period)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. blank",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "---------10--------20--------30\ndaisyyellow\nThe following SAS program is submitted:\ndata flowers;\ninfile 'typecolor';\ninput type $ 1-5 +1 color $;\nrun;\nWhich one of the following represents the values of the variables TYPE and COLOR?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10\n02032000\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput date  mmddyy10.;\nrun;\nwhat is the value of date in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 02032000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 14643, the number of days from jan 1st , 1960",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 1460000, the number of days from jan 1st , 1960",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 02/03/2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data allobs;\nset sasdata.origin (firstobs = 75 obs = 499);\nrun;\nThe SAS data set SASDATA.ORIGIN contains 1000 observations.\nHow many observations does the ALLOBS data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Regin Asia\tSubsidiary\tTotal Sales\n\tBangkok\t$1,996\n\tBangkok\t$3,033\n\tBangkok\t$3,230\n\tBangkok\t$3,019\n\tBangkok\t$5,389\n\tSeoul\t$60,712\n\tSeoul\t$11,754\n\tSeoul\t$116,333\n\tSeoul\t$4,978\n\tSeoul\t$149,013\n\tSeoul\t$937\n\tSeoul\t$20,448\n\tSeoul\t$78,234\n\tTokyo\t$1,155\n——————————————————————————————————————————————-\nOutput we want!\nRegin Asia\tSubsidiary\tTotal Sales\n\tBangkok\t$16,667\n\tSeoul\t$442,409\n\tTokyo\t$1,155\nThe following SAS program is submitted and produces the first report:\nproc report data = sasuser.shoes nowd;\n    column region subsidiary sales;\n    define subsidiary / display;\n    define region / group;\n    define sales / sum;\nrun;\nWhich one of the following corrects the program above to produce the second report shown in the exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.accounting;\nset work.department;\nlength jobcode $ 12;\nrun;\nThe WORK.DEPARTMENT SAS data set contains a character variable named JOBCODE with a length of 5. Which one of the following is the length of the variable JOBCODE in the output data set?\n",
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
                    description: "D. The length cannot be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data _null_ ;\nThis statement produces:\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. no SAS dataset",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. a SAS dataset named null",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. a SAS dataset named _null_",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. the largest possible dataset",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nset work.staff (keep = jansales febsales marsales);\narray diff_sales{3} difsales1 - difsales3;\narray monthly{3} jansales febsales marsales;\nrun;\nWhich one of the following represents the new variables that are created?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc report data=employees nowd;\ncolumn name yrsemp salary yrsales bonus;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. A list report that displays a row for each observation in the input data set and includes only the variables in the COLUMN statment.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. A list report that calculates the N (frequency) statistic for character variables.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. A list report ordered by values of the first variable in the COLUMN statement",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. A summary report ordered by values of the first variable in the COLUMN statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data playground;\ndo x=0 to 9;\ndo y =0 to 9;\nif x in(1,3,5,7,9) then do;\nz=x*10+y;\noutput;\nend;\nend;\nend;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 50",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Can not determine from the output.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 100",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 0",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.sales;\ndo year = 1 to 5;\ndo month=1 to 12;\nx+1;\noutput\nend;\nend;\nrun;\nHow many observations are written the WORK SALES data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname sasdata 'SAS-data-library';\ndata allobs;\nset sasdata.banks;\ncapital=0;\ndo year = 2000 to 2020 by 5;\ncapital + ((capital+2000) * rate);\noutput;\nend;\nrun;\nHow many observations will the ALLOBS data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data box;\nmerge play sand;\nrun;\nWhat variables will be in the resulting data set box?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. i",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. i, j, k",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The code has a syntax error.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. i, j",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data stats;\nset revenue;\narray weekly{5} mon tue wed thu fri;\ntotal = weekly{i} * .25;\noutput;\nend;\nrun;\nWhich one of the following DO statements completes the program and processes the elements of the WEEKLY array?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname temp 'SAS-data-library';\ndata work.new;\nset temp.jobs;\nformat newdate mmddyy10.;\nqdate = qtr(newdate);\nddate = weekday(newdate);\nrun;\nproc print data = work.new;\nrun;\nThe variable NEWDATE contains the SAS date value for April 15, 2000.\nWhat output is produced if April 15, 2000 falls on a Saturday?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname temp 'SAS-data-library';\ndata temp.sales;\nmerge temp.sales;\nwork.receipt;\nby names;\nrun;\nWhich one of the following results occurs when this program is submitted?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES statement was used to completed the following program that produced the\noutput?\nproc freq data=sales;\n&ltr_insert_code_>\nrun;\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10\ndan  23 45\nbob  44 50\nsue   30 80\nmam 40 50\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput x $ 1-3;\nif x='sue' then input age 5-6;\nelse input height 8-9;\nrun;\nwhat would be the value of variable AGE in the dataset TEMP when variable X has the value ‘Sue’?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 30",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 44",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 40",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 55",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.products;\nProduct_Number = 5461;\nItem = '1001';\nItem_Reference = Item'/'Product_Number;\nrun;\nWhich one of the following is the value of the variable ITEM_REFERENCE in the output data set?\n",
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
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The value cannot be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Name EmpID\n------- --------\nJill 1864\nJack 2121\nJoan 4698\nJohn 5463\nGiven the SAS data set WORK.EMP_DEPT:\nEmpIDDepartment\n-------- --------------\n2121 Accounting\n3567 Finance\n4698 Marketing\n5463 Accounting\nThe following program is submitted:\ndata WORK.ALL;\nmerge WORK.EMP_NAME(in=Emp_N)\nWORK.EMP_DEPT(in=Emp_D);\nby Empid;\nif (Emp_N and not Emp_D) or (Emp_D and not Emp_N);\nrun;\nHow many observations are in data set WORK.ALL after submitting the program?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ONE\nObs Dte\n----- --------\n1 09JAN2005\n2 12JAN2005\nThe following SAS program is submitted:\ndata two;\nset one;\nday = &ltrinsert expression here>;\nformat dte date9.;\nrun;\nThe data set TWO is created:\nTWO\nObs Dte Day\n1 09JAN2005 1\n12 JAN2005 4\nWhich expression successfully completed the program and created the variable DAY?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data test;\ninfile 'file specification';\ninput name $ amount@@;\nrun;\nWhich of the following is true?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data sandbox(drop=Age);\nset employees(keep=Name Age Weight);\nby Age;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. None.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Name, Age, Weight",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Not enough information",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Name, Weight",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc print data=SASHELP.CLASS(firstobs=5 obs=15);\nwhere Sex='M';\nrun;\nHow many observations will be displayed?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TEST;\ninfile'c:\\class1.csv' dsd;\ninput Name $ Sex $ Age Height Weight;\nif Age NE 16 and Age NE 15 then Group=1;\nelse Group=2;\nWhich of the following assignment statements for variable group are functionally equivalent to the\noriginal statement used in the above data step?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.one;\nx = 3;\ny = 2;\nz = x ** y;\nrun;\nWhich one of the following is the value of the variable Z in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30\n24613 $25.31\nThe following SAS program is submitted:\ndata inventory;\ninfile 'product';\ninput  idnum 5. @10 price;\nrun;\nWhat is the value of the PRICE variable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. $25.31",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. No value is stored",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 25.31",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (missing nrmeric value)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nsalary=.;\nif salary=. then salary=100;\nbonus=10;\nsalary=.;\ntotal=sum(salary,bonus);\nrun;\nWhat would be the value of TOTAL variable in the dataset TEMP?\n",
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
                    description: "C. 10",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. .(period)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set WORK.SALARY, currently ordered by DEPARTMENT, contains 100 observations for each of 5 departments.\nWhich one of the following represents how many observations the WORK.TOTAL data set contains?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data sandbox;\nset employees(keep=Name Weight Gender);\nby Gender;\nif first.gender then do; n=0;\navgWeight=0;\nend;\nn+1;\navgWeight+Weight;\nif last.gender then do;\navgWeight=avgWeight/n;\noutput;\nend;\nrun;\nAssuming the code runs without errors and employees starts with 200 observations, how many observations will be in sandbox?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 200",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 1",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 2",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Employee_ Manager_\nID Job_Title Department ID\n------- ---------------------- --------------------- ----------------\n120101 Director Sales Management 120261\n120102 Sales Manager Sales Management 120101\n120103 Sales Manager II Sales Management 120101\n120104 Administration Manager Administration 120101\n120105 Secretary I Administration 120101\nWhich one of the following where statements would display observations with job titles containing the word 'Manager'?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\ndata WORK.TOTAL;\nset WORK.SALARY;\nby Department Gender;\nif First.&ltr_insert_code_> then Payroll=0;\nPayroll+Wagerate;\nif Last.&ltr_insert_code_>;\nrun;\nThe SAS data set WORK.SALARY is currently ordered by Gender within Department. Which\ninserted code will accumulate subtotals for each Gender within Department?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Standard deviation\nRange\nCount\nMinimum value\nVariance\nMode\n",
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
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 4",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None of the above",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.total;\nset work.salary(keep = department wagerate);\nby department;\nif first.department then payroll = 0;\npayroll + wagerate;\nif last.department;\nrun;\nThe SAS data set named WORK.SALARY contains 10 observations for each department, currently ordered by DEPARTMENT.\nWhich one of the following is true regarding the program above?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "N\tBeginDate\n1\t09JAN201\n2\t12JAN201\nThe following SAS program is submitted:\ndata WORK.TWO;\nset WORK.ONE;\nDay=&ltr_insert_code_>;\nformat BeginDate date9.;\nrun;\nThe data set WORK.TWO is created, where Day would be 1 for Sunday, 2 for Monday, 3 for Tuesday, … :\nN\tBeginDate\tDay\n1\t09JAN2010\t7\n2\t12JAN2010\t3\nWhich expression successfully completed the program and creates the variable DAY?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. day(BeginDate)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. weekday (BeginDate)",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. dayofweek (BeginDate)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. getday (BeginDate, today())",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "numdays = lastdate - firstdate\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Causes a syntax error",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The variable numdays contains the number of days between the dates.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Your computer explodes.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The variable numdays contains a noninterpretable integer value.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname company 'SAS-data-library';\nproc sort data = company.payroll;\nby EmployeeIDNumber;\nrun;\nWrite access has been granted to the COMPANY library.\nWhich one of the following represents how the observations are sorted?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. COMPANY.PAYROLL is recreated in sorted order by EmployeeIDNumber.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. COMPANY.PAYROLL is stored in original order, and a new data set PAYROLL is created in sorted order by EmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. COMPANY.PAYROLL is stored in original order, and a new data set\nCOMPANY.PAYROLLSORTED is created in sorted order by EmployeeIDNumber.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. COMPANY.PAYROLL is recreated in sorted order by EmployeeIDNumber, and a new data set PAYROLL is created in sorted order by EmployeeIDNumber.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.flights;\ndestination = 'CPH';\nselect(destination);\nwhen('LHR') city = 'London';\nwhen('CPH') city = 'Copenhagen';\notherwise;\nend;\nrun;\nWhich one of the following is the value of the CITY variable?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Given the raw data record in the file phone.txt:\n----|----10---|----20---|----30---|\nStevens James SALES 304-923-3721 14\nThe following SAS program is submitted:\ndata WORK.PHONES;\ninfile phone.txt;\ninput EmpLName $ EmpFName $ Dept $ Phone $ Extension;\n&ltr_insert_code_>\nrun;\nWhich SAS statement completes the program and results in a value of \"James Stevens\" for the\nvariableFullName?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.products;\nProduct_Number = 5461;\nItem = '1001';\nItem_Reference = Item||'/'||Product_Number;\nrun;\nWhich one of the following is the value of the variable ITEM_REFERENCE in the output data set?\n",
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
                    description: "D. The value cannot be determined as the program fails to execute due to errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nsquash 1.10\napples 2.25\njuice 1.69\nThe following SAS program is submitted using the raw data file above:\ndata groceries;\ninfile 'file-specification';\ninput item $ cost;\nrun;\nWhich one of the following completes the program and produces a grand total for all COST values?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nAuthor = 'Christie, Agatha';\nFirst = substr(scan(author,2,' ,'),1,1);\nrun;\nWhich one of the following is the value of the variable FIRST in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "COUNTRYFEE with a format or 7.;\nThe following SAS program is submitted:\ndata history;\nformat local fee country fee percent6.;\nset realestate;\nlocal fee = local fee / 100;\ncountry fee = country fee / 100;\nrun;\nWhat are the formats of the variables LOCALFEE and COUNTRYFEE in the output dataset?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ods csvall file='c:\\test.cvs';\nproc print data=WORK.ONE;\nvar Name Score Grade;\nby IdNumber;\nrun;\nods csvall close;\nWhat is produced as output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.accounting;\nset work.dept1 work.dept2;\nrun;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and WORK.DEPT2 SAS data sets. The variable JOBCODE has a length of 5 in the WORK.DEPT1 data set and a length of 7 in the WORK.DEPT2 data set.\nWhich one of the following is the length of the variable JOBCODE in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Obs\tRevenue 2008\tRevenue 2009\tRevenue 2010\n1\t1.2\t1.6\t2\nThe following SAS program is submitted:\nData WORK.TWO;\nSet WORK.ONE;\nTOT=mean(of Rev: );\nRun;\nWhat value will SAS assign to Total?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "RANCH,1250,2,1,Sheppard Avenue,\"$64,000\"\nSPLIT,1190,1,1,Rand Street,\"$65,850\"\nCONDO,1400,2,1.5,Market Street,\"80,050\"\nTWOSTORY,1810,4,3,Garris Street,\"$107,250\"\nRANCH,1500,3,3,Kemble Avenue,\"$86,650\"\nSPLIT,1615,4,3,West Drive,\"94,450\"\nSPLIT,1305,3,1.5,Graham Avenue,\"$73,650\"\nThe following SAS program is submitted using the raw data file as input:\ndata work.condo_ranch;\ninfile 'file-specification' dsd;\ninput style $ @;\nif style = 'CONDO' or style = 'RANCH' then\ninput sqfeet bedrooms baths street $ price : dollar10.;\nrun;\nHow many observations does the WORK.CONDO_RANCH data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.sets;\ndo until (prod gt 6);\nprod + 1;\nend;\nrun;\nWhich one of the following is the value of the variable PROD in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "PERM.STUDENTS NAME AGE\n--------- ------- Alfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted:\nlibname perm 'SAS data library';\ndata students;\nset perm.students;\nfile 'file specification';\nput name $ age;\n&ltrinsert statement here>\nrun;\nThe following double-spaced file is desired as output\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nWhich statement completes the program and creates the desired file?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Area51?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc contents data=area51._all_ nods;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. proc contents data=area51 _all_ nods;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc contents data=area51 _all_ noobs;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc contents data=area51 _all_.nods;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n$1,234\nThe following SAS program is submitted:\ndata test;\ninfile 'amount';\ninput @1 salary 6.;\nrun;\nWhich one of the following is the value of the SALARY variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "123456789|123456789|123456789|\nSmith Joe 27 1892 81059\nFranks Carl 24 2343 84060\nWell Sam 32 4569 76182\nMax Cori 21 1052 87231\nWhich piece of code reads the data without errors?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data people; infile `people.txt'; input @21 dob @8 first $ @1 last $ @16 dues; informat dues comma5.2; informat dob julian.; run;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. data people; infile `people.txt'; input last $ first $ dues dob; informat dues comma4.2; informat dob julian.; run;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. data people; infile `people.txt'; input @21 dob @8 first @1 last dues; informat dues comma5.2; informat dob julian.; run;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data people; infile `people.txt'; input last first dues dob; informat dues comma5.2; informat dob julian.; run;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " --------10-------20-------30\nPrinting___750\nThe following SAS program is submitted:\ndata bonus;\ninfile 'file-specification';\ninput dept $ 1 - 11 number 13 - 15;\nrun;\nWhich one of the following SAS statements completes the program and results in a value of 'Printing750' for the DEPARTMENT\nvariable?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. department = trim(dept) number;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. department = dept input(number,3.);",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ods html file=\"c:/htmlout.html\";\nods pdf file=\"c:/pdfout.pdf\";\nods rtf file=\"c:/rtfout.rtf\";\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. HTML, RTF, listing",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. HTML, PDF",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. HTML, PDF, RTF, Listing",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. none, ODS is closed by default",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Which one of the following SAS formats is used to display the value as $110,700.00 in a report?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nx=14643;\ny=put(x,mmddyy10.);\nrun;\nWhat would be the attributes of variable Y in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Length of Y is $10.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Length of Y is 10",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Length of Y is 8",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "if i &ltr 32 then j=15;\nelse if i > 32 then j=16;\nelse j=20;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 15",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 20",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 16",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. . (missing)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ProdId     Price      ProductType    Sales     Returns\n---------     -------       ------ --------      -----     ----------\nK12S       95.50      OUTDOOR       15          2\nB132S      2.99       CLOTHING     300        10\nR18KY2    51.99    EQUIPMENT     25         5\n3KL8BY    6.39        OUTDOOR     125       15\nDY65DW  5.60        OUTDOOR      45         5\nDGTY23   34.55      EQUIPMENT    67        2\nThe following SAS program is submitted:\ndata WORK.OUTDOOR WORK.CLOTH WORK.EQUIP;\nset WORK.PRODUCTS;\nif Sales GT 30;\nif ProductType EQ 'OUTDOOR' then output WORK.OUTDOOR;\nelse if ProductType EQ 'CLOTHING' then output WORK.CLOTH;\nelse if ProductType EQ 'EQUIPMENT' then output WORK.EQUIP;\nrun;\nHow many observations does the WORK.OUTDOOR data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Libname temp 'SAS data library';\ndata work.new;\nset temp.jobs;\nformat newdate mmddw10.;\nmdate= month(newdate);\nddate= weekday(newdate);\nrun;\nproc print data = work.new; run;\nThe variable NEWDATE contains the SAS date value for April 15. 2005. What output is produced if April 15, 2005 falls on a Friday?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Style of homes\nStyle\tFrequency\tPercent\tCumulative Frequency\tCumulative Percent\nCONDON\t4\t26.67\t4\t26.67\nRANCH\t4\t26.67\t8\t53.33\nSPLIT\t3\t20.00\t11\t73.33\nTWOSTORY\t4\t26.67\t15\t100.00\nNumber of bedrooms\nBedrooms\tFrequency\tPercent\tCumulative Frequency\tCumulative Percent\n1\t2\t13.33\t2\t13.33\n2\t5\t33.33\t7\t46.67\n3\t4\t26.67\t11\t73.33\n4\t4\t26.67\t15\t100.00\nThe variable STYLE has a permanent label of “Style of homes” and the variable BEDROOMS has a permanent label of “Number of bedrooms”.\nWhich one of the following SAS programs produced the output shown in the exhibit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc freq data = sasuser.houses;\n    tables style and bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc freq data = sasuser.houses;\n    tables style * bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc freq data = sasuser.houses;\n    tables style , bedrooms;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. proc freq data = sasuser.houses;\n    tables style;\n    tables bedrooms;\nrun;",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "03132000\ndata temp;\ninfile ‘asa’;\ninput date : MMDDYY10.;\nrun;\nWhat will be stored in date?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 01022000",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 02FEB2000",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 14682(number of days from 1st jan 1960)",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 02 January",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "observations in which Sex (in the second field) has a value of F are processed?\n1-----+-----10-----+----20-----+-----30-----+\nAlfred  M 14  69.0 112.5\nBecka   F  13 65.5 98.0\nGail    F  14 64.3 90.0\nJeffrey M  13 62.5 84.0\nJohn    M  12 59.0 99.5\nKaren   F  12 56.3 77.0\nMary    F  15 66.5 112.0\nPhilip  M  16 72.0 150.0\nSandy   F  11 51.3 50.5\nTammy   F  14 62.8 102.5\nWilliam M  15 66.5 112.0\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if sex=f;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. if sex=F;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. if sex='F';",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. a or b",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Ods csvall file=’ ’c:test.csv’;\nproc print data=WORK.ONE;\n\tvar Name Score Grade;\n\tby IdNumber;\nrun;\nods csvall close;\nWhat is produced as output?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data joiners;\nset joinee;\njoin_date = today();\nrun;\nWhich one of the following is the value of the variable JOIN_DATE in the output data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. This will be a character string with the value '04/01/2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. This will be a character string with the value 'Monday, April 01, 2000'",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. This will be a numeric value 14701, representing the SAS date for April 01, 2000",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. This will be a numeric value 04252000, representing the SAS date for April 01, 2000",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.month;\ndate = input('13mar2000',date9.);\nrun;\nWhich one of the following represents the type and length of the variable DATE in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.total;\ninfile 'file-specification' end = eof;\ninput name $ salary;\ntotsal + salary;\nrun;\nWhich one of the following IF statements writes the last observation to the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile ‘dept’;\ninputdept$ 1-11 number 13- 15;\n&ltrinsert statement here>\nrun;\nWhich SAS statement completes the program and results in a value of ‘Printing750’ for\nthe DEPARTMENT variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data numrecords;\ninfile 'file-specification';\ninput @1 patient $15.\nrelative $ 16-26 @;\nif relative = 'children' then\ninput @54 diagnosis $15. @;\nelse if relative = 'parents' then\ninput @28 doctor $15.\nclinic $ 44-53\n@54 diagnosis $15. @;\ninput age;\nrun;\nHow many raw data records are read during each iteration of the DATA step during execution?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp2;\nset temp temp1;\nrun;\nwhat would be the length of the variable JOBCODE in the dataset TEMP2?\n",
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
                    description: "C. we can’t see the length as data set won’t be created due to errors.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data test;\nset sasuser.employees;\nif 2 le years_service le 10 then\namount = 1000;\nelse if years_service gt 10 then\namount = 2000;\nelse\namount = 0;\namount_per_year = years_service / amount;\nrun;\nWhich one of the following values does the variable AMOUNT_PER_YEAR contain if an employee has been with the company for\none year?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data ONE TWO SASUSER.TWO\nset SASUSER.ONE;\nrun;\nAssuming that SASUSER.ONE exists, how many temporary and permanent SAS data sets are created?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "_ the amount is less than or equal to $5000\n_ the account is 101–1092, or the rate equals 0.095.\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. where amount &ltr= 5000 and\naccount='101-1092' or rate = 0.095;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. where (amount le 5000 and account='101-1092')\nor rate = 0.095;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where amount &ltr= 5000 and\n(account='101-1092' or rate eq 0.095);",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. where amount &ltr= 5000 or account='101-1092'\nand rate = 0.095;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data perm.update;\ninfile invent\ninput Item $ 1-13 IDnum $ 15-19 Instock 21-22\nBackOrd 24-25;\ntotal=instock+backord;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. missing semicolon on second line",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. missing semicolon on third line",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. incorrect order of variables",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. incorrect variable type",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.NEW;\nset WORK.OLD;\nCount+1;\nrun;\nThe variable Count is created using a sum statement. Which statement regarding this variable is true?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "test = ‘X’;\nselect(test);\nwhen(‘Y’) Name = ‘Ank’;\nwhen(‘X’) Name = ‘Ankur’;\nwhen(‘Z’) Name = ‘       ’;\nend;\nrun;\nWhat is the output?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Ankur",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Ank",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Missing (character missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. ‘Ankur’",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data Bonds;\ninput CouponRate $ ParValue $;\ndatalines; 8% $1000 9% $1200 7.8% $1500 5% $900 6% $750 ;\ndata BondCoupons;\nset Bonds; Coupon= CouponRate/100 * ParValue; run;\nproc print data=bondcoupons;\nrun;\nYou may assume the first code chunk runs properly. When printing after running the second code chunk, which of the following will be the value of the first observation of the variable Coupon and why?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The variable coupon value will have missing values because SAS was not able to correctly interpret the character values as numeric values and an error resulted when creating the Coupon variable.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. The coupon value will be 80 because SAS ran flawlessly without producing errors or special notes in the log.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. The coupon value will be 80 because SAS automatically converts character values into numeric values before algebraic manipulation.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The proc print procedure will fail because the BondCoupons data set was not successfully created.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp2;\nset temp temp1;\nrun;\nwhat would be the length of the variable JOBCODE in the dataset TEMP2?\n",
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
                    description: "C. we can’t see the length as data set won’t be created due to errors.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. none",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "displayed in the SAS Log:\nNOTE: Invalid data for Salary in line 4 15-23.\nRULE: ----+----1----+----2----+----3----+----4----+----5--\n4 120104 F 46#30 11MAY1954 33\nEmployee_Id=120104 employee_gender=F Salary=. birth_date=-2061 _ERROR_=1 _N_=4\nNOTE: 20 records were read from the infile 'c:\\employees.dat'.\nThe minimum record length was 33.\nThe maximum record length was 33.\nNOTE: The data set WORK.EMPLOYEES has 20 observations and 4 variables.\nWhat does it mean?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10----|----20----|----30\nThe following SAS program is submitted:\ndata emps;\ninfile'employee';\ninput@1 name$\n@15 date &ltrinsert INFORMAT here>\n@25 department$;\nrun;\nWhich INFORMAT correctly completes the program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "options pageno = 1;\nproc print data = sasuser.houses;\nrun;\nproc means data = sasuser.shoes;\nrun;\nThe report created by the PRINT procedure step generates 5 pages of output.\nWhat is the page number on the first page of the report generated by the MEANS procedure step?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "IDNumber Expenses\n2542 100.00\n3612 133.15\n2198 234.34\n2198 111.12\nThe following SAS program is submitted:\nproc sort data = employee_info;\nrun;\nWhich one of the following BY statements completes the program and sorts the data sequentially by descending expense values within\neach descending IDNUMBER value?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "set lib1.x\nlib2.y;\nlength jobcode $12.;\nrun;\nWhat would be the length of Jobcode in temp?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 5",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 8",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 12",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Syntax Error",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "07Jan2002\nWhich one of the following informats would read this value and store it as a SAS date value?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.pieces;\ndo while (n lt 6);\nn + 1;\nend;\nrun;\nWhich one of the following is the value of the variable N in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data = sasuser.houses out = houses;\nby style;\nrun;\nproc print data = houses;\nrun;\nClick on the Exhibit button to view the report produced.\nstyle bedrooms baths price\nCONDO 2 1.5 80050\n3 2.5 79350\n4 2.5 127150\n2 2.0 110700\nRANCH 2 1.0 64000\n3 3.0 86650\n3 1.0 89100\n1 1.0 34550\nSPLIT 1 1.0 65850\n4 3.0 94450\n3 1.5 73650\nTWOSTORY 4 3.0 107250\n2 1.0 55850\n2 1.0 69250\n4 2.5 102950\nWhich of the following SAS statement(s) create(s) the report?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nproc print data = pets;\nvartype breed;\nsum number;\nrun;\nWhat is the result?\n",
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
                    description: "C. The SUM statement produces both a grand total of NUMBER and subtotals of NUMBER for each value of TYPE.",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nson,Travis,\nThe following output is desired:\nrelation firstname\nson Travis\nWhich one of the following SAS programs reads the data correctly?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data one;\ninfile 'file specification';\ninput num chars$;\nrun;\nONE\nNUM CHAR\n------- ---------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data = one;\nwhere char = 23;\nrun;\nWhat is output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "options obs=500;\nproc print data=xyz(firstobs=100 )\nrun;\noptions obs=max;\n proc means data=xyz(firstobs=500)\n run;\nHow many observations processed in each procedure?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 401 in the proc print and 4501 in the proc means",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 5000 in the proc print and 500 in the proc means",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 500 in the proc print and 5000 in the proc means",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 4501 in the proc print and 401 in the proc means",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n1901 2\n1905 1\n1910 6\n1925 .\n1941 1\nThe following SAS program is submitted and references the raw data file above:\ndata coins;\ninfile 'file-specification';\ninput year quantity;\nrun;\nWhich one of the following completes the program and produces a non-missing value for the variable TOTQUANTITY in the last\nobservation of the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " 1 RANCH        1250          2           1.0      Sheppard Avenue     $64,000\n 2 SPLIT           1190          1            1.0          Rand Street          $65,850\n 3 CONDO        1400          2           1.5         Market Street        $80,050\n 4 TWOSTORY 1810         4            3.0          Garris Street        $107,250\n 5 RANCH         1500         3            3.0        Kemble Avenue      $86,650\n 6 SPLIT            1615         4            3.0          West Drive            $94,450\n 7 SPLIT            1305         3            1.5       Graham Avenue      $73,650\n 8 CONDO         1390         3           2.5      Hampshire Avenue   $79,350\n 9 TWOSTORY 1040         2           1.0          Sanders Road       $55,850\n10 CONDO        2105        4            2.5          Jeans Avenue      $127,150\n11 RANCH        1535         3            3.0          State Highway      $89,100\n12 TWOSTORY   1240      2           1.0          Fairbanks Circle   $69,250\n13 RANCH          720         1           1.0          Nicholson Drive    $34,550\n14 TWOSTORY   1745      4           2.5           Highland Road     $102,950\n15 CONDO          1860       2          2.0            Arcata Avenue     $110,700\nThe following SAS program is submitted:\nproc report data = sasuser.houses nowd headline;\n    column style price;\n    where prices lt 100000;\n    &ltrinsert DEFINE statement here>\n    define price / mean width = 9;\n    title;\nrun;\nThe following ouput is created by the REPORT procedure:\nstyle    price\nCONDO    $79,700\nRANCH    $68,575\nSPLIT    $77,983\nTWOSTORY $62,550\nWhich one of the following DEFINE statements completes the above program and produces the above output?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.ACCOUNTING;\nset WORK.DEPARTMENT;\nlength EmpId $6;\nCharEmpid=EmpId;\nrun;\nIf data set WORK.DEPARTMENT has a numeric variable EmpId. Which statement is true about\nthe output dataset?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data january;\n106 set allmonths(keep = product month num_sold cost);\n107 if month = ‘Jan’ then output january;\n108 sales = cost * num_sold;\n109 keep = product sales;\n------\nERROR 22-322: Syntax error, expecting one of the following:!,\n!!, &, *,**, +, -,/, &ltr,&ltr =, &ltr>, =, >, >&ltr, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR,^=,|,II,\n110 run;\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "VARIABLE NAME TYPE\nidnum character variable\nsales_date numeric date value\nA comma delimited raw data file needs to be created from the PERM.JAN_SALES data set. The SALES_DATE values need to be in a MMDDYY10 form.\nWhich one of the following SAS DATA steps correctly creates this raw data file?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TOTAL;\nset WORK.SALARY(keep=Department MonthlyWageRate);\nby Department;\nif First.Department=1 then Payroll=0;\nPayroll+(MonthlyWageRate*12);\nif Last.Department=1;\nrun;\nWhich statement is true?\n",
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
                    description: "C. The values of the variable Payroll represent the monthly total for each department in the WORK.SALARY data set.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The values of the variable Payroll represent a monthly total for all values of WAGERATE in the WORK.SALARY data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data merged;\nmerge employees daily;\nby name; /format sales comma5.2;/\nrun;\nWhat is the format of the variable name in the merged data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. None of the these.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 6.2",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. comma5.2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. dollar6.2",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Name Balance\nAndrews 123.21\nSmithy 92.31\nKeeley 2812.23\nCist 981.99\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 8",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 32",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 0",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 16",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "sorted data, which of the following steps should you submit?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. proc sort data=work.calc out=finance.dividend;\nrun;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. proc sort dividend out=calc;\nby account;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. proc sort data=finance.dividend out=work.calc;\nby account;\nrun;",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. proc sort from finance.dividend to calc;\nby account;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc freq data=mydata;\ntables gender weight height;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Two tables, one for each gender, with height groups on one axis and weight groups on another. Frequency and percent are found in each cell of the table.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. One interactive, three-dimensional table that allows you to click and discover the frequency, percent, row, column, and depth percents for each of the 3-D cells.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Two tables, one for each gender, with height groups on one axis and weight groups on another. Frequency, percent, row percent, and column percent are found in each cell of the tables.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. A single table with gender, weight, and height variables along with variables for frequency, percent, cumulative frequencies, and cumulative percents.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.retail;\ncost = '20000';\ntotal = .10 * cost;\nrun;\nWhich one of the following is the value of the variable TOTAL in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "fname points\nAmy 2\nAmy 1\nGerard 3\nWang 3\nWang 1\nWang 2\nThe following SAS program is submitted:\nproc sort data = work.awards;\nby descending fname points;\nrun;\nWhich one of the following represents how the observations are sorted?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc freq data = class;\ntables gender * age / &ltrinsert option here>;\nrun;\nThe following report is created:\nThe FREQ Procedure\nTable of gender by age\nRow Column\nGender age Frequency Percent Percent Percent\nF 11 1 10.00 20.00 50.00\n12 2 20.00 40.00 40.00\n13 2 20.00 40.00 66.67\nTotal 5 50.00 100.00\nM 11 1 10.00 20.00 50.00\n12 3 30.00 60.00 60,00\n13 1 10.00 20.00 33.33\nTotal 5 50.00 100.00\nTotal 11 2 20.00 100.00\n12 5 50.00 100.00\n13 3 30.00 100.00\nTotal 10 100.00\nWhich option correctly completes the program and creates the report?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data Bonds;\ninput CouponRate $ ParValue $;\ndatalines;\n8% $1000 9% $1200 7.8% $1500 5% $900 6% $750\n;\ndata BondCoupons;\nset Bonds;\nCoupon= CouponRate/100 * ParValue;\nrun;\nproc print data=bondcoupons;\nrun;\nConsidering the third line of the second code chunk above, which of the following statements ensures that the code runs properly, whether or not it ran properly with the code submitted above.\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Coupon=input(CouponRate,percent4.)*input(Parvalue,dollar5.);",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Coupon=input(CouponRate)*input(Parvalue);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Coupon=CouponRate/100 * ParValue;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Coupon=numeric(CouponRate,percent4.)*numeric(Parvalue,dollar5.);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ods html body='d:\\output\\body.html'\ncontents='d:\\output\\contents.html'\nframe='d:\\output\\frame.html';\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The file D:\\Output\\contents.html.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The file D:\\Output\\frame.html.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. It displays no other files.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The files D:\\Output\\contents.html and D:\\Output\\body.html.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "SEX_______CITYCODE__________JOB\nM                  NY                                  WER\nF                   NY                                  WER\nM                  WD                                  RES\nM                  WD                                  RES\nM                 SD                                       ED\nM\t        WF                                       ED\nWhat will be the correct code to get a cross frequency table as following?\nThe FREQ Procedure\nTable of SEX by CITYCODE\n                      SEX       CITYCODE\n                      Frequency‚\n                      Percent  ‚\n                      Row Pct  ‚\n                      Col Pct  ‚NY      ‚SD      ‚WD      ‚WF      ‚  Total\n                      _________^ƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆ\n                      F        ‚      1 ‚      0 ‚      1 ‚      0 ‚      2\n                               ‚  16.67 ‚   0.00 ‚  16.67 ‚   0.00 ‚  33.33\n                               ‚  50.00 ‚   0.00 ‚  50.00 ‚   0.00 ‚\n                               ‚  50.00 ‚   0.00 ‚  50.00 ‚   0.00 ‚\n                      _________^ƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆƒƒƒƒƒƒƒƒˆ\n                      M        ‚      1 ‚      1 ‚      1 ‚      1 ‚      4\n                               ‚  16.67 ‚  16.67 ‚  16.67 ‚  16.67 ‚  66.67\n                               ‚  25.00 ‚  25.00 ‚  25.00 ‚  25.00 ‚\n                               ‚  50.00 ‚ 100.00 ‚  50.00 ‚ 100.00 ‚\n                      _________^________ˆ________ˆ________ˆ________ˆ\n                      Total           2        1           2            1         6\n              33.33    16.67    33.33    16.67   100.00\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. PROC FREQ DATA=A;\n                   TABLES SEX*CITYCODE;\n  \tRUN;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. PROC FREQ DATA=A;\nTABLES SEX CITYCODE;\n   \tRUN;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. PROC FREQ DATA=A;\n                   TABLES SEX, CITYCODE;\nRUN;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. PROC FREQ DATA=A;\n                 VAR SEX CITYCODE;\n    RUN;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.january;\nset work.allmonths (keep = product month num_sold cost);\nif month = 'Jan' then output work.january;\nsales = cost * num_sold;\nkeep = product sales;\nrun;\nWhich variables does the WORK.JANUARY data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following output is created by the FREQUENCY procedure:\nWhich TABLES statement was used to completed the following program that produced the\noutput?\nproc freq data=sales;\n&ltr_insert_code_>\nrun;\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc means data = sasuser.houses std mean max;\nvar sqfeet;\nrun;\nWhich one of the following is needed to display the standard deviation with only two decimal places?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data WORK.TEST;\n\tSet WORK.PILOTS;\n\tIf Jobcode=’Pilot2’ then Description=’Senior Pilot’;\n\tElse Description=’Unknown’;\nRun;\nIf the value for the variable Jobcode is: PILOT2, what is the value of the variable Description?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=black.book;\nrun;\nproc print data=black.book;\nvar name age number;\nwhere status='Single';\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PROC PRINT step is successful, providing list in sorted order.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The PROC SORT generates an error in the log, the PROC PRINT step runs.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The PROC SORT step permanently sorts the data set.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The PROC SORT runs successfully, PROC PRINT generates errors",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\narray items{3} _temporary_;\nrun;\nWhat are the names of the variable(s) in the WORKTEST data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " data FINAL;\n     set TRY1(KEEP= NUM1 NUM2 NUM3 NUM4)\n           TRY2(KEEP= NUM5 NUM6 NUM7 NUM8);\n DROP NUM2 NUM4 NUM7;\n KEEP NUM1 NUM3;\nRUN;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. NUM1 NUM3 NUM5 NUM6 NUM8.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NUM1 NUM3;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. Syntax Error.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Warning in the log.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data perm.update;\n      infile invent\n      input Item $ 1-13 IDnum $ 15-19 Instock 21-22\n              BackOrd 24-25;\n      total=instock+backord;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. missing semicolon on third line",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. incorrect order of variables",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. missing semicolon on second line",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. incorrect variable type",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nRuth 39 11\nJose 32 22\nSue 30 33\nJohn 40 44\nThe following SAS program is submitted:\ndata test;\ninfile 'employee';\ninput employee_name $ 1-4;\nif employee_name = 'Ruth' then input idnum 10-11;\nelse input age 7-8;\nrun;\nWhich one of the following values does the variable IDNUM contain when the name of the employee is \"Ruth\"?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "merge test1(keep = ID)\ntest2(keep = ID NAME CLASS AGE);\nby ID;\nkeep = ID NAME;\nrun;\nVariables in output dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ID NAME",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. NAME ID",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ID NAME CLASS AGE",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Syntax error",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=finance.loans out=work.loans;\nby months amount;\nrun;\nproc print data=work.loans noobs;\nvar months;\nsum amount payment;\nwhere months&ltr360;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Months Amount Payment\n12 $3,500 $308.52\n24 $8,700 $403.47\n36 $10,000 $325.02\n48 $5,000 $128.02\n$27,200 $1,165.03",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Months Amount Payment\n12 $3,500 $308.52\n24 $8,700 $403.47\n36 $10,000 $325.02\n48 $5,000 $128.02\n27,200 1,165.03",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Months Amount Payment\n12 $3,500 $308.52\n48 $5,000 $128.02\n24 $8,700 $403.47\n36 $10,000 $325.02\n$27,200 $1,165.03",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Months Amount Payment\n12 $3,500 $308.52\n24 $8,700 $403.47\n36 $10,000 $325.02\n48 $5,000 $128.02\n$1,165.03",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "After a SAS program is submitted, the following is written to the SAS log:\n105 data january;\n106 set allmonths(keep = product month num_sold cost);\n107 if month = 'Jan' then output january;\n108 sales = cost * num_sold;\n109 keep = product sales;\n------\nERROR 22-322: Syntax error, expecting one of the following:!,\n!!, &, *,**, +, -,/, &ltr,&ltr =, &ltr>, =, >, >&ltr, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR,^=,|,II,\n110 run;\nWhat changes should be made to the KEEP statement to correct the errors in the LOG?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Which statement will limit a PROC MEANS analysis to the variables Boarded, Transfer, and Deplane?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. by boarded transfer deplane;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. var boarded transfer deplane;",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. output boarded transfer deplane;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. class boarded transfer deplane;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc report data=employees nowd;\ncolumn name month sales bonus units;\ndefine name / order 'Employee';\ndefine month / order 'Month';\ndefine sales / format=8.2 'Sales';\ndefine bonus / computed 'Monthly Bonus';\ndefine units / format=4. 'Units Sold';\ncompute bonus;\nbonus=sales(units/100).06;\nendcomp;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Something happens but there is no way to be sure...",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Program runs fine (no errors found in the log).",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Program does not run. Syntax Error causes the code not to compile correctly.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Program runs, but the output is missing for bonus.",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nset x;\nrun;\n“missing code”\ndata test;\nset y;\nrun;\nWhat will be the missing code to reset the page number ?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. OPTIONS PAGENO = 1;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. OPTIONS RESET PAGENO = 1;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. OPTIONS RESET PAGENUMBER = 1;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. OPTIONS PAGENUMBER = 1;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Xing \t2\t19\t2004\tACCT\nBob\t5\t22\t2004\tMKTG\nJorge\t3\t24\t2004\tEDUC\nThe following program is being developed to read the raw data file into a SAS dataset.\nData WORK.EMPLOYEE;\n   Infile ‘EMPLOYEE.TXT’;\n   Input\n      @1   FirstName $\n      @15 StartDate\n      @25 Department $ ;\nRun;\nWhich SAS informat correctly completes the program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data sasdata.atlanta sasdata.boston work.portland work.phoenix;\nset company.prdsales;\nif region = 'NE' then output boston;\nif region = 'SE' then output atlanta;\nif region = 'SW' then output phoenix;\nif region = 'NW' then output portland;\nrun;\nWhich one of the following is true regarding the output data sets?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " &ltrMISSING CODE>\nRUN;\nWhat is the correct missing code?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Merge Test1   /*Test1 contains JOBCODE */\n    Test2(rename = (Jcode = JOBCODE));",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Merge Test1   /*Test1 contains JOBCODE */\n    Test2(rename = (JOBCODE = JCODE));",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Merge Test1 (rename = (Jcode = JOBCODE)) /*Test1 contains JOBCODE */\n     Test2;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Merge Test1   /*Test1 contains JOBCODE */\n    Test2(rename  Jcode = JOBCODE));",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "named Char:\nWORK.ONE\nNum Char\n------ ------\n1 23\n3 23\n1 77\nThe following SAS program is submitted:\nproc print data=WORK.ONE;\nwhere Num='1';\nrun;\nWhat is output?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Smith Joe 27 1892 81059\nFranks Carl 24 2343 84060\nWell Sam 32 4569 76182\nMax Cori 21 1052 87231\nThe following versions of the same data are missing some values. Which file should be read in with the MISSOVER option?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Smith Joe 27 1892Franks Carl 24 2343 84060Well Sam 32 4569 76182Max Cori 21 1052 87231",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Smith Joe 27 1892 81059Franks Carl 24 2343 84060Well Sam 32 4569 76182Max Cori 21 87231",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Smith Joe 27 1892 81059Franks Carl 2343 84060Well Sam 32 4569 76182Max Cori 21 1052 87231",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Smith Joe 27 1892 81059Franks Carl 24 2343 84060Well 32 4569 76182Max Cori 21 1052 87231",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10---|----20---|----30\nKim,Basketball,Golf,Tennis\nBill,Football\nTracy,Soccer,Track\nThe following program is submitted:\ndata WORK.SPORTS_INFO;\nlength Fname Sport1-Sport3 $ 10;\ninfile'DATAFILE.TXT' dlm=',';\ninput Fname $ Sport1 $ Sport2 $ Sport3 $;\nrun;\nproc print data=WORK.SPORTS_INFO;\nrun;\nWhich output is correct based on the submitted program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp:\ndo i=1 to 3;\ndo j=1 to 4;\nsalary=salary+300;\nend;\nend;\nrun;\nhow many observations will present in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 1",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 3",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 0",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "title;\ntitle1 'Stat 124 Final Exam';\ntitle2 'Spring 2009';\ntitle3 'Dr. Scott';\ntitle2 'Fall 2010';\ntitle2;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Stat 124 Final Exam Spring 2009 Dr. Scott",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. Stat 124 Final Exam Fall 2010 Dr. Scott",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Dr. Scott Stat 124 Final Exam",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Stat 124 Final Exam",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.totalsales;\nset work.monthlysales(keep = year product sales);\nretain monthsales {12} ;\narray monthsales {12} ;\ndo i = 1 to 12;\nmonthsales{i} = sales;\nend;\ncnt + 1;\nmonthsales{cnt} = sales;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five years for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "variable\nvar\n1variable\nvar1\n#var\n_variable#\n",
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
                    description: "C. 3",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc contents data = sasuser.airplanes;\nrun;\nWhich one of the following is produced as output?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "set test; /* 100 observations 20 for each ID*/\nby ID;\nif first,ID then name  = ‘RAJU’;\nelse if ID = ‘RAM’ then name = ‘RAMU’;\nif last.ID;\nrun;\nHow many observations will be present in temp dataset?\n",
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
                    description: "D. 0",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.DATE_INFO;\nX='04jul2005'd;\nDayOfMonth=day(x);\nMonthOfYear=month(x);\nYear=year(x);\nrun;\nWhat types of variables are DayOfMonth, MonthOfYear, and Year?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data work.total;\nInfile ‘file specification’ end=eof;\nInput name $ salary;\nTotsal + salary;\nRun;\nWhich IF statement writes the final observation to the final data set?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. if end =1",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. if eof = 0",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. if eof =1",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. if last =0",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=clinic.diabetes;\nrun;\nproc print data=clinic.diabetes;\nvar age height weight pulse;\nwhere sex='F';\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PROC PRINT step runs successfully, printing observations in their sorted order.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The PROC SORT step generates errors and stops processing, but the PROC PRINT step runssuccessfully, printing observations in their original (unsorted) order.",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. The PROC SORT step runs successfully, but the PROC PRINT step generates errors and stops processing.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. The PROC SORT step permanently sorts the input data set.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname rawdata1 'location of SAS data library';\nfilename rawdata2 'location of raw data file';\ndata work.testdata;\ninfile\ninput sales1 sales2;\nrun;\nWhich one of the following is needed to complete the program correctly?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Given the following data set WORK.SALES:\nSalesID     SalesJan      FebSales     MarchAmt\n-------    ---------      --------    ----------\nW6790         50            400           350\nW7693         25            100           125\nW1387         .             300           250\nThe following SAS program is submitted:\nData WORK.QTR1;\nSet WORK.SALES;\narray month{3} salesjan febsales marchamt;\n&ltrinsert code here>\nrun;\nwhich statement should be inserted to produce a following output?\nSalesID       SalesJan      FebSales     MarchAmt      QTR1\n-------      ----------   ------------  --------     --------\nW6790          50            400           350         800\nW7693          25           100            125         250\nW1387          .            300            250         550\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Qtr1 = sum(of month{*});",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Qtr1 = sum(of month{_ALL_});",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Qtr1 = sum(of month{3});",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Qtr1 = month{1} + month{2} + month{3};",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "WORK.EMPLOYEE WORK.SALARY\nfname age name salary\nBruce 30 Bruce 25000\nDan 40 Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nby fname;\ntotsal + salary;\nrun;\nWhich one of the following statements completes the merge of the two data sets by the FNAME variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nproc sort data = work.test out = work.testsorted;\nby name;\nrun;\nWhich one of the following is the result of the SAS program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "capacity airplanetype staff\n150 Large 10\nWhich one of the following SAS programs created this data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ObsRevenue2008 Revenue2009 Revenue2010\n--- ---------------- ---------------- ----------------\n1 1.2 1.6 2.0\nThe following SAS program is submitted:\ndata WORK.TWO;\nset WORK.ONE;\nTotal=mean(of Rev:);\nrun;\nWhat value will SAS assign to Total?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\nsalary='20000';\nbonus=0.1*salary;\nrun;\nWhat would be the value of BONUS variable in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. '2000'",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2000",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (Missing value)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. blank",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "name age\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14\nThe following SAS program is submitted using the PERM.STUDENTS data set as input:\nlibname perm 'SAS-data-library';\ndata students;\nset perm.students;\nfile 'file-specification';\nput name $15. @5 age 2.;\nrun;\nWhich one of the following represents the values written to the output raw data file?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. --------10-------20-------30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. --------10-------20-------30\nAlfr14\nAlic13\nBarb13a\nCaro14",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. --------10-------20-------30\nAlfr14ed\nAlic13e\nBarb13ara\nCaro14l",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. --------10-------20-------30\nAlfred 14\nAlice 13\nBarbara 13\nCarol 14",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " infile 'file';\n retain address {12};\n array address {12} address1-address12;\nrun;\nhow many observations??\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.passengers;\nif OrigPassengers = . then\nOrigPassengers = 100;\nTransPassengers = 100;\nOrigPassengers = .;\nNonPaying = 10;\nTotalPassengers = OrigPassengers + TransPassengers;\nrun;\nWhich one of the following is the value of the TOTALPASSENGERS variable in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nproc report data = sasuser.houses nowd headline headskip;\ncolumn style price;\nwhere price &ltr 100000;\n&ltrinsert code here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure.\nAssuming that the PRICE variable is numeric, which one of the following completes the program\nand produces the output displayed in the exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "105 data WORK.JANUARY;\n106 set WORK.ALLYEAR(keep=Product Month Quantity Cost);\n107 if Month='JAN' then output WORK.JANUARY;\n108 Sales=Cost * Quantity;\n109 drop=Month Quantity Cost;\n-----\nERROR 22-322: Syntax error, expecting one of the following: !,\n!!, , *, **, +, -,\n, &ltr=, &ltr>, =, >, >=,\nAND, EQ, GE, GT, IN, LE, LT, MAX, MIN, NE, NG, NL,\nNOTIN, OR, ^=, |, ||, ~=.\n110 run;\nWhat data set option could be attached to WORK.JANUARY to replace the DROP statement that\ngenerated the error in the log?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "BANKS\nname rate\nFirstCapital 0.0718\nDirectBank 0.0721\nVirtualDirect 0.0728\nThe following SAS program is submitted:\ndata newbank;\ndo year = 1 to 3;\nset banks;\ncapital + 5000;\nend;\nrun;\nWhich one of the following represents how many observations and variables will exist in the SAS data set NEWBANK?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data user.tables;\ninfile jobs;\ninput date name $ job $;\nrun;\nproc sort data=user.tables;\nby name;\nrun;\nproc print data=user.tables;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. three",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. four",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. five",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. six",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "C:\\States\\Data\\Crime?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. filename crime 'c:\\states\\data\\crime';",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. filename crime c:\\states\\data\\crime;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. fileref crime 'c:\\states\\data\\crime';",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. filename 'c:\\states\\data\\crime' crime;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc report data = work.houses nowd;\n    column style price;\n    where prices &ltr100000;\n    &ltrinsert DEFINE statements here>\n    title;\nrun;\nExhibit: the output from the REPORT procedure.\nstyle     price\nCONDO     80,050\n                  79,350\nRANCH     64,000\n                  86,650\n                  89,100\n                  34,550\nSPLIT       65,850\n                  94,450\n                  73,650\nTWOSTORY  55,850\n                      69,250\nAssume permanent variable labels have been assigned.\nWhich one of the following completes the program and produces the output displayed in the exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname sasdata 'SAS-data-library';\noptions obs = 500;\nproc print data = sasdata.prdsales (firstobs = 100);\nrun;\noptions obs = max;\nproc means data = sasdata.prdsales (firstobs = 500);\nrun;\nHow many observations are processed by each procedure?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "set test1(in = a) /* 2 observations*/\ntest2 (in=b);  /* 5 observations*/\nif  a and b;\nrun;\nHow many observations will be there in temp dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
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
                    description: "D. 0",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\nchair,,table\nchair,couch,table\nThe following SAS program is submitted:\ndata stock;\ninfile 'furniture' dsd;\ninput item1 $ item2 $ item3 $;\nrun;\nWhich one of the following is the value of the variable named ITEM2 in the first observation of the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "----|----10----|----20----|----30\nPrinting 750\nThe following SAS program is submitted:\ndata bonus;\ninfile ‘file-specification’;\ninput dept $ 1-11 number 13-15;\n&ltrinsert code here>\nrun;\nWhich one of the following SAS statements completes the program and results in a value of\n‘Printing 750’ for the DEPARTMENT variable?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "X                Y                                       Z\n150      less than 200 and gt 100           300\nwhich of the below code creates the dataset TEMP with above values in the variables X, Y, and Z.\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data temp;\nx=150;\nif 100 le x le 200 then do;\n y='less than 200 and gt 100';\n z=300;\nend;\nelse do;\ny='other values';\nz=400;\nend;\nrun;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data temp;\nx=150;\nif 100 le x le 200 then do;\n y='less than 200 and gt 100';\n z=300;\nelse do;\n y='other values';\n z=400;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data temp;\nx=150;\nif 100 le x le 200 then\n y='less than 200 and gt 100';\n z=300;\nelse do;\n y='other values';\n z=400;\nend;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. None",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Smith^Joe^27^1892^81059 Franks^Carl^24^2343^84060 Well^Sam^32^4569^76182 Max^Cori^21^1052^87231\nWhich statement should be used to read in the file referenced by the fileref persons?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. infile persons dlm;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. infile persons '^';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. infile persons",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. infile persons dlm='^';",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "WORK.EMPLOYEE WORK.SALARY\nfname age      fname salary\nBruce 30       Bruce 25000\nDan 40         Bruce 35000\nDan 25000\nThe following SAS program is submitted:\ndata work.empdata;\nmerge work.employee\nwork.salary;\nby fname;\ntotsal + salary;\nrun;\nHow many variables are output to the WORK.EMPDATA data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.company;\nset work.dept1(keep = jobcode) work.dept2(rename = (jcode = jobcode));\nrun;\nWhich one of the following is the result?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.accounting;\nset work.dept1 work.dept2;\njobcode = ‘FA1’; length jobcode $ 8; run;\nA character variable named JOBCODE is contained in both the WORK.DEPT1 and\nWORK.DEPT2 SAS data sets. The variable JOBCODE has a length of 5 in the\nWORK.DEPT1 data set and a length of 7 in the WORK.DEPT2 data set. What is the\nlength of the variable JOBCODE in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data one;\naddress= '214 London Way';\nrun;\ndata one;\nset one;\naddress = tranwrd(address1, 'Way', 'Drive'); run;\nWhat are the length and value of the variable ADDRESS?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "x y z\n1 A 27\n1 A 33\n1 B 45\n2 A 52\n2 B 69\n3 B 70\n3 A 82\n3 C 91\nThe following program is submitted\ndata two;\nset one;\nby x;\nif first.x then delete;\nif last.x then delete;\nrun;\nThe data set two has how many observations?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 8",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 2",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 1",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.totalsales;\nset work.monthlysales(keep = year product sales);\nretain monthsales {12};\narray monthsales {12};\ndo i = 1 to 12;\nmonthsales{i} = sales;\nend;\ncnt + 1;\nmonthsales{cnt} = sales;\nrun;\nThe data set named WORK.MONTHLYSALES has one observation per month for each of five\nyears for a total of 60 observations.\nWhich one of the following is the result of the above program?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp;\n    x=4;\n    if x=5 then do;\n        y=2;\n        output;\n   end;\nrun;\n",
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
                    description: "C. 0",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 3",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Date_________________________________________________\n01/01/2004\n02/01/2004\n03/02/2004\n04/01/2004\n05/01/2004\n06/01/2004\n07/01/2004\n08/01/2004\n09/01/2004\n10/01/2004\n11/01/2004\n12/01/2004\nHow many observations will be there dataset b if the following datastep is submitted?\nData b;\n   Set a;\n   Temp = qtr(input(Date,mmddyy10.));\n   If Temp LE 3;\nRUN;\n",
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
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 9",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc datasets lib = sasuser;\ncontents data = class varnum;\nquit;\nWhich one of the following is the purpose of the VARNUM option?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc format;\nvalue salfmt.\n0 -&ltr 50000 = 'Less than 50K'\n50000 - high = '50K or Greater';\noptions fmterr nodate pageno=1;\ntitle 'Employee Report';\nproc print data=work.employees noobs;\nvar fullname salary hiredate;\nformat\nsalary salfmt.\nhiredate date9.;\nlabel\nfullname='Name of Employee'\nsalary='Annual Salary'\nhiredate='Date of Hire';\nrun;\nWhy does the program fail?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.ONE;\nText='Australia, US, Denmark';\nPos=find(Text,'US','i',5);\nrun;\nWhat value will SAS assign to Pos?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "JAN\nFEB\nMAR\nWhich statement correctly assigns a library reference to the Excel workbook?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data playground;\ndo x=0 to 9;\ndo y =0 to 9;\nif x in(1,3,5,7,9) then do;\nz=x*10+y;\noutput;\nend;\nend;\nend;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 0",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 50",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. 100",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 10",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.TEST;\nset WORK.MEASLES(keep=Janpt Febpt Marpt);\narray Diff{3} Difcount1-Difcount3;\narray Patients{3} Janpt Febpt Marpt;\nrun;\nWhat new variables are created?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Day Month Temp\n--- --------- -------\n1 May 75\n15 May 70\n15 June 80\n3 June 76\n2 July 85\n14 July 89\nThe following program is submitted:\nproc sort data=WORK.TEMPS;\nby descending Month Day;\nrun;\nproc print data=WORK.TEMPS;\nrun;\nWhich output is correct?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Value ag \t1-50  = ‘less’\n\t51-100 = ‘greater’;\nRun;\nData test;\nX = 50.5;\nFormat x ag.;\nRun;\nWhat will be the output of dataset test?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. ‘less’",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. ‘greater’",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. ‘great’",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 50.5",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nTitle = 'A Tale of Two Cities, Charles J. Dickens';\nWord = scan(title,3,' ,');\nrun;\nWhich one of the following is the value of the variable WORD in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "X\tY\n5\t2\n3\t1\n5\t6\nThe following SAS program is submitted:\ndata SASUSER.ONE SASUSER.TWO OTHER;\nset SASDATA.TWO;\nif X eq 5 then output SASUSER.ONE;\nif Y lt 5 then output SASUSER.TWO;\noutput;\nrun;\nWhat is the result?\n",
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
                    description: "D. No data sets are output. The DATA step fails execution due to syntax errors.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "PRICES\nProdid price producttype sales returns\nK125 5.10 NETWORK 15 2\nB132S 2.34 HARDWARE 300 10\nR18KY2 1.29 SOFTWARE 25 5\n3KL8BY 6.37 HARDWARE 125 15\nDY65DW 5.60 HARDWARE 45 5\nDGTY23 4.55 HARDWARE 67 2\nThe following SAS program is submitted:\ndata hware inter cheap;\nset prices(keep = productype price);\nif producttype = 'HARDWARE' then output hware; else if producttype = 'NETWORK' then output\ninter; if price le 5.00;\nrun;\nHow many observations does the HWARE data set contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.GEO;\ninfile datalines;\ninput City $20.;\nif City='Tulsa' then\nState='OK';\nRegion='Central';\nif City='Los Angeles' then\nState='CA'\nRegion='Western';\ndatalines;\nTulsa\nLos Angeles\nBangor\n;\nrun;\nAfter data step execution, what will data set WORK.GEO contain?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc format lib=soil;\nvalue drvfmt;\nSS=Sam Smithie Smith\nJR=Jim Rollins\nER=Elmer Richards\nrun;\n1. the strings on the right of the equal sign need to have quotes.\n2. the strings on the left of the equal sign need to have quotes.\n3. the format needs to have a $ in front of the name\n4. semicolons should be after each line\n5. there should be no semicolon after the word drvfmt\n6. there should be a semicolon after the final format entry\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. (1) and (2)",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. (3) and (4)",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. (5) and (6)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. (1), (2), (3), (5), and (6)",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "destination revenue\nYYZ 53634\nFRA 62129\nFRA 75962\nRDU 76254\nYYZ 82174\nThe following SAS program is submitted:\nproc sort data = qtr1_revenue;\nby destination descending revenue;\nrun;\nWhich one of the following represents the first observation in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Data temp;\nA = ‘I am Bond, James Bond’;\nLEN=SCAN(A,3);\nRun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 4",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 20",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 8",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "1----5----10\n$1,120\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\ninput salary 5;\nrun;\nWhat would be the value of SALARY in the dataset TEMP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. $1,120",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 2",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. . (period)",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Blank value",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "options pagesize=15 nodate;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. suppresses the date and limits the page size of the log",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. suppresses the date and limits the vertical page size for text output",
                    correct: true
                },
                {
                    tag: "C",
                    description: "C. suppresses the date and limits the vertical page size for text and HTML output",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. suppresses the date and limits the horizontal page size for text output",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data temp.x;\nset sasuser.y;\nrun;\nWhat must be submitted prior to this SAS program for the program to execute successfully?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "AGES\nAGE\n---------\nThe variable AGE contains character values. The following SAS program is submitted:\ndata subset;\nset ages;\nwhere age> 12;\nrun;\nHow many observations are written out to the data set SUBSET?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc sort data=SASUSER.PROJECTS out=PSORT;\nby Code descending Date Cost;\nrun;\nWhich of the following is true concerning the submitted program?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc means data=mydata mean max median;\nvar weight height armspan;\nclass gender;\noutput out=work.averages\nmean= AvgWeight AvgHeight AvgArmspan\nmax= MaxWeight MaxHeight MaxArmspan\nmedian= Minweight MinHeight MinArmspan;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Three observations, _TYPE_ and _FREQ_ variables along with variables for mean, max, and median values for each variable listed in the var statement.",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Thirty-six observations, one for each of the gender, weight, height, armspan combinations we created.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Eighteen observations, two variables, one for male and one for female, with the means, maxes, and medians of the various variables as observations.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Three observations, _TYPE_ and _FREQ_ variables along with mean, max, and minimum values for each variable in the var statement.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "i. n-count\nii. mean\niii. median\niv. min\nv. max\nvi. standard deviation\nvii. range\nviii. Q1\nix. Q3\nx. P99\nxi. P1\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. iv, viii, iii, ix, v",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. all of them are generated by default",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. i, ii, iv, v, vi",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. none of these (where is my z statistic...)",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data n5;\ndy=23;\nmn=3;\nyr=2000;\nndate=mdy(mn,dy,yr);\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 14692",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. 10026",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 145",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. 545",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "EAST\nWEST\nNORTH\nSOUTH\nThe following program is submitted:\nlibname MYXLS 'regions.xls';\nWhich PROC PRINT step correctly displays the NORTH worksheet?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.sales;\ndo year = 1 to 5;\ndo month = 1 to 12;\nx + 1;\nend;\nend;\nrun;\nWhich one of the following represents how many observations are written to the WORK.SALES data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data combine;\nprefix='505';\nmiddle='6465 ';\nend='09090';\n&ltrinsert statement here>;\nrun;\nWhich statement successfully completes the program so that TOTAL has a value of 505-6465-\n09090?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "options pagesize=55 nonumber;\nproc tabulate data=clinic.admit;\nclass actlevel;\nvar age height weight;\ntable actlevel,(age height weight)*mean;\nrun;\noptions linesize=80;\nproc means data=clinic.heart min max maxdec=1;\nvar arterial heart cardiac urinary;\nclass survive sex;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. The PROC MEANS output has a print line width of 80 characters, but the\nPROC TABULATE output has no print line width.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. The PROC TABULATE output has no page numbers, but the PROC\nMEANS output has page numbers.",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Each page of output from both PROC steps is 55 lines long and has no\npage numbers, and the PROC MEANS output has a print line width of 80\ncharacters.",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. The date does not appear on output from either PROC step.",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "--------10-------20-------30\n1999/10/25\nThe following SAS program is submitted:\ndata projectduration;\ninfile 'file-specification';\ninput date $ 1 - 10;\nrun;\nWhich one of the following statements completes the program above and computes the duration of the project in days as of today's\ndate?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "ankur\t\t 22\ndata temp;\ninfile ‘file’;\ninput name $1-10 age 15-16;\n/*missing code*/\nrun;\nWhat is the missing code to write ‘ankur,22’ to variable LA;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. LA = TRIM(name)||’,’||put(Age,2.);",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. LA = name||’,’||put(Age,2.);",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. LA = name||’ ,’||TRIM(put(Age,2.));",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. LA = put(name)||’,’||put(Age,3.);",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "libname sasdata 'SAS-data-library';\ndata test;\nset sasdata.chemists (keep = job_code);\nif job_code = 'chem3' then description = 'Senior Chemist';\nrun;\nThe variable JOB_CODE is a character variable with a length of 6 bytes.\nWhich one of the following is the length of the variable DESCRIPTION in the output data set?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data revenue;\nset year_1;\nvar1 = mdy(1,15,1960);\nrun;\nWhich one of the following values does the variable named VAR1 contain?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data WORK.LOOP;\nX = 0;\ndo Index = 1 to 5  by  2;\nX = Index;\nend;\nrun;\nUpon completion of execution, what are the values of the variables X and Index in the SAS data set named WORK.LOOP?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. X = 5, Index = 7",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. X = 5, Index = 5",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. X = 5, Index = 6",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. X = 3, Index = 5",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "footnote1 'Sales Report for Last Month';\nfootnote2 'Selected Products Only';\nfootnote3 'All Regions';\nfootnote4 'All Figures in Thousands of Dollars';\nproc print data = sasuser.shoes;\nfootnote2 'All Products';\nrun;\nWhich one of the following contains the footnote text that is displayed in the report?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data sandbox;\ndo x=1 to 10;\ndo y = 1 to 10;\nif x le 9 then z=8;\nend;\nend;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. x=. y=. z=.",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. cannot be determined",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. x=10 y=10 z=.",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. x=11 y=11 z=8",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.new;\nlength word $7;\namount = 7;\nif amount = 5 then word = 'CAT';\nelse if amount = 7 then word = 'DOG';\nelse word = 'NONE!!!';\namount = 5;\nrun;\nWhich one of the following represents the values of the AMOUNT and WORD variables?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Infile ‘filename’;\nInput ID $5 @;\nIf  ID  = ‘RAMESH’ then input Y $6 Z $10 @;\nelse  ID  = ‘VIJAY’ then input R $2 @;\nInput age 5.;\nRUN;\nHow many lines are read from input file during one execution of dataset?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 2",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 1",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "which the value of the variable Style is RANCH, SPLIT, or TWOSTORY?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. where style='RANCH' or 'SPLIT' or 'TWOSTORY';",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. where style in 'RANCH' or 'SPLIT' or 'TWOSTORY';",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. where style in (RANCH, SPLIT, TWOSTORY);",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. where style in ('RANCH','SPLIT','TWOSTORY');",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "EMPLOYEES\nNAME SALARY\n-------- ------------\nInnis 60000\nJolli 50000\nEllis 55000\nLiu 45000\nThe following SAS program is submitted:\nproc print data = employees; where name like '_i%';\nrun;\nWhat is contained in the output?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "output?\nMonth Instructors AerClass WalkJogRun Swim\n01 1 37 91 83\n02 2 41 102 27\n03 1 52 98 19\n04 1 61 118 22\n05 3 49 88 29\n8 240 497 180\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. var month instructors;\nsum instructors aerclass walkjogrun swim;",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. var month;\nsum instructors aerclass walkjogrun swim;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. var month instructors aerclass;\nsum instructors aerclass walkjogrun swim;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. all of the above",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data work.test;\nAuthor = 'Agatha Christie';\nFirst = substr(scan(author,1,' ,'),1,1);\nrun;\nWhich one of the following is the length of the variable FIRST in the output data set?\n",
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
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 200",
                    correct: true
                }
            ]
        },
        errorMessage: null,
        answer: "C,D",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "proc report data=sasuser.houses nowd;\ncolumn style sqfeet bedrooms price;\ndefine style / group;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. Style SqFeet Bedrooms Price\nCONDO 6755 11 $397,250\nRANCH 5005 9 $274,300\nSPLIT 4110 8 $233,950\nTWOSTORY 5835 12 $335,300",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Style SqFeet Bedrooms Price\nCONDO 1400 2 $80,050\n1390 3 $79,350\n2105 4 $127,150\n1860 2 $110,700\nRANCH 1250 2 $64,000\n1500 3 $86,650\n1535 3 $89,100\n720 1 $34,550\nSPLIT 1190 1 $65,850\n1615 4 $94,450\n1305 3 $73,650\nTWOSTORY 1810 4 $107,250\n1040 2 $55,850\n1240 2 $69,250\n1745 4 $102,950",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Style SqFeet Bedrooms Price\n15 21705 40 $1,240,800",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Style SqFeet Bedrooms Price\nRANCH 1250 2 $64,000\nSPLIT 1190 1 $65,850\nCONDO 1400 2 $80,050\nTWOSTORY 1810 4 $107,250\nRANCH 1500 3 $86,650\nSPLIT 1615 4 $94,450\nSPLIT 1305 3 $73,650\nCONDO 1390 3 $79,350\nTWOSTORY 1040 2 $55,850\nCONDO 2105 4 $127,150\nRANCH 1535 3 $89,100\nTWOSTORY 1240 2 $69,250\nRANCH 720 1 $34,550\nTWOSTORY 1745 4 $102,950\nCONDO 1860 2 $110,700",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "SASDATA.TWO\nX Y\n--\n5 2\n3 1\n5 6\nThe following SAS program is submitted:\ndata sasuser.one two sasdata.three;\nset sasdata two;\nif x = 5 then output sasuser.one;\nelse output sasdata two;\nrun;\nWhat is the result?\n",
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "Question 66:\ndata temp;\n infile 'file';\n input relation $ @;\n if relation='children' then\n\tinput sex $54;\n else if relation='parent' then\n \tinput profession $;\n input Age;\nrun;\nhow many records from infile will be read for a record in the dataset?\n",
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
        answer: "B",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "The following SAS program is submitted:\nproc report data = sasuser.houses nowd headline headskip;\ncolumn style price;\nwhere price &ltr 100000;\n&ltrinsert code here>\ntitle;\nrun;\nClick the Exhibit button to view the output from the REPORT procedure.\nAssuming that the PRICE variable is numeric, which one of the following completes the program and produces the output displayed in\nthe exhibit?\n",
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
        complete: true,
        answeredCorrectly: false
    },
    {
        question: " 1----5----10\ndan 23 45\n bob 44 50\nsue 30 80\nmam 40 50\nThe following code is submitted.\ndata temp;\ninfile ‘file specification’;\n input x $ 1-3;\nif x='sue' then input age 5-6;\nelse input height 8-9;\nrun;\nwhat would be the value of variable AGE in the dataset TEMP when variable X has the value ‘Sue’?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. 44",
                    correct: false
                },
                {
                    tag: "B",
                    description: "B. 30",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. 40",
                    correct: true
                },
                {
                    tag: "D",
                    description: "D. 55",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "C",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "data perm.update;\ninfile invent;\ninput IDnum $ 15-19 Item $ 1-13 Instock 21-22\nBackOrd 24-25;\nTotal=instock+backord;\nrun;\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. IDnum Item InStock BackOrd Total",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. Item IDnum InStock BackOrd Total",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. Total IDnum Item InStock BackOrd",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. Total Item IDnum InStock BackOrd",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
    },
    {
        question: "observations from dataB to the end of the dataset dataA?\n",
        options: {
            options: [
                {
                    tag: "A",
                    description: "A. data dataC;\nset dataA dataB;\nrun;",
                    correct: true
                },
                {
                    tag: "B",
                    description: "B. data dataC;\nset dataA dataB;\nby variable1;\nrun;",
                    correct: false
                },
                {
                    tag: "C",
                    description: "C. data dataC;\nset dataA;\nset dataB;\nrun;",
                    correct: false
                },
                {
                    tag: "D",
                    description: "D. data dataC;\nmerge dataA dataB;\nby variable1;\nrun;",
                    correct: false
                }
            ]
        },
        errorMessage: null,
        answer: "A",
        submittedAnswer: "",
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
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
        complete: true,
        answeredCorrectly: false
    }
]
