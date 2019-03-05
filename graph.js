var dataP = d3.json("data/colors.json");
var drawChart = function(data)

{
	var width = 1400;
	var hright = 200;
	var barwidth = width/colorData.length;
	var svg = d3.select('svg')
				.attr("width",width)
				.attr("height",height);

svg.selectAll("rect")
.data(colorData)
.enter()
.append("rect")
.attr("x",function(d,i)
{
	return i * barwidth;
})
.attr("y",function(d)
{
	return d.num * 10;	
})
.attr("width",barwidth)
.attr("height",function(d))
{
	return d.num * 10;	
})
{)
.attr("fill",function(d)	
{
	return	d.color
})
dataP.then(function(data))
{
}
console.log("data",data);
},
function(err)
{
console.log(err);
}
//* 1. d3 select(where) 2. select what to draw 3. data 4. enter() 5. make elements 6. pimp it out *//
