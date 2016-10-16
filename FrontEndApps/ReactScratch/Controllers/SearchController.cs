using ReactScratch.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactScratch.Controllers
{
    public class SearchController : Controller
    {
        private IGeoObjectRepository _geoObjectRepository { get; set; }

        public SearchController(IGeoObjectRepository geoObjectRepository)
        {
            _geoObjectRepository = geoObjectRepository;
        }

        public ActionResult Index(string tag)
        {
            var geoObjectTable = _geoObjectRepository.Get().Result;

            var result = tag != null ?
                             geoObjectTable
                                .Where(go => go.Name.ToLower() == tag.ToLower())
                                .FirstOrDefault() :
                             null;

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AutoCompletion(string tag)
        {
            var geoObjectTable = _geoObjectRepository.Get().Result;

            var results = tag != null ? 
                            geoObjectTable
                                .Where(go => go.Name.ToLower().Contains(tag.ToLower())) : 
                            null;

            return Json(results, JsonRequestBehavior.AllowGet);
        }
    }
}