(function(){
    'use strict';
    // Input and button
    var $inputAddTask = document.getElementById('input-add-task');
    var $btnAddTask = document.getElementById('btn-add-task');
    // list
    var $ul = document.querySelector('ul');

    validateInput();

    // Added task
    $btnAddTask.addEventListener('click', addTask);
    $inputAddTask.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTask();
        }
    });
    // Remove task
    $ul.addEventListener('click', function(e){
        if(e.target.nodeName === 'LI'){
            removeTask(e.target);
        }
    });

    // ============== Functions ================

    // Validate input
    function validateInput(){
        $inputAddTask.addEventListener('input', function(){
            if(!$inputAddTask.value.length){
                $inputAddTask.classList.remove('input-ok');
                $inputAddTask.classList.add('input-error');
            } else {
                $inputAddTask.classList.remove('input-error');
                $inputAddTask.classList.add('input-ok');
            }
        });
    }
    // Added task
    function addTask(){

        if(!$inputAddTask.value){
            return false;
        }

        var li = document.createElement('li');
        var text = document.createTextNode($inputAddTask.value);

        li.appendChild(text);
        $ul.appendChild(li);

        $inputAddTask.value = '';
        $inputAddTask.focus();
    }
    // Remove task
    function removeTask(li){
        if(confirm('Deseja remover essa tarefa: ' + li.textContent + '?')){
            li.parentNode.removeChild(li);
        }
    }

})();