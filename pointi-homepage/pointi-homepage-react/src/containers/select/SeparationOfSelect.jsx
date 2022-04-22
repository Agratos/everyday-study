const SeparationOfSelect = (list, select) => {
    const selectList = []
    let SelectionList = () => {
        list.map((list,index) => {
            select === 'All' ? selectList.push(list) :
                list.type === select && selectList.push(list)
        })
    }
    SelectionList()
    return selectList
}

export default SeparationOfSelect;