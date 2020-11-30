import {
    ref,
    reactive,
    computed
} from "vue";

export default function TodoList() {

    let newName = ref('');
    let newMessage = ref('');
    let dataTodos = reactive([{
            id: 1,
            name: 'Jack',
            message: "I am jack",
            checked: false,
        },
        {
            id: 2,
            name: "Mark",
            message: "I am Mark",
            checked: false,
        }
    ]);
    // 选中全部
    let allCount = computed({
        get() {
            if (dataTodos.length === 0) {
                return false
            }else{
                return dataTodos.every(item => item.checked);
            }
        },
        set(newChecked) {
            dataTodos.forEach(item => item.checked = newChecked);
        }
    })
    // 计算选中的留言
    let count = computed(() => {
        return dataTodos.filter(item => item.checked).length
    })
    // 添加留言
    const ADD_LIST = () => {
        if (newName.value != '' && newMessage.value != '') {
            dataTodos.unshift({
                id: Date.now(),
                name: newName.value,
                message: newMessage.value,
                checked: false
            });
        } else {
            window.alert('请先输入昵称和留言')
        }
        newName.value = '';
        newMessage.value = ''
    };

    // 删除留言
    const REMOVE_LIST = id => {
        let index = dataTodos.findIndex(item => item.id === id);
        dataTodos.splice(index, 1);
    }
    // 删除选中项留言
    const REMOVE_CLECK = () => {
        let index = dataTodos.findIndex(item => item.checked);
        let checkedNum = dataTodos.filter(item => item.checked).length;
        dataTodos.splice(index, checkedNum);
    }
    return {
        dataTodos,
        count,
        allCount,
        newName,
        newMessage,
        ADD_LIST,
        REMOVE_LIST,
        REMOVE_CLECK
    }
}