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
exports.id = "app/api/portfolio/route";
exports.ids = ["app/api/portfolio/route"];
exports.modules = {

/***/ "(rsc)/./app/api/portfolio/route.ts":
/*!************************************!*\
  !*** ./app/api/portfolio/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/models/PortfolioSection */ \"(rsc)/./lib/models/PortfolioSection.ts\");\n\n\n\nasync function GET(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const sections = await _lib_models_PortfolioSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().sort({\n            sectionName: 1\n        });\n        // Transform the data to match the portfolio structure\n        const portfolioData = {\n            hero: sections.find((s)=>s.sectionName === 'hero')?.content || {},\n            skills: sections.find((s)=>s.sectionName === 'skills')?.content || {},\n            projects: sections.find((s)=>s.sectionName === 'projects')?.content || {},\n            experience: sections.find((s)=>s.sectionName === 'experience')?.content || {},\n            certifications: sections.find((s)=>s.sectionName === 'certifications')?.content || {},\n            contact: sections.find((s)=>s.sectionName === 'contact')?.content || {}\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: portfolioData\n        });\n    } catch (error) {\n        console.error('Error fetching portfolio data:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BvcnRmb2xpby9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ2xCO0FBQ3VCO0FBRXJELGVBQWVHLElBQUlDLE9BQW9CO0lBQzVDLElBQUk7UUFDRixNQUFNSCx3REFBU0E7UUFFZixNQUFNSSxXQUFXLE1BQU1ILG9FQUFnQkEsQ0FBQ0ksSUFBSSxHQUFHQyxJQUFJLENBQUM7WUFBRUMsYUFBYTtRQUFFO1FBRXJFLHNEQUFzRDtRQUN0RCxNQUFNQyxnQkFBZ0I7WUFDcEJDLE1BQU1MLFNBQVNDLElBQUksQ0FBQ0ssQ0FBQUEsSUFBS0EsRUFBRUgsV0FBVyxLQUFLLFNBQVNJLFdBQVcsQ0FBQztZQUNoRUMsUUFBUVIsU0FBU0MsSUFBSSxDQUFDSyxDQUFBQSxJQUFLQSxFQUFFSCxXQUFXLEtBQUssV0FBV0ksV0FBVyxDQUFDO1lBQ3BFRSxVQUFVVCxTQUFTQyxJQUFJLENBQUNLLENBQUFBLElBQUtBLEVBQUVILFdBQVcsS0FBSyxhQUFhSSxXQUFXLENBQUM7WUFDeEVHLFlBQVlWLFNBQVNDLElBQUksQ0FBQ0ssQ0FBQUEsSUFBS0EsRUFBRUgsV0FBVyxLQUFLLGVBQWVJLFdBQVcsQ0FBQztZQUM1RUksZ0JBQWdCWCxTQUFTQyxJQUFJLENBQUNLLENBQUFBLElBQUtBLEVBQUVILFdBQVcsS0FBSyxtQkFBbUJJLFdBQVcsQ0FBQztZQUNwRkssU0FBU1osU0FBU0MsSUFBSSxDQUFDSyxDQUFBQSxJQUFLQSxFQUFFSCxXQUFXLEtBQUssWUFBWUksV0FBVyxDQUFDO1FBQ3hFO1FBRUEsT0FBT1oscURBQVlBLENBQUNrQixJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVEMsTUFBTVg7UUFDUjtJQUNGLEVBQUUsT0FBT1ksT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPckIscURBQVlBLENBQUNrQixJQUFJLENBQ3RCO1lBQUVDLFNBQVM7WUFBT0ksU0FBUztRQUF3QixHQUNuRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFBST0pFQ1RTXFxQb3J0Zm9saW9cXGFwcFxcYXBpXFxwb3J0Zm9saW9cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2xpYi9tb25nb2RiJ1xyXG5pbXBvcnQgUG9ydGZvbGlvU2VjdGlvbiBmcm9tICdAL2xpYi9tb2RlbHMvUG9ydGZvbGlvU2VjdGlvbidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKClcclxuICAgIFxyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBQb3J0Zm9saW9TZWN0aW9uLmZpbmQoKS5zb3J0KHsgc2VjdGlvbk5hbWU6IDEgfSlcclxuICAgIFxyXG4gICAgLy8gVHJhbnNmb3JtIHRoZSBkYXRhIHRvIG1hdGNoIHRoZSBwb3J0Zm9saW8gc3RydWN0dXJlXHJcbiAgICBjb25zdCBwb3J0Zm9saW9EYXRhID0ge1xyXG4gICAgICBoZXJvOiBzZWN0aW9ucy5maW5kKHMgPT4gcy5zZWN0aW9uTmFtZSA9PT0gJ2hlcm8nKT8uY29udGVudCB8fCB7fSxcclxuICAgICAgc2tpbGxzOiBzZWN0aW9ucy5maW5kKHMgPT4gcy5zZWN0aW9uTmFtZSA9PT0gJ3NraWxscycpPy5jb250ZW50IHx8IHt9LFxyXG4gICAgICBwcm9qZWN0czogc2VjdGlvbnMuZmluZChzID0+IHMuc2VjdGlvbk5hbWUgPT09ICdwcm9qZWN0cycpPy5jb250ZW50IHx8IHt9LFxyXG4gICAgICBleHBlcmllbmNlOiBzZWN0aW9ucy5maW5kKHMgPT4gcy5zZWN0aW9uTmFtZSA9PT0gJ2V4cGVyaWVuY2UnKT8uY29udGVudCB8fCB7fSxcclxuICAgICAgY2VydGlmaWNhdGlvbnM6IHNlY3Rpb25zLmZpbmQocyA9PiBzLnNlY3Rpb25OYW1lID09PSAnY2VydGlmaWNhdGlvbnMnKT8uY29udGVudCB8fCB7fSxcclxuICAgICAgY29udGFjdDogc2VjdGlvbnMuZmluZChzID0+IHMuc2VjdGlvbk5hbWUgPT09ICdjb250YWN0Jyk/LmNvbnRlbnQgfHwge31cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YTogcG9ydGZvbGlvRGF0YVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcG9ydGZvbGlvIGRhdGE6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJQb3J0Zm9saW9TZWN0aW9uIiwiR0VUIiwicmVxdWVzdCIsInNlY3Rpb25zIiwiZmluZCIsInNvcnQiLCJzZWN0aW9uTmFtZSIsInBvcnRmb2xpb0RhdGEiLCJoZXJvIiwicyIsImNvbnRlbnQiLCJza2lsbHMiLCJwcm9qZWN0cyIsImV4cGVyaWVuY2UiLCJjZXJ0aWZpY2F0aW9ucyIsImNvbnRhY3QiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/portfolio/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/PortfolioSection.ts":
/*!****************************************!*\
  !*** ./lib/models/PortfolioSection.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst portfolioSectionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sectionName: {\n        type: String,\n        required: true,\n        unique: true,\n        trim: true\n    },\n    title: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    content: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.Mixed,\n        required: true\n    },\n    lastUpdated: {\n        type: Date,\n        default: Date.now\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).PortfolioSection || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('PortfolioSection', portfolioSectionSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1BvcnRmb2xpb1NlY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBU2hDLE1BQU1DLHlCQUF5QixJQUFJRCx3REFBZSxDQUFvQjtJQUNwRUcsYUFBYTtRQUNYQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0FDLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVTtRQUNWRSxNQUFNO0lBQ1I7SUFDQUUsU0FBUztRQUNQTixNQUFNSix3REFBZSxDQUFDVyxLQUFLLENBQUNDLEtBQUs7UUFDakNOLFVBQVU7SUFDWjtJQUNBTyxhQUFhO1FBQ1hULE1BQU1VO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRixHQUFHO0lBQ0RDLFlBQVk7QUFDZDtBQUVBLGlFQUFlakIsd0RBQWUsQ0FBQ21CLGdCQUFnQixJQUFJbkIscURBQWMsQ0FBb0Isb0JBQW9CQyx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxQUk9KRUNUU1xcUG9ydGZvbGlvXFxsaWJcXG1vZGVsc1xcUG9ydGZvbGlvU2VjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGZvbGlvU2VjdGlvbiBleHRlbmRzIG1vbmdvb3NlLkRvY3VtZW50IHtcclxuICBzZWN0aW9uTmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogYW55O1xyXG4gIGxhc3RVcGRhdGVkOiBEYXRlO1xyXG59XHJcblxyXG5jb25zdCBwb3J0Zm9saW9TZWN0aW9uU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxJUG9ydGZvbGlvU2VjdGlvbj4oe1xyXG4gIHNlY3Rpb25OYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk1peGVkLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBsYXN0VXBkYXRlZDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0sIHtcclxuICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qb3J0Zm9saW9TZWN0aW9uIHx8IG1vbmdvb3NlLm1vZGVsPElQb3J0Zm9saW9TZWN0aW9uPignUG9ydGZvbGlvU2VjdGlvbicsIHBvcnRmb2xpb1NlY3Rpb25TY2hlbWEpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInBvcnRmb2xpb1NlY3Rpb25TY2hlbWEiLCJTY2hlbWEiLCJzZWN0aW9uTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJUeXBlcyIsIk1peGVkIiwibGFzdFVwZGF0ZWQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQb3J0Zm9saW9TZWN0aW9uIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/PortfolioSection.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = 'mongodb+srv://varunkumar615768:Varun%40540@portfolio-0.vivxaee.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-0';\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBYztBQUVwQixJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBUyxPQUFnQkgsUUFBUTtBQUVyQyxJQUFJLENBQUNHLFFBQVE7SUFDWEEsU0FBUyxPQUFnQkgsUUFBUSxHQUFHO1FBQUVLLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ2xFO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQU4sT0FBT0csT0FBTyxHQUFHTix1REFBZ0IsQ0FBQ0MsYUFBYU8sTUFBTUcsSUFBSSxDQUFDLENBQUNYO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkcsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUFJPSkVDVFNcXFBvcnRmb2xpb1xcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gJ21vbmdvZGIrc3J2Oi8vdmFydW5rdW1hcjYxNTc2ODpWYXJ1biU0MDU0MEBwb3J0Zm9saW8tMC52aXZ4YWVlLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1wb3J0Zm9saW8tMCc7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCcpO1xufVxuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PROJECTS_Portfolio_app_api_portfolio_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/portfolio/route.ts */ \"(rsc)/./app/api/portfolio/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/portfolio/route\",\n        pathname: \"/api/portfolio\",\n        filename: \"route\",\n        bundlePath: \"app/api/portfolio/route\"\n    },\n    resolvedPagePath: \"C:\\\\PROJECTS\\\\Portfolio\\\\app\\\\api\\\\portfolio\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_PROJECTS_Portfolio_app_api_portfolio_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3J0Zm9saW8lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBvcnRmb2xpbyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBvcnRmb2xpbyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDUFJPSkVDVFMlNUNQb3J0Zm9saW8lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNQUk9KRUNUUyU1Q1BvcnRmb2xpbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcUFJPSkVDVFNcXFxcUG9ydGZvbGlvXFxcXGFwcFxcXFxhcGlcXFxccG9ydGZvbGlvXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3J0Zm9saW8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3J0Zm9saW9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3BvcnRmb2xpby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFBST0pFQ1RTXFxcXFBvcnRmb2xpb1xcXFxhcHBcXFxcYXBpXFxcXHBvcnRmb2xpb1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=C%3A%5CPROJECTS%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();