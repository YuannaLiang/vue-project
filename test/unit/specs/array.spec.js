describe('Array', () => {
    // 测试序列
    var expectTarget = []

    beforeEach(() => {
        expectTarget.push(1)
    });

    afterEach(() => {
        expectTarget = []
    });

    it('应该存有一个为1的整数', () => {
        // 这里写测试代码的实现
        expect(expectTarget[0]).to.eqls(1)
    });

    it("可以有多个期望值检测", () => {
        expect(expectTarget[0]).to.eqls(1)
        expect(true).to.eqls(true)
    });
});