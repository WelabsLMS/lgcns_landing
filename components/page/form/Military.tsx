import React from 'react'

function Military() {
  return (
    <section className='flex flex-col items-center'>
      <form>
        <div className='flex flex-col'>
          {/* 병역구분 */}
          <p className='font-semibold text-lg'>병역구분</p>
          <select
            required
            className="border border-gray-300 rounded-lg w-[500px] h-[30px] p-2"
            name="militaryStatus"
          >
          <option value="" defaultChecked>병역 상태를 선택해주세요</option>
            <option value="completed">군필</option>
            <option value="exempted">미필</option>
            <option value="ongoing">면제</option>
            <option value="notApplicable">비대상</option>
            <option value="other">기타</option>
          </select>
          {/* 장애여부 */}
          <p className='font-semibold text-lg'>장애 여부</p>
          <div className='flex flex-col gap-2'>
              <label className='flex items-center cursor-pointer'>
                  <input
                      required
                      type="radio"
                      className="hidden peer"
                      name="obstacle"
                      value="true"
                  />
                  <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                  <p className='ml-2'>대상</p>
              </label>

              <label className='flex items-center cursor-pointer'>
                  <input
                      required
                      type="radio"
                      className="hidden peer"
                      name="obstacle"
                      value="false"
                  />
                  <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                  <p className='ml-2'>비대상</p>
              </label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Military