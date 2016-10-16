using ReactScratch.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactScratch.Services
{
    public interface IGeoObjectRepository
    {
        Task<IQueryable<GeoObject>> Get();

        // Task<bool> Add(GeoObject student);
    }
}
