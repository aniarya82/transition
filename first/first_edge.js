/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-310px', '70px', '2143px', '399px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['-52px', '59px', '200px', '100px', 'auto', 'auto'],
                                text: "ABOUT",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(250,247,247,1.00)", "700", "none", "normal", "break-word", "normal"],
                                transform: [[],['90'],['23']]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['-27px', '254px', '200px', '69px', 'auto', 'auto'],
                                text: "ARCHIVES<br>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(250,247,247,1)", "700", "none solid rgb(250, 247, 247)", "normal", "break-word", "normal"],
                                transform: [[],['81'],['10']]
                            },
                            {
                                id: 'Rectangle5',
                                type: 'rect',
                                rect: ['-963px', '29px', '938px', '439px', 'auto', 'auto'],
                                fill: ["rgba(26,174,167,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-115px', '1px', '614px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['904px', '470px', '847px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle7',
                                type: 'rect',
                                rect: ['173px', '-462px', '1060px', '435px', 'auto', 'auto'],
                                fill: ["rgba(26,174,167,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Rectangle8',
                            type: 'rect',
                            rect: ['0px', '812px', '1495px', '243px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'blog',
                                symbolName: 'blog',
                                type: 'rect',
                                rect: ['23px', '21px', '250', '202', 'auto', 'auto'],
                                transform: [[],[],[],['1.2','1.22277']]
                            },
                            {
                                id: 'blogCopy',
                                symbolName: 'blog',
                                type: 'rect',
                                rect: ['923px', '20px', '250', '202', 'auto', 'auto'],
                                transform: [[],[],[],['1.2','1.22277']]
                            },
                            {
                                id: 'blogCopy2',
                                symbolName: 'blog',
                                type: 'rect',
                                rect: ['1223px', '20px', '250', '202', 'auto', 'auto'],
                                transform: [[],[],[],['1.2','1.22277']]
                            },
                            {
                                id: 'Rectangle10',
                                type: 'rect',
                                rect: ['298px', '-1px', '296px', '241px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle10Copy',
                                type: 'rect',
                                rect: ['598px', '-1px', '296px', '241px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1499px', '800px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '-695px',
                            '-115px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            1000,
                            "swing",
                            "${Rectangle3}",
                            '1568px',
                            '904px'
                        ],
                        [
                            "eid22",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '614px',
                            '614px'
                        ],
                        [
                            "eid78",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${blogCopy}",
                            '923px',
                            '923px'
                        ],
                        [
                            "eid42",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '-127px',
                            '-52px'
                        ],
                        [
                            "eid6",
                            "skewX",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '0deg',
                            '50deg'
                        ],
                        [
                            "eid77",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${blog}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid2",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '2143px',
                            '150px'
                        ],
                        [
                            "eid85",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rectangle8}",
                            '812px',
                            '553px'
                        ],
                        [
                            "eid18",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid60",
                            "top",
                            104,
                            896,
                            "linear",
                            "${Rectangle7}",
                            '-462px',
                            '-469px'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${blog}",
                            '1.2',
                            '1.2'
                        ],
                        [
                            "eid63",
                            "skewX",
                            843,
                            157,
                            "linear",
                            "${Rectangle7}",
                            '-14deg',
                            '0deg'
                        ],
                        [
                            "eid23",
                            "skewX",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '50deg'
                        ],
                        [
                            "eid87",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'rgba(26,174,167,1.00)',
                            'rgba(26,174,167,1.00)'
                        ],
                        [
                            "eid83",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${blogCopy2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${blog}",
                            '1.22277',
                            '1.22277'
                        ],
                        [
                            "eid20",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid29",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid26",
                            "font-size",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid21",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '847px',
                            '847px'
                        ],
                        [
                            "eid64",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'rgba(26,174,167,1.00)',
                            'rgba(26,174,167,1.00)'
                        ],
                        [
                            "eid82",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${blogCopy2}",
                            '1223px',
                            '1223px'
                        ],
                        [
                            "eid79",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${blogCopy}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '-296px',
                            '-301px'
                        ],
                        [
                            "eid43",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '-301px',
                            '59px'
                        ],
                        [
                            "eid67",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '-963px',
                            '-963px'
                        ],
                        [
                            "eid73",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${blog}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid55",
                            "left",
                            0,
                            104,
                            "easeInOutBounce",
                            "${Rectangle7}",
                            '302px',
                            '383px'
                        ],
                        [
                            "eid57",
                            "left",
                            104,
                            201,
                            "easeInOutBounce",
                            "${Rectangle7}",
                            '383px',
                            '469px'
                        ],
                        [
                            "eid58",
                            "left",
                            305,
                            187,
                            "easeInOutBounce",
                            "${Rectangle7}",
                            '469px',
                            '508px'
                        ],
                        [
                            "eid59",
                            "left",
                            492,
                            508,
                            "linear",
                            "${Rectangle7}",
                            '508px',
                            '173px'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            1000,
                            "swing",
                            "${Rectangle3}",
                            '470px',
                            '469px'
                        ],
                        [
                            "eid45",
                            "skewX",
                            2000,
                            0,
                            "easeInOutBounce",
                            "${Text}",
                            '23deg',
                            '23deg'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '71px',
                            '70px'
                        ],
                        [
                            "eid24",
                            "skewX",
                            0,
                            1000,
                            "swing",
                            "${Rectangle3}",
                            '0deg',
                            '50deg'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '-310px',
                            '627px'
                        ],
                        [
                            "eid32",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '82deg',
                            '86deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            1000,
                            1000,
                            "easeInOutBounce",
                            "${Text}",
                            '86deg',
                            '90deg'
                        ],
                        [
                            "eid48",
                            "skewY",
                            2000,
                            0,
                            "easeInOutBounce",
                            "${Text}",
                            '0deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "blog": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '246px', '198px', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '250px', '202px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("first_edgeActions.js");
})("EDGE-14100059");
