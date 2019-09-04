let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];
$(function(){
    let list = $("#list");　//id listを取得

    function appendList(word){
        let item = $('<li class="list">').append(word);
        list.append(item);
    }

    function editElement(element){
        let result = "^" + element;
        return result;
    }

    $("#submit").on("click", function(){　　//クリックをするとイベント発火するよう設定
        let input = $("#keyword").val();   //検索フォームに入力されたものが$()jQueryオブジェクトのkeywordのさらにvalueってとこに入る
        //.val()はこの$()jQueryオブジェクトのkeywordのさらに奥のvalueをとってくる
        
        let inputs = input.split(" ");
        let newInputs = inputs.map(editElement);
        let reg = RegExp(newInputs.join("|"));  //正規表現をするために必要な処理 ^は前方一致させるため

        $(".list").remove(); //前回の検索結果消去　.listは6行目にてwordに追加済み

        $.each(fruits, function(i, fruit){
            if (fruit.match(reg)) {
                appendList(fruit);
            } 
        });

        if ($(".list").length === 0) {
            appendList("一致する果物はありませんでした");
        }
    });
});