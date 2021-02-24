const GetVouchersMock = {
  vouchers: [
    { id: 1, code: '#30OFF', type: 'percentual', amount: 30.0 },
    { id: 2, code: '#100DOLLARS', type: 'fixed', amount: 100.0 },
    { id: 3, code: '#SHIPIT', type: 'shipping', amount: 0, minValue: 300.5 },
  ],
};

export default GetVouchersMock;
