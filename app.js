
            const list = document.getElementById('grocery-list');
            const inp = document.getElementById('item-inp');
            window.addGrocery = function() {
                if(!inp.value) return;
                const li = document.createElement('li');
                li.innerHTML = `<span>${inp.value}</span><button class="btn" onclick="this.parentElement.remove()">Del</button>`;
                list.appendChild(li);
                inp.value = '';
            }
        