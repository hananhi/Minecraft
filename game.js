const grid_board=document.getElementById('grid');
const shovel=document.getElementById('shovel')
const axe=document.getElementById('axe');
const pickaxe=document.getElementById('pickaxe');
const ground_counter=document.getElementById('ground-counter');
const grass_counter=document.getElementById('grass-counter');
const rock_counter=document.getElementById('rock-counter');
const tree_counter=document.getElementById('tree-counter');
const tree_leaves_counter=document.getElementById('tree_leaves-counter');
const ground_reverse=document.getElementById('ground');
const grass=document.getElementById('grass');
const rock_reverse=document.getElementById('rock');
const tree=document.getElementById('tree');
const tree_leaves=document.getElementById('tree_leaves');
const column=15 ;
const rows=25 ;
const box_size=40 ;
const inventory ={
    rock:0 ,
    ground:0 ,
    tree:0 ,
    grass:0,
    leefix:0

}


function grid_boardStyle(rows,columns ,box_size){
grid_board.style.gridTemplateRows= `repeat(${rows}, ${box_size}px)`;
grid_board.style.gridTemplateColumns=`repeat(${columns}, ${box_size}px)`;

}


function create_board( column,rows,box_size){

    const gridData = [];
    grid_boardStyle(column,rows ,box_size);
    for (let i = 0; i < column; i++) {
        
        for (let j = 0; j < rows; j++) {
            
            const grid_item=document.createElement('div');
            grid_item.classList.add('grid-item');
            grid_item.id= `${i}-${j}` ;
            grid_board.appendChild(grid_item);
            gridData.push(grid_item);

        }
        
    }
    return gridData;

}



  const gridData = create_board(column, rows, box_size);
    function createimages() {
    for (let g = 0; g < gridData.length; g++) {
      let [i, j] = gridData[g].getAttribute("id").split("-");
      ground(Number(i), Number(j), Number(g));
      rock(Number(i), Number(j), Number(g));

    }
  }

  createimages();


function ground( i, j, g){


    if ((i > 9 && i < 15) && (j >= 0 && j < 25)) {
        setBackground(gridData[g], 'ground.jpg');
    } else if (i === 9 && j >= 0 && j < 25) {
        setBackground(gridData[g], 'grass1.png');


}
}
function setBackground(box, imageUrl) {
    box.style.backgroundImage = `url(${imageUrl})`;
    box.style.backgroundSize = '40px';
}
function rock(i,j,g){

   
    if ((j >= 5 && j < 9) && (i === 8)) {
        setBackground(gridData[g], 'rock.png');
    } else if ((i >= 7 && i <= 8) && (j === 15)) {
        setBackground(gridData[g], 'rock.png');
    } else if ((i >= 6 && i <= 8) && (j === 18)) {
        setBackground(gridData[g], 'tree.png');
    } else if ((i >= 3 && i <= 5) && (j >= 17 && j <= 19)) {
        setBackground(gridData[g], 'tree-leaves.png');
    } else if ((i >= 3 && i <= 5) && (j >= 9 && j <= 11)) {
        setBackground(gridData[g], 'tree-leaves.png');
    } else if ((i >= 6 && i <= 8) && (j === 10)) {
        setBackground(gridData[g], 'tree.png');
    } 

        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 25; j++) {
                
                const box=document.getElementById(`${i}-${j}`);
                if (box.style.backgroundImage== ''){
                    box.style.backgroundImage= 'url("sky.png")';
                    box.style.backgroundSize = '40px'
                };
            }
            
        }

        
        
    
}


function take_shovel(event) {
    if (event.target.style.backgroundImage === 'url("ground.jpg")') {
        event.target.style.backgroundImage = 'url("sky.png")';
        inventory.ground++ ;
        change_counter_inv()
    }

    if (event.target.style.backgroundImage === 'url("grass1.png")') {
        event.target.style.backgroundImage = 'url("sky.png")';
        inventory.grass++ ;
        change_counter_inv();
    }
}

function take_axe(event) {
    if (event.target.style.backgroundImage === 'url("tree.png")' ) {
        event.target.style.backgroundImage = 'url("sky.png")';
        inventory.tree++ ;
        change_counter_inv();
    }
    if (event.target.style.backgroundImage === 'url("tree-leaves.png")') {
        event.target.style.backgroundImage = 'url("sky.png")';
        inventory.leefix++ ;
        change_counter_inv();
    }
}

function take_pickaxe(event) {
    if (event.target.style.backgroundImage === 'url("rock.png")') {
        event.target.style.backgroundImage = 'url("sky.png")';
        inventory.rock++ ;
        change_counter_inv();
    }
}

let currentToolHandler = null;

shovel.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_shovel;
    grid_board.addEventListener('click', currentToolHandler);
});

axe.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_axe;
    grid_board.addEventListener('click', currentToolHandler);
});

pickaxe.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_pickaxe;
    grid_board.addEventListener('click', currentToolHandler);
});



function change_counter_inv(){

    ground_counter.textContent=inventory.ground ;
    grass_counter.textContent=inventory.grass ;
    rock_counter.textContent=inventory.rock;
    tree_counter.textContent=inventory.tree ;
    tree_leaves_counter.textContent=inventory.leefix ;

}

function take_ground(event) {
    if (event.target.style.backgroundImage === 'url("sky.png")') {
        event.target.style.backgroundImage = 'url("ground.jpg")';
        inventory.ground-- ;
        change_counter_inv()
    }

   
}
function take_grass(event){
    if (event.target.style.backgroundImage === 'url("sky.png")') {
        event.target.style.backgroundImage = 'url("grass1.png")';
        inventory.grass-- ;
        change_counter_inv()
    }

}

function take_rock(event) {
    if (event.target.style.backgroundImage === 'url("sky.png")') {
        event.target.style.backgroundImage = 'url("rock.png")';
        inventory.rock-- ;
        change_counter_inv()
    }


}

function take_tree(event) {
    if (event.target.style.backgroundImage === 'url("sky.png")') {
        event.target.style.backgroundImage = 'url("tree.png")';
        inventory.tree-- ;
        change_counter_inv()
    }
}

function take_tree_leaves(event) {
    if (event.target.style.backgroundImage === 'url("sky.png")') {
        event.target.style.backgroundImage = 'url("tree-leaves.png")';
        inventory.leefix-- ;
        change_counter_inv();
    }
}




ground_reverse.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_ground;
    grid_board.addEventListener('click', currentToolHandler);
});

grass.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_grass;
    grid_board.addEventListener('click', currentToolHandler);
});

rock_reverse.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_rock;
    grid_board.addEventListener('click', currentToolHandler);
});

tree.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_tree;
    grid_board.addEventListener('click', currentToolHandler);
});

tree_leaves.addEventListener('click', function () {
    if (currentToolHandler) {
        grid_board.removeEventListener('click', currentToolHandler);
    }
    currentToolHandler = take_tree_leaves;
    grid_board.addEventListener('click', currentToolHandler);
});

const reset=document.getElementById('reset');

reset.addEventListener('click', function () {
   createimages();
   reset_counter();
});

function reset_counter(){

        ground_counter.textContent=inventory.ground=0 ;
        grass_counter.textContent=inventory.grass=0 ;
        rock_counter.textContent=inventory.rock=0;
        tree_counter.textContent=inventory.tree=0 ;
        tree_leaves_counter.textContent=inventory.leefix=0 ;
    
    
}

 
