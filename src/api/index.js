// 首页
import axios from '@/libs/http'
import { BXFQ } from '@/api/server'
let api = BXFQ

// 根据条件查询订单列表
export const queryorder = params => {
  return axios.request({
    url: api + '/order/queryorder',
    method: 'post',
    params: params
  })
}

// 查询订单明细
export const querydetail = params => {
  return axios.request({
    url: api + '/order/querydetail',
    method: 'post',
    params: params
  })
}

// 查询还款计划
export const repaymentplan = params => {
  return axios.request({
    url: api + '/loanafter/repaymentplan',
    method: 'post',
    params: params
  })
}

// 根据公司名称或者保险公司分支机构查询公司/保险公司备案信息
export const queryCompanyInsurance = params => {
  return axios.request({
    url: api + '/companyFiling/queryByCompanyNameOrBranchStructure',
    method: 'get',
    params: params
  })
}

// 订单备驳回 补充
export const updateorderdetail = params => {
  return axios.request({
    url: api + '/order/updateorderdetail',
    method: 'post',
    params: params
  })
}
