import acftdata from "../Resources/ACFT_data";

function calc_operable_val(val, tableInd) {
    if (tableInd <= 3) return Number(val);

    let hr = parseInt(val[0]) * 10 + parseInt(val[1]);
    let min = parseInt(val[3]) * 10 + parseInt(val[4]);
    
    return hr * 60 + min;
}

function find_query(tableInd,colInd,Increasing,val){
    const table = "Table"+tableInd;
    let low = 0;
    let high = acftdata[table].length-4;
    let op_val = calc_operable_val(val,tableInd);
    let needed_ind = -1;

    if(Increasing){
        while(low<=high){
            let mid = parseInt( (low + high) / 2);
            if(op_val < calc_operable_val(acftdata[table][mid][colInd],tableInd)){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }else{
        while(low<=high){
            let mid = parseInt( (low + high) / 2);
            if(op_val > calc_operable_val(acftdata[table][mid][colInd],tableInd)){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }   
    needed_ind = Math.max(0,low - 1);
    while(needed_ind!==0 && calc_operable_val(acftdata[table][needed_ind][colInd],tableInd) === calc_operable_val(acftdata[table][needed_ind-1][colInd],tableInd)){
        needed_ind--;
    }
    return acftdata[table][needed_ind][0];
}

function calc_value(tableInd,age,gender,val){
    
    const extra = gender==="Male"?0:1;
    let colInd = 0;
    switch (age){
        case "17-21": colInd = 1; break;
        case "22-26": colInd = 3; break;
        case "27-31": colInd = 5; break;
        case "32-36": colInd = 7; break;
        case "37-41": colInd = 9; break;
        case "42-46": colInd = 11; break;
        case "47-51": colInd = 13; break;
        case "52-56": colInd = 15; break; 
        case "57-61": colInd = 17; break;
        case "62+":   colInd = 19; break;
        default :  colInd = -1
    }
    colInd = colInd + extra;
    const Increasing = (tableInd === 4 || tableInd === 6)?false:true;
    
    const result = find_query(tableInd,colInd,Increasing,val);
    return result;
}

export {calc_value};