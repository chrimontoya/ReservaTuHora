class Utils {

    static getDaysFromMonth = (year, month) => {
        if (year && month >= 1 && month <= 12) {
          const lastDayMonth = new Date(year, month -1, 0).getDate();
          const daysFromMonth = [];

          for (let i = 1; i <= lastDayMonth; i++) {
            daysFromMonth.push({id: i, name: this.getNameCurrentDay(year, month - 1, i)});
          }
          return daysFromMonth;

        }
      };
    
      static getNameCurrentDay = (year, month, day) => {
        const fechaActual = new Date(year, month, day);
        const opciones = { weekday: "long" };
        const nameDay = fechaActual.toLocaleDateString("es-CL", opciones).split(" ")[0];
        const capitalNameDay = nameDay.charAt(0).toUpperCase() + nameDay.slice(1)
        return capitalNameDay;
      };
      
}

export default Utils;