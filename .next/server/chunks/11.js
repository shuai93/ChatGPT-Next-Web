"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 1011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatItem": () => (/* binding */ ChatItem),
/* harmony export */   "ChatList": () => (/* binding */ ChatList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7360);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7986);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1423);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6388);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4708);






function ChatItem(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_4__/* .Draggable */ ._l, {
        draggableId: `${props.id}`,
        index: props.index,
        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item"])} ${props.selected && (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-selected"])}`,
                onClick: props.onClick,
                ref: provided.innerRef,
                ...provided.draggableProps,
                ...provided.dragHandleProps,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-title"]),
                        children: props.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-info"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-count"]),
                                children: _locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ChatItem.ChatItemCount */ .ZP.ChatItem.ChatItemCount(props.count)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-date"]),
                                children: props.time
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-item-delete"]),
                        onClick: props.onDelete,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                ]
            })
    });
}
function ChatList() {
    const [sessions, selectedIndex, selectSession, removeSession, moveSession] = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)((state)=>[
            state.sessions,
            state.currentSessionIndex,
            state.selectSession,
            state.removeSession,
            state.moveSession
        ]);
    const chatStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)();
    const onDragEnd = (result)=>{
        const { destination , source  } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        moveSession(source.index, destination.index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_4__/* .DragDropContext */ .Z5, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_4__/* .Droppable */ .bK, {
            droppableId: "chat-list",
            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["chat-list"]),
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                        sessions.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatItem, {
                                title: item.topic,
                                time: item.lastUpdate,
                                count: item.messages.length,
                                id: item.id,
                                index: i,
                                selected: i === selectedIndex,
                                onClick: ()=>selectSession(i),
                                onDelete: chatStore.deleteSession
                            }, item.id)),
                        provided.placeholder
                    ]
                })
        })
    });
}


/***/ })

};
;