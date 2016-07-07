/*d3.select('#chart')  // can also do .item
	.insert('span', ':nth-child(4)')  //can also do .remove()
	.html(' <strong>selection</strong>')*/

//d3.selectAll('.item')
	//.classed('highlight', true) //adds highlight class

var myStyles = [
 {  width: 200,
 	color:'#A57706'},
 {  width: 230,
 	color:'#BD3613'},
 {  width: 220,
 	color:'#D11C24'},
 {  width: 290,
 	color:'#C61C6F'},
 {	width: 236,
 	color: '#595AB7'},
 {	width: 230,
 	color: '#2176C7'}
 ]; //first one applies to first element, etc.

d3.selectAll('.item')
	.data(myStyles)
	.style('color', 'white')
	.style('background', function(d){   //calls d and returns array
		return d.color;
	})
	.style('width', function(d){
		return d.width + 'px';
	})