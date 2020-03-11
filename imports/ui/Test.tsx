import React, { useEffect, useRef, useState } from 'react';
import { HotTable } from '@handsontable/react';

const data = [
    ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ];

  const columns = [{
    type: 'dropdown',
    // source: [1, 2, 3]
  },
  {
    type: 'dropdown',
  },
  {
    type: 'dropdown',
  },
  {
    type: 'dropdown',
  },
];

const EventHandlerTest = () => {

    const [heightHotTable, setHeightHotTable] = useState(window.innerHeight-180);
    const [widthHotTable, setWidthHotTable] = useState(window.innerWidth-80);

    console.log('EventHandlerTest', widthHotTable, heightHotTable);

    const hot = useRef(null);

    const handleResize = () => {
        console.log('EventHandlerTest handleResize', widthHotTable, heightHotTable);

        setHeightHotTable(window.innerHeight-180);
        setWidthHotTable(window.innerWidth-80);
    };

    useEffect(() => {
        console.log('EventHandlerTest useEffect', widthHotTable, heightHotTable);
        window.addEventListener('resize', handleResize);

        console.log('hot', hot);
        hot.current.hotInstance.setCellMeta(1, 1, 'source', ['aaa', 'bbb', 'ccc']);

        return () => {
            console.log('EventHandlerTest return (END)');

            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <HotTable ref={hot}
            className='my-custom-classname'
            data={data}
            colHeaders={true}
            rowHeaders={true}
            columns={columns}
            licenseKey='non-commercial-and-evaluation'
            width={widthHotTable}
            height={heightHotTable} />
    );

};

export {
    EventHandlerTest
};