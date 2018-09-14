import React from 'react';

const Segment = ({ transactionReceipt }) => {

    return (
        <div>
            {transactionReceipt !== null ?
                <table className="ui celled striped table">
                    <thead>
                    <tr>
                        <th colSpan="2">
                            Transaction receipt
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="collapsing">
                          blockHash
                        </td>
                        <td>{transactionReceipt.blockHash}</td>
                    </tr>
                    <tr>
                        <td>
                           Block number
                        </td>
                        <td>{transactionReceipt.blockNumber}</td>
                    </tr>
                    <tr>
                        <td>
                           From
                        </td>
                        <td>{transactionReceipt.from}</td>
                    </tr>
                    <tr>
                        <td>
                          nonce
                        </td>
                        <td>{transactionReceipt.nonce}</td>
                    </tr>
                    </tbody>
                </table>
                : null}
        </div>
    );
}

export default Segment;