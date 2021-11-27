import React from 'react';
import { Table } from 'react-bootstrap';

const MelihatDaftarData = (props) => {

	const { data } = props; 

	const dataKeys = Object.keys(data);
	
	const isEmpty = (obj) => {
		for (let key in obj) {
			if (obj.hasOwnProperty(key))
				return false;
		}
		return true;
	};

	if (isEmpty(data)) {
		return (
			<div><h2>Belum ada data apapun.</h2></div>
		);
	}
	
	const showKeyHeader = (dataKeys) => {
		return (
			<thead>
			<tr>
				<th>#</th>
				{dataKeys.map((value) => {
					return <th>{value}</th>
				})}
			</tr>
			</thead>
		)
	};
	
	const keyLen = data[dataKeys[0]].length;
	let keyIndices = [];
	for (let i = 0; i < keyLen; i++) {
		keyIndices.push(i);
	}

	const showKeyBody = (keyIndices, dataKeys) => {
		return (
			<tbody>
				{keyIndices.map((i) => {
					return (
						<tr>
							<td>{i + 1}</td>
							{dataKeys.map((value) => {
								return <td>{data[value][i]}</td>
							})}
						</tr>
					);
				})}
			</tbody>
		);
	};

    return (
        <div>
            <Table striped bordered hover responsive style={{marginTop: 20}} className='text-center shadow'>
			{showKeyHeader(dataKeys)}
            {showKeyBody(keyIndices, dataKeys)}
            </Table>
        </div>
    );
};

export default MelihatDaftarData;
