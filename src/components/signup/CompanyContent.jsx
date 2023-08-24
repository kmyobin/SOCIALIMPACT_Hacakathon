import React, {useEffect, useState} from 'react'
import list_1 from "../../assets/images/icons/list_2.svg"
import list_2 from "../../assets/images/icons/list_3.svg"
import list_3 from "../../assets/images/icons/ent.svg"
import list_4 from "../../assets/images/icons/list_5.svg"
import ent_logo from "../../assets/images/icons/ent_logo.svg"
import AcceptBtn from '../../common/AcceptBtn';
import AgeModal from './AgeModal'


function CompanyContent() {
  const [age, setAge] = useState([]);
  const [ageOpen, setAgeOpen] = useState(true);
  const [career, setCareer] = useState('');
  const [careerOpen, setCareerOpen] = useState(false);

  const onClickAge = () => {
    setAgeOpen(true);
  }
  const onClickCareer = () => {
    
  }

  useEffect(() => {
    console.log(ageOpen);
  }, [ageOpen]);
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#f6f6f6]">
        <div className="h-full w-full overflow-hidden bg-[#5BBDF4]">
          <div className="bg-[#5BBDF4] w-full h-[10%] px-7 flex py-7 text-xl font-semibold text-white z-0">
            희망 구직자 유형
          </div>
          <div
            className="w-full  h-[90%]  py-5 px-4 bg-[#f6f6f6] rounded-t-2xl z-10 relative"
            style={{ boxShadow: "0px -3px 0px 0px rgba(0,0,0,0.1)" }}
          >
            <div className="z-50 absolute right-12 -top-9">
              <img src={ent_logo} alt="ent_logo" width={80} height={80} />
            </div>
            <div className="pt-3">
              {ageOpen ? (
                <div className="bg-[#f6f6f6] transition-all">
                  <AgeModal setAgeOpen={setAgeOpen} />
                </div>
              ) : (
                <>
                  <div
                    onClick={onClickAge}
                    className="bg-white shadow-md shadow-slate-500  rounded-xl p-2 my-5 font-semibold "
                  >
                    <div className="flex">
                      <div className="w-1/4 flex justify-center items-center">
                        <img
                          src={list_1}
                          alt="list_1"
                          className="rounded-full"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="w-3/4 p-3">50~60대, 60~70대</div>
                    </div>
                  </div>
                  <div className="bg-white shadow-md shadow-slate-500  rounded-xl p-2 my-5 font-semibold">
                    <div className="flex">
                      <div className="w-1/4 flex justify-center items-center">
                        <img
                          src={list_2}
                          alt="list_2"
                          className="rounded-full"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="w-3/4 p-3">
                        인천광역시 미추홀구 용현1동
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={onClickCareer}
                    className="bg-white shadow-md shadow-slate-500  rounded-xl p-2 my-5 font-semibold"
                  >
                    <div className="flex">
                      <div className="w-1/4 flex justify-center items-center">
                        <img
                          src={list_3}
                          alt="list_3"
                          className="rounded-full"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="w-3/4 p-3">경력 10년 이상</div>
                    </div>
                  </div>
                  <div className="bg-white shadow-md shadow-slate-500 rounded-xl p-2 my-5 font-semibold">
                    <div className="flex">
                      <div className="w-1/4 flex justify-center items-center">
                        <img
                          src={list_4}
                          alt="list_4"
                          className="rounded-full"
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className="w-3/4 p-3">학교, 일본어</div>
                    </div>
                  </div>
                  <div className="absolute right-10 bottom-12">
                    <AcceptBtn text={"시작하기"} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContent
