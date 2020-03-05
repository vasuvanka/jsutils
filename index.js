module.exports = {
  list_count : (list)=> {
    if (!Array.isArray(list)){
      throw new Error(`${list} is not an array but found ${typeof list}`)
    }
    return (list || []).length || 0 
  }
}
