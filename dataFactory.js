angular.module('plunker')
.factory('dataFactory', function () {

  var data = [{
    'id': 1,
    'title': 'node1',
    'nodes': [
      {
        'id': 11,
        'title': 'node1.1',
        'nodes': [
          {
            'id': 111,
            'title': 'node1.1.1',
            'nodes': []
          }
        ]
      },
      {
        'id': 12,
        'title': 'node1.2',
        'nodes': []
      }
    ]
  }, {
    'id': 2,
    'title': 'node2',
    'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
    'nodes': [
      {
        'id': 21,
        'title': 'node2.1',
        'nodes': []
      },
      {
        'id': 22,
        'title': 'node2.2',
        'nodes': []
      }
    ]
  }, {
    'id': 3,
    'title': 'node3',
    'nodes': [
      {
        'id': 31,
        'title': 'node3.1',
        'nodes': []
      }
    ]
  }];
  
  var trad = [{ 
		title: "Skåne",
		id:1,
		nodes: [
			{
				title: "lund",
				id:2,
				nodes: [
					{ title: 1500, id:201, nodes: []	},
					{ title: 1600, id:202, nodes: []	}
				]
			},
			{
				title: "dalby",
				id: 5,
				nodes: []
			},
			{
				title: "malmö",
				id: 6,
				nodes: [
					{ title: 1500, id:601, nodes: []	}
				]
			},
			{
				title: "genarp",
				id: 7,
				nodes: [
					{ title: 1600, id:701, nodes: []	},
					{ title: 1700, id:702, nodes: []	}
				]
			},
			{
				title: "lund",
				id:8,
				nodes: [
					{ title: 1500, id: 801, nodes: []	},
					{ title: 1600, id: 802, nodes: []	}
				]
			},
			{
				title: "dalby",
				id:9,
				nodes: []
			},
			{
				title: "malmö",
				id:10,
				nodes: [
					{ title: 1500, id:1001, nodes: []	}
				]
			},
			{
				title: "genarp",
				id: 11,
				nodes: [
					{ title: 1600, id:1101, nodes: []	},
					{ title: 1700, id:1102, nodes: []	}
				]
			},
			{
				title: "lund",
				id:12,
				nodes: [
					{ title: 1500, id:1201, nodes: []	},
					{ title: 1600, id:1202, nodes: []	}
				]
			},
			{
				title: "dalby",
				id:13,
				nodes: []
			},
			{
				title: "malmö",
				id:14,
				nodes: [
					{ title: 1500, id:1401, nodes: []	}
				]
			},
			{
				title: "genarp",
				id:15,
				nodes: [
					{ title: 1600, id:1501, nodes: []	},
					{ title: 1700, id:1502, nodes: []	}
				]
			},
		]
	}];
	
	var simpleFancyTree = [
    {title: "Node 1", key: "1"},
    {title: "Folder 2", key: "2", folder: true, children: [
        {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
        {title: "Node 2.2", key: "4"}
    ]}
  ];
  
  var automaticId = 0;
  function getNode() {
    automaticId ++;
    var node = {
        title: 'Node_' + automaticId,
        key: automaticId,
        children: []
    }
    while (Math.floor(Math.random() * 10) > 5) {
      node.children.push(getNode());
    }
    return node;
  }

  function generateTree(numberOfTopNodes, generateNewIds) {
    automaticId = (generateNewIds) ? Math.floor(Math.random() * 100) : 0;
    generatedTree = [];
    for (var i = 0; i < numberOfTopNodes; i++) {
        generatedTree.push(getNode());
    }
    return generatedTree;
  }


  return {
    data: data,
    trad: trad,
    simpleFancyTree: simpleFancyTree,
    generateTree: generateTree
  };

});

