/** Admin Member Main Page */
const MainPage = (req, res, next) => {
    console.log("Admin Member Main Page Redirect List Page");
    return res.redirect('/admin/members/list');
};

/** Admin Member Registe Page */
const RegistePage = (req, res, next) => {
    console.log("Admin Member Registe Page");

    return res.render('./admin/Member/create', {
        _csrf: req.csrfToken(),
        title: 'AdminLTE 2 | Member Create',
        login: req.user
    });
};

/** Admin Member Registe Do */
const RegisteDo = (req, res, next) => {
    console.log("Admin Member Regisge Do");
    return res.json("");
};

/** Admin Member Detail Page */
const ProfilePage = (req, res, next) => {
    return res.render("./admin/Member/detail", {
        title: 'AdminLTE 2 | Member Detail',
        login: req.user
    });
};

/** Admin Member Modify Page */
const ModifyPage = (req, res, next) => {
    return res.render("./admin/Member/update", {
        title: 'AdminLTE 2 | Member Modify',
        login: req.user
    });
};

/** Admin Member Modify Do */
const ModifyDo = (req, res, next) => {
    return res.json("");
};

/** Admin Member Delete Do */
const DeleteDo = (req, res, next) => {
    return res.json("");
};

/** Admin Member List Page */
const ListPage = (req, res, next) => {
    let Page = req.body.page || req.query.page || req.param.page || req.params.page || "";
    let keyword = req.body.keyword || req.query.keyword || req.param.keyword || req.params.keyword || "";
    let type = req.body.type || req.query.type || req.param.type || req.params.type || "";
    let tmp = `page Number : ${Page}, Keyword : ${keyword}, type : ${type}`;
    console.log(tmp);
    return res.render("./admin/Member/list", {
        title: 'AdminLTE 2 | Member Create',
        login: req.user,
        list: null
    });
};

module.exports = {
    MainPage,
    RegistePage,
    RegisteDo,
    ProfilePage,
    ModifyPage,
    ModifyDo,
    DeleteDo,
    ListPage
};