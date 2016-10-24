using ReactScratch.Entities;
using ReactScratch.Models;
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
            if(tag != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var primaryResult = geoObjectTable
                                    .Where(go => go.Name.ToLower() == tag.ToLower())
                                    .FirstOrDefault();

                if(primaryResult != null)
                {
                    var result = new List<SearchResult>();
                    var leafs = FindLeafs(primaryResult);
                    var parentOject = primaryResult.Convert();

                    leafs.ForEach(leaf => 
                    {
                        var @object = leaf.Convert();
                        @object.parentGeoObejct = parentOject;
                        result.Add(@object);
                    });

                    return Json(result, JsonRequestBehavior.AllowGet);
                }
            }
            return Json(new string [] { }, JsonRequestBehavior.AllowGet);
        }

        protected List<GeoObject> FindLeafs(GeoObject parent)
        {
            var result = new List<GeoObject>();
            var geoObjectTable = _geoObjectRepository.Get().Result;

            var childObejcts = geoObjectTable.Where(go => go.ParentId == parent.GeoObjectId)?.ToList();

            if (childObejcts.Any())
            {
                childObejcts
                    .ForEach(child =>
                    {
                        result.AddRange(FindLeafs(child));
                    });
            }
            else
            {
                result.Add(parent);
            }
                
            return result;
        }

        public ActionResult AutoCompletion(string tag)
        {
            if(tag != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var results = new List<SearchResult>();
                geoObjectTable
                    .Where(go => go.Name.ToLower().Contains(tag.ToLower()))?
                    .ToList()
                    .ForEach(record => 
                    {
                        results.Add(record.Convert());
                    });
                
                return Json(results, JsonRequestBehavior.AllowGet);
            }
            return Json(new string[] { }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GeoObject(int? id)
        {
            if (id != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var queryResult = geoObjectTable
                                    .Where(go => go.GeoObjectId == id.Value)
                                    .FirstOrDefault();

                if (queryResult != null)
                {
                    var result = queryResult.Convert();

                    result.parentGeoObejct = geoObjectTable
                                                .Where(go => go.GeoObjectId == queryResult.ParentId)
                                                .FirstOrDefault()?
                                                .Convert();

                    result.childGeoObjects = new List<SearchResult>();
                    geoObjectTable
                        .Where(go => go.ParentId == result.id)?.ToList()?
                        .ForEach(record =>
                        {
                            result.childGeoObjects.Add(record.Convert());
                        });

                    return Json(result, JsonRequestBehavior.AllowGet);
                }
            }
            return Json(new { }, JsonRequestBehavior.AllowGet);
        }
    }
}