describe("UKButton", () => {
    let vm = undefined

    before(() => {
        vm = new UKButton({propsData:{
            color:'primary'
        }}).$mount()
    })

    after(() => {
        vm.destroy()
    })

    it("设置Button颜色", () => {
        expect(vm.$el.getAttribute('class')).to.eqls('uk-button uk-button-primary')
        vm.componentOptions.propsData.color = 'success'
    })

    it("Button的颜色应该被改成了success", () => {
        expect(vm.$el.getAttribute('class')).to.eqls('uk-button uk-button-success')
    })
})