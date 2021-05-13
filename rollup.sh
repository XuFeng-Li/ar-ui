
METHOD=$1
ENV_PRO=$2

packages_install() {
  Path=`pwd`;
  PackagesPath=${Path}/packages;
  PackagesList=$(ls $PackagesPath);
  for PackageName in $PackagesList
  do
  echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  echo "install - " ${PackageName}
  PackagePath=${PackagesPath}/${PackageName}
  cd ${PackagePath}
  yarn install
  cd ..
  done
}
rollup() {
  echo "******************************************"
  echo "build start\n"

  Path=`pwd`;
  PackagesPath=${Path}/packages;
  PackagesList=$(ls $PackagesPath);
  for PackageName in $PackagesList
  do
  echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  echo "building " ${PackageName}
  PackagePath=${PackagesPath}/${PackageName}
  cd ${PackagePath}
  yarn rollup --env ${ENV_PRO}
  cd ..
  done
  echo ""
  echo ""
  echo "******************************************"
  echo "build finished"
  echo "******************************************"
}

main() {
  case $METHOD in
  rollup)
    rollup
    ;;
  packages_install)
    packages_install
    ;;
  *)
    echo "非法命令 ${$METHOD}"
    ;;
  esac
}

main