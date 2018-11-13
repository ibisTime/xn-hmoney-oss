import React from 'react';
import {connect} from 'react-redux';
import {Card, Row, Col, Button, Spin} from 'antd';
import {initData} from '@redux/user/customer/customer-accountSummary';
import {getQueryString, moneyFormat} from 'common/js/util';
import {CION_FMVP} from 'common/js/config';

const {Meta} = Card;

@connect(
    state => state.userCustomerAccountSummary,
    {initData}
)
class Account extends React.Component {
    constructor(props) {
        super(props);
        this.userId = getQueryString('userId', this.props.location.search) || '';
    }

    componentDidMount() {
        this.props.initData(this.userId);
    }

    goBack = () => {
        this.props.history.go(-1);
    }

    render() {
        const unsettledLoan = this.props.unsettledLoan;
        const symbol = CION_FMVP;

        return (
            <div>
                <Row >
                    <Col style={{marginBottom: '20px', width: '500px'}}>
                        <Card title="FMVP币余额" extra={
                            moneyFormat(unsettledLoan['accountData'] ? unsettledLoan['accountData'].amount : '0', '', symbol)
                        }>{<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', overflow: 'hidden'}}>
                            <div style={{width: '210px', float: 'left', textAlign: 'left'}}>
                                <p>
                                    <span>未结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].unsettleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>已结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].settleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>币币交易奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].bbTradeCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>场外交易奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].ccTradeCount : '0', '', symbol)}</span>
                                </p>
                            </div>
                            <div style={{width: '240px', float: 'right', textAlign: 'left'}}>
                                <p>
                                    <span>不结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].nosettleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>拉新奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].regRefCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>平台特殊奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].platCount : '0', '', symbol)}</span>
                                </p>
                            </div>
                        </div>}</Card>
                    </Col>
                </Row>

                <div style={{width: '100%', marginTop: '15px', textAlign: 'center'}}>
                    <Button onClick={() => this.goBack()} type="primary">返回</Button>
                </div>
            </div>
        );
    }
}

export default Account;
