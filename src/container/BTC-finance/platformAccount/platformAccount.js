import React from 'react';
import {connect} from 'react-redux';
import {Card, Row, Col, Button, Spin} from 'antd';
import {initData} from '@redux/BTC-finance/platformAccount/platformAccount';
import {moneyFormat} from 'common/js/util';

const {Meta} = Card;

@connect(
    state => state.BTCFinancePlatformAccount,
    {initData}
)
class PlatformAccount extends React.Component {
    componentDidMount() {
        this.props.initData();
    }

    goFlow(accountNumber) {
        this.props.history.push(`/BTC-finance/platformAccount/ledger?isPlat=1&code=${accountNumber}`);
    }

    render() {
        const unsettledLoan = this.props.unsettledLoan;
        const symbol = 'BTC';

        return (
            <div>
                <Row gutter={{xs: 16, sm: 16, md: 24, lg: 32}}>
                    <Col span={8} style={{marginBottom: '20px'}}>
                        <Card title="冷钱包账户余额" extra={
                            moneyFormat(unsettledLoan['SYS_ACOUNT_BTC_COLD'] ? unsettledLoan['SYS_ACOUNT_BTC_COLD'].amount : '0', '', symbol)
                        }>{<div style={{width: '100%', textAlign: 'center'}}>
                            <Button onClick={() => this.goFlow(unsettledLoan['SYS_ACOUNT_BTC_COLD'] ? unsettledLoan['SYS_ACOUNT_BTC_COLD'].accountNumber : '')} type="primary">资金流水</Button>
                        </div>}</Card>
                    </Col>
                    <Col span={8} style={{marginBottom: '20px'}}>
                        <Card title="散取账户余额" extra={
                            moneyFormat(unsettledLoan['SYS_ACOUNT_BTC_M'] ? unsettledLoan['SYS_ACOUNT_BTC_M'].amount : '0', '', symbol)
                        }>{<div style={{width: '100%', textAlign: 'center'}}>
                            <Button onClick={() => this.goFlow(unsettledLoan['SYS_ACOUNT_BTC_M'] ? unsettledLoan['SYS_ACOUNT_BTC_M'].accountNumber : '')} type="primary">资金流水</Button>
                        </div>}</Card>
                    </Col>
                </Row>

                <Row gutter={{xs: 16, sm: 16, md: 24, lg: 32}}>
                    <Col span={8} style={{marginBottom: '20px'}}>
                        <Card title="盈亏账户余额 " extra={
                            moneyFormat(unsettledLoan['SYS_ACOUNT_BTC'] ? unsettledLoan['SYS_ACOUNT_BTC'].amount : '0', '', symbol)
                        }>{<div style={{width: '100%', textAlign: 'center'}}>
                            <Button onClick={() => this.goFlow(unsettledLoan['SYS_ACOUNT_BTC'] ? unsettledLoan['SYS_ACOUNT_BTC'].accountNumber : '')} type="primary" style={{marginTop: '15px'}}>资金流水</Button>
                            <Button onClick={() => this.goFlow(unsettledLoan['SYS_ACOUNT_BTC'] ? unsettledLoan['SYS_ACOUNT_BTC'].accountNumber : '')} type="primary" style={{marginTop: '15px', marginLeft: '15px', marginRight: '15px'}}>手续费收入</Button>
                        </div>}</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PlatformAccount;
