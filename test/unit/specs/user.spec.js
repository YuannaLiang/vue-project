describe("User", () => {
    describe('#save()', () => {
        it('应该成功保存到服务器且不会返回任何错误信息', done => {
            const user = new User('Luna')
            user.save( err => {
                if (err) done(err) //如果返回错误码直接将错误码输出至控制台
                else done()
            })
        })
    })
})