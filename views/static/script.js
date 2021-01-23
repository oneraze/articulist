let openNote = (content) => {
  $(".ql-editor").html(content);
}

var quill = new Quill("#editor-container", {
  modules: {
    syntax: true,
    toolbar: "#toolbar-container",
  },
  placeholder: "Start writing...",
  theme: "snow",
})

const theme = {
	dark: () => {
		localStorage.setItem("theme", "dark")
		$("body").addClass("bg-dark text-light")
		$("nav").addClass("bg-dark navbar-dark")
		$("label").addClass("text-white")
		$(".accordion-button").addClass("bg-dark-alt text-light border-0")
        $("button").addClass("text-light")
        $(".ql-snow .ql-stroke").addClass("dark-icons")
		$(".ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill").addClass("dark-icons-fill")
		$(".ql-toolbar, .ql-container").addClass("bg-dark-alt")
	},
	light: () => {
		localStorage.setItem("theme", "light")
		$("body").removeClass("bg-dark text-light")
		$("nav").removeClass("bg-dark navbar-dark")
		$("label").removeClass("text-white")
		$("button").removeClass("text-light")
        $(".accordion-button").removeClass("bg-dark-alt text-light border border-primary")
        $(".ql-snow .ql-stroke").removeClass("dark-icons")
		$(".ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill").removeClass("dark-icons-fill")
		$(".ql-toolbar, .ql-container").removeClass("bg-dark-alt")
	},
	switch: () => {
		let checkbox = $("#darkSwitch");
		if (checkbox.is(":checked") === true){
			theme.dark()
		} else {
			theme.light()
		}
	}
}

if (localStorage.getItem("theme") == "dark") {
	$("#darkSwitch").click()
	theme.switch()
}

$("#darkSwitch").click(() => theme.switch())
