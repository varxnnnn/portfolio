/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sections/[id]/route";
exports.ids = ["app/api/sections/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/sections/[id]/route.ts":
/*!****************************************!*\
  !*** ./app/api/sections/[id]/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/PortfolioSection */ \"(rsc)/./lib/models/PortfolioSection.ts\");\n\n\n\n\nconst JWT_SECRET = 'your-secret-key-change-in-production';\n// Middleware to verify JWT token\nfunction verifyToken(authHeader) {\n    if (!authHeader || !authHeader.startsWith('Bearer ')) {\n        return null;\n    }\n    const token = authHeader.substring(7);\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);\n    } catch (error) {\n        return null;\n    }\n}\nasync function GET(request, { params }) {\n    try {\n        const authHeader = request.headers.get('authorization');\n        const decoded = verifyToken(authHeader);\n        if (!decoded) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const section = await _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(params.id);\n        if (!section) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Section not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            section\n        });\n    } catch (error) {\n        console.error('Error fetching section:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request, { params }) {\n    try {\n        const authHeader = request.headers.get('authorization');\n        const decoded = verifyToken(authHeader);\n        if (!decoded) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        const { sectionName, title, content } = await request.json();\n        if (!sectionName || !title || !content) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Missing required fields'\n            }, {\n                status: 400\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const section = await _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(params.id, {\n            sectionName,\n            title,\n            content,\n            lastUpdated: new Date()\n        }, {\n            new: true,\n            runValidators: true\n        });\n        if (!section) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Section not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            section\n        });\n    } catch (error) {\n        console.error('Error updating section:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request, { params }) {\n    try {\n        const authHeader = request.headers.get('authorization');\n        const decoded = verifyToken(authHeader);\n        if (!decoded) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const section = await _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndDelete(params.id);\n        if (!section) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: 'Section not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: 'Section deleted successfully'\n        });\n    } catch (error) {\n        console.error('Error deleting section:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztRQUNkYyxRQUFRZCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPWCxxREFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUFPQyxTQUFTO1FBQXdCLEdBQ25EO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGO0FBRU8sZUFBZWMsT0FDcEJ0QixPQUFvQixFQUNwQixFQUFFQyxNQUFNLEVBQThCO0lBRXRDLElBQUk7UUFDRixNQUFNUixhQUFhTyxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN2QyxNQUFNQyxVQUFVWixZQUFZQztRQUU1QixJQUFJLENBQUNXLFNBQVM7WUFDWixPQUFPakIscURBQVlBLENBQUNrQixJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO2dCQUFPQyxTQUFTO1lBQWUsR0FDMUM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1uQix3REFBU0E7UUFFZixNQUFNb0IsVUFBVSxNQUFNbkIsb0VBQWdCQSxDQUFDaUMsaUJBQWlCLENBQUN0QixPQUFPVSxFQUFFO1FBRWxFLElBQUksQ0FBQ0YsU0FBUztZQUNaLE9BQU90QixxREFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7Z0JBQUVDLFNBQVM7Z0JBQU9DLFNBQVM7WUFBb0IsR0FDL0M7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9yQixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUQyxTQUFTO1FBQ1g7SUFDRixFQUFFLE9BQU9ULE9BQU87UUFDZGMsUUFBUWQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT1gscURBQVlBLENBQUNrQixJQUFJLENBQ3RCO1lBQUVDLFNBQVM7WUFBT0MsU0FBUztRQUF3QixHQUNuRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFBST0pFQ1RTXFxQb3J0Zm9saW9cXGFwcFxcYXBpXFxzZWN0aW9uc1xcW2lkXVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2xpYi9tb25nb2RiJ1xyXG5pbXBvcnQgUG9ydGZvbGlvU2VjdGlvbiBmcm9tICdAL2xpYi9tb2RlbHMvUG9ydGZvbGlvU2VjdGlvbidcclxuXHJcbmNvbnN0IEpXVF9TRUNSRVQgPSAneW91ci1zZWNyZXQta2V5LWNoYW5nZS1pbi1wcm9kdWN0aW9uJ1xyXG5cclxuLy8gTWlkZGxld2FyZSB0byB2ZXJpZnkgSldUIHRva2VuXHJcbmZ1bmN0aW9uIHZlcmlmeVRva2VuKGF1dGhIZWFkZXI6IHN0cmluZyB8IG51bGwpIHtcclxuICBpZiAoIWF1dGhIZWFkZXIgfHwgIWF1dGhIZWFkZXIuc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnN1YnN0cmluZyg3KVxyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCkgYXMgYW55XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKFxyXG4gIHJlcXVlc3Q6IE5leHRSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9XHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpXHJcbiAgICBjb25zdCBkZWNvZGVkID0gdmVyaWZ5VG9rZW4oYXV0aEhlYWRlcilcclxuICAgIFxyXG4gICAgaWYgKCFkZWNvZGVkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdERCKClcclxuICAgIFxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGF3YWl0IFBvcnRmb2xpb1NlY3Rpb24uZmluZEJ5SWQocGFyYW1zLmlkKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTZWN0aW9uIG5vdCBmb3VuZCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA0IH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBzZWN0aW9uXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZWN0aW9uOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQoXHJcbiAgcmVxdWVzdDogTmV4dFJlcXVlc3QsXHJcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdhdXRob3JpemF0aW9uJylcclxuICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnlUb2tlbihhdXRoSGVhZGVyKVxyXG4gICAgXHJcbiAgICBpZiAoIWRlY29kZWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHNlY3Rpb25OYW1lLCB0aXRsZSwgY29udGVudCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIFxyXG4gICAgaWYgKCFzZWN0aW9uTmFtZSB8fCAhdGl0bGUgfHwgIWNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcycgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBhd2FpdCBQb3J0Zm9saW9TZWN0aW9uLmZpbmRCeUlkQW5kVXBkYXRlKFxyXG4gICAgICBwYXJhbXMuaWQsXHJcbiAgICAgIHtcclxuICAgICAgICBzZWN0aW9uTmFtZSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmV3OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlIH1cclxuICAgIClcclxuICAgIFxyXG4gICAgaWYgKCFzZWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnU2VjdGlvbiBub3QgZm91bmQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc2VjdGlvblxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc2VjdGlvbjonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKFxyXG4gIHJlcXVlc3Q6IE5leHRSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9XHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpXHJcbiAgICBjb25zdCBkZWNvZGVkID0gdmVyaWZ5VG9rZW4oYXV0aEhlYWRlcilcclxuICAgIFxyXG4gICAgaWYgKCFkZWNvZGVkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdERCKClcclxuICAgIFxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGF3YWl0IFBvcnRmb2xpb1NlY3Rpb24uZmluZEJ5SWRBbmREZWxldGUocGFyYW1zLmlkKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTZWN0aW9uIG5vdCBmb3VuZCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA0IH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnU2VjdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSdcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNlY3Rpb246JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiand0IiwiY29ubmVjdERCIiwiUG9ydGZvbGlvU2VjdGlvbiIsIkpXVF9TRUNSRVQiLCJ2ZXJpZnlUb2tlbiIsImF1dGhIZWFkZXIiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJzdWJzdHJpbmciLCJ2ZXJpZnkiLCJlcnJvciIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJoZWFkZXJzIiwiZ2V0IiwiZGVjb2RlZCIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsInNlY3Rpb24iLCJmaW5kQnlJZCIsImlkIiwiY29uc29sZSIsIlBVVCIsInNlY3Rpb25OYW1lIiwidGl0bGUiLCJjb250ZW50IiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJsYXN0VXBkYXRlZCIsIkRhdGUiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiREVMRVRFIiwiZmluZEJ5SWRBbmREZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sections/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/PortfolioSection.ts":
/*!****************************************!*\
  !*** ./lib/models/PortfolioSection.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst portfolioSectionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sectionName: {\n        type: String,\n        required: true,\n        unique: true,\n        trim: true\n    },\n    title: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    content: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.Mixed,\n        required: true\n    },\n    lastUpdated: {\n        type: Date,\n        default: Date.now\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).PortfolioSection || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('PortfolioSection', portfolioSectionSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1BvcnRmb2xpb1NlY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBU2hDLE1BQU1DLHlCQUF5QixJQUFJRCx3REFBZSxDQUFvQjtJQUNwRUcsYUFBYTtRQUNYQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0FDLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVTtRQUNWRSxNQUFNO0lBQ1I7SUFDQUUsU0FBUztRQUNQTixNQUFNSix3REFBZSxDQUFDVyxLQUFLLENBQUNDLEtBQUs7UUFDakNOLFVBQVU7SUFDWjtJQUNBTyxhQUFhO1FBQ1hULE1BQU1VO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRixHQUFHO0lBQ0RDLFlBQVk7QUFDZDtBQUVBLGlFQUFlakIsd0RBQWUsQ0FBQ21CLGdCQUFnQixJQUFJbkIscURBQWMsQ0FBb0Isb0JBQW9CQyx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxQUk9KRUNUU1xcUG9ydGZvbGlvXFxsaWJcXG1vZGVsc1xcUG9ydGZvbGlvU2VjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGZvbGlvU2VjdGlvbiBleHRlbmRzIG1vbmdvb3NlLkRvY3VtZW50IHtcclxuICBzZWN0aW9uTmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogYW55O1xyXG4gIGxhc3RVcGRhdGVkOiBEYXRlO1xyXG59XHJcblxyXG5jb25zdCBwb3J0Zm9saW9TZWN0aW9uU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxJUG9ydGZvbGlvU2VjdGlvbj4oe1xyXG4gIHNlY3Rpb25OYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk1peGVkLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBsYXN0VXBkYXRlZDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0sIHtcclxuICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qb3J0Zm9saW9TZWN0aW9uIHx8IG1vbmdvb3NlLm1vZGVsPElQb3J0Zm9saW9TZWN0aW9uPignUG9ydGZvbGlvU2VjdGlvbicsIHBvcnRmb2xpb1NlY3Rpb25TY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwb3J0Zm9saW9TZWN0aW9uU2NoZW1hIiwiU2NoZW1hIiwic2VjdGlvbk5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0cmltIiwidGl0bGUiLCJjb250ZW50IiwiVHlwZXMiLCJNaXhlZCIsImxhc3RVcGRhdGVkIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiUG9ydGZvbGlvU2VjdGlvbiIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/PortfolioSection.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = 'mongodb+srv://varunkumar615768:Varun%40540@portfolio-0.vivxaee.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-0';\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBYztBQUVwQixJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBUyxPQUFnQkgsUUFBUTtBQUVyQyxJQUFJLENBQUNHLFFBQVE7SUFDWEEsU0FBUyxPQUFnQkgsUUFBUSxHQUFHO1FBQUVLLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ2xFO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQU4sT0FBT0csT0FBTyxHQUFHTix1REFBZ0IsQ0FBQ0MsYUFBYU8sTUFBTUcsSUFBSSxDQUFDLENBQUNYO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkcsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUFJPSkVDVFNcXFBvcnRmb2xpb1xcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gJ21vbmdvZGIrc3J2Oi8vdmFydW5rdW1hcjYxNTc2ODpWYXJ1biU0MDU0MEBwb3J0Zm9saW8tMC52aXZ4YWVlLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1wb3J0Zm9saW8tMCc7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCcpO1xufVxuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsections%2F%5Bid%5D%2Froute&page=%2Fapi%2Fsections%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsections%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsections%2F%5Bid%5D%2Froute&page=%2Fapi%2Fsections%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsections%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PROJECTS_Portfolio_app_api_sections_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sections/[id]/route.ts */ \"(rsc)/./app/api/sections/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sections/[id]/route\",\n        pathname: \"/api/sections/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/sections/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\PROJECTS\\\\Portfolio\\\\app\\\\api\\\\sections\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_PROJECTS_Portfolio_app_api_sections_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZWN0aW9ucyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZWN0aW9ucyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VjdGlvbnMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDUFJPSkVDVFMlNUNQb3J0Zm9saW8lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNQUk9KRUNUUyU1Q1BvcnRmb2xpbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcUFJPSkVDVFNcXFxcUG9ydGZvbGlvXFxcXGFwcFxcXFxhcGlcXFxcc2VjdGlvbnNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VjdGlvbnMvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlY3Rpb25zL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlY3Rpb25zL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQUk9KRUNUU1xcXFxQb3J0Zm9saW9cXFxcYXBwXFxcXGFwaVxcXFxzZWN0aW9uc1xcXFxbaWRdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsections%2F%5Bid%5D%2Froute&page=%2Fapi%2Fsections%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsections%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsections%2F%5Bid%5D%2Froute&page=%2Fapi%2Fsections%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsections%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();