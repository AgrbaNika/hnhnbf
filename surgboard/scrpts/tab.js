$(".interective-avatar__link").click(e => {
    e.preventDefault();
    console.log("f")

    const $this = $(e.currentTarget);
    const curItem = $this.closest(".reviews__switcher-item");

    curItem.addClass("interective__avatar--active").siblings().removeClass("interective__avatar--active")
});