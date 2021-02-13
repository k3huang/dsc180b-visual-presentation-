
function plotSyllabicRate() {
	Highcharts.chart('syllabicRate', {

		chart: {
			backgroundColor: '#444945',
			type: 'columnrange',
			inverted: true,
			height: 630,
			marginLeft: 100,
			marginRight: 100,
			marginBottom: 100
		},
		title: {
			text: 'How Fast Can You Speak',
			align: 'left',
			x: 80,
			style: {
				color: 'white',
				fontSize: '23px'
			}
		},
		subtitle: {
			text: 'Some languages are spoken faster than others',
			align: 'left',
			x: 80,
			style: {
				fontFamily: 'Times New Roman',
				color: 'white',
				fontSize: '15px'
			}
		},
		xAxis: {
			categories: ['Japanese', 'Spanish', 'Korean', 'Turkish', 'English', 'German',
				'Mandarin'],
			labels: {
				style: {
					color: 'white'
				}
			}

		},	
		yAxis: {
			title: {
				text: 'Syllables Per Second',
				style: {
					color: 'white'
				}
			},
			labels: {
				style: {
					color: 'white'
				}
			},
			tickAmount: 8,
			startOnTick: true,
			endOnTick: true
		},
		credits: {
    		text: 'Source: Pellegrino et al.',
			position: {
				align: 'left',
				x: 30,
				y: -30
			},
			style: {
				fontSize: 13
			}
    	},
		tooltip: {
			enabled: false
		},
		plotOptions: {
			columnrange: {
				dataLabels: {
					enabled: false
				},
				borderRadius: 2,
				opacity: 0.8
			},
			series: {
				color: '#116466',
				borderWidth: '0'
			}
		},
	
		legend: {
			enabled: false
		},
	
		series: [{
			data: [
				[6.8, 9.3],
				[6.7, 9],
				[5.7, 9.5],
				[5.3, 9.4],
				[5.1, 7.7],
				[4.2, 7.6],
				[4.7, 7.2]
			]
		}]
	
	});
	
}

function plotID() {
	Highcharts.chart('ID', {

		chart: {
			height: 630,
			spacingTop: 70,
			marginTop: 150,
			marginLeft: 100,
			marginRight: 100,
			marginBottom: 200,
			spacingBottom: 100,
			backgroundColor: '#F3EDE7',
			type: 'item'
		},
	
		title: {
			text: 'Too Densed or Not',
			x: 90,
			align: 'left',
			style: {
				fontSize: '23px'
			}
		},
	
		subtitle: {
			text: 'An information density of 5 bits ber syllable means there\'s a 1 in 32 chance of predicting the next syllable',
			x: 90,
			align: 'left',
			style: {
				fontSize: '15px'
			}
		},
		credits: {
    		text: 'Source: Pellegrino et al.',
			position: {
				align: 'left',
				x: 105,
				y: -170
			},
			style: {
				fontSize: 13
			}
		},
		tooltip: {
			pointFormat: '<b>{point.id} bits/syllable'
		},
		series: [{
			name: '',
			marker: {
				radius: 18,
				symbol: 'square'
			},
			layout: 'vertical',
			keys: ['name', 'y', 'color', 'id'],
			data: [
				['English', 136.2, '#254E58', 7.09],
				['Mandarin', 124.5, '#64485C', 6.96],
				['German', 67.65, '#7395AE', 6.08],
				['Korean', 47.18, '#83677B', 5.56],
				['Spanish', 43.11, '#B1A296', 5.43],
				['Turkish', 40.5, '#557A95', 5.34],
				['Japanese', 32, '#ADADAD', 5.03]
			]
		}]
	
	});
}

function plotInformationRate() {
	Highcharts.chart('informationRate', {

		chart: {
			height: 820,
			marginTop: 100,
			marginLeft: 100,
			marginRight: 100,
			marginBottom: 100,
			spacingBottom: 100,
			backgroundColor: '#F3EDE7',
			type: 'dumbbell',
			inverted: true
		},
	
		legend: {
			enabled: false
		},
	
		title: {
			text: 'Amount of Information Conveyed In the End',
			align: 'left',
			x: 80, 
			style: {
				fontSize: '23px'
			}
		},

		subtitle: {
			text: 'People convey the same information in roughly similar durations',
			align: 'left',
			x: 80,
			style: {
				fontSize: '15px'
			}
		},
	
		tooltip: {
			shared: true
		},
	
		xAxis: {
			type: 'category'
		},
	
		yAxis: {
			title: {
				text: 'Information Rate (bits/sec)'
			},
			tickAmount: 5,
			startOnTick: true,
			endOnTick: true,
			plotLines: [{
				color: 'grey',
				width: 2,
				value: 40.69,
				dashStyle: 'longdash'
			}]
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Information Rate',
			color: '#41B3A3',
			data: [{
				name: 'Japanese',
				low: 34.4,
				high: 46.5
			}, {
				name: 'Spanish',
				low: 36.4,
				high: 48.8
			}, {
				name: 'Korean',
				low: 31.7,
				high: 52.8
			}, {
				name: 'Turkish',
				low: 28.4,
				high: 50.1
			}, {
				name: 'English',
				low: 36.2,
				high: 54.7
			}, {
				name: 'German',
				low: 25.6,
				high: 46.4
			}, {
				name: 'Mandarin',
				low: 32.4,
				high: 50.4
			}]			
		}]
	
	});
}

function init() {
	plotSyllabicRate();
	plotID();
	plotInformationRate()
}

document.addEventListener('DOMContentLoaded', init, false);
