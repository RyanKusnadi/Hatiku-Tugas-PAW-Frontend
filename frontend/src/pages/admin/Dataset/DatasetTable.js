import React, {useEffect , useState} from 'react'

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Sort, Page, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';

import { useStateContext } from '../../../contexts/ContextProvider';
import { Header } from '../../../components'
import Grid  from '../../../data/grid'
import {commands, editSettings, sortingOptions} from '../../../Configs/table'

const DatasetTable = () => {

  const IData = {
    _id: '',
    name: '',
    age: Number,
    height: Number,
    weight: Number,
    gender: Number,
    ap_hi: Number,
    ap_lo: Number,
    cholestrol: Number,
    gluc: Number,
    smoke: Boolean,
    alco: Boolean,
    active: Boolean,
    cardio: Boolean,
    __v: Number
}

  const didUpdate = useStateContext();
  const [data, setData] = useState();
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:5000/patients')
        .then(response => response.json())
        .then(d => setData(d));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [didUpdate]);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Table" title="Dataset" />
      <GridComponent
        dataSource={data}
        width='1000'
        allowPaging
        allowSorting={true}
        sortSettings={sortingOptions}
        pageSettings={{ pageCount: 5 }}
        editSettings={editSettings}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ColumnDirective headerText='Manage Data' width='150' commands={commands}></ColumnDirective>
          {Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          
        </ColumnsDirective>
        <Inject services={[Page, CommandColumn, Edit, Sort]}/>

      </GridComponent>
    </div>
  )
}

export default DatasetTable