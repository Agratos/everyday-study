// 카테고리 선택시 데이터 분리
const SeparationOfSelect = (data, isClick) => {
    let selectList = []
    const clickList = isClick.split(' ~ ');

    const SelectionList = () => {
        clickList[0] === 'All' ? selectList = data :
        data.map(({date, list}) => (
            clickList[1] === '현재' ? 
                (clickList[0] <= date && selectList.push({date, list}))
                : (clickList[0] <= date && date <= clickList[1] && selectList.push({date, list}))
        ))
    }
    SelectionList();
    return selectList;
}

export default SeparationOfSelect;