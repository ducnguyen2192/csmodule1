let arrList = []
let arrListItem = []


function openPopup(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("openPopup").style.display = "none";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("openPopup").style.display = "block";
}

function createNewItemLists(){
    let itemId = arrListItem.length + 1;
    let itemContent = document.getElementById("addNewListItem").value;
    document.getElementById("modalHeaderContent").innerHTML = itemContent
    let list_item = new list_items(itemId,1,itemContent);
    arrListItem.push(list_item);

    document.getElementById("newCard").innerHTML +=
        "<div onclick='openItemModal()' class=\"list-item\"" + " id = " + list_item.id + " + '>"  + "</br>" +
        "<button onclick='moveLeft(" + itemId + ")' id='leftButton'> < </button>" + "</br>" +
        "<p id= '" + list_item.id + "'>" + list_item.content + "</p>" +
        "<button onclick='moveRight("+itemId+")' id='rightButton'> > </button>"+ "</div>"
    document.getElementById("addNewListItem").value = "";

    // document.getElementById("leftButton").style.display = "none"
}

class list_items{
    constructor(id,index,content) {
        this.id = id;
        this.index = index;
        this.content = content;
    }


}
function moveRight(itemId) {
    let myObj = document.getElementById("a"+itemId);
    myObj.remove();
    let node = document.createElement("p");
    node.appendChild(myObj);

    let obj = checkID(itemId);

    if (obj.index <3){
        if (obj.index == 1){
            obj.index ++
            document.getElementById("list2").appendChild(node);
            // document.getElementById("leftButton").style.display = "block"
        }else
        if (obj.index == 2){
            obj.index ++
            document.getElementById("list3").appendChild(node);
            // document.getElementById("rightButton").style.display = "none";
        }

    }
    console.log(itemId)

}



function moveLeft(itemId) {
    let myObj = document.getElementById(itemId);
    myObj.remove();
    let node = document.createElement("p");
    node.appendChild(myObj);

    let obj = checkID(itemId);

    if (obj.index >1){
        if (obj.index == 3){
            obj.index --
            document.getElementById("list2").appendChild(node);
            // document.getElementById("rightButton").style.display = "block";
        }else
        if (obj.index == 2){
            obj.index --
            document.getElementById("list1").appendChild(node);
            // document.getElementById("leftButton").style.display = "none";
        }

    } else {

    }
}

function checkID(itemId){
    for (let i = 0; i < arrListItem.length;i++){
        if (arrListItem[i].id == itemId){
            return arrListItem[i];
        }
    }
}

const modal = document.querySelector('#myModal');

// Events
window.addEventListener('click', outsideClick);

// Open
function openItemModal() {
    modal.style.display = 'block';

}


function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}




