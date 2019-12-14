import React from 'react'

const Filter = ({onChange}, {value}) => {
    return (<form>
      <div>
        filter shown with <input value={value} onChange={onChange} />
      </div>
    </form>);
  }

  export default Filter