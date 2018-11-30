// d3 = require("d3@5")
// margin = ({top: 20, right: 0, bottom: 30, left: 40})
// height = 500
// yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(y))
//     .call(g => g.select(".domain").remove())
// xAxis = g => g
//     .attr("transform", `translate(0,${height - margin.bottom})`)
//     .call(d3.axisBottom(x)
//         .tickSizeOuter(0))


// var realdata = {"toxic":{"advice\/question":0.0305571519,"animals":0.0425189077,"anime\/manga":0.0433381919,"appearance":0.0321370698,"arts":0.0188461165,"autos":0.0236057128,"board_game":0.0171705025,"books":0.0327417119,"card_game":0.0215260645,"company\/website":0.0330981164,"crypto":0.0216759738,"drugs":0.0694279823,"education":0.0157944911,"electronics":0.0172793256,"finance\/money":0.0140026984,"food\/drink":0.0287069106,"geo":0.0278845567,"hardware\/tools":0.0219857177,"health":0.0606775371,"hobby":0.024199404,"meta":0.0998363479,"movies":0.0331046758,"music":0.0495443034,"other":0.0294908441,"parenting":0.0464743116,"politics\/viewpoint":0.0717276532,"profession":0.0252551335,"programming":0.0070936328,"religion\/supernatural":0.0316086978,"rpg":0.0167256045,"sex\/relationships":0.1125346917,"social_group":0.0708567473,"software":0.0151197391,"sports":0.0308712749,"stem":0.0106304902,"travel":0.0133951035,"tv_show":0.0552820047,"video_game":0.0475992868,"writing\/stories":0.1082860413},"severe_toxic":{"advice\/question":0.0001857638,"animals":0.000116791,"anime\/manga":0.0003015392,"appearance":0.0000748852,"arts":0.0000449165,"autos":0.0000710675,"board_game":0.0000391442,"books":0.0001208011,"card_game":0.0000785091,"company\/website":0.0001320018,"crypto":0.0001158219,"drugs":0.0005115712,"education":0.0000627688,"electronics":0.000041103,"finance\/money":0.0000178127,"food\/drink":0.0000709728,"geo":0.0001389355,"hardware\/tools":0.0000393353,"health":0.0004142293,"hobby":0.0000741313,"meta":0.0021953802,"movies":0.00017206,"music":0.0005246832,"other":0.0002026712,"parenting":0.0001308178,"politics\/viewpoint":0.000529355,"profession":0.0000964991,"programming":0.0000065885,"religion\/supernatural":0.000084406,"rpg":0.0000608399,"sex\/relationships":0.0010683419,"social_group":0.0004481967,"software":0.0000562747,"sports":0.0001269911,"stem":0.000018498,"travel":0.0000131267,"tv_show":0.0004056186,"video_game":0.0005440045,"writing\/stories":0.002270122},"obscene":{"advice\/question":0.0114381439,"animals":0.010966318,"anime\/manga":0.0224878672,"appearance":0.011202853,"arts":0.0059959589,"autos":0.0081200499,"board_game":0.0051047241,"books":0.0154133376,"card_game":0.0076111845,"company\/website":0.0171828119,"crypto":0.0100758178,"drugs":0.0429542002,"education":0.006966792,"electronics":0.0067196716,"finance\/money":0.0053864951,"food\/drink":0.009633347,"geo":0.0132210884,"hardware\/tools":0.0071029489,"health":0.030016952,"hobby":0.00842457,"meta":0.0636470576,"movies":0.0171975683,"music":0.0294632153,"other":0.0148618821,"parenting":0.0185024444,"politics\/viewpoint":0.0393515979,"profession":0.0120683489,"programming":0.0021950816,"religion\/supernatural":0.0120065103,"rpg":0.0051692369,"sex\/relationships":0.0693850425,"social_group":0.0377960269,"software":0.0063581645,"sports":0.0143247965,"stem":0.0033935095,"travel":0.002886027,"tv_show":0.0294858836,"video_game":0.0241297689,"writing\/stories":0.0627398344},"threat":{"advice\/question":0.0006959765,"animals":0.0004336823,"anime\/manga":0.0009626301,"appearance":0.0001076593,"arts":0.0001119796,"autos":0.0000882562,"board_game":0.0002616276,"books":0.000469444,"card_game":0.0001963069,"company\/website":0.0001500199,"crypto":0.000117694,"drugs":0.0006854314,"education":0.0001363583,"electronics":0.0000721078,"finance\/money":0.0000365544,"food\/drink":0.0001304183,"geo":0.0002222778,"hardware\/tools":0.0001597807,"health":0.0007340626,"hobby":0.0001909217,"meta":0.0017121657,"movies":0.0004675515,"music":0.0005911589,"other":0.0002441914,"parenting":0.0002917256,"politics\/viewpoint":0.000951013,"profession":0.0001304345,"programming":0.0000229491,"religion\/supernatural":0.0002758485,"rpg":0.0002752517,"sex\/relationships":0.0012487889,"social_group":0.000587744,"software":0.0000762549,"sports":0.0001967296,"stem":0.0000481851,"travel":0.000057745,"tv_show":0.0009212576,"video_game":0.0012503621,"writing\/stories":0.0027331448},"insult":{"advice\/question":0.005047242,"animals":0.0058690155,"anime\/manga":0.0076970841,"appearance":0.0038455197,"arts":0.0023047909,"autos":0.0028489443,"board_game":0.0018343878,"books":0.0048688983,"card_game":0.0029695995,"company\/website":0.0055974856,"crypto":0.0035974817,"drugs":0.0139050709,"education":0.0022991796,"electronics":0.0021775426,"finance\/money":0.0015455115,"food\/drink":0.0035993532,"geo":0.0046479595,"hardware\/tools":0.0027526854,"health":0.0110292206,"hobby":0.0032573187,"meta":0.0323575697,"movies":0.005087992,"music":0.0099826505,"other":0.0054783701,"parenting":0.006397421,"politics\/viewpoint":0.0147650097,"profession":0.004016594,"programming":0.000697863,"religion\/supernatural":0.0040280063,"rpg":0.0018833755,"sex\/relationships":0.0257089669,"social_group":0.0134465461,"software":0.0022469711,"sports":0.0047777246,"stem":0.0011993645,"travel":0.0014669918,"tv_show":0.0110325255,"video_game":0.0097436479,"writing\/stories":0.0306217882},"identity_hate":{"advice\/question":0.0008370476,"animals":0.0010015259,"anime\/manga":0.0012221094,"appearance":0.0005392865,"arts":0.0003605659,"autos":0.0003312108,"board_game":0.0003788605,"books":0.0007555376,"card_game":0.0003839888,"company\/website":0.0005512517,"crypto":0.0003715653,"drugs":0.0017580077,"education":0.0003033149,"electronics":0.0002250736,"finance\/money":0.0001490069,"food\/drink":0.0005121129,"geo":0.0008906649,"hardware\/tools":0.0003499504,"health":0.0014961126,"hobby":0.0004496696,"meta":0.0058777159,"movies":0.0007258652,"music":0.0015680504,"other":0.000676345,"parenting":0.0008706274,"politics\/viewpoint":0.003365546,"profession":0.0004757739,"programming":0.0000672043,"religion\/supernatural":0.001056091,"rpg":0.0003742749,"sex\/relationships":0.0042797112,"social_group":0.0037449589,"software":0.0002395928,"sports":0.0005552177,"stem":0.0001629835,"travel":0.0002019179,"tv_show":0.0017243344,"video_game":0.001504618,"writing\/stories":0.0058345914},"in_data":{"advice\/question":true,"animals":true,"anime\/manga":true,"appearance":true,"arts":true,"autos":true,"board_game":true,"books":true,"card_game":true,"company\/website":true,"crypto":true,"drugs":true,"education":true,"electronics":true,"finance\/money":true,"food\/drink":true,"geo":true,"hardware\/tools":true,"health":true,"hobby":true,"meta":true,"movies":true,"music":true,"other":true,"parenting":true,"politics\/viewpoint":true,"profession":true,"programming":true,"religion\/supernatural":true,"rpg":true,"sex\/relationships":true,"social_group":true,"software":true,"sports":true,"stem":true,"travel":true,"tv_show":true,"video_game":true,"writing\/stories":true}};
// groupdata={}
// labels = Object.keys(realdata)
// categories = Object.keys(realdata["toxic"])
// for(var i = 0; i< labels.length; i++){
//     groupdata[labels[i]] = []
//     for(var j=0; j<categories.length;j++){
//         groupdata[labels[i]].push({name: categories[j], value: realdata[labels[i]][categories[j]]})
//     }
// }
// console.log(groupdata)

function horizontalGroupBarChart(config) {
    function setReSizeEvent(data) {
        var resizeTimer;
        var interval = 100;
        window.removeEventListener('resize', function () {
        });
        window.addEventListener('resize', function (event) {
            if (resizeTimer !== false) {
                clearTimeout(resizeTimer);
            }
            resizeTimer = setTimeout(function () {
                $(data.mainDiv).empty();
                drawHorizontalGroupBarChartChart(data);
                clearTimeout(resizeTimer);
            }, interval);
        });
    }

    drawHorizontalGroupBarChartChart(config);
    setReSizeEvent(config);
}
function createhorizontalGroupBarChartLegend(mainDiv, columnsInfo, colorRange) {
    var z = d3.scaleOrdinal()
        .range(colorRange);
    var mainDivName = mainDiv.substr(1, mainDiv.length);
    $(mainDiv).before("<div id='Legend_" + mainDivName + "' class='pmd-card-body' style='margin-top:0; margin-bottom:0;'></div>");
    var keys = Object.keys(columnsInfo);
    keys.forEach(function (d) {
        var cloloCode = z(d);
        $("#Legend_" + mainDivName).append("<span class='team-graph team1' style='display: inline-block; margin-right:10px;'>\
      <span style='background:" + cloloCode + ";width: 10px;height: 10px;display: inline-block;vertical-align: middle;'>&nbsp;</span>\
      <span style='padding-top: 0;font-family:Source Sans Pro, sans-serif;font-size: 13px;display: inline;'>" + columnsInfo[d] + " </span>\
  </span>");
    });

}

function drawHorizontalGroupBarChartChart(config) {
    var data = config.data;
    var columnsInfo = config.columnsInfo;
    var xAxis = config.xAxis;
    var yAxis = config.yAxis;
    var colorRange = config.colorRange;
    var mainDiv = config.mainDiv;
    var mainDivName = mainDiv.substr(1, mainDiv.length);
    var label = config.label;
    var requireLegend = config.requireLegend;
    d3.select(mainDiv).append("svg").attr("width", $(mainDiv).width()).attr("height", $(mainDiv).height() * 0.80);
    var svg = d3.select(mainDiv + " svg"),
        margin = { top: 20, right: 20, bottom: 40, left: 100 },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;


    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    if (requireLegend != null && requireLegend != undefined && requireLegend != false) {
        $("#Legend_" + mainDivName).remove();
        createhorizontalGroupBarChartLegend(mainDiv, columnsInfo, colorRange);
    }


    var y0 = d3.scaleBand()
        .rangeRound([height, 0])
        .paddingInner(0.1);


    var y1 = d3.scaleBand()
        .padding(0.05);


    var x = d3.scaleLinear()
        .rangeRound([0, width]);


    var z = d3.scaleOrdinal()
        .range(colorRange);

    var keys = Object.keys(columnsInfo);
    y0.domain(data.map(function (d) {
        return d[yAxis];
    }));
    y1.domain(keys).rangeRound([0, y0.bandwidth()]);
    x.domain([0, d3.max(data, function (d) {
        return d3.max(keys, function (key) {
            return d[key];
        });
    })]).nice();
    var maxTicks = d3.max(data, function (d) {
        return d3.max(keys, function (key) {
            return d[key];
        });
    });
    var element = g.append("g")
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d) {
            return "translate(0," + y0(d[yAxis]) + ")";
        });
    var rect = element.selectAll("rect")
        .data(function (d, i) {
            return keys.map(function (key) {
                return { key: key, value: d[key], index: key + "_" + i + "_" + d[yAxis] };
            });
        })
        .enter().append("rect")
        .attr("y", function (d) {
            return y1(d.key);
        })
        .attr("width", function (d) {
            return x(d.value);
        })
        .attr("data-index", function (d, i) {
            return d.index;
        })
        .attr("height", y1.bandwidth())
        .attr("fill", function (d) {
            return z(d.key);
        });
    //CBT:add tooltips
    var self = {};
    self.svg = svg;
    self.cssPrefix = "horgroupBar0_";
    self.data = data;
    self.keys = keys;
    self.height = height;
    self.width = width;
    self.label = label;
    self.yAxis = yAxis;
    self.xAxis = xAxis;
    horBarTooltip.addTooltips(self);

    rect.on("mouseover", function () {
        var currentEl = d3.select(this);
        var index = currentEl.attr("data-index");
        horBarTooltip.showTooltip(self, index);
    });

    rect.on("mouseout", function () {
        var currentEl = d3.select(this);
        var index = currentEl.attr("data-index");
        horBarTooltip.hideTooltip(self, index);
    });

    rect.on("mousemove", function () {
        horBarTooltip.moveTooltip(self);
    });


    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(maxTicks))
        .append("text")
        .attr("x", width / 2)
        .attr("y", margin.bottom * 0.7)
        .attr("dx", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text(label.xAxis);

    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y0).ticks(null, "s"))
        .append("text")
        .attr("x", height * 0.4 * -1)
        .attr("y", margin.left * 0.8 * -1)//y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("font-weight", "bold")
        // .attr("text-anchor", "start")
        .text(label.yAxis);

}
var helpers = {
    getDimensions: function (id) {
        var el = document.getElementById(id);
        var w = 0, h = 0;
        if (el) {
            var dimensions = el.getBBox();
            w = dimensions.width;
            h = dimensions.height;
        } else {
            console.log("error: getDimensions() " + id + " not found.");
        }
        return { w: w, h: h };
    }
}
var horBarTooltip = {
    addTooltips: function (pie) {
        var keys = pie.keys;
        // group the label groups (label, percentage, value) into a single element for simpler positioning
        var element = pie.svg.append("g")
            .selectAll("g")
            .data(pie.data)
            .enter().append("g")
            .attr("class", function (d, i) {
                return pie.cssPrefix + "tooltips" + "_" + i
            });

        tooltips = element.selectAll("g")
            .data(function (d, i) {
                return keys.map(function (key) {
                    return { key: key, value: d[key], index: key + "_" + i + "_" + d[pie.yAxis] };
                });
            })
            .enter()
            .append("g")
            .attr("class", pie.cssPrefix + "tooltip")
            .attr("id", function (d, i) {
                return pie.cssPrefix + "tooltip" + d.index;
            })
            .style("opacity", 0)
            .append("rect")
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("x", -2)
            .attr("opacity", 0.71)
            .style("fill", "#000000");

        element.selectAll("g")
            .data(function (d, i) {
                return keys.map(function (key) {
                    return { key: key, value: d[key], index: key + "_" + i + "_" + d[pie.yAxis] };
                });
            })
            .append("text")
            .attr("fill", function (d) {
                return "#efefef"
            })
            .style("font-size", function (d) {
                return 10;
            })
            .style("font-family", function (d) {
                return "arial";
            })
            .text(function (d, i) {
                var caption = "" + pie.label.xAxis + ":{value}";

                return horBarTooltip.replacePlaceholders(pie, caption, i, {
                    value: d.value,
                });
            });

        element.selectAll("g rect")
            .attr("width", function (d, i) {
                var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
                return dims.w + (2 * 4);
            })
            .attr("height", function (d, i) {
                var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
                return dims.h + (2 * 4);
            })
            .attr("y", function (d, i) {
                var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
                return -(dims.h / 2) + 1;
            });
    },

    showTooltip: function (pie, index) {
        var fadeInSpeed = 250;
        if (horBarTooltip.currentTooltip === index) {
            fadeInSpeed = 1;
        }

        horBarTooltip.currentTooltip = index;
        d3.select("#" + pie.cssPrefix + "tooltip" + index)
            .transition()
            .duration(fadeInSpeed)
            .style("opacity", function () {
                return 1;
            });

        horBarTooltip.moveTooltip(pie);
    },

    moveTooltip: function (pie) {
        d3.selectAll("#" + pie.cssPrefix + "tooltip" + horBarTooltip.currentTooltip)
            .attr("transform", function (d) {
                var mouseCoords = d3.mouse(this.parentNode);
                var x = mouseCoords[0] + 4 + 2;
                var y = mouseCoords[1] - (2 * 4) - 2;
                return "translate(" + x + "," + y + ")";
            });
    },

    hideTooltip: function (pie, index) {
        d3.select("#" + pie.cssPrefix + "tooltip" + index)
            .style("opacity", function () {
                return 0;
            });

        // move the tooltip offscreen. This ensures that when the user next mouseovers the segment the hidden
        // element won't interfere
        d3.select("#" + pie.cssPrefix + "tooltip" + horBarTooltip.currentTooltip)
            .attr("transform", function (d, i) {
                // klutzy, but it accounts for tooltip padding which could push it onscreen
                var x = pie.width + 1000;
                var y = pie.height + 1000;
                return "translate(" + x + "," + y + ")";
            });
    },

    replacePlaceholders: function (pie, str, index, replacements) {
        var replacer = function () {
            return function (match) {
                var placeholder = arguments[1];
                if (replacements.hasOwnProperty(placeholder)) {
                    return replacements[arguments[1]];
                } else {
                    return arguments[0];
                }
            };
        };
        return str.replace(/\{(\w+)\}/g, replacer(replacements));
    }
};